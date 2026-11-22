import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";

const BackgroundMotionContext = createContext({ paused: false, pageVisible: true });

export const useBackgroundMotion = () => useContext(BackgroundMotionContext);

export function BackgroundMotionProvider({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  return (
    <BackgroundMotionContext.Provider value={{ paused: paused || Boolean(reducedMotion), pageVisible }}>
      {children}
      {!reducedMotion && (
        <button
          type="button"
          className="background-motion-control"
          aria-label={paused ? "Resume background animations" : "Pause background animations"}
          aria-pressed={paused}
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? <Play size={14} /> : <Pause size={14} />}
          <span>{paused ? "Resume effects" : "Pause effects"}</span>
        </button>
      )}
    </BackgroundMotionContext.Provider>
  );
}
