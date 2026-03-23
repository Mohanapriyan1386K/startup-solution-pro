import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const FloatingOrb = ({ className }: { className?: string }) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-20 animate-pulse-glow ${className}`}
  />
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <FloatingOrb className="w-96 h-96 bg-primary -top-20 -left-20" />
      <FloatingOrb className="w-80 h-80 bg-secondary bottom-20 right-10" />
      <FloatingOrb className="w-64 h-64 bg-primary top-1/2 left-1/2 -translate-x-1/2" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* 3D rotating element */}
      <div className="absolute right-10 top-1/3 hidden lg:block">
        <div className="w-64 h-64 animate-spin-slow" style={{ perspective: "800px" }}>
          <div
            className="w-full h-full rounded-2xl gradient-bg opacity-10"
            style={{ transform: "rotateX(45deg) rotateZ(45deg)" }}
          />
        </div>
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Free Email Contact Integration Included
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Startup</span>{" "}
            <span className="text-foreground">Solution</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Modern Websites for Growing Businesses
          </p>

          {/* Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block glass rounded-xl px-6 py-4 mb-10"
          >
            <p className="text-lg font-heading font-semibold text-foreground">
              Starting from{" "}
              <span className="gradient-text text-2xl font-bold">₹999</span>
              {" "}per page
            </p>
            <p className="text-sm text-primary mt-1">🔥 4-Page Package — Only ₹2,000</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="gradient-bg text-primary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow"
            >
              Book Now <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="glass text-foreground font-semibold px-8 py-3.5 rounded-lg text-lg hover:border-primary transition-colors"
            >
              View Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
