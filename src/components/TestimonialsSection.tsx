import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow',
      avatar: '/api/placeholder/100/100',
      rating: 5,
      content: 'Freelance Fusion delivered exactly what we needed. Their development team built our SaaS platform with incredible attention to detail and modern architecture. The project was completed on time and exceeded our expectations.',
      project: 'SaaS Platform Development'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, StartupLab',
      avatar: '/api/placeholder/100/100',
      rating: 5,
      content: 'The mobile app they created transformed our business. The user experience is flawless, and the performance is outstanding. Their team understood our vision and brought it to life perfectly.',
      project: 'Mobile App Development'
    },
    {
      name: 'Emily Watson',
      role: 'Product Manager, InnovateCorp',
      avatar: '/api/placeholder/100/100',
      rating: 5,
      content: 'Working with Freelance Fusion was a game-changer. They modernized our entire tech stack and improved our operational efficiency by 300%. Their expertise in digital transformation is unmatched.',
      project: 'Digital Transformation'
    },
    {
      name: 'David Kim',
      role: 'CEO, CloudVentures',
      avatar: '/api/placeholder/100/100',
      rating: 5,
      content: 'The custom web application they built has revolutionized how we serve our customers. The scalability and performance are impressive, and the user interface is intuitive and beautiful.',
      project: 'Custom Web Development'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Client Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our development teams.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/40 border-border/50 backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="h-12 w-12 text-primary mb-6" />
                    
                    <div className="flex mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex flex-col items-center">
                      <Avatar className="h-16 w-16 mb-4">
                        <AvatarImage src={testimonials[currentTestimonial].avatar} />
                        <AvatarFallback>
                          {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {testimonials[currentTestimonial].project}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-primary/50'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Projects Completed' },
            { number: '99.8%', label: 'Success Rate' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;