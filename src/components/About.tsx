import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Palette, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Heritage & Tradition",
      description: "Preserving authentic African craftsmanship passed down through generations"
    },
    {
      icon: Palette,
      title: "Artisan Quality",
      description: "Each piece is carefully handcrafted using premium materials and traditional techniques"
    },
    {
      icon: Award,
      title: "Cultural Authenticity",
      description: "Celebrating African culture through genuine designs that honor our rich heritage"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Where Heritage Meets Style
            </h2>
            <p className="text-xl text-muted-foreground">
              Bringing authentic African craftsmanship to modern footwear
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-heading font-semibold mb-4">My Story</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Growing up surrounded by the rich textile traditions of Africa, I was inspired by 
                the beautiful craftsmanship of local artisans. What started as admiration for 
                traditional footwear became a passion for preserving and sharing these art forms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I work directly with skilled African artisans to create sandals and slippers 
                that honor our heritage while meeting modern comfort and style standards. Each piece 
                is a celebration of African culture and craftsmanship.
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
              <h3 className="text-2xl font-heading font-semibold mb-4">Ready to Experience Authentic African Style?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're looking for everyday comfort or special occasion elegance, 
                our collection offers genuine African craftsmanship for the modern world.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>Handcrafted</Badge>
                <Badge>Premium Materials</Badge>
                <Badge>Traditional Designs</Badge>
                <Badge>Modern Comfort</Badge>
                <Badge>Cultural Heritage</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;