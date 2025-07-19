import { 
  Code, 
  Database, 
  Globe, 
  Settings, 
  Coffee,
  FileCode,
  Server,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "SQL"],
      color: "text-primary"
    },
    {
      title: "Web Technologies", 
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "WebSockets"],
      color: "text-accent"
    },
    {
      title: "Frameworks & Libraries",
      icon: Coffee,
      skills: ["Spring Boot"],
      color: "text-secondary"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "JDBC", "Git", "Postman"],
      color: "text-primary-glow"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern software solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full bg-glass/50 ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-glass/30 text-sm rounded-full border border-glass-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Grid */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <FileCode className="h-5 w-5 text-primary" />
              <span>OOP Principles</span>
            </div>
            <div className="flex items-center gap-3">
              <Server className="h-5 w-5 text-accent" />
              <span>Backend Development</span>
            </div>
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-secondary" />
              <span>Database Design</span>
            </div>
            <div className="flex items-center gap-3">
              <GitBranch className="h-5 w-5 text-primary-glow" />
              <span>Version Control</span>
            </div>
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-primary" />
              <span>System Architecture</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-accent" />
              <span>RESTful APIs</span>
            </div>
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5 text-secondary" />
              <span>Problem Solving</span>
            </div>
            <div className="flex items-center gap-3">
              <Coffee className="h-5 w-5 text-primary-glow" />
              <span>Full-Stack Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;