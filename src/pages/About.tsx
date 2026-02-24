import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Target, Users, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const values = [
  { icon: Target, title: "Precision Over Volume", desc: "We believe one perfect match beats a hundred random applications." },
  { icon: Users, title: "People First", desc: "Behind every career vector is a human story we're committed to honoring." },
  { icon: Zap, title: "Data-Driven Innovation", desc: "We constantly refine our 70+ dimension model with real-world outcomes." },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", bio: "Former VP of Talent at a Fortune 500. 15 years in hiring science." },
  { name: "Dr. Priya Patel", role: "CTO & Co-Founder", bio: "PhD in computational social science. Built ML systems at DeepMind." },
  { name: "Jordan Kim", role: "Head of Product", bio: "Former product lead at LinkedIn. Obsessed with career trajectories." },
  { name: "Sam Okafor", role: "Head of Data Science", bio: "Ex-Spotify. Pioneered recommendation algorithms for 500M+ users." },
];

const About = () => {
  useEffect(() => {
    document.title = "About — HireVector";
  }, []);

  return (
    <PageLayout>
      <section className="py-24 bg-gradient-to-b from-navy-deep to-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-primary-foreground mb-6">
              We're Fixing How <span className="text-cyan">Hiring Works</span>
            </h1>
            <p className="text-primary-foreground/60 font-body text-lg leading-relaxed">
              HireVector was born from frustration. Our founders spent decades watching talented people get lost in broken hiring funnels. We built the career vector model to replace guesswork with precision.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                className="bg-navy/60 border border-cyan/10 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="font-display font-bold text-primary-foreground mb-2">{v.title}</h3>
                <p className="text-primary-foreground/60 text-sm font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Team */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-3xl font-extrabold text-primary-foreground text-center mb-12"
          >
            The Team
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4 + i * 0.1 }}
                className="bg-navy/40 border border-cyan/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <ArrowUpRight className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="font-display font-bold text-primary-foreground">{t.name}</h3>
                <div className="text-cyan text-xs font-semibold mb-2 font-body">{t.role}</div>
                <p className="text-primary-foreground/50 text-xs font-body">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
