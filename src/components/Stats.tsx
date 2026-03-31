import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "", label: "Freelance Clients" },
  { value: 100, suffix: "%", label: "Custom Design Focus" },
  { value: 3, suffix: "-5 Days", label: "Typical Delivery Window" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-secondary">
      {display}
      {suffix}
    </div>
  );
};

const Stats = () => (
  <section className="py-20 relative">
    <div className="container px-6 mx-auto">
      <div className="glass rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
