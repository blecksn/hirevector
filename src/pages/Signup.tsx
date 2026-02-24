import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const signupSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(128),
});

type SignupForm = z.infer<typeof signupSchema>;

const Signup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  useEffect(() => {
    document.title = "Sign Up — HireVector";
  }, []);

  const onSubmit = (data: SignupForm) => {
    toast({ title: "Account created!", description: `Welcome to HireVector, ${data.name}!` });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-deep via-navy to-navy-deep flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Link to="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-8 h-8 rounded-lg bg-cyan flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-cyan-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-primary-foreground">HireVector</span>
        </Link>

        <div className="bg-navy/60 border border-cyan/10 rounded-2xl p-8">
          <h1 className="font-display text-2xl font-bold text-primary-foreground text-center mb-2">
            Create your account
          </h1>
          <p className="text-primary-foreground/50 font-body text-sm text-center mb-8">
            Start your career vector analysis today
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground font-display">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="bg-navy-deep/60 border-cyan/20 text-primary-foreground placeholder:text-primary-foreground/30" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground font-display">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" className="bg-navy-deep/60 border-cyan/20 text-primary-foreground placeholder:text-primary-foreground/30" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground font-display">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" className="bg-navy-deep/60 border-cyan/20 text-primary-foreground placeholder:text-primary-foreground/30" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" className="w-full bg-cyan text-cyan-foreground hover:bg-cyan/90 font-bold rounded-full h-11">
                Create Account
              </Button>
            </form>
          </Form>

          <p className="text-primary-foreground/50 text-sm text-center mt-6 font-body">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan hover:underline font-medium">Log in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
