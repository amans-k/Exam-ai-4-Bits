import { motion } from "framer-motion";
import { Brain, MapPin, Mail, MessageCircle, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="py-16 relative border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl gradient-text">ExamAI</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              AI + IoT powered competitive exam performance analytics platform for smarter preparation.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/waliullah-shaikh-2a1423344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Features", "Technology", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Info */}
          <div>
            <h4 className="font-semibold mb-4">Team</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-xs font-bold text-white">4</span>
                </div>
                <div>
                  <p className="font-medium">Team 4bit</p>
                  <p className="text-xs text-muted-foreground">Development Team</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>Anjuman-I-Islam's Akbar Peerbhoy College, Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:contact4bit@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                contact4bit@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
                Questions & Discussion Welcome
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border/50 text-center"
        >
          <p className="text-muted-foreground text-sm mb-2">
            Thank You for Your Interest!
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 ExamAI by Team 4bit. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
