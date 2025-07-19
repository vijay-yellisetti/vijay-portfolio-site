import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // TODO: Add actual resume PDF link
    console.log("Download resume clicked");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />
      
      {/* Particle Animation */}
      <div className="particles" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
          <span className="gradient-text">VIJAY YELLISETTI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Software Developer | Java | Python | Web Technologies
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Transforming circuits to code. Building innovative software solutions 
          with passion for problem-solving and cutting-edge technologies.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            onClick={scrollToProjects}
            className="btn-glow text-lg px-8 py-4"
          >
            View Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            onClick={downloadResume}
            variant="outline"
            className="btn-glass text-lg px-8 py-4"
          >
            Download Resume
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/vijay-yellisetti" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card p-3 hover:scale-110 transition-all duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/vijay-yellisetti" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card p-3 hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;