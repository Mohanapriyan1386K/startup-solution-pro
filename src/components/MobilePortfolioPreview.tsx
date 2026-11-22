import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Pause, Play } from "lucide-react";
import restaurant from "@/assets/PorfolioMobilescreen/image1.png";
import companies from "@/assets/PorfolioMobilescreen/image2.png";
import companyProfile from "@/assets/PorfolioMobilescreen/image3.png";
import papakutty from "@/assets/PorfolioMobilescreen/image4.png";
import easyJobs from "@/assets/PorfolioMobilescreen/image5.png";
import scanCentre from "@/assets/PorfolioMobilescreen/image6.png";
import "./MobilePortfolioPreview.css";

const mobileScreens = [
  { image: restaurant, title: "Sree Sangeetham restaurant" },
  { image: companies, title: "All India Jobs company directory" },
  { image: companyProfile, title: "All India Jobs company profile" },
  { image: papakutty, title: "Papakutty Creations" },
  { image: easyJobs, title: "Esay Jobs" },
  { image: scanCentre, title: "Cumbum United Scan Centre" },
];

const MobilePortfolioPreview = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(previewRef);
  const [paused, setPaused] = useState(false);

  return (
    <div
      ref={previewRef}
      className="relative flex h-[420px] sm:h-[500px] w-full max-w-[500px] flex-col rounded-[40px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl p-6 sm:p-8"
    >
      <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="relative mb-5 flex shrink-0 items-center justify-between gap-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-sm text-gray-300">Mobile portfolio</span>
        <button
          type="button"
          onClick={() => setPaused((current) => !current)}
          aria-label={paused ? "Resume mobile previews" : "Pause mobile previews"}
          aria-pressed={paused}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 motion-reduce:hidden"
        >
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>

      <div
        className="mobile-preview-window relative min-h-0 flex-1 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        role="region"
        aria-label="Mobile website portfolio previews"
        tabIndex={0}
        data-playing={inView && !paused}
      >
        <div className="mobile-preview-track">
          {[0, 1].map((copy) => (
            <div className="mobile-preview-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {mobileScreens.map((screen) => (
                <figure key={screen.image} className="mobile-preview-screen">
                  <img
                    src={screen.image}
                    alt={`${screen.title} mobile website preview`}
                    loading={copy === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="block h-full w-full object-contain"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobilePortfolioPreview;
