import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const rows = [
  { traditional: "Spray and pray applications", hirevector: "Precision-targeted matches" },
  { traditional: "Generic resume for every job", hirevector: "Vector-optimized positioning" },
  { traditional: "Months of waiting", hirevector: "3.2x faster time to offer" },
  { traditional: "2% response rate", hirevector: "15% interview rate" },
  { traditional: "Guessing what employers want", hirevector: "Data-driven alignment scoring" },
];

const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-center mb-16"
        >
          The Traditional Job Search is{" "}
          <span className="text-destructive">Broken</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center font-display font-bold text-muted-foreground text-sm uppercase tracking-wider">
              ❌ Traditional
            </div>
            <div className="text-center font-display font-bold text-cyan text-sm uppercase tracking-wider">
              ✅ HireVector
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className="grid grid-cols-2 gap-4 mb-3"
            >
              <div className="flex items-center gap-3 bg-destructive/5 rounded-lg p-4 border border-destructive/10">
                <X className="w-4 h-4 text-destructive shrink-0" />
                <span className="text-sm text-muted-foreground font-body">{row.traditional}</span>
              </div>
              <div className="flex items-center gap-3 bg-cyan/5 rounded-lg p-4 border border-cyan/15">
                <Check className="w-4 h-4 text-cyan shrink-0" />
                <span className="text-sm text-foreground font-body font-medium">{row.hirevector}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
