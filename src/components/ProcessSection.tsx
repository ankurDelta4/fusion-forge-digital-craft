import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code2, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Discovery & Planning",
      description: "We start by understanding your vision, goals, and requirements through detailed consultations.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategy & Design",
      description: "Our team creates comprehensive strategies and user-centered designs that align with your objectives.",
      gradient: "from-purple-500 to-pink-500", 
      delay: 0.2
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Development & Testing",
      description: "Expert developers build your solution using best practices, with rigorous testing at every stage.",
      gradient: "from-green-500 to-teal-500",
      delay: 0.4
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support to ensure continued success and growth.",
      gradient: "from-orange-500 to-red-500",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="gradient-text">Development Process</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From concept to launch, we follow a proven methodology that ensures your project's success
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
            >
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <motion.div
                className="relative bg-card border border-border/50 rounded-2xl p-8 text-center hover:border-border transition-all duration-500 overflow-hidden group-hover:shadow-2xl"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Number indicator */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step.delay + 0.2 }}
                >
                  {step.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step.delay + 0.4 }}
                >
                  {step.description}
                </motion.p>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/50 transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-2">🚀</span>
            Ready to start your project? Let's discuss your vision!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;