import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Upload, 
  BarChart3, 
  Sparkles, 
  Activity, 
  FileText 
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Student Dashboard",
    description: "Personalized dashboard showing real-time performance metrics, progress tracking, and study analytics.",
  },
  {
    icon: Upload,
    title: "Mock Test Upload",
    description: "Easy upload of mock tests via CSV, Excel, or API integration with popular test platforms.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Deep-dive analytics with topic-wise breakdown, time analysis, and comparative performance.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Intelligent study suggestions based on your strengths, weaknesses, and learning patterns.",
  },
  {
    icon: Activity,
    title: "Real-time Tracking",
    description: "IoT-powered tracking of study sessions, focus levels, and attendance patterns.",
  },
  {
    icon: FileText,
    title: "Progress Reports",
    description: "Comprehensive weekly and monthly reports with actionable insights and improvement trends.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Powerful <span className="gradient-text">Modules</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to transform your competitive exam preparation into a data-driven success story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-xl hover-glow group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
