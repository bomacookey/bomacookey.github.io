import { motion } from "framer-motion";
import { Code2, Cloud, Workflow, Settings, Database, Shield, Monitor, GraduationCap, Network } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Custom web and mobile applications built with modern frameworks — from requirement gathering and system design to implementation, testing, and deployment.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud architectures on AWS with Infrastructure-as-Code using Terraform and Ansible — optimized for cost, reliability, and security.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Custom Python and Bash automation scripts that eliminate repetitive tasks, streamline operations, and improve operational efficiency.",
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD",
    description:
      "Continuous integration and deployment pipelines, configuration management, and deployment validation to accelerate your development lifecycle.",
  },
  {
    icon: Database,
    title: "Systems Analysis",
    description:
      "Deep-dive analysis of your existing systems — mapping workflows, correlating incidents, and identifying root causes to architect better solutions.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security practices including IAM, access control, and network security (TCP/IP, DNS) to protect your digital assets.",
  },
  {
    icon: Monitor,
    title: "Monitoring & Incident Response",
    description:
      "Proactive system health monitoring, log analysis, and incident management to maintain operational stability across distributed environments.",
  },
  {
    icon: GraduationCap,
    title: "Technical Training",
    description:
      "Hands-on training and mentorship in Python, JavaScript, and DevOps practices — helping your team build real skills through guided learning.",
  },
  {
    icon: Network,
    title: "IT Infrastructure Management",
    description:
      "End-to-end infrastructure operations supporting hundreds of users — from provisioning and configuration to vendor management and system integration.",
  },
];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Solutions Designed to Grow With You
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            From concept to deployment and beyond, we deliver end-to-end technical
            solutions tailored to your business.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="bg-card rounded-xl p-7 card-elevated border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <service.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
