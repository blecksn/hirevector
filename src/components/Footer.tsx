import { Linkedin, Instagram, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Vector Analysis", to: "/#how-it-works" },
      { label: "Career Matching", to: "/#how-it-works" },
      { label: "Smart Applications", to: "/#how-it-works" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/#features" },
      { label: "Career Guides", to: "/#features" },
      { label: "API Docs", to: "/contact" },
      { label: "Help Center", to: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/hire-vector" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/hirevector.ai" },
  { icon: Twitter, label: "X", href: "https://x.com/hirevector" },
  { icon: Github, label: "GitHub", href: "https://github.com/hirevector" },
];

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-cyan/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="HireVector" className="h-11 w-auto" />
            </Link>
            <p className="text-primary-foreground/50 text-sm font-body leading-relaxed">
              Career vector alignment platform. Direction matters.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-primary-foreground/50 hover:text-cyan text-sm font-body transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">Connect</h4>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-foreground/50 hover:text-cyan text-sm font-body transition-colors"
                  >
                    <s.icon className="w-4 h-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-primary-foreground/40 text-xs font-body">
          <span>© {new Date().getFullYear()} HireVector. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-cyan transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cyan transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-cyan transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
