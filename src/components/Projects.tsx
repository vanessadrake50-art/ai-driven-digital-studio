import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Star, Award } from "lucide-react";

const Projects = () => {
  const collections = [
    {
      title: "Traditional Kente Collection",
      description: "Vibrant sandals featuring authentic Kente patterns with hand-woven straps and genuine leather soles. Each pair celebrates the rich Ghanaian textile heritage.",
      highlights: [
        "Authentic Kente patterns from Ghana",
        "Hand-woven cotton straps",
        "Premium leather construction"
      ],
      materials: ["Kente Cotton", "Genuine Leather", "Natural Dyes", "Hand-carved Buckles"],
      icon: Star,
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Maasai Beaded Elegance",
      description: "Stunning slippers adorned with traditional Maasai beadwork, combining comfort with the timeless beauty of East African artistry.",
      highlights: [
        "Traditional Maasai beadwork",
        "Comfortable cushioned soles",
        "Cultural authenticity guaranteed"
      ],
      materials: ["Glass Beads", "Soft Leather", "Cotton Lining", "Natural Rubber"],
      icon: Heart,
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "Ankara Print Casual Wear",
      description: "Contemporary slip-on sandals featuring bold Ankara prints, perfect for modern lifestyles while honoring African textile traditions.",
      highlights: [
        "Contemporary Ankara designs",
        "All-day comfort design",
        "Versatile style options"
      ],
      materials: ["Ankara Fabric", "Memory Foam", "Rubber Soles", "Breathable Mesh"],
      icon: Award,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Mud Cloth Heritage Series",
      description: "Limited edition sandals showcasing the ancient art of Malian mud cloth patterns, each pair a unique piece of wearable African art.",
      highlights: [
        "Authentic mud cloth patterns",
        "Limited edition designs",
        "Museum-quality artistry"
      ],
      materials: ["Mud Cloth", "Vegetable-tanned Leather", "Organic Cotton", "Cork Footbed"],
      icon: Star,
      gradient: "from-brown-500 to-amber-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Our Collections</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Authentic African Footwear
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each collection tells a unique story of African heritage, combining traditional 
            craftsmanship with modern comfort and style
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <Card key={index} className="overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in group">
              <div className={`h-2 bg-gradient-to-r ${collection.gradient}`}></div>
              
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${collection.gradient}`}>
                    <collection.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {collection.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary">Collection Highlights:</h4>
                  <ul className="space-y-2">
                    {collection.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Premium Materials:</h4>
                  <div className="flex flex-wrap gap-2">
                    {collection.materials.map((material, materialIndex) => (
                      <Badge key={materialIndex} variant="outline" className="text-xs">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group">
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Collection
                  </Button>
                  <Button variant="ghost" size="sm" className="group">
                    <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Add to Wishlist
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="p-8 shadow-medium max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4">Custom Designs Available</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Looking for something unique? We also create custom designs that reflect your 
              personal style while honoring African craftsmanship traditions.
            </p>
            <Button variant="cta" size="lg">
              Discuss Custom Order
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;