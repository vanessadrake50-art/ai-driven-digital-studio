import { Badge } from "@/components/ui/badge";
import { Heart, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/alexrodriguez", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/alexrodriguez", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/alexrodriguez", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">Alex Rodriguez</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Digital marketing strategist specializing in AI-powered business solutions. 
              Helping startups and agencies innovate, scale, and achieve extraordinary results.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary text-primary-foreground">AI Expert</Badge>
              <Badge className="bg-primary text-primary-foreground">Web Developer</Badge>
              <Badge className="bg-primary text-primary-foreground">Marketing Strategist</Badge>
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
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-4 h-4" />
                <span>alex@alexrodriguez.dev</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
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
              © 2024 Alex Rodriguez. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-background/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;