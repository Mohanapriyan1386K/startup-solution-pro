import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Users,
  Layers3,
  Clock3,
} from "lucide-react";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    icon: <Briefcase size={22} />,
  },
  {
    value: 25,
    suffix: "+",
    label: "Business Clients",
    icon: <Users size={22} />,
  },
  {
    value: 100,
    suffix: "%",
    label: "Custom UI Solutions",
    icon: <Layers3 size={22} />,
  },
  {
    value: 7,
    suffix: " Days",
    label: "Fast Project Delivery",
    icon: <Clock3 size={22} />,
  },
];

const Counter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
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
    <div
      ref={ref}
      className="text-4xl md:text-5xl font-black text-white"
    >
      {display}
      <span className="text-cyan-400">{suffix}</span>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-120px] w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full" />

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
            Company Growth
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Delivering Results
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
              Through Innovation
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            We help businesses build scalable digital experiences with modern
            technologies, premium UI/UX, and performance-driven development.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 text-center"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-br from-cyan-500 to-blue-600" />

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                {s.icon}
              </div>

              {/* Counter */}
              <div className="relative z-10">
                <Counter value={s.value} suffix={s.suffix} />
              </div>

              {/* Label */}
              <p className="relative z-10 text-gray-400 mt-4 text-sm tracking-wide">
                {s.label}
              </p>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-400/40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;