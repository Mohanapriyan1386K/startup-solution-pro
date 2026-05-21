import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  Menu,
  X,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Corporate Websites",
    desc: "Modern business websites with premium UI/UX",
    href: "#corporate",
  },
  {
    title: "Web Applications",
    desc: "Scalable React & modern web apps",
    href: "#webapps",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Online stores with secure payment integration",
    href: "#ecommerce",
  },
  {
    title: "UI/UX Design",
    desc: "Creative user-focused digital experiences",
    href: "#uiux",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050816]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-40 rounded-full" />

                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
                  <img
                    src="./blue.png"
                    alt="Maven Technology"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              <div className="hidden sm:block">
                <h2 className="text-white font-bold text-lg leading-none">
                  Maven Technology
                </h2>

                <p className="text-gray-400 text-xs mt-1 tracking-wide">
                  Modern Digital Solutions
                </p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div
                    key={link.label}
                    className="relative group"
                  >
                    <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium">
                      Services
                      <ChevronDown
                        size={16}
                        className="group-hover:rotate-180 transition-transform duration-300"
                      />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="w-[360px] rounded-3xl border border-white/10 bg-[#0b1120]/95 backdrop-blur-2xl shadow-2xl overflow-hidden">
                        {/* Top */}
                        <div className="p-5 border-b border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles
                              size={16}
                              className="text-cyan-400"
                            />

                            <span className="text-cyan-400 text-sm font-semibold">
                              Premium Services
                            </span>
                          </div>

                          <h3 className="text-white text-xl font-bold">
                            Digital Solutions
                          </h3>
                        </div>

                        {/* Services */}
                        <div className="p-3">
                          {services.map((service, index) => (
                            <a
                              key={index}
                              href={service.href}
                              className="group/item flex flex-col rounded-2xl p-4 hover:bg-white/5 transition-all duration-300"
                            >
                              <span className="text-white font-semibold group-hover/item:text-cyan-400 transition-colors">
                                {service.title}
                              </span>

                              <span className="text-gray-400 text-sm mt-1">
                                {service.desc}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                className="group relative overflow-hidden rounded-xl px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_25px_rgba(0,153,255,0.4)] hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Start Project</span>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10 bg-[#050816]/95 backdrop-blur-2xl"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.label === "Services" ? (
                    <div key={link.label}>
                      <button
                        onClick={() =>
                          setServicesOpen(!servicesOpen)
                        }
                        className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors py-3"
                      >
                        Services
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 flex flex-col gap-3 pl-4 border-l border-white/10">
                              {services.map((service, index) => (
                                <a
                                  key={index}
                                  href={service.href}
                                  onClick={() =>
                                    setMobileOpen(false)
                                  }
                                  className="py-2"
                                >
                                  <p className="text-white text-sm font-medium">
                                    {service.title}
                                  </p>

                                  <p className="text-gray-400 text-xs mt-1">
                                    {service.desc}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-300 hover:text-white transition-colors py-3 text-base"
                    >
                      {link.label}
                    </a>
                  )
                )}

                {/* Mobile CTA */}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 font-semibold shadow-lg"
                >
                  Start Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll To Top */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(0,153,255,0.5)] hover:scale-110 transition-all duration-300"
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;