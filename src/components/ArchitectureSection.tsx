import { motion } from "framer-motion";
import { Cpu, Database, BarChart3, Brain, ArrowRight, RefreshCw } from "lucide-react";

const flowSteps = [
  {
    icon: Cpu,
    title: "Data Collection",
    subtitle: "IoT Sensors & Test APIs",
    description: "Collect data from wearables, CSV/Excel uploads, and test platform APIs",
    color: "from-primary to-cyan-400",
  },
  {
    icon: Database,
    title: "Data Processing",
    subtitle: "Cleaning & Engineering",
    description: "Clean, normalize, and engineer features from raw performance data",
    color: "from-secondary to-violet-400",
  },
  {
    icon: Brain,
    title: "AI/ML Engine",
    subtitle: "Insight Generation",
    description: "Advanced algorithms analyze patterns and generate actionable insights",
    color: "from-emerald-500 to-green-400",
  },
  {
    icon: BarChart3,
    title: "Dashboard",
    subtitle: "Visualization & Reports",
    description: "Interactive dashboards display performance metrics and trends",
    color: "from-amber-500 to-yellow-400",
  },
  {
    icon: RefreshCw,
    title: "Recommendations",
    subtitle: "Continuous Learning",
    description: "Personalized study plans that adapt based on feedback and progress",
    color: "from-pink-500 to-rose-400",
  },
];

export const ArchitectureSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">System Architecture</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            The <span className="gradient-text">Data Flow</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From raw data to intelligent insights—see how our platform transforms your exam preparation.
          </p>
        </motion.div>

        {/* Desktop Flow */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {flowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-center"
            >
              <div className="glass-card p-6 rounded-xl text-center min-w-[180px] hover-glow group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-primary mb-2">{step.subtitle}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
              
              {index < flowSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  className="mx-2"
                >
                  <div className="relative">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                    <ArrowRight className="absolute -right-1 -top-2 w-4 h-4 text-primary" />
                    <motion.div
                      animate={{ x: [0, 40, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="absolute top-0 left-0 w-3 h-0.5 bg-white rounded-full"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Flow */}
        <div className="lg:hidden space-y-4">
          {flowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-secondary" />
                )}
              </div>
              <div className="glass-card p-4 rounded-xl flex-1">
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-primary mb-1">{step.subtitle}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feedback Loop Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
            <RefreshCw className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-sm text-muted-foreground">Continuous Learning Feedback Loop</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
