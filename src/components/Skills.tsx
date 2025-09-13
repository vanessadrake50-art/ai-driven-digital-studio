import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, TrendingUp, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Automation",
      skills: ["ChatGPT & Claude", "Midjourney & DALL-E", "Zapier & Make", "Custom GPTs", "AI Workflow Design", "Prompt Engineering"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      skills: ["SEO & Content Strategy", "Paid Media (Google/Meta)", "Email Marketing", "Marketing Analytics", "CRO & A/B Testing", "Social Media Strategy"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Web Development",
      skills: ["React & TypeScript", "Node.js & APIs", "Database Design", "UI/UX Design", "Responsive Development", "Performance Optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "Creative Tools",
      skills: ["Figma & Adobe Creative", "Video Production", "Brand Development", "Motion Graphics", "Photography", "Content Creation"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Skills & Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Full-Stack Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI implementation to complete web applications, I deliver end-to-end solutions 
            that drive measurable business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in group">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="mr-2 mb-2 text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4">My Approach</h3>
            <p className="text-lg text-muted-foreground mb-6">
              I don't just use tools—I create systems. Every project combines strategic thinking 
              with practical implementation, ensuring solutions that scale with your business.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">AI Tools Mastered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">300%</div>
                <p className="text-muted-foreground">Average ROI Increase</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;