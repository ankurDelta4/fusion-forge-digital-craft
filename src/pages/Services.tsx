import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Settings, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored web applications built with modern frameworks and best practices.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Cross-browser Support'],
      price: 'Starting from $5,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Performance', 'Push Notifications', 'Offline Support', 'App Store Deployment'],
      price: 'Starting from $8,000'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies.',
      features: ['Auto Scaling', 'High Availability', 'Cost Optimization', '24/7 Monitoring'],
      price: 'Starting from $3,000'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Robust database architecture and optimization services.',
      features: ['Data Modeling', 'Performance Tuning', 'Backup Strategies', 'Migration Services'],
      price: 'Starting from $2,500'
    },
    {
      icon: Settings,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation.',
      features: ['RESTful Design', 'GraphQL', 'Authentication', 'Rate Limiting'],
      price: 'Starting from $4,000'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Complete digital transformation consulting and implementation.',
      features: ['Process Analysis', 'Technology Assessment', 'Implementation', 'Training'],
      price: 'Custom Pricing'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your needs, goals, and challenges through detailed consultation.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Strategic planning and architecture design tailored to your requirements.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates and transparent communication.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Thorough testing, deployment, and post-launch support.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software solutions designed to accelerate your business 
              growth and digital transformation journey.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-card rounded-lg p-8 shadow-cinematic hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{service.price}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery 
              and exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-primary opacity-30"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project requirements and how we can help 
              bring your vision to life with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-cinematic">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;