import { motion } from "framer-motion";
import MobilePortfolioPreview from "@/components/MobilePortfolioPreview";
import {
  ArrowRight,
  Play,
  Sparkles,
  Star,
  Globe,
  ShieldCheck,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-blue-600/30 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-12 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8"
            >
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-sm text-gray-300">
                Premium Web Solutions • Coimbatore
              </span>
            </motion.div> */}

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              We Build
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Modern Digital
              </span>
              Experiences
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
              Maven Technology creates high-converting websites and powerful
              digital products for startups, local businesses, and growing
              brands.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                {
                  icon: <Globe size={16} />,
                  text: "SEO Optimized",
                },
                {
                  icon: <ShieldCheck size={16} />,
                  text: "Premium UI/UX",
                },
                {
                  icon: <Star size={16} />,
                  text: "Fast Delivery",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md"
                >
                  <div className="text-cyan-400">{item.icon}</div>
                  <span className="text-sm text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#contact"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,153,255,0.4)]"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#portfolio"
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Play size={18} />
                View Portfolio
              </a>
            </div>

            {/* Bottom Stats */}
            <div className="flex gap-10 mt-14 flex-wrap">
              {[
                { number: "50+", label: "Projects" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support" },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-bold text-white">
                    {item.number}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative flex min-w-0 justify-center mt-6 lg:mt-0"
          >
            <MobilePortfolioPreview />

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 right-0 lg:-right-6 px-5 py-3 rounded-2xl bg-cyan-500 text-black font-bold shadow-xl"
            >
              UI/UX Design
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="pointer-events-none absolute -bottom-5 left-0 lg:-left-10 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10"
            >
              <p className="text-sm text-gray-300">Modern Development</p>
              <h4 className="font-bold text-lg">React • Next.js</h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
