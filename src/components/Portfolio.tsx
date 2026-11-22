import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Pause, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/projects";
import { useBackgroundMotion } from "./BackgroundMotion";
import WorldGlobe from "./WorldGlobe";
import "./Portfolio.css";

type PortfolioProps = {
  layout?: "carousel" | "grid";
  id?: string;
};

const ProjectCard = ({ project, slide, duplicate = false }: {
  project: Project;
  slide: number;
  duplicate?: boolean;
}) => {
  const screenshots = project.samples.length
    ? project.samples
    : [{ id: project.id, title: project.title, image: project.image }];
  const activeIndex = slide % screenshots.length;

  return (
    <Link
      tabIndex={duplicate ? -1 : undefined}
      to={`/project/${project.id}`}
      aria-label={`View ${project.title} project`}
      className="portfolio-card group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-cyan-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 transition-colors duration-300"
    >
      <div className="relative aspect-[2.08/1] shrink-0 overflow-hidden bg-[#0b1120] border-b border-white/10">
        {screenshots.map((screenshot, index) => (
          <img
            key={screenshot.id}
            src={screenshot.image}
            alt={`${project.title} - ${screenshot.title}`}
            aria-hidden={index !== activeIndex}
            loading={!duplicate && index === 0 ? "eager" : "lazy"}
            width={1900}
            height={914}
            className={`portfolio-screenshot absolute inset-0 w-full h-full object-contain ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      <div className="p-4 sm:p-6 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3 sm:mb-4">
          <span className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} shadow-lg`}>
            {project.category}
          </span>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {screenshots.map((screenshot, index) => (
              <span
                key={screenshot.id}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === activeIndex ? "w-5 bg-cyan-400" : "w-1.5 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium">Premium Project</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-5 border-t border-white/10">
        <span className="text-xs sm:text-sm text-gray-400">Modern UI / UX Design</span>
        <span className="flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
          View Project
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </div>
    </Link>
  );
};

const Portfolio = ({ layout = "grid", id = "portfolio" }: PortfolioProps) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef);
  const reduceMotion = useReducedMotion();
  const { paused: backgroundPaused, pageVisible } = useBackgroundMotion();
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [slide, setSlide] = useState(0);
  const playing = isInView && pageVisible && !backgroundPaused && !paused && !hovered && !focused && !reduceMotion;

  useEffect(() => {
    if (!playing) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) setSlide((current) => current + 1);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [playing]);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="portfolio-section relative py-24 overflow-hidden bg-[#050816]"
      data-animated={playing}
    >
      <WorldGlobe paused={paused} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold mb-4">
            Portfolio
          </p>
          <h2 id={`${id}-heading`} className="text-4xl md:text-5xl font-black text-white leading-tight">
            Featured Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
              Projects & Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Explore our recent projects crafted with modern UI/UX, scalable
            architecture, and business-focused digital experiences.
          </p>
        </motion.div>

        <div className="flex justify-end max-w-7xl mx-auto mb-4">
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-label={`${paused ? "Resume" : "Pause"} ${layout === "carousel" ? "featured portfolio" : "portfolio"} animation`}
            aria-pressed={paused}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 motion-reduce:hidden"
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
            {paused ? "Resume" : "Pause"}
          </button>
        </div>
      </div>

      <div className={layout === "grid" ? "container mx-auto px-6 relative z-10" : "relative z-10"}>
        <div
          ref={projectsRef}
          role="region"
          aria-label={layout === "carousel" ? "Featured projects carousel" : "Featured projects"}
          className={layout === "carousel" ? "portfolio-carousel" : "portfolio-grid max-w-7xl mx-auto"}
          data-playing={playing}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setFocused(false);
            }
          }}
        >
          {layout === "carousel" ? (
            <div className="portfolio-track">
              {[0, 1].map((copy) => (
                <div className="portfolio-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} slide={slide} duplicate={copy === 1} />
                  ))}
                </div>
              ))}
            </div>
          ) : projects.map((project) => (
            <ProjectCard key={project.id} project={project} slide={slide} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
