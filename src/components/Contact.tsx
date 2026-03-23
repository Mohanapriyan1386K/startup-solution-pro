import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    // EmailJS integration placeholder — replace with real IDs
    // emailjs.send('service_id', 'template_id', form, 'public_key')
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Book Your <span className="gradient-text">Website Now</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Fill out the form below or reach out via email. Let's bring your vision to life.
          </p>
        </motion.div>

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
              {sending ? "Sending..." : sent ? "Message Sent! ✓" : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>

          <div className="flex items-center gap-2 justify-center mt-6 text-sm text-muted-foreground">
            <Mail size={16} className="text-primary" />
            <span>startupsolution@email.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
