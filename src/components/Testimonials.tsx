import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amara Johnson",
      role: "Fashion Blogger",
      company: "Style Africa",
      content: "Vanessa's sandals are absolutely stunning! The Kente collection I ordered exceeded my expectations. The craftsmanship is impeccable and they're incredibly comfortable for all-day wear.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Kwame Asante",
      role: "Cultural Center Director",
      company: "African Heritage Foundation",
      content: "These aren't just shoes - they're wearable art. Vanessa truly understands the importance of preserving African traditions while creating modern, stylish footwear. Outstanding quality!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Boutique Owner",
      company: "Sahara Styles",
      content: "My customers absolutely love Vanessa's designs. The authentic African patterns combined with modern comfort make these pieces bestsellers in my store. Excellent business partnership!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Thompson",
      role: "International Buyer",
      company: "Global Fashion Co.",
      content: "Working with Vanessa has been fantastic. Her attention to detail and commitment to authentic African craftsmanship sets her apart. These sandals sell out every time we stock them.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Customer Reviews</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Loved by Customers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From fashion enthusiasts to cultural centers, discover why customers 
            choose our authentic African footwear
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-lg text-muted-foreground leading-relaxed italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 shadow-medium max-w-3xl mx-auto gradient-secondary">
            <h3 className="text-2xl font-heading font-semibold mb-4">Join Our Satisfied Customers</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Ready to experience authentic African craftsmanship? Join hundreds of satisfied 
              customers who've made our sandals part of their style journey.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;