import { motion } from "framer-motion";

const clients = [
  "Startup Landing Pages",
  "Business Websites",
  "Portfolio Sites",
  "Product Showcases",
  "Invitation Designs",
];

const TrustedBy = () => (
  <section className="py-16 relative overflow-hidden">
    <div className="container px-6 mx-auto">
      <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
        Freelance work across 5 project types
      </p>
    </div>

    {/* Infinite scroll marquee */}
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((name, i) => (
          <div
            key={i}
            className="mx-8 flex-shrink-0 bg-primary rounded-xl px-8 py-4 flex items-center justify-center"
          >
            <span className="font-heading font-semibold text-lg text-primary-foreground">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
