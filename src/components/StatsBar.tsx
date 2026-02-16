import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "15%", label: "Interview Rate", sub: "vs 2% industry avg" },
  { value: "70+", label: "Vector Score", sub: "alignment dimensions" },
  { value: "5,000+", label: "Professionals Hired", sub: "and counting" },
  { value: "3.2x", label: "Faster Hiring", sub: "time to offer" },
];

const StatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative z-10 -mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="bg-gradient-to-br from-navy to-navy-deep rounded-xl p-6 border border-cyan/10 shadow-lg"
            >
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-green mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-primary-foreground/50 text-xs font-body">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
