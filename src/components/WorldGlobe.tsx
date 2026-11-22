import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useBackgroundMotion } from "./BackgroundMotion";
import type { GlobeController } from "./globe/createWorldGlobe";
import fallbackGlobe from "@/assets/globe/globe-fallback.svg";
import "./WorldGlobe.css";

export default function WorldGlobe({ paused = false }: { paused?: boolean }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const controller = useRef<GlobeController | null>(null);
  const inView = useInView(hostRef, { margin: "100px" });
  const reducedMotion = useReducedMotion();
  const { paused: globalPaused, pageVisible } = useBackgroundMotion();
  const [activated, setActivated] = useState(false);
  const [ready, setReady] = useState(false);
  const running = inView && pageVisible && !paused && !globalPaused && !reducedMotion;
  const runningRef = useRef(running);

  useEffect(() => { if (inView) setActivated(true); }, [inView]);
  useEffect(() => {
    runningRef.current = running;
    controller.current?.setRunning(running);
  }, [running]);

  useEffect(() => {
    const host = hostRef.current;
    if (!activated || reducedMotion || !host || typeof window.WebGL2RenderingContext === "undefined") return;
    let cancelled = false;
    let globe: GlobeController | undefined;
    import("./globe/createWorldGlobe").then(({ createWorldGlobe }) => {
      if (cancelled) return;
      try {
        globe = createWorldGlobe(host, (status) => { if (!cancelled) setReady(status); });
        controller.current = globe;
        globe.setRunning(runningRef.current);
      } catch {
        // The local SVG remains visible if WebGL is disabled or unavailable.
        host.replaceChildren();
        setReady(false);
      }
    }).catch(() => { if (!cancelled) setReady(false); });
    return () => {
      cancelled = true;
      globe?.dispose();
      controller.current = null;
      setReady(false);
    };
  }, [activated, reducedMotion]);

  return (
    <div className="world-globe" aria-hidden="true" data-ready={ready}>
      <div className="world-globe__halo" />
      <div className="world-globe__stage">
        <img src={fallbackGlobe} alt="" className="world-globe__fallback" width={512} height={512} />
        <div ref={hostRef} className="world-globe__canvas" />
      </div>
      <div className="world-globe__shade" />
    </div>
  );
}
