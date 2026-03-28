import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  { title: "Startup Landing Page", category: "Landing Page", image: portfolio1 },
  { title: "Business Website", category: "Corporate", image: portfolio2 },
  { title: "Product Showcase", category: "E-commerce", image: portfolio3 },
  { title: "Personal Portfolio", category: "Portfolio", image: portfolio4 },
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
          Recent <span className="text-primary">Projects</span>
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
            <div className="h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
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
