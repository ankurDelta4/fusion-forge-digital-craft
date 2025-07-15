import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'RetailMax Inc.',
      category: 'E-commerce',
      duration: '6 months',
      team: '8 developers',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      challenge: 'Legacy e-commerce platform struggling with performance and scalability issues, resulting in poor user experience and declining sales.',
      solution: 'Complete platform rebuild using modern microservices architecture, React frontend, and cloud-native infrastructure.',
      results: [
        { metric: 'Performance Improvement', value: '75%' },
        { metric: 'Revenue Increase', value: '150%' },
        { metric: 'User Satisfaction', value: '92%' },
        { metric: 'Load Time Reduction', value: '60%' }
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Redis'],
      testimonial: {
        text: "The transformation exceeded our expectations. Our platform now handles 10x the traffic with better performance.",
        author: 'Sarah Johnson',
        position: 'CTO, RetailMax Inc.'
      }
    },
    {
      title: 'Healthcare Management System',
      client: 'MedTech Solutions',
      category: 'Healthcare',
      duration: '8 months',
      team: '12 developers',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      challenge: 'Manual patient management processes causing inefficiencies and compliance issues in healthcare facilities.',
      solution: 'Comprehensive healthcare management platform with patient portals, appointment scheduling, and HIPAA-compliant data handling.',
      results: [
        { metric: 'Processing Time Reduction', value: '80%' },
        { metric: 'Patient Satisfaction', value: '95%' },
        { metric: 'Operational Efficiency', value: '65%' },
        { metric: 'Compliance Score', value: '100%' }
      ],
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Azure', 'Docker'],
      testimonial: {
        text: "This system revolutionized our patient care delivery and operational efficiency.",
        author: 'Dr. Michael Chen',
        position: 'Medical Director, MedTech Solutions'
      }
    },
    {
      title: 'Financial Analytics Platform',
      client: 'InvestPro Capital',
      category: 'Fintech',
      duration: '10 months',
      team: '15 developers',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      challenge: 'Investment firm needed real-time analytics and automated reporting for better decision-making and client services.',
      solution: 'Advanced analytics platform with real-time data processing, machine learning insights, and automated reporting.',
      results: [
        { metric: 'Data Processing Speed', value: '90%' },
        { metric: 'Report Generation Time', value: '85%' },
        { metric: 'Client Satisfaction', value: '98%' },
        { metric: 'Investment Returns', value: '45%' }
      ],
      technologies: ['React', 'Python', 'TensorFlow', 'Kafka', 'Elasticsearch'],
      testimonial: {
        text: "The platform's insights have significantly improved our investment strategies and client relationships.",
        author: 'Robert Davis',
        position: 'CEO, InvestPro Capital'
      }
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
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations 
              and achieve remarkable results through innovative software solutions.
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-card rounded-lg overflow-hidden shadow-cinematic"
              >
                {/* Case Study Header */}
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/20"></div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{study.client}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {study.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {study.team}
                      </div>
                    </div>

                    <Button className="bg-gradient-primary hover:opacity-90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Case Study
                    </Button>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="p-8 lg:p-12 border-t border-border">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Challenge & Solution */}
                    <div className="lg:col-span-2">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 text-primary">The Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 text-primary">Our Solution</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-primary">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-primary">Key Results</h3>
                      <div className="space-y-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="bg-gradient-hero rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <TrendingUp className="h-4 w-4 text-primary mr-2" />
                              <span className="text-2xl font-bold text-primary">{result.value}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{result.metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-12 bg-gradient-hero rounded-lg p-8">
                    <blockquote className="text-lg font-medium mb-4 italic">
                      "{study.testimonial.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full mr-4"></div>
                      <div>
                        <div className="font-bold">{study.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{study.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative software solutions.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-cinematic">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;