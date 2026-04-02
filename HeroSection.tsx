import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-bg opacity-85" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 mb-8">
            <Sparkles size={14} className="text-accent" />
            <span className="text-sm font-medium text-primary-foreground/80">
              Strategic Technology Consulting for Modern Businesses
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
            We Build Digital Systems{" "}
            <span className="text-gradient">That Scale</span>{" "}
            With Your Business
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mb-10 font-sans leading-relaxed">
            Full-stack development, cloud infrastructure, and workflow automation —
            connecting technical execution with real business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground px-7 py-3.5 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity"
              style={{ boxShadow: "var(--accent-glow)" }}
            >
              Start a Project
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 text-base font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
