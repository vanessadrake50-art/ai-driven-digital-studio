import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      company: "TechFlow Startup",
      content: "Alex transformed our marketing approach completely. His AI-powered strategies increased our lead generation by 300% while reducing costs by 40%. The ROI has been incredible.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Thompson",
      role: "Digital Director",
      company: "Creative Agency Inc",
      content: "Working with Alex was a game-changer. He didn't just deliver a website—he created a complete digital ecosystem that streamlined our entire client workflow. Exceptional results.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Rodriguez",
      role: "VP of Marketing",
      company: "GrowthScale",
      content: "Alex's strategic thinking combined with his technical execution is rare. He delivered beyond expectations and continues to be a trusted advisor for all our digital initiatives.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Park",
      role: "Co-founder",
      company: "InnovateLab",
      content: "The automation solutions Alex implemented saved us 20+ hours per week. His attention to detail and ability to understand complex business needs is outstanding.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Client Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it—hear from the companies and leaders 
            who've experienced transformational results
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
            <h3 className="text-2xl font-heading font-semibold mb-4">Join the Success Stories</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Ready to achieve similar results? Let's discuss how I can help 
              transform your digital presence and drive measurable growth.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Support Availability</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;