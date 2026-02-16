import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Shield, text: "No credit card required" },
  { icon: Clock, text: "7-day free trial" },
  { icon: X, text: "Cancel anytime" },
];

const BottomCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-navy-deep via-navy to-navy-deep">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6"
        >
          Ready to optimize your{" "}
          <span className="text-cyan">career trajectory?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="text-primary-foreground/60 font-body max-w-lg mx-auto mb-8 text-lg"
        >
          Join thousands of professionals who stopped guessing and started vectoring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.24 }}
        >
          <Button className="bg-cyan text-cyan-foreground hover:bg-cyan/90 font-bold rounded-full px-10 h-14 text-lg shadow-lg shadow-cyan/25 mb-8">
            Start Your Free Trial
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.36 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {badges.map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-primary-foreground/50 text-sm font-body">
              <b.icon className="w-4 h-4" />
              <span>{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTA;
