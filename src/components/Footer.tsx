import TechBackground from "./TechBackground";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "E-Commerce", href: "#" },
      { name: "Web Applications", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050816] border-t border-white/10">
      <TechBackground variant="horizon" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Footer */}
        <div className="grid lg:grid-cols-4 gap-12 py-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
                <img
                  src="./blue.png"
                  alt="Maven Technology"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">
                  Maven Technology
                </h2>

                <p className="text-cyan-400 text-sm tracking-wide">
                  Modern Digital Solutions
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-xl mb-8">
              Maven Technology delivers premium web development,
              scalable applications, and modern UI/UX experiences
              for startups, businesses, and growing brands.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-cyan-400" />
                </div>

                <span>info@maventechnology.in</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone size={20} className="text-cyan-400" />
                </div>

                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={20} className="text-cyan-400" />
                </div>

                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white text-xl font-bold mb-6">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      {link.name}

                      <ArrowUpRight
                        size={16}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Maven Technology. All rights reserved. <br />
            Built with modern technologies by Mohana Priyan.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              Facebook,
              Instagram,
              Linkedin,
              Twitter,
            ].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
