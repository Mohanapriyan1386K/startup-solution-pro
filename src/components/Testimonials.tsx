import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechStart",
    text: "Startup Solution delivered an incredible website for us. The design quality and attention to detail exceeded our expectations. Our conversions went up by 40%!",
  },
  {
    name: "Priya Patel",
    role: "Founder, GrowthCo",
    text: "Fast delivery, beautiful design, and amazing support. The best investment we made for our online presence. Highly recommended for any startup!",
  },
  {
    name: "Arjun Mehta",
    role: "CTO, InnovateLab",
    text: "The website looks professional and loads incredibly fast. Our clients are impressed with the modern design. Worth every rupee!",
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Head, ScaleUp",
    text: "We needed a website that stands out and converts visitors into leads. Startup Solution nailed it. The UI is top-notch and very user-friendly.",
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

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 relative">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground">Real feedback from real businesses.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="glass rounded-2xl p-8 md:p-12 min-h-[280px] flex flex-col items-center justify-center text-center relative overflow-hidden">
            <Quote size={40} className="text-primary/20 absolute top-6 left-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-primary">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
