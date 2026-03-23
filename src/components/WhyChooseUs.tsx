import { motion } from "framer-motion";
import { Rocket, Clock, BadgeIndianRupee, Smartphone, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Rocket, title: "Modern Design", desc: "Cutting-edge UI that impresses visitors." },
  { icon: Clock, title: "Fast Delivery", desc: "Your website ready in 3-5 business days." },
  { icon: BadgeIndianRupee, title: "Affordable Price", desc: "Premium quality without the premium price tag." },
  { icon: Smartphone, title: "Responsive Design", desc: "Looks perfect on every device and screen." },
  { icon: HeartHandshake, title: "Friendly Support", desc: "Direct communication and reliable after-launch help." },
];

const WhyChooseUs = () => (
  <section className="py-24 relative">
    <div className="container px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Why <span className="gradient-text">Choose Us</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-5 text-center group hover:glow transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-3">
              <r.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-sm text-foreground mb-1">{r.title}</h3>
            <p className="text-xs text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
