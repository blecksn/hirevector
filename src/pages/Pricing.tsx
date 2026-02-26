import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { useWaitlist } from "@/components/WaitlistContext";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic career vector analysis.",
    features: [
      "Basic vector analysis (10 dimensions)",
      "5 job matches per week",
      "Email support",
      "Community access",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Full vector alignment for serious job seekers.",
    features: [
      "Full 70+ dimension analysis",
      "Unlimited job matches",
      "Smart application optimization",
      "Trajectory tracking dashboard",
      "Priority support",
      "Weekly vector recalibration",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams and organizations hiring at scale.",
    features: [
      "Everything in Pro",
      "Team vector analytics",
      "ATS integration",
      "Dedicated account manager",
      "Custom API access",
      "Bulk candidate scoring",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  const { openWaitlist } = useWaitlist();
  useEffect(() => {
    document.title = "Pricing — HireVector";
  }, []);

  return (
    <PageLayout>
      <section className="py-24 bg-gradient-to-b from-navy-deep to-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-primary-foreground mb-4">
              Simple, Transparent <span className="text-cyan">Pricing</span>
            </h1>
            <p className="text-primary-foreground/60 font-body max-w-lg mx-auto text-lg">
              Start free. Upgrade when you're ready to accelerate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.12 }}
                className={`rounded-2xl p-8 border ${
                  tier.highlighted
                    ? "border-cyan bg-navy/80 shadow-lg shadow-cyan/10 scale-105"
                    : "border-cyan/10 bg-navy/40"
                }`}
              >
                {tier.highlighted && (
                  <div className="text-xs font-bold text-cyan uppercase tracking-wider mb-4 font-display">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="font-display text-4xl font-extrabold text-primary-foreground">
                    {tier.price}
                  </span>
                  <span className="text-primary-foreground/50 font-body text-sm">
                    {tier.period}
                  </span>
                </div>
                <p className="text-primary-foreground/60 font-body text-sm mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-primary-foreground/80 font-body">
                      <Check className="w-4 h-4 text-green shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={openWaitlist}
                  className={`w-full rounded-full font-bold ${
                    tier.highlighted
                      ? "bg-cyan text-cyan-foreground hover:bg-cyan/90 shadow-lg shadow-cyan/25"
                      : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                  }`}
                >
                  {tier.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
