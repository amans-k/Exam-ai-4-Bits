import { motion } from "framer-motion";
import { GraduationCap, Building2, Laptop, Gift, Crown, Handshake } from "lucide-react";

const targetUsers = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Aspirants preparing for JEE, NEET, UPSC, CAT, SSC, CET and other competitive exams.",
  },
  {
    icon: Building2,
    title: "Coaching Institutes",
    description: "Educational institutions looking to enhance their student analytics and success rates.",
  },
  {
    icon: Laptop,
    title: "EdTech Platforms",
    description: "Online learning platforms seeking to integrate advanced performance analytics.",
  },
];

const businessModel = [
  {
    icon: Gift,
    title: "Freemium",
    description: "Basic analytics free forever, premium features at affordable rates.",
  },
  {
    icon: Crown,
    title: "Premium Subscription",
    description: "Advanced AI insights, unlimited test uploads, and priority support.",
  },
  {
    icon: Handshake,
    title: "Institutional Partnerships",
    description: "Custom solutions for coaching centers and EdTech companies.",
  },
];

export const MarketSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Market</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Target Users & <span className="gradient-text">Business Model</span>
          </h2>
        </motion.div>

        {/* Target Users */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {targetUsers.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl text-center hover-glow group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <user.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{user.title}</h3>
              <p className="text-muted-foreground">{user.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Business Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Business <span className="gradient-text">Model</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {businessModel.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <model.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{model.title}</h4>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
