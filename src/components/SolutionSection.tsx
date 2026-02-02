import { motion } from "framer-motion";
import { Brain, Cpu, Target, Lightbulb, RefreshCw } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI/ML Analysis Engine",
    description: "Advanced algorithms analyze question-level mock data to identify patterns, weak areas, and improvement opportunities.",
    color: "from-primary to-cyan-400",
  },
  {
    icon: Cpu,
    title: "IoT Integration",
    description: "Smart devices track study time, focus levels, and attendance patterns for comprehensive behavioral insights.",
    color: "from-secondary to-violet-400",
  },
  {
    icon: Target,
    title: "Strength & Weakness Mapping",
    description: "Precisely identify which topics, question types, and concepts need the most attention.",
    color: "from-emerald-500 to-green-400",
  },
  {
    icon: Lightbulb,
    title: "Adaptive Study Plans",
    description: "AI generates personalized study schedules that evolve based on your progress and performance.",
    color: "from-amber-500 to-yellow-400",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning Loop",
    description: "Real-time feedback and recommendations that improve as you study more.",
    color: "from-pink-500 to-rose-400",
  },
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            How We <span className="gradient-text">Transform</span> Your Preparation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our intelligent platform combines cutting-edge AI with IoT technology 
            to deliver unprecedented insights into your exam preparation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-6 rounded-xl hover-glow group cursor-pointer ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
