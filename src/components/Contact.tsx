import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Download, Send, Calendar, Linkedin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@alexrodriguez.dev",
      action: "mailto:alex@alexrodriguez.dev"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      action: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/alexrodriguez",
      action: "https://linkedin.com/in/alexrodriguez"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? I'm here to help bring your vision to life 
            with innovative solutions and proven strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-medium animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" className="shadow-soft" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="shadow-soft" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@company.com" className="shadow-soft" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input placeholder="Your Company (Optional)" className="shadow-soft" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Project Type</label>
                  <select className="w-full p-3 border border-input rounded-md shadow-soft bg-background">
                    <option>AI Implementation</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>Automation Solutions</option>
                    <option>Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project goals, timeline, and how I can help..."
                    className="min-h-[120px] shadow-soft"
                  />
                </div>
                
                <Button variant="cta" size="lg" className="w-full group">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-medium animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a 
                      key={index}
                      href={method.action}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                        <method.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{method.label}</p>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-heading font-semibold mb-4">Download My Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <Button variant="outline" size="lg" className="group">
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  Download PDF Resume
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-heading font-semibold mb-4">Schedule a Call</h3>
                <p className="text-muted-foreground mb-6">
                  Prefer to chat directly? Book a 30-minute consultation call.
                </p>
                <Button variant="hero" size="lg" className="group">
                  <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 shadow-medium max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4">Response Time Guarantee</h3>
            <p className="text-lg text-muted-foreground mb-6">
              I typically respond to all inquiries within 4 hours during business days. 
              For urgent projects, I'm available for same-day consultations.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge>Quick Response</Badge>
              <Badge>Professional Service</Badge>
              <Badge>Transparent Pricing</Badge>
              <Badge>Long-term Partnership</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;