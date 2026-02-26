import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import DemoModal from "@/components/DemoModal";
import { useWaitlist } from "@/components/WaitlistContext";

const getPointOnCurve = (t: number) => {
  const x = 60 + t * 380;
  const y = 340 - t * t * 80 - t * 200;
  return { x, y };
};

const curvePoints = [0.15, 0.35, 0.55, 0.75, 0.9].map(getPointOnCurve);

const scatteredDots = [
  { startX: 80, startY: 280, t: 0.1 },
  { startX: 40, startY: 310, t: 0.2 },
  { startX: 120, startY: 350, t: 0.15 },
  { startX: 60, startY: 240, t: 0.25 },
  { startX: 140, startY: 300, t: 0.3 },
];

const TrajectoryAnimation = () => (
  <div className="w-full h-full flex items-center justify-center">
    <svg
      viewBox="0 0 500 400"
      className="w-full h-full max-h-[500px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(187 100% 50% / 0.1)" />
          <stop offset="20%" stopColor="hsl(187 100% 50% / 0.7)" />
          <stop offset="100%" stopColor="hsl(187 100% 50% / 1)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="10" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glowStrong">
          <feGaussianBlur stdDeviation="14" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="orbGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(187 100% 70%)" />
          <stop offset="60%" stopColor="hsl(187 100% 50%)" />
          <stop offset="100%" stopColor="hsl(187 100% 50% / 0)" />
        </radialGradient>
      </defs>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.08 }} transition={{ duration: 0.4 }}>
        {[100, 200, 300].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="500" y2={y} stroke="hsl(187 100% 50%)" strokeWidth="0.5" />
        ))}
        {[125, 250, 375].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="400" stroke="hsl(187 100% 50%)" strokeWidth="0.5" />
        ))}
      </motion.g>

      {scatteredDots.map((dot, i) => {
        const target = getPointOnCurve(dot.t);
        return (
          <motion.circle
            key={`scatter-${i}`}
            r="3"
            fill="hsl(187 100% 50%)"
            filter="url(#glow)"
            initial={{ cx: dot.startX, cy: dot.startY, opacity: 0 }}
            animate={{ cx: [dot.startX, target.x], cy: [dot.startY, target.y], opacity: [0, 0.8, 0.4] }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.05, ease: "easeInOut", times: [0, 0.7, 1] }}
          />
        );
      })}

      <motion.path d="M 60 340 Q 180 340 250 240 Q 320 140 440 60" fill="none" stroke="hsl(187 100% 50% / 0.2)" strokeWidth="30" strokeLinecap="round" filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} />
      <motion.path d="M 60 340 Q 180 340 250 240 Q 320 140 440 60" fill="none" stroke="url(#arrowGrad)" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} />

      {curvePoints.map((pt, i) => (
        <motion.circle key={`node-${i}`} cx={pt.x} cy={pt.y} r="5" fill="hsl(187 100% 50%)" filter="url(#glow)" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, 0.7], scale: [0, 1.2, 1] }} transition={{ duration: 0.4, delay: 1.2 + i * 0.1, ease: "easeOut" }} />
      ))}

      <motion.circle cx="440" cy="60" r="12" fill="url(#orbGrad)" filter="url(#glowStrong)" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: [0, 1.1, 1, 1.3, 1] }} transition={{ opacity: { duration: 0.3, delay: 1.5 }, scale: { duration: 2.5, delay: 1.5, repeat: Infinity, repeatType: "loop", times: [0, 0.12, 0.2, 0.6, 1] } }} />
    </svg>
  </div>
);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const HeroSection = () => {
  const { openWaitlist } = useWaitlist();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-deep pt-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-xl lg:flex-1"
          >
            <motion.h1
              variants={slideUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6"
            >
              Direction matters.{" "}
              <span className="text-cyan">Get hired faster.</span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl mb-8 font-body"
            >
              Our 70+ career vector alignment system maps your skills, experience, and goals to opportunities with surgical precision.
            </motion.p>

            <motion.div variants={slideUp} className="flex flex-wrap gap-4 mb-8">
              <Button onClick={openWaitlist} className="bg-cyan text-cyan-foreground hover:bg-cyan/90 font-bold rounded-full px-8 h-12 text-base shadow-lg shadow-cyan/25">
                Calculate My Career Vector
              </Button>
              <DemoModal />
            </motion.div>

            <motion.div
              variants={slideUp}
              className="flex items-center gap-3 text-primary-foreground/60"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan text-cyan" />
                ))}
              </div>
              <span className="text-sm font-medium font-body">
                Trusted by <span className="text-cyan font-semibold">2,000+</span> professionals
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:flex-1 max-w-lg lg:max-w-none"
          >
            <TrajectoryAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
