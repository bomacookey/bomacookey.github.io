import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Okonkwo",
    role: "CTO, FinEdge Technologies",
    content:
      "Lydia Cookey Solutions transformed our legacy infrastructure into a modern, scalable platform. Their DevOps expertise cut our deployment time by 80%. Truly exceptional work.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Director, GreenLeaf Logistics",
    content:
      "The workflow automation they built saved us over 30 hours per week. Their team understood our pain points instantly and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "James Adeyemi",
    role: "Founder, Marketly",
    content:
      "From MVP to a product serving 50,000 users — Lydia Cookey Solutions was with us every step. Their full-stack team is technically brilliant and genuinely easy to work with.",
    rating: 5,
  },
  {
    name: "Rachel Obi",
    role: "VP Engineering, HealthSync",
    content:
      "Security and compliance were critical for us. They delivered a HIPAA-compliant cloud architecture that gave us and our clients total peace of mind.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO, DataPulse Analytics",
    content:
      "Their systems analysis uncovered inefficiencies we didn't even know existed. The optimized pipeline they designed reduced our processing costs by 60%.",
    rating: 5,
  },
  {
    name: "Aisha Bello",
    role: "Product Manager, EduVerse",
    content:
      "Working with LCS felt like having an extension of our own team. They're responsive, transparent, and deliver real results — not just code.",
    rating: 5,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Trusted by Teams That{" "}
            <span className="text-gradient">Build to Last</span>
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="bg-card rounded-xl p-7 card-elevated border border-border relative"
            >
              <Quote
                size={32}
                className="text-accent/15 absolute top-5 right-5"
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground font-sans leading-relaxed mb-6">
                "{t.content}"
              </p>
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {t.name}
                </div>
                <div className="text-muted-foreground text-sm font-sans">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
