import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const contactEmail = "info@maventechnology.in";
const web3FormsEndpoint = "https://api.web3forms.com/submit";

const features = [
  "Free Consultation & Strategy",
  "Modern UI/UX Design",
  "Fast Delivery & Support",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError("");
    setSending(true);

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError("Web3Forms is not configured.");
      setSending(false);
      return;
    }

    try {
      const response = await fetch(web3FormsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Project Enquiry from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          replyto: form.email,
          to: contactEmail,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Request failed");
      }

      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSent(false), 4000);
    } catch {
      setError(
        "Unable to send message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-[#050816]"
    >
      <TechBackground variant="signal" />

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
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Let’s Build Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
              Amazing Together
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Share your project requirements and our team will
            help you create modern digital experiences for your
            business.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                Start Your Project
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                We provide premium web development, UI/UX
                design, and scalable digital solutions for
                startups, brands, and modern businesses.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <CheckCircle2
                        size={22}
                        className="text-white"
                      />
                    </div>

                    <span className="text-white font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-5">
                  <Mail size={24} className="text-white" />
                </div>

                <p className="text-gray-400 text-sm mb-2">
                  Email Address
                </p>

                <a
                  href={`mailto:${contactEmail}`}
                  className="text-white font-semibold hover:text-cyan-400 transition-colors"
                >
                  {contactEmail}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-5">
                  <MapPin size={24} className="text-white" />
                </div>

                <p className="text-gray-400 text-sm mb-2">
                  Location
                </p>

                <p className="text-white font-semibold">
                  Coimbatore, Tamil Nadu
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10"
          >
            <h3 className="text-3xl font-bold text-white mb-2">
              Send a Message
            </h3>

            <p className="text-gray-400 mb-8">
              Fill out the form and we’ll get back to you
              shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>

                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>

                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Project Details
                </label>

                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell us about your project..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={sending}
                className="group w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-white font-semibold shadow-[0_0_30px_rgba(0,153,255,0.35)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
              >
                {sending ? (
                  "Sending..."
                ) : sent ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    Send Message
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm text-center">
                  {error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
