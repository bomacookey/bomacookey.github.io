import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects and getting started",
    price: "1,500",
    period: "per project",
    features: [
      "Single web application build",
      "Basic cloud deployment",
      "Up to 5 pages",
      "Mobile-responsive design",
      "1 round of revisions",
      "30-day post-launch support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with complex needs",
    price: "4,500",
    period: "per project",
    features: [
      "Full-stack application development",
      "Cloud infrastructure setup (AWS)",
      "CI/CD pipeline configuration",
      "Database design & integration",
      "Workflow automation scripts",
      "3 rounds of revisions",
      "90-day post-launch support",
      "Performance optimization",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Comprehensive solutions for large-scale operations",
    price: "Custom",
    period: "tailored quote",
    features: [
      "Everything in Professional",
      "Multi-service architecture",
      "Security & compliance audit",
      "Monitoring & incident response",
      "Team training & mentorship",
      "Ongoing infrastructure management",
      "Dedicated project manager",
      "Priority support & SLA",
    ],
    highlighted: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Transparent Plans, Real{" "}
            <span className="text-gradient">Value</span>
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            Choose the engagement model that fits your project scope and budget.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`relative rounded-2xl flex flex-col ${
                plan.highlighted
                  ? "hero-bg text-primary-foreground shadow-xl pt-12 pb-8 px-8"
                  : "bg-card border border-border card-elevated p-8"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 flex justify-center">
                  <span className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-b-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold font-display mb-1 ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm font-sans ${
                    plan.highlighted
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Custom" && (
                    <span
                      className={`text-lg ${
                        plan.highlighted
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      $
                    </span>
                  )}
                  <span
                    className={`text-4xl font-bold font-display ${
                      plan.highlighted ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <span
                  className={`text-sm font-sans ${
                    plan.highlighted
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-accent" : "text-accent"
                      }`}
                    />
                    <span
                      className={`text-sm font-sans ${
                        plan.highlighted
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:lydiacookeyy@gmail.com"
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:opacity-90 shadow-lg"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                style={plan.highlighted ? { boxShadow: "var(--accent-glow)" } : {}}
              >
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
