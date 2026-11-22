import { useState } from "react";
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import angularLogo from "@/assets/technologies/angular.png";
import reactLogo from "@/assets/technologies/react.png";
import awsLogo from "@/assets/technologies/aws.png";
import bootstrapLogo from "@/assets/technologies/bootstrap.png";
import mongodbLogo from "@/assets/technologies/mongodb.png";
import html5Logo from "@/assets/technologies/html5.png";
import javascriptLogo from "@/assets/technologies/javascript.png";
import nodejsLogo from "@/assets/technologies/nodejs.png";
import oracleLogo from "@/assets/technologies/oracle.png";
import postgresqlLogo from "@/assets/technologies/postgresql.png";
import pythonLogo from "@/assets/technologies/python.png";
import mysqlLogo from "@/assets/technologies/mysql.png";
import postmanLogo from "@/assets/technologies/postman.png";
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Database,
  ShieldCheck,
} from "lucide-react";

const categories = [
  // { name: "All", icon: <Code2 size={16} /> },
  { name: "Web Development", icon: <Globe size={16} /> },
  { name: "Mobile Apps", icon: <Smartphone size={16} /> },
  { name: "Cloud", icon: <Cloud size={16} /> },
  { name: "Databases", icon: <Database size={16} /> },
  { name: "Testing", icon: <ShieldCheck size={16} /> },
];

const technologies = [
  { name: "Angular", image: angularLogo, color: "from-red-500 to-pink-500" },
  { name: "React", image: reactLogo, color: "from-red-500 to-pink-500" },
  { name: "AWS", image: awsLogo, color: "from-yellow-400 to-orange-500" },
  { name: "Bootstrap", image: bootstrapLogo, color: "from-violet-500 to-purple-600" },
  // { name: "Embedded C", color: "from-cyan-500 to-blue-500" },
  { name: "MongoDB", image: mongodbLogo, color: "from-green-500 to-emerald-600" },
  { name: "HTML5", image: html5Logo, color: "from-orange-500 to-red-500" },
  { name: "JavaScript", image: javascriptLogo, color: "from-yellow-300 to-yellow-500" },
  // { name: "Laravel", color: "from-red-400 to-red-600" },
  // { name: "MQTT", color: "from-fuchsia-500 to-purple-500" },
  { name: "Node.js", image: nodejsLogo, color: "from-green-400 to-lime-500" },
  { name: "Oracle", image: oracleLogo, color: "from-red-500 to-rose-500" },
  // { name: "PHP", color: "from-indigo-400 to-violet-500" },
  { name: "PostgreSQL", image: postgresqlLogo, color: "from-sky-500 to-blue-600" },
  // { name: "PWA", color: "from-blue-400 to-cyan-500" },
  { name: "Python", image: pythonLogo, color: "from-yellow-400 to-blue-500" },
  { name: "React", image: reactLogo, color: "from-cyan-400 to-blue-500" },
  { name: "MySQL", image: mysqlLogo, color: "from-orange-400 to-yellow-500" },
  // { name: "WebRTC", color: "from-slate-400 to-gray-500" },
  // { name: "Yii Framework", color: "from-lime-400 to-green-500" },
  { name: "Postman", image: postmanLogo, color: "from-orange-500 to-red-500" },
];

export default function TechnologiesSection() {
  const [active, setActive] = useState("All");

  return (
    <section id="technologies" className="relative py-24 px-6 lg:px-16 bg-[#050816] overflow-hidden">
      <TechBackground variant="circuit" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold mb-4">
            Technologies
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Technologies & Platforms
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
              We Work With
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Modern technologies for scalable web, mobile, and cloud solutions.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`group flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 backdrop-blur-xl
              ${
                active === item.name
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-[0_0_25px_rgba(0,153,255,0.4)]"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              <span
                className={`${
                  active === item.name
                    ? "text-white"
                    : "text-cyan-400 group-hover:text-white"
                }`}
              >
                {item.icon}
              </span>

              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 h-36 flex items-center justify-center"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-br ${tech.color}`}
              />

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-400/40 transition-all duration-300" />

              {/* Content */}
              <img
                src={tech.image}
                alt={`${tech.name} logo`}
                loading="lazy"
                decoding="async"
                width={256}
                height={256}
                className="relative z-10 h-20 w-28 sm:h-24 sm:w-32 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              {/* Hover Light */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-cyan-400/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
