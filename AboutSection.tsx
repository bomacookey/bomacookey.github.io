import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const strengths = [
  "CISSP, AWS Solutions Architect & ITIL certified",
  "Scalable architectures built for growth",
  "Transparent communication at every stage",
  "Business-first approach to technical problems",
  "Enterprise experience (CIBC, Nexgen Tech, SkyIT)",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              We Connect Technical Execution With{" "}
              <span className="text-gradient">Business Outcomes</span>
            </h2>
            <p className="text-muted-foreground text-lg font-sans leading-relaxed mb-8">
              Lydia Cookey Solutions is a technology consulting firm focused on
              building scalable digital systems and solving complex business
              challenges. We specialize in full-stack development, cloud
              infrastructure, and workflow automation, helping organizations
              streamline operations and deliver reliable, high-performing solutions.
            </p>
            <p className="text-muted-foreground text-lg font-sans leading-relaxed mb-8">
              With expertise in software development, DevOps, and systems analysis,
              we bridge the gap between technical execution and business
              outcomes—ensuring every solution is not only effective, but built to
              scale with your growth.
            </p>

            <ul className="space-y-4">
              {strengths.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                  <span className="text-foreground font-sans font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-background rounded-xl p-6 text-center card-elevated border border-border"
              >
                <div className="text-3xl font-bold text-gradient font-display mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
