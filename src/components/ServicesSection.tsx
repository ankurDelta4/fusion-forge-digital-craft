import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored web applications built with cutting-edge technologies to meet your unique business requirements.',
      features: ['React/Next.js', 'TypeScript', 'Modern UI/UX', 'Responsive Design'],
      color: 'text-primary',
      bgGradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Native Performance'],
      color: 'text-accent',
      bgGradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Cloud,
      title: 'SaaS Platform Development',
      description: 'Scalable Software-as-a-Service solutions with robust architecture and seamless user experiences.',
      features: ['Multi-tenant', 'Auto-scaling', 'API Integration', 'Analytics'],
      color: 'text-neon-purple',
      bgGradient: 'from-neon-purple/20 to-neon-purple/5'
    },
    {
      icon: Database,
      title: 'API & Backend Development',
      description: 'Robust backend systems and RESTful APIs that power your applications with reliability and performance.',
      features: ['REST APIs', 'GraphQL', 'Microservices', 'Database Design'],
      color: 'text-neon-green',
      bgGradient: 'from-neon-green/20 to-neon-green/5'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with digital solutions that increase efficiency and drive growth.',
      features: ['Process Automation', 'Legacy Migration', 'Cloud Integration', 'AI/ML Solutions'],
      color: 'text-neon-yellow',
      bgGradient: 'from-neon-yellow/20 to-neon-yellow/5'
    },
    {
      icon: Globe,
      title: 'Cloud Solutions',
      description: 'Cloud-native applications and infrastructure solutions for scalability, security, and performance.',
      features: ['AWS/Azure/GCP', 'DevOps', 'Serverless', 'Container Orchestration'],
      color: 'text-neon-pink',
      bgGradient: 'from-neon-pink/20 to-neon-pink/5'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive development services 
            that transform your vision into powerful digital solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <Card className={`p-6 h-full border-border/50 bg-gradient-to-br ${service.bgGradient} hover:border-primary/30 transition-all duration-300 group cursor-pointer relative overflow-hidden`}>
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-12 w-12" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={hoveredService === index ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 glow-primary">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;