import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section
      id="portfolio"
      className="relative py-24 overflow-hidden bg-[#050816]"
    >
      {/* Background Effects */}
      <div className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-purple-500/20 blur-3xl rounded-full" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/project/${p.id}`)}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl">
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent opacity-90" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-500" />

                  {/* Category Badge */}
                  <div
                    className={`absolute top-5 left-5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${p.color} shadow-lg`}
                  >
                    {p.category}
                  </div>

                  {/* Floating Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-5 right-5 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white"
                  >
                    <ExternalLink size={18} />
                  </motion.div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles size={16} className="text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">
                        Premium Project
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {p.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-5 border-t border-white/10">
                  <span className="text-sm text-gray-400">
                    Modern UI / UX Design
                  </span>

                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-cyan-400/30 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;