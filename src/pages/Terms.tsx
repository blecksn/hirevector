import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";

const Terms = () => {
  useEffect(() => { document.title = "Terms of Service — HireVector"; }, []);

  return (
    <PageLayout>
      <section className="py-24 bg-gradient-to-b from-navy-deep to-navy">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold text-primary-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none text-primary-foreground/70 font-body space-y-6 text-sm leading-relaxed">
            <p><strong className="text-primary-foreground">Last updated:</strong> February 2026</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">1. Acceptance of Terms</h2>
            <p>By accessing or using HireVector, you agree to be bound by these Terms of Service and our Privacy Policy.</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">2. Description of Service</h2>
            <p>HireVector provides a career vector alignment platform that analyzes your professional profile across 70+ dimensions to match you with optimal career opportunities.</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">3. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">4. Acceptable Use</h2>
            <p>You agree not to misuse HireVector's services, including attempting to manipulate vector scores, submitting false information, or interfering with other users' access.</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">5. Intellectual Property</h2>
            <p>The HireVector platform, including our vector analysis algorithms, is protected by intellectual property laws. You retain ownership of your personal data.</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">6. Limitation of Liability</h2>
            <p>HireVector is not responsible for hiring outcomes. Our platform provides data-driven recommendations, but employment decisions rest with employers and candidates.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
