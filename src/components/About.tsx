import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import {
  Building2,
  Globe,
  Rocket,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const features = [
  "Premium UI/UX Design",
  "Scalable Web Development",
  "Mobile-First Responsive Design",
  "SEO & Performance Optimized",
  "Business-Focused Solutions",
  "Fast & Reliable Delivery",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-[#050816]"
    >
      <TechBackground variant="network" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold mb-4">
              About Company
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Building Digital Experiences
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
                For Modern Businesses
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
              Maven Technology delivers modern websites, scalable applications,
              and premium digital solutions designed to help businesses grow,
              build trust, and stand out online.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/20 blur-3xl rounded-full" />

                {/* Icon */}
                <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl mb-8">
                  <Building2 size={38} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Maven Technology Pvt Ltd
                  </h3>

                  <p className="text-cyan-400 font-medium mb-6 flex items-center gap-2">
                    <Globe size={18} />
                    Coimbatore • Web & Software Solutions
                  </p>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    We partner with startups, brands, and enterprises to create
                    high-performance websites and modern digital products.
                    Every solution is crafted with a focus on performance,
                    scalability, user experience, and business growth.
                  </p>

                  {/* Small Stats */}
                  <div className="grid grid-cols-2 gap-5 mt-10">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                      <h4 className="text-3xl font-black text-white">50+</h4>
                      <p className="text-gray-400 text-sm mt-1">
                        Projects Delivered
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                      <h4 className="text-3xl font-black text-white">98%</h4>
                      <p className="text-gray-400 text-sm mt-1">
                        Client Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Feature Cards */}
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shrink-0">
                    {index % 3 === 0 ? (
                      <Rocket size={24} className="text-white" />
                    ) : index % 2 === 0 ? (
                      <ShieldCheck size={24} className="text-white" />
                    ) : (
                      <CheckCircle2 size={24} className="text-white" />
                    )}
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {item}
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                      Delivering professional and scalable solutions with modern
                      technologies and business-focused strategies.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
