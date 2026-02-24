import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be under 1000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  useEffect(() => {
    document.title = "Contact — HireVector";
  }, []);

  const onSubmit = (data: ContactForm) => {
    toast({
      title: "Message sent!",
      description: `Thanks ${data.name}, we'll get back to you within 24 hours.`,
    });
    form.reset();
  };

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
              Get in <span className="text-cyan">Touch</span>
            </h1>
            <p className="text-primary-foreground/60 font-body max-w-lg mx-auto">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground font-display">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="bg-navy/60 border-cyan/20 text-primary-foreground placeholder:text-primary-foreground/30" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground font-display">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" className="bg-navy/60 border-cyan/20 text-primary-foreground placeholder:text-primary-foreground/30" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground font-display">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help?" rows={5} className="bg-navy/60 border-cyan/20 text-primary-foreground placeholder:text-primary-foreground/30 resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="bg-cyan text-cyan-foreground hover:bg-cyan/90 font-bold rounded-full px-8 w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-8"
            >
              {[
                { icon: Mail, label: "Email", value: "hello@hirevector.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Office", value: "San Francisco, CA" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-primary-foreground text-sm">{item.label}</div>
                    <div className="text-primary-foreground/60 font-body text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
