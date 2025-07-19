const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I am an <span className="text-primary font-semibold">Electrical and Electronics Engineering student</span> who 
            discovered a deep passion for building software. My journey has led me from circuits and systems to the world 
            of <span className="text-primary font-semibold">Java and web development</span>.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-6">
            During my internship at <span className="text-accent font-semibold">DevSkillHub</span>, I had the opportunity 
            to build full-stack applications from the ground up, solidifying my skills in backend logic and system design. 
            I thrive on solving complex problems and am currently seeking an 
            <span className="text-primary font-semibold"> entry-level software developer role</span> where I can continue 
            to learn and contribute to innovative projects.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-muted-foreground">Internship</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;