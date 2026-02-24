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

const loginSchema = z.object({
  email: z.string().trim().email("Invalid email").max(255),
  password: z.string().min(1, "Password is required").max(128),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    document.title = "Log In — HireVector";
  }, []);

  const onSubmit = (data: LoginForm) => {
    toast({ title: "Welcome back!", description: "Redirecting to your dashboard..." });
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
            Welcome back
          </h1>
          <p className="text-primary-foreground/50 font-body text-sm text-center mb-8">
            Log in to your HireVector account
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                Log In
              </Button>
            </form>
          </Form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-cyan/10" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-navy/60 px-2 text-primary-foreground/40 font-body">or</span></div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full border-cyan/20 text-cyan hover:bg-cyan/10 rounded-full h-11"
            onClick={() => {
              form.setValue("email", "demo@hirevector.com");
              form.setValue("password", "demo1234");
              toast({ title: "Demo credentials filled!", description: "Click Log In to continue." });
            }}
          >
            Try Demo Account
          </Button>

          <p className="text-primary-foreground/50 text-sm text-center mt-6 font-body">
            Don't have an account?{" "}
            <Link to="/signup" className="text-cyan hover:underline font-medium">Sign up</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
