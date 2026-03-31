import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

const contactEmail = "info@maventechnology.in";
const web3FormsEndpoint = "https://api.web3forms.com/submit";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError("Web3Forms is not configured yet.");
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
          subject: `New website enquiry from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          replyto: form.email,
          to: contactEmail,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms request failed");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError("Couldn't send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Let's Build Your <span className="gradient-text">Website</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Share your goals and I will propose a clean, professional plan for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {[
            { title: "Free discovery call", desc: "Understand your goals and recommend the right package." },
            { title: "Clear timeline", desc: "Milestones, delivery dates, and updates you can trust." },
            { title: "Client-first process", desc: "Simple communication and smooth handover." },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-5 text-center"
            >
              <p className="font-semibold text-foreground mb-2">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto glass rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full gradient-bg text-primary-foreground font-semibold py-3.5 rounded-lg text-lg hover:opacity-90 transition-opacity glow flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {sending ? "Sending..." : sent ? "Message Sent!" : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

            {error ? (
              <p className="text-sm text-red-400 text-center">{error}</p>
            ) : null}
          </form>

          <div className="flex items-center gap-2 justify-center mt-6 text-sm text-muted-foreground">
            <Mail size={16} className="text-primary" />
            <a href={`mailto:${contactEmail}`} className="hover:text-primary transition-colors">
              {contactEmail}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
