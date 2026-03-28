import { motion } from "framer-motion";
import { Check, Zap, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    pages: "1 Page",
    price: "₹999",
    badge: null,
    features: [
      "Single Landing Page",
      "Fully Responsive Design",
      "Modern UI/UX",
      "Smooth Animations",
      "EmailJS Contact Form",
      "Fast Delivery (3-5 days)",
    ],
  },
  {
    name: "Growth",
    pages: "4 Pages",
    price: "₹2,000",
    badge: "BEST VALUE",
    features: [
      "4 Custom Pages",
      "Fully Responsive Design",
      "Modern UI/UX",
      "Smooth Animations",
      "EmailJS Contact Form",
      "Fast Delivery (5-7 days)",
      "1 Revision Round Free",
      "SEO Optimized",
    ],
  },
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
          Simple <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-muted-foreground">Transparent pricing. No hidden fees.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative rounded-2xl overflow-hidden ${plan.badge ? "ring-2 ring-primary" : ""}`}
          >
            <div className="relative glass rounded-2xl p-8 text-center h-full flex flex-col">
              {plan.badge && (
                <div className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4 mx-auto">
                  <Star size={14} /> {plan.badge}
                </div>
              )}

              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.pages}</p>

              <div className="mb-8">
                <span className="text-5xl font-heading font-bold text-secondary">{plan.price}</span>
              </div>

              <ul className="text-left space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground">
                    <Check size={16} className="text-primary shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full font-semibold py-3.5 rounded-lg text-lg transition-opacity ${
                  plan.badge
                    ? "gradient-bg text-primary-foreground hover:opacity-90 glow"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
