import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CodeCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Code snippets to display
    const codeLines = [
      'const transform = (data) => {',
      '  return data.map(item => ({',
      '    ...item,',
      '    enhanced: true',
      '  }));',
      '};',
      '',
      'const createApp = async () => {',
      '  const config = await loadConfig();',
      '  const app = new Application(config);',
      '  return app.initialize();',
      '};',
      '',
      'export default createApp;'
    ];

    let currentLine = 0;
    let currentChar = 0;
    let typingDirection = 1; // 1 for typing, -1 for deleting
    let displayedCode: string[] = [];

    const typewriter = () => {
      ctx.fillStyle = 'hsl(212, 100%, 95%)';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw typing cursor
      const cursorX = 40 + (currentChar * 12);
      const cursorY = 40 + (currentLine * 24);
      
      ctx.fillStyle = 'hsl(212, 100%, 50%)';
      ctx.fillRect(cursorX, cursorY, 2, 20);

      // Draw code lines
      ctx.font = '14px Monaco, Consolas, monospace';
      displayedCode.forEach((line, index) => {
        // Syntax highlighting colors
        let color = 'hsl(220, 16%, 20%)'; // default text
        
        if (line.includes('const') || line.includes('return') || line.includes('export')) {
          color = 'hsl(212, 100%, 50%)'; // keywords
        } else if (line.includes('=>') || line.includes('=')) {
          color = 'hsl(200, 100%, 45%)'; // operators
        } else if (line.includes('//')) {
          color = 'hsl(215, 16%, 45%)'; // comments
        }

        ctx.fillStyle = color;
        ctx.fillText(line, 40, 40 + (index * 24) + 16);
      });

      // Floating elements (brackets, semicolons)
      ctx.fillStyle = 'hsl(212, 100%, 50%, 0.3)';
      ctx.font = '24px Monaco, Consolas, monospace';
      const time = Date.now() * 0.001;
      
      // Floating semicolons
      for (let i = 0; i < 3; i++) {
        const x = 200 + Math.sin(time + i) * 50;
        const y = 100 + Math.cos(time + i * 0.7) * 30;
        ctx.fillText(';', x, y);
      }

      // Floating brackets
      for (let i = 0; i < 4; i++) {
        const x = 300 + Math.sin(time * 0.8 + i) * 40;
        const y = 150 + Math.cos(time * 0.6 + i * 0.9) * 25;
        ctx.fillText(i % 2 === 0 ? '{' : '}', x, y);
      }
    };

    // Typewriter animation
    const animate = () => {
      if (typingDirection === 1) {
        // Typing
        if (currentLine < codeLines.length) {
          const currentCodeLine = codeLines[currentLine];
          if (currentChar <= currentCodeLine.length) {
            displayedCode[currentLine] = currentCodeLine.substring(0, currentChar);
            currentChar++;
          } else {
            currentLine++;
            currentChar = 0;
          }
        } else {
          // Start deleting after a pause
          setTimeout(() => {
            typingDirection = -1;
          }, 2000);
        }
      } else {
        // Deleting
        if (currentLine >= 0) {
          if (currentChar >= 0) {
            displayedCode[currentLine] = codeLines[currentLine]?.substring(0, currentChar) || '';
            currentChar--;
          } else {
            currentLine--;
            currentChar = codeLines[currentLine]?.length || 0;
          }
        } else {
          // Start typing again
          currentLine = 0;
          currentChar = 0;
          displayedCode = [];
          typingDirection = 1;
        }
      }

      typewriter();
    };

    const interval = setInterval(animate, 100);

    // Initial render
    typewriter();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <motion.div 
      className="relative w-full h-64 bg-gradient-hero rounded-lg overflow-hidden shadow-cinematic"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cinema-blue/5 to-ocean-blue/5 pointer-events-none" />
    </motion.div>
  );
};

export default CodeCanvas;