// Natural Earth 1:110m land polygons (public domain), sampled once at build-authoring time.
// Source: https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson
import { readFileSync, writeFileSync } from "node:fs";

const assetFolder = new URL("../src/assets/globe/", import.meta.url);
const source = JSON.parse(readFileSync(new URL("land-source.geojson", assetFolder), "utf8"));
const polygons = source.features.flatMap(({ geometry }) =>
  geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates,
).map((rings) => ({
  rings,
  bounds: rings[0].reduce(([minX, minY, maxX, maxY], [x, y]) =>
    [Math.min(minX, x), Math.min(minY, y), Math.max(maxX, x), Math.max(maxY, y)],
  [180, 90, -180, -90]),
}));

function insideRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

const dots = [];
for (let latitude = -82; latitude <= 83; latitude += 1.5) {
  const step = 1.5 / Math.cos(latitude * Math.PI / 180);
  for (let longitude = -180; longitude < 180; longitude += step) {
    if (polygons.some(({ bounds: [minX, minY, maxX, maxY], rings }) =>
      longitude >= minX && longitude <= maxX && latitude >= minY && latitude <= maxY &&
      insideRing(longitude, latitude, rings[0]) && !rings.slice(1).some((hole) => insideRing(longitude, latitude, hole)),
    )) dots.push([Number(longitude.toFixed(2)), Number(latitude.toFixed(2))]);
  }
}
writeFileSync(new URL("land-points.json", assetFolder), JSON.stringify(dots) + "\n");

// Static orthographic globe for reduced motion, loading, and devices without WebGL.
const rotation = -0.65;
const radius = 220;
const dotsSvg = dots.flatMap(([longitude, latitude]) => {
  const lat = latitude * Math.PI / 180;
  const lon = longitude * Math.PI / 180;
  const x = Math.cos(lat) * Math.sin(lon);
  const y = Math.sin(lat);
  const z = Math.cos(lat) * Math.cos(lon);
  const rotatedX = x * Math.cos(rotation) + z * Math.sin(rotation);
  const rotatedZ = -x * Math.sin(rotation) + z * Math.cos(rotation);
  return rotatedZ > 0 ? [`<circle cx="${(256 + rotatedX * radius).toFixed(1)}" cy="${(256 - y * radius).toFixed(1)}" r="1.25" opacity="${(0.35 + rotatedZ * 0.6).toFixed(2)}"/>`] : [];
}).join("");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><radialGradient id="o"><stop stop-color="#092434"/><stop offset="1" stop-color="#040f1e"/></radialGradient><radialGradient id="a"><stop offset=".84" stop-color="#22d3ee" stop-opacity="0"/><stop offset=".92" stop-color="#22d3ee" stop-opacity=".1"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/></radialGradient></defs><circle cx="256" cy="256" r="245" fill="url(#a)"/><circle cx="256" cy="256" r="220" fill="url(#o)" stroke="#155e75"/><g fill="none" stroke="#155e75" opacity=".4"><ellipse cx="256" cy="256" rx="85" ry="220"/><ellipse cx="256" cy="256" rx="170" ry="220"/><ellipse cx="256" cy="256" rx="220" ry="85"/><ellipse cx="256" cy="256" rx="220" ry="170"/></g><g fill="#38d9ed">${dotsSvg}</g></svg>`;
writeFileSync(new URL("globe-fallback.svg", assetFolder), svg + "\n");
console.log(`Prepared ${dots.length} geographic land points and the static globe fallback.`);
