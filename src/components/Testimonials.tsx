import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "I went from mass-applying to 200 jobs a month to getting 3 targeted interviews in my first week with HireVector. The vector alignment is real.",
    name: "Sarah Chen",
    role: "Product Manager → Senior PM at Stripe",
    detail: "Vector Score: 89 · Hired in 18 days",
  },
  {
    quote: "As a career switcher, I thought I'd be job hunting for months. HireVector identified transferable skill vectors I didn't even know I had.",
    name: "Marcus Thompson",
    role: "Teacher → UX Researcher at Google",
    detail: "Vector Score: 76 · Hired in 31 days",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-16"
        >
          Real Trajectories, Real Results
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.15 }}
              className="border-l-4 border-cyan bg-card rounded-r-xl p-6 shadow-sm"
            >
              <p className="text-foreground/80 font-body leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <div className="font-display font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground font-body">{t.role}</div>
                <div className="text-xs text-cyan font-semibold mt-1 font-body">{t.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
