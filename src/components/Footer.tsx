import { ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Vector Analysis", "Career Matching", "Smart Applications", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Blog", "Career Guides", "API Docs", "Help Center"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-cyan/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-cyan flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-cyan-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-primary-foreground">HireVector</span>
            </a>
            <p className="text-primary-foreground/50 text-sm font-body leading-relaxed">
              Career vector alignment platform. Direction matters.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/50 hover:text-cyan text-sm font-body transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-cyan/10 pt-6 text-center text-primary-foreground/40 text-xs font-body">
          © {new Date().getFullYear()} HireVector. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
