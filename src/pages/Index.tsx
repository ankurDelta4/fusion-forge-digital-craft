import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechShowcase from '@/components/TechShowcase';
import ProcessSection from '@/components/ProcessSection';
import TechStack from '@/components/TechStack';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      <HeroSection />
      <TechShowcase />
      <ProcessSection />
      <TechStack />
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <motion.footer 
        className="py-12 border-t border-border/50 bg-gradient-to-b from-background to-secondary/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-2">Freelance Fusion</h3>
              <p className="text-muted-foreground">Building the future, one project at a time</p>
            </motion.div>
            
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              © 2024 Freelance Fusion. All rights reserved.
            </motion.p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
