import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      techs: [
        { name: "React", color: "#61DAFB", logo: "⚛️" },
        { name: "Vue.js", color: "#4FC08D", logo: "💚" },
        { name: "Angular", color: "#DD0031", logo: "🅰️" },
        { name: "TypeScript", color: "#3178C6", logo: "📘" },
        { name: "Next.js", color: "#000000", logo: "▲" },
        { name: "Tailwind", color: "#06B6D4", logo: "🎨" }
      ]
    },
    {
      category: "Backend", 
      techs: [
        { name: "Node.js", color: "#339933", logo: "🟢" },
        { name: "Python", color: "#3776AB", logo: "🐍" },
        { name: "Express", color: "#000000", logo: "🚂" },
        { name: "Django", color: "#092E20", logo: "🎯" },
        { name: "FastAPI", color: "#009688", logo: "⚡" },
        { name: "GraphQL", color: "#E10098", logo: "📊" }
      ]
    },
    {
      category: "Database",
      techs: [
        { name: "PostgreSQL", color: "#336791", logo: "🐘" },
        { name: "MongoDB", color: "#47A248", logo: "🍃" },
        { name: "Redis", color: "#DC382D", logo: "📦" },
        { name: "MySQL", color: "#4479A1", logo: "🗄️" },
        { name: "Supabase", color: "#3FCF8E", logo: "⚡" },
        { name: "Firebase", color: "#FFCA28", logo: "🔥" }
      ]
    },
    {
      category: "Cloud & DevOps",
      techs: [
        { name: "AWS", color: "#FF9900", logo: "☁️" },
        { name: "Docker", color: "#2496ED", logo: "🐳" },
        { name: "Kubernetes", color: "#326CE5", logo: "⚙️" },
        { name: "Vercel", color: "#000000", logo: "▲" },
        { name: "Netlify", color: "#00C7B7", logo: "🌐" },
        { name: "GitHub", color: "#181717", logo: "🐙" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
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
            <span className="gradient-text">Technology Stack</span>
            <br />We Master
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cutting-edge technologies and frameworks to build scalable, modern solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <motion.h3 
                className="text-2xl font-semibold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
              >
                {category.category}
              </motion.h3>
              
              <div className="space-y-3">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="group relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05 
                    }}
                  >
                    <motion.div
                      className="bg-card border border-border/50 rounded-xl p-4 hover:border-border transition-all duration-300 cursor-pointer"
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Gradient background on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                        style={{ 
                          background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}05)` 
                        }}
                      />
                      
                      <div className="relative flex items-center space-x-3">
                        <motion.span 
                          className="text-2xl"
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 360,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {tech.logo}
                        </motion.span>
                        <span className="font-medium group-hover:text-primary transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                      
                      {/* Progress bar effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 rounded-b-xl"
                        style={{ backgroundColor: tech.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + techIndex * 0.1 + 0.5 
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {['⚛️', '🐍', '🔥', '☁️', '🚀', '⚡', '💚', '🎯'][i]}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;