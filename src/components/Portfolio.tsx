import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Startup Landing Page", category: "Landing Page" },
  { title: "Business Website", category: "Corporate" },
  { title: "Product Showcase", category: "E-commerce" },
  { title: "Personal Portfolio", category: "Portfolio" },
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 relative">
    <div className="container px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Recent <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground">A glimpse of what I've built.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group glass rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Image placeholder */}
            <div className="h-48 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
              <span className="font-heading text-xl font-bold text-foreground/60">{p.title}</span>
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.category}</p>
              </div>
              <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
