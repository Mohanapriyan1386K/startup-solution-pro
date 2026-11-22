import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import {
  Rocket,
  Clock3,
  BadgeIndianRupee,
  Smartphone,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Modern Digital Solutions",
    desc: "Premium UI/UX crafted with modern technologies and scalable architecture.",
  },
  {
    icon: Clock3,
    title: "Fast Project Delivery",
    desc: "Efficient workflows that ensure timely delivery without compromising quality.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    desc: "Enterprise-quality digital solutions at competitive and transparent pricing.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experience",
    desc: "Optimized seamlessly for desktops, tablets, and mobile devices.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    desc: "Reliable communication and continuous support throughout the project lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Performance-focused development with secure and scalable infrastructure.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050816]">
      <TechBackground variant="security" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Building Modern
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
              Digital Experiences
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6">
            Maven Technology combines innovation, performance, and modern UI/UX
            to help businesses grow with scalable digital solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-br from-cyan-500 to-blue-600" />

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl mb-6">
                <item.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Border Hover */}
              <div className="absolute inset-0 rounded-[30px] border border-transparent group-hover:border-cyan-400/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl px-8 py-8">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Ready to Build Your Next Project?
              </h3>

              <p className="text-gray-400 mt-2">
                Let’s create modern digital experiences that elevate your
                business.
              </p>
            </div>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_30px_rgba(0,153,255,0.35)] hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
