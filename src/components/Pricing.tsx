import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const features = [
  "Fully Responsive Design",
  "Modern UI/UX",
  "Smooth Animations",
  "EmailJS Contact Form",
  "Fast Delivery (3-5 days)",
  "1 Revision Round Free",
];

const Pricing = () => (
  <section id="pricing" className="py-24 relative">
    <div className="container px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Special <span className="gradient-text">Launch Offer</span>
        </h2>
        <p className="text-muted-foreground">Grab this deal before it's gone.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden">
          {/* gradient border effect */}
          <div className="absolute inset-0 gradient-bg opacity-20" />
          <div className="relative glass rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 gradient-bg text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              <Zap size={14} /> FIRST 3 CLIENTS ONLY
            </div>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Landing Page Website
            </h3>

            <div className="mb-8">
              <span className="text-3xl text-muted-foreground line-through">₹999</span>
              <span className="text-6xl font-heading font-bold gradient-text ml-3">₹499</span>
            </div>

            <ul className="text-left space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-muted-foreground">
                  <Check size={16} className="text-primary shrink-0" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block w-full gradient-bg text-primary-foreground font-semibold py-3.5 rounded-lg text-lg hover:opacity-90 transition-opacity glow"
            >
              Claim This Offer
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
