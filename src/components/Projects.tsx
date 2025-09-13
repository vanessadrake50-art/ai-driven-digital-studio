import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Users, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Built a complete e-commerce solution with AI-driven product recommendations, automated customer support, and predictive analytics dashboard.",
      results: [
        "40% increase in conversion rates",
        "60% reduction in support tickets",
        "250% improvement in customer retention"
      ],
      technologies: ["React", "Node.js", "OpenAI API", "Stripe", "MongoDB"],
      icon: TrendingUp,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Marketing Automation Suite",
      description: "Developed a comprehensive marketing automation platform that integrates AI content generation, email campaigns, and performance analytics.",
      results: [
        "300% increase in lead generation",
        "50% reduction in content creation time",
        "85% improvement in email open rates"
      ],
      technologies: ["TypeScript", "Zapier", "GPT-4", "SendGrid", "Analytics APIs"],
      icon: Zap,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "SaaS Growth Dashboard",
      description: "Created an AI-enhanced analytics dashboard for SaaS companies to track user behavior, predict churn, and optimize pricing strategies.",
      results: [
        "25% reduction in customer churn",
        "180% increase in upsell revenue",
        "Real-time predictive insights"
      ],
      technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Vercel"],
      icon: Users,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Agency Workflow Optimizer",
      description: "Built a custom project management tool with AI task prioritization, automated reporting, and client communication features.",
      results: [
        "70% reduction in project delays",
        "45% increase in team productivity",
        "90% client satisfaction rate"
      ],
      technologies: ["React", "Express.js", "AI APIs", "WebSockets", "Cloud Functions"],
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Featured Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Real Solutions, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each project represents a unique challenge solved with innovative thinking 
            and cutting-edge technology implementation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in group">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary">Key Results:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group">
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Live
                  </Button>
                  <Button variant="ghost" size="sm" className="group">
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Source
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="p-8 shadow-medium max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4">Want to See More?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              These are just highlights from my portfolio. I'd love to discuss how 
              I can create similar results for your business or project.
            </p>
            <Button variant="cta" size="lg">
              Let's Discuss Your Project
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;