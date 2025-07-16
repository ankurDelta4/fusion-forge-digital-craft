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
      gradient: 'from-blue-500/20 via-cyan-500/10 to-blue-600/5',
      hoverGradient: 'from-blue-500/30 via-cyan-500/20 to-blue-600/10',
      iconGradient: 'from-blue-500 to-cyan-500',
      glowColor: 'blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Native Performance'],
      gradient: 'from-purple-500/20 via-pink-500/10 to-purple-600/5',
      hoverGradient: 'from-purple-500/30 via-pink-500/20 to-purple-600/10',
      iconGradient: 'from-purple-500 to-pink-500',
      glowColor: 'purple-500'
    },
    {
      icon: Cloud,
      title: 'SaaS Platform Development',
      description: 'Scalable Software-as-a-Service solutions with robust architecture and seamless user experiences.',
      features: ['Multi-tenant', 'Auto-scaling', 'API Integration', 'Analytics'],
      gradient: 'from-green-500/20 via-teal-500/10 to-emerald-600/5',
      hoverGradient: 'from-green-500/30 via-teal-500/20 to-emerald-600/10',
      iconGradient: 'from-green-500 to-teal-500',
      glowColor: 'green-500'
    },
    {
      icon: Database,
      title: 'API & Backend Development',
      description: 'Robust backend systems and RESTful APIs that power your applications with reliability and performance.',
      features: ['REST APIs', 'GraphQL', 'Microservices', 'Database Design'],
      gradient: 'from-orange-500/20 via-amber-500/10 to-yellow-600/5',
      hoverGradient: 'from-orange-500/30 via-amber-500/20 to-yellow-600/10',
      iconGradient: 'from-orange-500 to-amber-500',
      glowColor: 'orange-500'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with digital solutions that increase efficiency and drive growth.',
      features: ['Process Automation', 'Legacy Migration', 'Cloud Integration', 'AI/ML Solutions'],
      gradient: 'from-indigo-500/20 via-violet-500/10 to-purple-600/5',
      hoverGradient: 'from-indigo-500/30 via-violet-500/20 to-purple-600/10',
      iconGradient: 'from-indigo-500 to-violet-500',
      glowColor: 'indigo-500'
    },
    {
      icon: Globe,
      title: 'Cloud Solutions',
      description: 'Cloud-native applications and infrastructure solutions for scalability, security, and performance.',
      features: ['AWS/Azure/GCP', 'DevOps', 'Serverless', 'Container Orchestration'],
      gradient: 'from-rose-500/20 via-pink-500/10 to-red-600/5',
      hoverGradient: 'from-rose-500/30 via-pink-500/20 to-red-600/10',
      iconGradient: 'from-rose-500 to-pink-500',
      glowColor: 'rose-500'
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
                <Card className={`relative p-8 h-full border border-white/20 backdrop-blur-sm bg-gradient-to-br ${service.gradient} hover:border-white/40 transition-all duration-500 group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl`}>
                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  
                  {/* Subtle animated border glow */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${service.iconGradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                  
                  {/* Content container */}
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <motion.div 
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.iconGradient} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="h-8 w-8" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {service.description}
                    </p>
                    
                    {/* Features with staggered animation */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 + 0.2 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.iconGradient} mr-3 flex-shrink-0`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* CTA Button with gradient */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${service.iconGradient} hover:shadow-lg hover:shadow-${service.glowColor}/25 text-white border-0 transition-all duration-300 group-hover:scale-105`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl" />
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