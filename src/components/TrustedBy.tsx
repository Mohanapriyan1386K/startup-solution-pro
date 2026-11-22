import { motion } from "framer-motion";
import TechBackground from "./TechBackground";

const businessServices = [
  "Corporate Websites",
  "E-Commerce Solutions",
  "Web Applications",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "Brand Identity",
  "Digital Products",
];

const TrustedBy = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#050816]">
      <TechBackground variant="cloud" />

      {/* Heading */}
      <div className="container mx-auto px-6 text-center relative z-10 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold mb-4"
        >
          Our Expertise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-white"
        >
          Solutions Built for
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
            Modern Businesses
          </span>
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
          We create scalable digital experiences that help businesses grow,
          engage customers, and build a strong online presence.
        </p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-6">
          {[...businessServices, ...businessServices].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 px-8 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
            >
              <span className="text-lg font-semibold text-white tracking-wide">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
