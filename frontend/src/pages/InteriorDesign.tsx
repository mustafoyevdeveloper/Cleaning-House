import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Ruler, 
  Sofa, 
  Lightbulb, 
  Camera,
  CheckCircle,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Home,
  Users,
  Award,
  Heart,
  Zap,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const InteriorDesign = () => {
  const services = [
    {
      title: "Space Planning & Layout Design",
      description: "Professional space planning to maximize functionality and flow in your home",
      icon: Ruler,
      features: [
        "Room layout optimization",
        "Traffic flow analysis",
        "Furniture placement strategies",
        "Space utilization planning",
        "Multi-functional design solutions",
        "Accessibility considerations",
        "Storage optimization"
      ],
      duration: "2-4 hours consultation + planning",
      price: "Starting from $200",
      benefits: [
        "Maximized space efficiency",
        "Improved functionality",
        "Better traffic flow",
        "Professional expertise"
      ]
    },
    {
      title: "Color Consultation & Paint Selection",
      description: "Expert color consultation to create the perfect mood and atmosphere",
      icon: Palette,
      features: [
        "Color palette development",
        "Paint color selection",
        "Mood and atmosphere creation",
        "Lighting consideration",
        "Color psychology guidance",
        "Sample coordination",
        "Finish recommendations"
      ],
      duration: "2-3 hours consultation",
      price: "Starting from $150",
      benefits: [
        "Professional color expertise",
        "Cohesive color schemes",
        "Mood enhancement",
        "Value addition"
      ]
    },
    {
      title: "Furniture Selection & Arrangement",
      description: "Curated furniture selection and professional arrangement services",
      icon: Sofa,
      features: [
        "Furniture style consultation",
        "Size and scale analysis",
        "Arrangement planning",
        "Furniture sourcing",
        "Custom furniture design",
        "Accessory coordination",
        "Installation supervision"
      ],
      duration: "3-6 hours consultation + planning",
      price: "Starting from $250",
      benefits: [
        "Professional arrangement",
        "Style coordination",
        "Space optimization",
        "Quality furniture"
      ]
    },
    {
      title: "Window Treatment Design",
      description: "Custom window treatment solutions for privacy, light control, and style",
      icon: Home,
      features: [
        "Window treatment consultation",
        "Fabric and material selection",
        "Custom design creation",
        "Installation coordination",
        "Light control solutions",
        "Privacy considerations",
        "Style enhancement"
      ],
      duration: "2-4 hours consultation + design",
      price: "Starting from $180",
      benefits: [
        "Custom solutions",
        "Light control",
        "Privacy enhancement",
        "Style improvement"
      ]
    },
    {
      title: "Lighting Design & Installation",
      description: "Professional lighting design to enhance ambiance and functionality",
      icon: Lightbulb,
      features: [
        "Lighting plan development",
        "Fixture selection",
        "Ambient lighting design",
        "Task lighting planning",
        "Accent lighting creation",
        "Installation coordination",
        "Smart lighting integration"
      ],
      duration: "3-5 hours consultation + design",
      price: "Starting from $300",
      benefits: [
        "Enhanced ambiance",
        "Improved functionality",
        "Energy efficiency",
        "Professional installation"
      ]
    },
    {
      title: "Complete Room Makeovers",
      description: "Full-service room transformation from concept to completion",
      icon: Camera,
      features: [
        "Complete design concept",
        "Space planning and layout",
        "Color and material selection",
        "Furniture and accessory selection",
        "Project management",
        "Installation coordination",
        "Final styling and accessorizing"
      ],
      duration: "1-4 weeks depending on scope",
      price: "Starting from $1,500",
      benefits: [
        "Complete transformation",
        "Professional management",
        "Cohesive design",
        "Turnkey service"
      ]
    }
  ];

  const designProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your vision, needs, and budget to understand your project goals",
      icon: Target
    },
    {
      step: "2",
      title: "Space Analysis",
      description: "We analyze your space, take measurements, and assess current conditions",
      icon: Ruler
    },
    {
      step: "3",
      title: "Design Concept",
      description: "We create a comprehensive design concept with materials and furniture selections",
      icon: Palette
    },
    {
      step: "4",
      title: "Implementation",
      description: "We coordinate and supervise the implementation of your design vision",
      icon: Zap
    },
    {
      step: "5",
      title: "Final Styling",
      description: "We add final touches and accessories to complete your perfect space",
      icon: Star
    }
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: "Personalized Approach",
      description: "Every design is tailored to your unique style, needs, and lifestyle"
    },
    {
      icon: Award,
      title: "Professional Expertise",
      description: "Years of experience in interior design and home improvement"
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description: "We work closely with you to ensure your vision becomes reality"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We stand behind our work with satisfaction guaranteed"
    }
  ];

  const designStyles = [
    "Modern & Contemporary",
    "Traditional & Classic",
    "Scandinavian & Minimalist",
    "Industrial & Urban",
    "Coastal & Beach",
    "Rustic & Farmhouse",
    "Bohemian & Eclectic",
    "Mid-Century Modern"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Interior Design Services
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              Transform your space with professional interior design expertise. Create beautiful, functional spaces that reflect your style and enhance your lifestyle.
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Our Interior Design Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From space planning to complete room makeovers, we offer comprehensive interior design services to transform your home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-navy">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-turquoise flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-3 bg-muted/50 rounded-lg mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy">Duration</p>
                          <p className="text-xs text-muted-foreground">{service.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy">Starting Price</p>
                          <p className="text-xs text-muted-foreground">{service.price}</p>
                        </div>
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button 
                        variant="white-on-dark"
                        className="w-full shadow-sm group"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Our Design Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a proven 5-step process to ensure your interior design project is successful and exceeds your expectations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {designProcess.map((step, index) => (
                <Card 
                  key={step.step}
                  className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-navy">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Design Styles */}
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Design Styles We Specialize In
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From modern minimalism to classic elegance, we can work with any design style to create your perfect space
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {designStyles.map((style, index) => (
                <Card 
                  key={style}
                  className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Palette className="w-6 h-6 text-brand-turquoise" />
                    </div>
                    <p className="text-sm font-medium text-brand-navy">{style}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Why Choose Our Interior Design Services?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We bring creativity, expertise, and attention to detail to every design project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card 
                  key={item.title}
                  className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-navy">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to transform your space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let's discuss how we can bring your interior design vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="white-on-dark" size="xl">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline-white" size="xl">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InteriorDesign;
