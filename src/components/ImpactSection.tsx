import { motion, useInView } from "framer-motion";
import { TrendingUp, Brain, Trophy } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const impacts = [
  {
    icon: TrendingUp,
    value: 40,
    suffix: "%",
    title: "Higher Study Efficiency",
    description: "Students report significant improvement in time management and focused study sessions.",
  },
  {
    icon: Brain,
    value: 3,
    suffix: "x",
    title: "Smarter Preparation",
    description: "AI-driven insights help students focus on weak areas, making preparation more effective.",
  },
  {
    icon: Trophy,
    value: 25,
    suffix: "%",
    title: "Better Success Rates",
    description: "Students using our platform show improved exam scores and higher success rates.",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

export const ImpactSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Impact</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Real <span className="gradient-text">Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our platform delivers measurable improvements in exam preparation effectiveness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 rounded-2xl text-center hover-glow"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                <impact.icon className="w-8 h-8 text-primary" />
              </div>
              <Counter value={impact.value} suffix={impact.suffix} />
              <h3 className="text-xl font-bold mt-4 mb-2">{impact.title}</h3>
              <p className="text-muted-foreground">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
