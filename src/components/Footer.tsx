import { Github, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-glass-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 <span className="text-primary font-medium">VIJAY YELLISETTI</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              All rights reserved. Built with passion and code.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/vijay-yellisetti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 hover:scale-110 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/vijay-yellisetti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          {/* Back to Top */}
          <Button 
            onClick={scrollToTop}
            variant="outline"
            className="btn-glass"
            size="sm"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-8 pt-8 border-t border-glass-border/20">
          <p className="text-sm text-muted-foreground">
            Interested in working together? 
            <a 
              href="#contact" 
              className="text-primary hover:text-primary-glow ml-1 transition-colors"
            >
              Let's connect!
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;