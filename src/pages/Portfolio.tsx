import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'EcommercePro',
      category: 'E-commerce Platform',
      description: 'Modern e-commerce solution with AI-powered recommendations and seamless checkout experience.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'FinanceTracker',
      category: 'Financial Dashboard',
      description: 'Comprehensive financial management platform with real-time analytics and reporting.',
      tech: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'HealthcareConnect',
      category: 'Healthcare SaaS',
      description: 'Patient management system connecting healthcare providers with advanced telemedicine features.',
      tech: ['React Native', 'GraphQL', 'MySQL', 'Azure'],
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'LogisticsPro',
      category: 'Supply Chain',
      description: 'End-to-end logistics management with real-time tracking and automated workflows.',
      tech: ['Angular', 'Java', 'Redis', 'Kubernetes'],
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'EduPlatform',
      category: 'Educational Technology',
      description: 'Interactive learning platform with adaptive assessments and progress tracking.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Vercel'],
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'PropertyManager',
      category: 'Real Estate',
      description: 'Comprehensive property management solution with tenant portals and maintenance tracking.',
      tech: ['Svelte', 'Express', 'MongoDB', 'Stripe'],
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'E-commerce', 'SaaS', 'Mobile', 'Enterprise'];

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
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions that have transformed businesses 
              and delivered exceptional results for our clients.
            </p>
          </motion.div>

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-primary text-primary-foreground shadow-cinematic' 
                    : 'bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-cinematic'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-card rounded-lg overflow-hidden shadow-cinematic hover:shadow-elevated transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-hero overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-primary opacity-50" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and passion for innovation.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-cinematic">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;