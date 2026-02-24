import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";

const Privacy = () => {
  useEffect(() => { document.title = "Privacy Policy — HireVector"; }, []);

  return (
    <PageLayout>
      <section className="py-24 bg-gradient-to-b from-navy-deep to-navy">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold text-primary-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none text-primary-foreground/70 font-body space-y-6 text-sm leading-relaxed">
            <p><strong className="text-primary-foreground">Last updated:</strong> February 2026</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, career history, and skills data when you create an account and use our vector analysis tools.</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">2. How We Use Your Information</h2>
            <p>Your data powers our 70+ dimension career vector model, enabling precision job matching, trajectory tracking, and personalized career recommendations.</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">3. Data Security</h2>
            <p>We employ industry-standard encryption and security measures to protect your personal information. Your career vector data is encrypted at rest and in transit.</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">4. Data Sharing</h2>
            <p>We never sell your personal data. Vector scores are shared with potential employers only with your explicit consent and only for roles you've expressed interest in.</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">5. Your Rights</h2>
            <p>You can request access to, correction of, or deletion of your personal data at any time by contacting us at privacy@hirevector.com.</p>
            <h2 className="font-display text-xl font-bold text-primary-foreground mt-8">6. Contact</h2>
            <p>For privacy-related questions, contact us at privacy@hirevector.com or visit our Contact page.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
