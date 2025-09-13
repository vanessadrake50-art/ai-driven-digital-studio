import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Users, Truck, Star } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Scissors,
      title: "Craftsmanship",
      skills: ["Traditional Techniques", "Premium Leather", "Beadwork & Embroidery", "Pattern Design", "Quality Control", "Sustainable Materials"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Artisan Network",
      skills: ["Skilled Craftspeople", "Fair Trade Practices", "Community Support", "Cultural Preservation", "Training Programs", "Partnership Building"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Truck,
      title: "Business Operations",
      skills: ["Global Shipping", "Inventory Management", "Customer Service", "Quality Assurance", "Order Processing", "Supply Chain"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Star,
      title: "Design Excellence",
      skills: ["Traditional Patterns", "Modern Aesthetics", "Color Coordination", "Size Optimization", "Comfort Engineering", "Style Innovation"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Our Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            From Artisan to Your Doorstep
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every step of our process combines traditional African craftsmanship with modern 
            business practices to deliver exceptional footwear
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
            <h3 className="text-2xl font-heading font-semibold mb-4">Our Commitment</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We don't just make footwear—we preserve cultural heritage, support artisan communities, 
              and deliver authentic African craftsmanship to customers worldwide.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Skilled Artisans</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Authentic Designs</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;