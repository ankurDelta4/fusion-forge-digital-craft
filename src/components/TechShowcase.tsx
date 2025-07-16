import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Zap } from 'lucide-react';

const TechShowcase = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();

    const codeLines = [
      { text: "const express = require('express');", color: '#3b82f6', delay: 0 },
      { text: "const app = express();", color: '#06b6d4', delay: 500 },
      { text: "", color: '', delay: 1000 },
      { text: "app.use(express.json());", color: '#8b5cf6', delay: 1500 },
      { text: "", color: '', delay: 2000 },
      { text: "app.get('/api/users', async (req, res) => {", color: '#f59e0b', delay: 2500 },
      { text: "  const users = await User.findAll();", color: '#10b981', delay: 3000 },
      { text: "  res.json(users);", color: '#ef4444', delay: 3500 },
      { text: "});", color: '#f59e0b', delay: 4000 },
      { text: "", color: '', delay: 4500 },
      { text: "app.listen(3000, () => {", color: '#8b5cf6', delay: 5000 },
      { text: "  console.log('Server running on port 3000');", color: '#06b6d4', delay: 5500 },
      { text: "});", color: '#8b5cf6', delay: 6000 }
    ];

    let currentTime = 0;
    let typingIndex = 0;
    let charIndex = 0;
    const lineHeight = 24;
    const fontSize = 14;
    const startY = 50;

    const animate = () => {
      currentTime += 16;
      
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

      // Draw syntax highlighting background
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(10, 10, (canvas.width / (window.devicePixelRatio || 1)) - 20, (canvas.height / (window.devicePixelRatio || 1)) - 20);

      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      codeLines.forEach((line, lineIndex) => {
        if (currentTime >= line.delay) {
          const timeSinceStart = currentTime - line.delay;
          const charsToShow = Math.min(Math.floor(timeSinceStart / 50), line.text.length);
          
          if (charsToShow > 0) {
            ctx.fillStyle = line.color || '#64748b';
            const displayText = line.text.substring(0, charsToShow);
            ctx.fillText(displayText, 20, startY + lineIndex * lineHeight);
            
            // Typing cursor
            if (charsToShow < line.text.length && lineIndex === typingIndex) {
              const textWidth = ctx.measureText(displayText).width;
              ctx.fillStyle = '#3b82f6';
              ctx.fillRect(20 + textWidth, startY + lineIndex * lineHeight - fontSize, 2, fontSize);
            }
          }
        }
      });

      // Floating particles
      const time = currentTime * 0.001;
      for (let i = 0; i < 20; i++) {
        const x = Math.sin(time + i) * 100 + (canvas.width / (window.devicePixelRatio || 1)) / 2;
        const y = Math.cos(time * 0.7 + i) * 50 + (canvas.height / (window.devicePixelRatio || 1)) / 2;
        const alpha = Math.sin(time + i) * 0.3 + 0.3;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern Frameworks",
      description: "React, Vue, Angular, Node.js, Python, and more cutting-edge technologies",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Scalable Architecture", 
      description: "Cloud-native solutions built for performance and growth",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Full-Stack Expertise",
      description: "End-to-end development from APIs to user interfaces", 
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with modern development practices",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/80">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              <span className="gradient-text">Code That Powers</span>
              <br />
              Modern Businesses
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our development teams craft robust, scalable solutions using the latest technologies. 
              From rapid prototyping to enterprise-grade applications, we deliver code that performs.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-xl p-6 bg-card border border-border/50 hover:border-border transition-all duration-300">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Code animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
              <div className="bg-slate-800 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-slate-400 text-sm ml-4">server.js</span>
              </div>
              <canvas
                ref={canvasRef}
                className="w-full h-96 block"
                style={{ background: '#0f172a' }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 animate-float"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;