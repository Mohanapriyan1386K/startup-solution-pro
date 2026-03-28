import { motion } from "framer-motion";

const clients = [
  "TechStart", "GrowthCo", "InnovateLab", "ScaleUp", "DigitalEdge",
  "FutureBiz", "StartFlow", "CloudNine", "NextGen", "ApexVentures",
];

const TrustedBy = () => (
  <section className="py-16 relative overflow-hidden">
    <div className="container px-6 mx-auto">
      <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
        Trusted by businesses worldwide
      </p>
    </div>

    {/* Infinite scroll marquee */}
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((name, i) => (
          <div
            key={i}
            className="mx-8 flex-shrink-0 glass rounded-xl px-8 py-4 flex items-center justify-center"
          >
            <span className="font-heading font-semibold text-lg text-muted-foreground/70">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
