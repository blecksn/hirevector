import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrajectoryArrow = () => (
  <svg
    viewBox="0 0 800 400"
    className="absolute inset-0 w-full h-full pointer-events-none"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(187 100% 50% / 0)" />
        <stop offset="30%" stopColor="hsl(187 100% 50% / 0.6)" />
        <stop offset="100%" stopColor="hsl(187 100% 50% / 1)" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Glow layer */}
    <motion.path
      d="M 50 350 Q 250 350 400 250 Q 550 150 750 50"
      fill="none"
      stroke="hsl(187 100% 50% / 0.15)"
      strokeWidth="40"
      strokeLinecap="round"
      filter="url(#glow)"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
    />

    {/* Main arc */}
    <motion.path
      d="M 50 350 Q 250 350 400 250 Q 550 150 750 50"
      fill="none"
      stroke="url(#arrowGrad)"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
    />

    {/* Arrowhead */}
    <motion.polygon
      points="740,55 755,45 745,68"
      fill="hsl(187 100% 50%)"
      filter="url(#glow)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1.5 }}
    />
  </svg>
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
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-deep pt-16">
      <TrajectoryArrow />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
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
            <Button className="bg-cyan text-cyan-foreground hover:bg-cyan/90 font-bold rounded-full px-8 h-12 text-base shadow-lg shadow-cyan/25">
              Calculate My Career Vector
            </Button>
            <Button
              variant="outline"
              className="border-cyan/60 text-cyan hover:bg-cyan/15 hover:border-cyan rounded-full px-8 h-12 text-base"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch 2-Min Demo
            </Button>
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
      </div>
    </section>
  );
};

export default HeroSection;
