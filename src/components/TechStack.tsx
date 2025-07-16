import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/5 to-cyan-500/5",
      techs: [
        { name: "React", logo: "⚛️", color: "#61DAFB", level: 95 },
        { name: "Vue.js", logo: "💚", color: "#4FC08D", level: 90 },
        { name: "Angular", logo: "🅰️", color: "#DD0031", level: 85 },
        { name: "TypeScript", logo: "📘", color: "#3178C6", level: 92 },
        { name: "Next.js", logo: "▲", color: "#000000", level: 88 },
        { name: "Tailwind", logo: "🎨", color: "#06B6D4", level: 94 }
      ]
    },
    {
      category: "Backend", 
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/5 to-teal-500/5",
      techs: [
        { name: "Node.js", logo: "🟢", color: "#339933", level: 93 },
        { name: "Python", logo: "🐍", color: "#3776AB", level: 89 },
        { name: "Express", logo: "🚂", color: "#000000", level: 91 },
        { name: "Django", logo: "🎯", color: "#092E20", level: 86 },
        { name: "FastAPI", logo: "⚡", color: "#009688", level: 84 },
        { name: "GraphQL", logo: "📊", color: "#E10098", level: 87 }
      ]
    },
    {
      category: "Database",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/5 to-pink-500/5",
      techs: [
        { name: "PostgreSQL", logo: "🐘", color: "#336791", level: 92 },
        { name: "MongoDB", logo: "🍃", color: "#47A248", level: 89 },
        { name: "Redis", logo: "📦", color: "#DC382D", level: 85 },
        { name: "MySQL", logo: "🗄️", color: "#4479A1", level: 88 },
        { name: "Supabase", logo: "⚡", color: "#3FCF8E", level: 86 },
        { name: "Firebase", logo: "🔥", color: "#FFCA28", level: 83 }
      ]
    },
    {
      category: "Cloud & DevOps",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/5 to-red-500/5",
      techs: [
        { name: "AWS", logo: "☁️", color: "#FF9900", level: 90 },
        { name: "Docker", logo: "🐳", color: "#2496ED", level: 88 },
        { name: "Kubernetes", logo: "⚙️", color: "#326CE5", level: 82 },
        { name: "Vercel", logo: "▲", color: "#000000", level: 91 },
        { name: "Netlify", logo: "🌐", color: "#00C7B7", level: 87 },
        { name: "GitHub", logo: "🐙", color: "#181717", level: 94 }
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
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Card */}
              <div className={`relative p-8 rounded-3xl border border-white/20 backdrop-blur-sm bg-gradient-to-br ${category.bgGradient} overflow-hidden group hover:border-white/40 transition-all duration-500`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Category Header */}
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
                >
                  <div className={`inline-flex px-6 py-3 rounded-2xl bg-gradient-to-r ${category.gradient} text-white font-bold text-lg shadow-lg mb-4`}>
                    {category.category}
                  </div>
                </motion.div>
                
                {/* Technologies Grid */}
                <div className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      className="relative group/tech"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + techIndex * 0.05 
                      }}
                    >
                      <motion.div
                        className="relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer overflow-hidden"
                        whileHover={{ 
                          scale: 1.02,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Tech gradient background on hover */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover/tech:opacity-10 transition-opacity duration-300 rounded-xl"
                          style={{ 
                            background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}05)` 
                          }}
                        />
                        
                        {/* Content */}
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <motion.span 
                              className="text-2xl"
                              whileHover={{ 
                                scale: 1.3, 
                                rotate: 360,
                                transition: { duration: 0.3 }
                              }}
                            >
                              {tech.logo}
                            </motion.span>
                            <span className="font-medium text-foreground group-hover/tech:text-primary transition-colors duration-300">
                              {tech.name}
                            </span>
                          </div>
                          
                          {/* Skill level indicator */}
                          <div className="flex flex-col items-end">
                            <span className="text-xs text-muted-foreground mb-1">{tech.level}%</span>
                            <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: tech.color }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${tech.level}%` }}
                                viewport={{ once: true }}
                                transition={{ 
                                  duration: 1, 
                                  delay: categoryIndex * 0.1 + techIndex * 0.1 + 0.5 
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl" />
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