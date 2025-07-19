import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Live Chat Application",
      description: "A secure, real-time chat application built during my internship at DevSkillHub. It allows multiple users to communicate instantly in different chat rooms with seamless WebSocket connectivity.",
      technologies: ["Java", "WebSockets", "Spring Boot", "MySQL"],
      githubLink: "#", // TODO: Add actual GitHub link
      liveLink: "#",   // TODO: Add actual live demo link
      featured: true
    },
    {
      title: "Full-Featured Resume Builder",
      description: "An application that enables users to create, customize, and save professional resumes. This project was developed from UI design to final deployment during my internship.",
      technologies: ["Java", "Spring Boot", "JDBC", "PDF/DOCX Libraries"],
      githubLink: "#", // TODO: Add actual GitHub link
      liveLink: "#",   // TODO: Add actual live demo link
      featured: true
    },
    {
      title: "Command-Line Password Generator",
      description: "A standalone Java application that generates secure, randomized passwords based on user-defined complexity requirements. Features customizable length and character sets.",
      technologies: ["Core Java", "Object-Oriented Programming"],
      githubLink: "#", // TODO: Add actual GitHub link
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Real-world applications showcasing my technical skills and problem-solving abilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              {project.featured && (
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-4">
                  Featured
                </div>
              )}
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="btn-glass flex-1"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                
                {project.liveLink && (
                  <Button 
                    size="sm"
                    className="btn-glow flex-1"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Projects CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline"
            className="btn-glass text-lg px-8 py-4"
            onClick={() => window.open('https://github.com/vijay-yellisetti', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;