import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects? 
            I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              {/* Email */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a 
                    href="mailto:yellisettivijay@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    yellisettivijay@gmail.com
                  </a>
                </div>
              </div>
              
              {/* GitHub */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Github className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <a 
                    href="https://github.com/vijay-yellisetti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    github.com/vijay-yellisetti
                  </a>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/20 rounded-full">
                  <Linkedin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <a 
                    href="https://linkedin.com/in/vijay-yellisetti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    linkedin.com/in/vijay-yellisetti
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full btn-glass justify-start"
                  onClick={() => window.open('mailto:yellisettivijay@gmail.com', '_blank')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Direct Email
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full btn-glass justify-start"
                  onClick={() => window.open('https://github.com/vijay-yellisetti', '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View GitHub Profile
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full btn-glass justify-start"
                  onClick={() => window.open('https://linkedin.com/in/vijay-yellisetti', '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-glass/30 border-glass-border"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-glass/30 border-glass-border"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-glass/30 border-glass-border resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;