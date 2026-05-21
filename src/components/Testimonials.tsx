import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO • TechStart",
    company: "Technology Solutions",
    text: "Maven Technology delivered a premium website experience with outstanding UI/UX and performance. The final product exceeded our expectations and strengthened our digital presence.",
  },
  {
    name: "Priya Patel",
    role: "Founder • GrowthCo",
    company: "Business Consulting",
    text: "Professional communication, modern design, and fast execution. The entire process was smooth and the results helped our business look more credible online.",
  },
  {
    name: "Arjun Mehta",
    role: "CTO • InnovateLab",
    company: "Software Company",
    text: "The website feels modern, scalable, and highly optimized. Maven Technology understood our business needs and delivered a high-quality digital solution.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="relative py-24 overflow-hidden bg-[#050816]">
      {/* Background Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-purple-500/20 blur-3xl rounded-full" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

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
            Client Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Trusted By
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
              Growing Businesses
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Businesses trust Maven Technology for premium websites,
            scalable solutions, and modern digital experiences.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-14 min-h-[420px] flex flex-col justify-center">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-cyan-500/20 blur-3xl rounded-full" />

            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
              <Quote size={28} className="text-white" />
            </div>

            {/* Animated Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center mt-10"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-cyan-400 fill-cyan-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-3xl leading-relaxed text-white font-medium max-w-4xl mx-auto">
                  “{testimonials[current].text}”
                </p>

                {/* User Info */}
                <div className="mt-10">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-2xl">
                    {testimonials[current].name.charAt(0)}
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-5">
                    {testimonials[current].name}
                  </h3>

                  <p className="text-cyan-400 font-medium mt-1">
                    {testimonials[current].role}
                  </p>

                  <p className="text-gray-400 text-sm mt-2">
                    {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-10">
            {/* Prev */}
            <button
              onClick={prev}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-10 h-3 bg-gradient-to-r from-cyan-400 to-blue-500"
                      : "w-3 h-3 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;