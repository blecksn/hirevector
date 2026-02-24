import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Target, TrendingUp, Briefcase, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const vectorData = [
  { dimension: "Technical Skills", score: 85 },
  { dimension: "Leadership", score: 72 },
  { dimension: "Culture Fit", score: 91 },
  { dimension: "Growth Potential", score: 78 },
  { dimension: "Communication", score: 88 },
  { dimension: "Domain Expertise", score: 65 },
];

const trajectoryData = [
  { week: "W1", score: 42 },
  { week: "W2", score: 51 },
  { week: "W3", score: 58 },
  { week: "W4", score: 63 },
  { week: "W5", score: 71 },
  { week: "W6", score: 76 },
  { week: "W7", score: 82 },
  { week: "W8", score: 87 },
];

const jobMatches = [
  { title: "Senior Product Manager", company: "Stripe", match: 94, location: "Remote" },
  { title: "Staff Engineer", company: "Vercel", match: 89, location: "San Francisco" },
  { title: "Director of Product", company: "Figma", match: 86, location: "New York" },
  { title: "Engineering Manager", company: "Linear", match: 83, location: "Remote" },
  { title: "VP of Engineering", company: "Notion", match: 79, location: "San Francisco" },
];

const stats = [
  { label: "Vector Score", value: "87", icon: Compass, color: "text-cyan" },
  { label: "Job Matches", value: "23", icon: Target, color: "text-green" },
  { label: "Applications", value: "8", icon: Briefcase, color: "text-cyan" },
  { label: "Interviews", value: "3", icon: TrendingUp, color: "text-green" },
];

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard — HireVector";
  }, []);

  return (
    <div className="min-h-screen bg-navy-deep">
      {/* Top Nav */}
      <header className="border-b border-cyan/10 bg-navy-deep/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-cyan flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-cyan-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-primary-foreground">HireVector</span>
          </Link>
          <Button asChild variant="ghost" className="text-primary-foreground/60 hover:text-primary-foreground">
            <Link to="/"><LogOut className="w-4 h-4 mr-2" /> Log Out</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-navy/60 border border-cyan/10 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <s.icon className={`w-5 h-5 ${s.color}`} />
                <span className="text-primary-foreground/60 text-sm font-body">{s.label}</span>
              </div>
              <div className={`font-display text-3xl font-extrabold ${s.color}`}>{s.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="vector" className="space-y-6">
          <TabsList className="bg-navy/60 border border-cyan/10">
            <TabsTrigger value="vector" className="data-[state=active]:bg-cyan data-[state=active]:text-cyan-foreground font-display">
              Vector Analysis
            </TabsTrigger>
            <TabsTrigger value="matches" className="data-[state=active]:bg-cyan data-[state=active]:text-cyan-foreground font-display">
              Job Matches
            </TabsTrigger>
            <TabsTrigger value="trajectory" className="data-[state=active]:bg-cyan data-[state=active]:text-cyan-foreground font-display">
              Trajectory
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vector">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-navy/40 border border-cyan/10 rounded-xl p-6"
            >
              <h2 className="font-display text-xl font-bold text-primary-foreground mb-6">Career Vector — 6 Core Dimensions</h2>
              <div className="w-full max-w-lg mx-auto h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={vectorData}>
                    <PolarGrid stroke="hsl(187 100% 50% / 0.15)" />
                    <PolarAngleAxis dataKey="dimension" tick={{ fill: "hsl(0 0% 100% / 0.6)", fontSize: 11 }} />
                    <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
                    <Radar dataKey="score" stroke="hsl(187 100% 50%)" fill="hsl(187 100% 50% / 0.25)" strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="matches">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-navy/40 border border-cyan/10 rounded-xl p-6"
            >
              <h2 className="font-display text-xl font-bold text-primary-foreground mb-6">Top Job Matches</h2>
              <div className="space-y-3">
                {jobMatches.map((job) => (
                  <div key={job.title} className="flex items-center justify-between bg-navy/60 rounded-lg p-4 border border-cyan/5">
                    <div>
                      <div className="font-display font-bold text-primary-foreground">{job.title}</div>
                      <div className="text-primary-foreground/50 text-sm font-body">{job.company} · {job.location}</div>
                    </div>
                    <div className={`font-display font-bold text-lg ${job.match >= 90 ? "text-green" : "text-cyan"}`}>
                      {job.match}%
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="trajectory">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-navy/40 border border-cyan/10 rounded-xl p-6"
            >
              <h2 className="font-display text-xl font-bold text-primary-foreground mb-6">Vector Score Over Time</h2>
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trajectoryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(187 100% 50% / 0.1)" />
                    <XAxis dataKey="week" tick={{ fill: "hsl(0 0% 100% / 0.5)", fontSize: 12 }} />
                    <YAxis tick={{ fill: "hsl(0 0% 100% / 0.5)", fontSize: 12 }} domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "hsl(216 75% 15%)", border: "1px solid hsl(187 100% 50% / 0.2)", borderRadius: "8px", color: "#fff" }}
                    />
                    <Line type="monotone" dataKey="score" stroke="hsl(187 100% 50%)" strokeWidth={3} dot={{ fill: "hsl(187 100% 50%)", r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
