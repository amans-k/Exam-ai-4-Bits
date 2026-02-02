import { motion } from "framer-motion";
import { Wifi, Watch, Brain, Heart } from "lucide-react";

const iotInnovations = [
  { icon: Watch, title: "Smart Attendance", description: "Automated check-in using RFID and biometric sensors" },
  { icon: Wifi, title: "Study Time Tracking", description: "Real-time monitoring of study sessions and breaks" },
  { icon: Heart, title: "Stress Detection", description: "Wearable sensors to monitor stress and focus levels" },
  { icon: Brain, title: "Focus Analytics", description: "AI-powered attention span analysis during study" },
];

const techStack = [
  { name: "React", category: "Frontend", color: "from-cyan-400 to-blue-500" },
  { name: "Node.js / Django", category: "Backend", color: "from-green-400 to-emerald-500" },
  { name: "Python", category: "AI/ML", color: "from-yellow-400 to-orange-500" },
  { name: "MongoDB / PostgreSQL", category: "Database", color: "from-green-500 to-teal-500" },
  { name: "ESP32 / Arduino", category: "IoT", color: "from-blue-400 to-indigo-500" },
  { name: "MQTT", category: "Communication", color: "from-purple-400 to-pink-500" },
];

export const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Technology</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Innovation & <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cutting-edge technologies powering the next generation of exam analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* IoT Innovations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              IoT Innovations
            </h3>
            <div className="space-y-4">
              {iotInnovations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3`}>
                    <span className="text-white text-xs font-bold">{tech.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-semibold text-sm">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
