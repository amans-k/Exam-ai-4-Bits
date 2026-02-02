import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, FileQuestion } from "lucide-react";

const problems = [
  {
    icon: FileQuestion,
    title: "Data Without Insights",
    description: "Students generate massive mock-test data but lack deep, meaningful analysis of their performance patterns.",
  },
  {
    icon: TrendingDown,
    title: "Surface-Level Reports",
    description: "Current reports only show scores, missing critical insights about specific mistakes and topic-wise gaps.",
  },
  {
    icon: Clock,
    title: "No Real-time Monitoring",
    description: "Traditional methods fail to track study habits, focus levels, and attendance in real-time.",
  },
  {
    icon: AlertTriangle,
    title: "Generic Study Plans",
    description: "One-size-fits-all study plans reduce efficiency and fail to address individual weaknesses.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Why Students <span className="gradient-text">Struggle</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Competitive exam preparation generates enormous amounts of data, 
            but without proper analysis, students are left guessing their way to success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover-glow group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card p-8 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Our <span className="gradient-text">Goal</span>
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            To create a personalized, data-driven preparation ecosystem that transforms raw test data 
            into actionable insights, helping students prepare smarter—not harder—for competitive exams 
            like JEE, NEET, UPSC, CAT, SSC, and CET.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
