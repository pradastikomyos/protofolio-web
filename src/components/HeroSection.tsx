import { Button } from '@/components/ui/button';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="min-h-screen portfolio-gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl portfolio-float"></div>
        <div className="absolute bottom-32 right-1/4 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl portfolio-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl portfolio-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Greeting */}
        <div className="portfolio-slide-up mb-4">
          <h1 className="text-6xl md:text-8xl font-light text-foreground mb-2">
            Hi
          </h1>
        </div>

        {/* Name with animated accent */}
        <div className="portfolio-slide-up mb-6" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center gap-4 text-5xl md:text-7xl font-light">
            <span className="text-foreground">I'm</span>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-2xl portfolio-pulse"></div>
              <span className="relative portfolio-text-gradient font-medium">Prada</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="portfolio-slide-up mb-4" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl md:text-5xl font-light text-foreground">
            AI engineer.
          </h2>
        </div>

        {/* Subtitle */}
        <div className="portfolio-slide-up mb-12" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            System Information (CS equivalent) Student at STIKOM Yos Sudarso, Purwokerto, Indonesia
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="portfolio-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-8" style={{ animationDelay: '0.8s' }}>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="portfolio-hover-lift bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-medium"
            >
              <Mail className="mr-2" size={20} />
              CONTACT ME
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="portfolio-hover-lift border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-8 py-3 text-lg"
          >
            <Download className="mr-2" size={20} />
            Download CV
          </Button>
        </div>

        {/* Quick Navigation */}
        <div className="portfolio-slide-up flex flex-col sm:flex-row gap-3 justify-center" style={{ animationDelay: '1.0s' }}>
          <Link to="/about">
            <Button variant="ghost" className="portfolio-hover-lift text-foreground hover:text-primary">
              Learn More About Me <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="ghost" className="portfolio-hover-lift text-foreground hover:text-primary">
              View My Work <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};