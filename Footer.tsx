import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="LCS" className="h-8 w-8" />
              <span className="font-bold text-lg">Lydia Cookey Solutions</span>
            </div>
            <p className="text-primary-foreground/60 text-sm font-sans leading-relaxed">
              Technology consulting for scalable digital systems and complex business challenges.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-4 font-sans uppercase tracking-wider text-primary-foreground/80">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60 font-sans">
              <li>Full-Stack Development</li>
              <li>Cloud Infrastructure</li>
              <li>Workflow Automation</li>
              <li>DevOps & CI/CD</li>
              <li>Monitoring & Incident Response</li>
              <li>Technical Training</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm mb-4 font-sans uppercase tracking-wider text-primary-foreground/80">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60 font-sans">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-primary-foreground transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 font-sans uppercase tracking-wider text-primary-foreground/80">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60 font-sans">
              <li>lydiacookeyy@gmail.com</li>
              <li>Oshawa, Ontario, Canada</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40 font-sans">
          © {new Date().getFullYear()} Lydia Cookey Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
