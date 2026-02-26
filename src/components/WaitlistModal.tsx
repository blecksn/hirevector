import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import logo from "@/assets/logo.png";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  role: z.string().trim().max(100).optional(),
});

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = waitlistSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessKey: "sf_9egnm9f3hdgd39blea20765j",
          name: result.data.name,
          email: result.data.email,
          message: `Role/Title: ${result.data.role || "Not specified"}`,
          subject: "New HireVector Waitlist Signup",
          replyTo: result.data.email,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast({ title: "You're on the list! 🎉", description: "We'll notify you when HireVector launches." });
        onOpenChange(false);
        setForm({ name: "", email: "", role: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-navy border-cyan/20 sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-2 overflow-hidden h-10">
            <img src={logo} alt="HireVector" className="h-28 w-auto object-contain -my-8" />
          </div>
          <DialogTitle className="font-display text-2xl font-extrabold text-primary-foreground">
            Coming Soon
          </DialogTitle>
          <DialogDescription className="text-primary-foreground/60 font-body">
            Join the Waiting List — be first to know when we launch.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="wl-name" className="text-primary-foreground/80 font-body text-sm">Name *</Label>
            <Input
              id="wl-name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your name"
              className="bg-navy-deep border-cyan/20 text-primary-foreground placeholder:text-primary-foreground/30 mt-1"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="wl-email" className="text-primary-foreground/80 font-body text-sm">Email *</Label>
            <Input
              id="wl-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="you@example.com"
              className="bg-navy-deep border-cyan/20 text-primary-foreground placeholder:text-primary-foreground/30 mt-1"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="wl-role" className="text-primary-foreground/80 font-body text-sm">Role / Title (optional)</Label>
            <Input
              id="wl-role"
              value={form.role}
              onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
              placeholder="e.g. Software Engineer"
              className="bg-navy-deep border-cyan/20 text-primary-foreground placeholder:text-primary-foreground/30 mt-1"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan text-cyan-foreground hover:bg-cyan/90 font-bold rounded-full h-12 text-base shadow-lg shadow-cyan/25"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            {loading ? "Submitting…" : "Join the Waitlist"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
