import Navigation from '@/components/Navigation';
import CodeCanvas from '@/components/CodeCanvas';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '250+', label: 'Happy Clients' },
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
    { icon: Globe, value: '40+', label: 'Countries Served' }
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Lead Developer',
      image: '/placeholder.svg',
      bio: 'Full-stack architect with 8+ years in enterprise solutions'
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      image: '/placeholder.svg',
      bio: 'Creative designer focused on user-centered design principles'
    },
    {
      name: 'Marcus Johnson',
      role: 'DevOps Engineer',
      image: '/placeholder.svg',
      bio: 'Cloud infrastructure specialist and automation expert'
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
              Crafting Digital Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate developers, designers, and strategists 
              dedicated to transforming your digital vision into reality.
            </p>
          </motion.div>

          {/* Code Canvas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <CodeCanvas />
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-card rounded-lg p-6 shadow-cinematic group-hover:shadow-elevated transition-all duration-300 group-hover:-translate-y-2">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind our innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-lg p-6 shadow-cinematic hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-primary text-center mb-4">{member.role}</p>
                <p className="text-muted-foreground text-center text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower businesses with cutting-edge technology solutions that drive 
                growth, efficiency, and innovation. We believe in the transformative 
                power of well-crafted software.
              </p>
              <p className="text-lg text-muted-foreground">
                Every project is an opportunity to push boundaries, challenge conventions, 
                and create something extraordinary that makes a real difference.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-hero rounded-lg h-80 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary opacity-20">{ "{ }" }</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;