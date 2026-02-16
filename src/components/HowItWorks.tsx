import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Target, Send, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Vector Analysis",
    desc: "We map 70+ dimensions of your career — skills, goals, culture fit, growth trajectory — into a unique career vector.",
    metric: "70+ dimensions",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    desc: "Our algorithm aligns your vector with thousands of opportunities, surfacing only the highest-match roles.",
    metric: "95% match accuracy",
  },
  {
    icon: Send,
    title: "Smart Applications",
    desc: "Auto-optimized positioning for each opportunity. Your profile speaks each employer's language.",
    metric: "15% interview rate",
  },
  {
    icon: TrendingUp,
    title: "Trajectory Tracking",
    desc: "Real-time feedback loop. Watch your career vector strengthen with every interaction and data point.",
    metric: "Live dashboard",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="how-it-works" className="py-24 bg-gradient-to-b from-navy-deep to-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">
            How It Works
          </h2>
          <p className="text-primary-foreground/60 font-body max-w-lg mx-auto">
            Four steps from scattered applications to a focused career trajectory.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
              className="bg-navy/60 border border-cyan/10 rounded-xl p-6 hover:border-cyan/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
                <step.icon className="w-6 h-6 text-cyan" />
              </div>
              <div className="font-display text-xs font-bold text-cyan/60 uppercase tracking-wider mb-2">
                Step {i + 1}
              </div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm font-body mb-4 leading-relaxed">
                {step.desc}
              </p>
              <div className="text-green font-display font-bold text-sm">
                {step.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
