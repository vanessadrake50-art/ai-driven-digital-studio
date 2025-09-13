import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "Leveraging cutting-edge AI tools to automate workflows and enhance decision-making"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on measurable outcomes that directly impact business growth and ROI"
    },
    {
      icon: Zap,
      title: "Rapid Innovation",
      description: "Quickly adapting to new technologies and market trends to stay ahead of the curve"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Where Strategy Meets Innovation
            </h2>
            <p className="text-xl text-muted-foreground">
              Bridging the gap between traditional marketing wisdom and AI-powered possibilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-heading font-semibold mb-4">My Journey</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Starting as a traditional marketer, I witnessed the digital revolution firsthand. 
                When AI emerged as a game-changer, I didn't just adapt—I dove deep, becoming 
                an early adopter who now helps businesses harness these powerful technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I combine 8+ years of marketing expertise with cutting-edge AI tools 
                to create solutions that aren't just innovative—they're practical, scalable, 
                and deliver real business value.
              </p>
            </div>
            
            <div className="grid gap-6 animate-scale-in">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Card className="p-8 shadow-medium">
              <h3 className="text-2xl font-heading font-semibold mb-4">Ready to Innovate Together?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're a startup looking to disrupt or an agency seeking to modernize, 
                I bring the perfect blend of strategic thinking and technical execution.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>AI Strategy</Badge>
                <Badge>Growth Marketing</Badge>
                <Badge>Web Development</Badge>
                <Badge>Process Automation</Badge>
                <Badge>Data Analytics</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;