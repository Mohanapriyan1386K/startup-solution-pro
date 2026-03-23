import { motion } from "framer-motion";
import { Layout, Palette, Code2, Mail, Sparkles } from "lucide-react";

const services = [
  { icon: Layout, title: "Landing Page Development", desc: "High-converting landing pages built for speed and results." },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive interfaces that users love." },
  { icon: Code2, title: "React Development", desc: "Modern web apps using React.js and the latest tools." },
  { icon: Mail, title: "EmailJS Integration", desc: "Contact forms with free email delivery — no backend needed." },
  { icon: Sparkles, title: "Animations & 3D Effects", desc: "Smooth transitions and interactive visuals that captivate." },
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
          What I <span className="gradient-text">Offer</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          End-to-end web development services tailored for startups and small businesses.
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
