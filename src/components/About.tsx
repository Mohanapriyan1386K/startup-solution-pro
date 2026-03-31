import { motion } from "framer-motion";
import { Code2, User } from "lucide-react";

const About = () => (
  <section id="about" className="py-24 relative">
    <div className="container px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
            <User size={20} className="text-primary-foreground" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 mt-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Avatar placeholder */}
            <div className="w-32 h-32 rounded-2xl gradient-bg flex items-center justify-center shrink-0">
              <Code2 size={48} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Mohana Priyan
              </h3>
              <p className="text-primary text-sm font-medium mb-4">
                Freelance Web Designer & Developer
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I work with founders, agencies, and local businesses to design websites that feel premium and
                trustworthy. Every project is built for clarity, speed, and conversion, so your brand looks
                professional and clients take action.
              </p>
              <div className="grid gap-3 text-sm text-muted-foreground">
                {[
                  "Strategy-driven layout and content structure",
                  "Responsive design that looks perfect on mobile",
                  "Clean development with fast performance",
                  "Clear communication and on-time delivery",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
