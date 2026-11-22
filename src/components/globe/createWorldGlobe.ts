import * as THREE from "three";
import landPoints from "@/assets/globe/land-points.json";

export interface GlobeController {
  setRunning: (running: boolean) => void;
  dispose: () => void;
}

const RADIUS = 1.5;

export function geographicPosition(longitude: number, latitude: number, radius = RADIUS) {
  const lat = THREE.MathUtils.degToRad(latitude);
  const lon = THREE.MathUtils.degToRad(longitude);
  return new THREE.Vector3(
    radius * Math.cos(lat) * Math.sin(lon),
    radius * Math.sin(lat),
    radius * Math.cos(lat) * Math.cos(lon),
  );
}

function makeGrid() {
  const vertices: number[] = [];
  const add = (a: THREE.Vector3, b: THREE.Vector3) => vertices.push(...a.toArray(), ...b.toArray());
  for (let latitude = -60; latitude <= 60; latitude += 20) {
    for (let longitude = -180; longitude < 180; longitude += 4) {
      add(geographicPosition(longitude, latitude, 1.503), geographicPosition(longitude + 4, latitude, 1.503));
    }
  }
  for (let longitude = -180; longitude < 180; longitude += 20) {
    for (let latitude = -90; latitude < 90; latitude += 4) {
      add(geographicPosition(longitude, latitude, 1.503), geographicPosition(longitude, latitude + 4, 1.503));
    }
  }
  return new THREE.LineSegments(
    new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3)),
    new THREE.LineBasicMaterial({ color: 0x2388a3, transparent: true, opacity: 0.18 }),
  );
}

function makeConnection(from: THREE.Vector3, to: THREE.Vector3) {
  const start = from.clone().normalize();
  const end = to.clone().normalize();
  const angle = Math.acos(THREE.MathUtils.clamp(start.dot(end), -1, 1));
  const points = Array.from({ length: 65 }, (_, index) => {
    const t = index / 64;
    const position = start.clone().multiplyScalar(Math.sin((1 - t) * angle) / Math.sin(angle))
      .addScaledVector(end, Math.sin(t * angle) / Math.sin(angle));
    return position.multiplyScalar(1.52 + Math.sin(t * Math.PI) * 0.32);
  });
  return new THREE.CatmullRomCurve3(points);
}

export function createWorldGlobe(host: HTMLDivElement, onStatus: (ready: boolean) => void): GlobeController {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(43, 1, 0.1, 30);
  camera.position.z = 5.3;
  const earth = new THREE.Group();
  earth.rotation.set(0.08, -0.65, 0.12);
  scene.add(earth);
  scene.add(new THREE.AmbientLight(0x8ecfe6, 1.1));
  const light = new THREE.DirectionalLight(0x40a9d8, 2);
  light.position.set(-3, 3, 4);
  scene.add(light);

  earth.add(new THREE.Mesh(
    new THREE.SphereGeometry(RADIUS, 56, 40),
    new THREE.MeshPhongMaterial({ color: 0x071827, emissive: 0x02070e, shininess: 12, specular: 0x12394b }),
  ));
  earth.add(makeGrid());

  const landGeometry = new THREE.BufferGeometry();
  landGeometry.setAttribute("position", new THREE.Float32BufferAttribute(
    landPoints.flatMap(([longitude, latitude]) => geographicPosition(longitude, latitude, 1.512).toArray()), 3,
  ));
  const landMaterial = new THREE.ShaderMaterial({
    uniforms: { pixelRatio: { value: 1 } },
    vertexShader: `
      uniform float pixelRatio;
      varying float brightness;
      void main() {
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        vec3 normal = normalize(normalMatrix * normalize(position));
        brightness = 0.45 + 0.55 * max(dot(normal, normalize(-viewPosition.xyz)), 0.0);
        gl_PointSize = clamp(9.0 * pixelRatio / -viewPosition.z, 1.0, 4.0);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      varying float brightness;
      void main() {
        float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
        if (distanceFromCenter > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.25, 0.5, distanceFromCenter);
        gl_FragColor = vec4(vec3(0.16, 0.82, 0.94) * brightness, alpha * 0.9);
      }
    `,
    transparent: true,
    depthWrite: false,
  });
  earth.add(new THREE.Points(landGeometry, landMaterial));

  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(1.58, 48, 32),
    new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 surfaceNormal;
        varying vec3 viewDirection;
        void main() {
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          surfaceNormal = normalize(normalMatrix * normal);
          viewDirection = normalize(-viewPosition.xyz);
          gl_Position = projectionMatrix * viewPosition;
        }
      `,
      fragmentShader: `
        varying vec3 surfaceNormal;
        varying vec3 viewDirection;
        void main() {
          float rim = pow(1.0 - abs(dot(normalize(surfaceNormal), normalize(viewDirection))), 3.0);
          gl_FragColor = vec4(0.08, 0.65, 1.0, rim * 0.32);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide,
    }),
  ));

  // Chennai hub with Singapore, Dubai, London, New York, Tokyo, and Sydney.
  const cities = [[80.27, 13.08], [103.85, 1.29], [55.27, 25.2], [-0.13, 51.5], [-74.01, 40.71], [139.69, 35.68], [151.21, -33.87]];
  const markerGeometry = new THREE.SphereGeometry(0.022, 10, 8);
  const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x9cf4ff });
  const arcMaterial = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 });
  const cityPositions = cities.map(([longitude, latitude]) => geographicPosition(longitude, latitude, 1.525));
  cityPositions.forEach((position) => {
    const city = new THREE.Mesh(markerGeometry, markerMaterial);
    city.position.copy(position);
    earth.add(city);
  });
  const packets = cityPositions.slice(1).map((destination, index) => {
    const curve = makeConnection(cityPositions[0], destination);
    earth.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(80)), arcMaterial));
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    earth.add(marker);
    return { curve, marker, offset: index / 6 };
  });

  const orbitVertices = Array.from({ length: 129 }, (_, index) => {
    const angle = index / 128 * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * 1.97, 0, Math.sin(angle) * 1.97);
  });
  const orbit = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(orbitVertices),
    new THREE.LineBasicMaterial({ color: 0x388bb5, transparent: true, opacity: 0.18 }));
  orbit.rotation.set(0.3, 0, -0.3);
  scene.add(orbit);

  let frame = 0;
  let requestedRunning = false;
  let contextLost = false;
  let disposed = false;
  let lastFrame = 0;
  let elapsed = 0;
  const render = () => renderer.render(scene, camera);

  const tick = (now: number) => {
    if (disposed || contextLost || !requestedRunning) return;
    frame = requestAnimationFrame(tick);
    if (now - lastFrame < 1000 / 30) return;
    const delta = lastFrame ? Math.min((now - lastFrame) / 1000, 0.1) : 0;
    lastFrame = now;
    elapsed += delta;
    earth.rotation.y = -0.65 + elapsed * 0.065;
    packets.forEach(({ curve, marker, offset }) => marker.position.copy(curve.getPoint((elapsed * 0.095 + offset) % 1)));
    render();
  };
  const setRunning = (running: boolean) => {
    requestedRunning = running;
    cancelAnimationFrame(frame);
    lastFrame = 0;
    if (running && !contextLost && !disposed) frame = requestAnimationFrame(tick);
  };
  const resize = () => {
    if (disposed || contextLost) return;
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    const ratio = Math.min(window.devicePixelRatio || 1, window.innerWidth < 640 ? 1.25 : 1.5);
    renderer.setPixelRatio(ratio);
    renderer.setSize(width, height, false);
    landMaterial.uniforms.pixelRatio.value = ratio;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    render();
  };
  const loseContext = (event: Event) => {
    event.preventDefault();
    contextLost = true;
    cancelAnimationFrame(frame);
    onStatus(false);
  };
  const restoreContext = () => {
    contextLost = false;
    resize();
    onStatus(true);
    setRunning(requestedRunning);
  };
  renderer.domElement.addEventListener("webglcontextlost", loseContext);
  renderer.domElement.addEventListener("webglcontextrestored", restoreContext);
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  // Place the packets before rendering the initial (possibly paused) frame.
  packets.forEach(({ curve, marker, offset }) => marker.position.copy(curve.getPoint(offset)));
  resize();
  onStatus(true);

  return {
    setRunning,
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.domElement.removeEventListener("webglcontextlost", loseContext);
      renderer.domElement.removeEventListener("webglcontextrestored", restoreContext);
      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Line) {
          geometries.add(object.geometry);
          (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => materials.add(material));
        }
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    },
  };
}
