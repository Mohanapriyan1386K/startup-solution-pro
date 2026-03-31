import { motion } from "framer-motion";
import { Layout, Palette, Code2, Mail, Sparkles, Rocket } from "lucide-react";

const services = [
  { icon: Layout, title: "Landing Pages", desc: "High-converting pages designed for lead capture and sales." },
  { icon: Palette, title: "Brand & UI Design", desc: "Modern, consistent design that makes your business look premium." },
  { icon: Code2, title: "Custom Development", desc: "Fast, responsive websites built with clean, scalable code." },
  { icon: Mail, title: "Lead Capture Setup", desc: "Contact forms, WhatsApp, and email integrations ready to use." },
  { icon: Sparkles, title: "Motion & Micro-Interactions", desc: "Subtle animations that feel high-end and trustworthy." },
  { icon: Rocket, title: "Performance & SEO", desc: "Optimized pages for speed, search, and mobile rankings." },
];

const Services = () => (
  <section id="services" className="py-24 relative">
    <div className="container px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Services That <span className="gradient-text">Grow</span> Your Business
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A complete, professional website package built to attract clients and build trust.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 group cursor-default"
          >
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:glow transition-shadow">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
