import { Badge } from "@/components/ui/badge";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/vanessadrake.sandals", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/vanessadrakesandals", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/vanessadrake", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "Our Story", href: "#about" },
    { name: "Craftsmanship", href: "#skills" },
    { name: "Collections", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">Vanessa Drake</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Celebrating African heritage through handcrafted sandals and slippers. 
              Each pair tells a story of tradition, quality, and authentic African artistry.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary text-primary-foreground">Authentic Craftsmanship</Badge>
              <Badge className="bg-primary text-primary-foreground">African Heritage</Badge>
              <Badge className="bg-primary text-primary-foreground">Premium Quality</Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="block text-background/80 hover:text-background transition-colors"
              >
                Size Guide
              </a>
              <a
                href="#"
                className="block text-background/80 hover:text-background transition-colors"
              >
                Care Instructions
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-4 h-4" />
                <span>vanessadrake50@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-4 h-4" />
                <span>0598230143</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>Ghana, West Africa</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Vanessa Drake. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-background/60 text-sm">
              <span>Handcrafted with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Africa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;