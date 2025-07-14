import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Freelance Fusion. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
