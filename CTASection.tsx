import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hero-bg rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Build Something{" "}
              <span className="text-gradient">Remarkable?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg font-sans mb-8 leading-relaxed">
              Let's discuss your project. Whether you need a full-stack solution, cloud
              migration, or workflow overhaul — we're here to help.
            </p>
            <a
              href="mailto:lydiacookeyy@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-8 py-4 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity"
              style={{ boxShadow: "var(--accent-glow)" }}
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
