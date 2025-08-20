import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Paintbrush, 
  Building, 
  Hammer, 
  Wrench, 
  Sparkles,
  CheckCircle,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Palette,
  Ruler,
  Drill,
  Saw,
  Brush,
  Droplets
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeImprovement = () => {
  const services = [
    {
      id: "painting",
      title: "Painting and Wallpapering",
      description: "Professional painting and wallpaper installation services for interior and exterior surfaces",
      icon: Paintbrush,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      features: [
        "Interior painting (walls, ceilings, trim)",
        "Exterior painting (house, fence, deck)",
        "Wallpaper installation and removal",
        "Color consultation and selection",
        "Surface preparation and priming",
        "Cabinet and furniture painting",
        "Textured finishes and faux painting"
      ],
      duration: "1-5 days depending on project size",
      price: "Starting from $75 per hour",
      benefits: [
        "Professional quality finishes",
        "Proper surface preparation",
        "Color matching expertise",
        "Clean and tidy work area"
      ]
    },
    {
      id: "drywall-flooring",
      title: "Drywall, Flooring, Tiles",
      description: "Complete installation and repair of walls, floors, and tiles with professional craftsmanship",
      icon: Building,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      features: [
        "Drywall installation and repair",
        "Flooring installation (hardwood, laminate, vinyl)",
        "Tile installation (floor, wall, backsplash)",
        "Grout repair and replacement",
        "Subfloor preparation and leveling",
        "Wall texture matching",
        "Soundproofing installation"
      ],
      duration: "2-7 days depending on project scope",
      price: "Starting from $85 per hour",
      benefits: [
        "Professional installation techniques",
        "Proper substrate preparation",
        "Pattern and layout expertise",
        "Long-lasting results"
      ]
    },
    {
      id: "furniture",
      title: "Furniture Assembly",
      description: "Professional furniture assembly and installation services for all types of furniture",
      icon: Hammer,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      features: [
        "Furniture assembly (IKEA, custom, antique)",
        "TV mounting and installation",
        "Shelving and storage installation",
        "Cabinet assembly and installation",
        "Appliance installation",
        "Picture and mirror hanging",
        "Curtain rod installation"
      ],
      duration: "1-4 hours depending on complexity",
      price: "Starting from $65 per hour",
      benefits: [
        "Proper tool usage",
        "Assembly expertise",
        "Installation safety",
        "Professional finish"
      ]
    },
    {
      id: "fence",
      title: "Fence Repair",
      description: "Complete fence repair and maintenance services to restore and enhance your property",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      features: [
        "Fence post replacement",
        "Board and picket repair",
        "Gate repair and installation",
        "Fence staining and sealing",
        "Structural reinforcement",
        "New fence installation",
        "Fence line clearing and preparation"
      ],
      duration: "1-3 days depending on scope",
      price: "Starting from $75 per hour",
      benefits: [
        "Structural integrity",
        "Weather-resistant finishes",
        "Proper post setting",
        "Professional appearance"
      ]
    },
    {
      id: "gutter-roof",
      title: "Gutter and Roof Soffit",
      description: "Professional gutter cleaning and roof soffit maintenance services",
      icon: Building,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      features: [
        "Gutter cleaning and maintenance",
        "Soffit repair and replacement",
        "Fascia board repair",
        "Downspout installation",
        "Gutter guard installation",
        "Roof edge maintenance",
        "Water damage prevention"
      ],
      duration: "2-6 hours depending on property size",
      price: "Starting from $120 per visit",
      benefits: [
        "Prevent water damage",
        "Extend roof life",
        "Professional safety",
        "Complete maintenance"
      ]
    },
    {
      id: "pressure-washing",
      title: "Pressure Washing",
      description: "Professional pressure washing services for all exterior surfaces",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      features: [
        "House exterior washing",
        "Driveway and walkway cleaning",
        "Deck and patio cleaning",
        "Fence cleaning",
        "Roof cleaning (soft wash)",
        "Commercial building cleaning",
        "Equipment and vehicle cleaning"
      ],
      duration: "2-8 hours depending on surface area",
      price: "Starting from $150 per project",
      benefits: [
        "Restore original appearance",
        "Remove harmful contaminants",
        "Increase property value",
        "Professional equipment"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Concrete, Caulking, Sealing",
      description: "Professional concrete work, caulking, and sealing services",
      icon: Droplets,
      features: ["Concrete repair", "Caulking application", "Sealant application", "Waterproofing"]
    },
    {
      title: "Electrical Work",
      description: "Basic electrical repairs and installations",
      icon: Drill,
      features: ["Fixture installation", "Outlet replacement", "Switch installation", "Basic wiring"]
    },
    {
      title: "Plumbing Repairs",
      description: "Minor plumbing repairs and maintenance",
      icon: Droplets,
      features: ["Faucet replacement", "Drain cleaning", "Pipe repair", "Fixture installation"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Home Improvement Services
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              A well-maintained home or business is the foundation for a better life. Get your service all around your house from one single source.
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                All Around Improvement
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From painting and drywall to fence repair and pressure washing, we handle all your home improvement needs with professional quality and attention to detail.
              </p>
            </div>

            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-brand-navy">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-brand-navy mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-brand-turquoise" />
                          Services Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-brand-turquoise rounded-full mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-brand-turquoise" />
                          <div>
                            <p className="font-semibold text-brand-navy">Duration</p>
                            <p className="text-sm text-muted-foreground">{service.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-brand-turquoise" />
                          <div>
                            <p className="font-semibold text-brand-navy">Pricing</p>
                            <p className="text-sm text-muted-foreground">{service.price}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link to="/contact">
                          <Button 
                            variant="white-on-dark"
                            size="lg"
                          >
                            Get Quote
                          </Button>
                        </Link>
                        <Link to="/contact">
                          <Button 
                            variant="outline-white" 
                            size="lg"
                          >
                            Book Service
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="relative">
                        <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-soft">
                          <div className="w-full h-full bg-gradient-to-br from-brand-turquoise/20 to-brand-navy/20 flex items-center justify-center">
                            <service.icon className="w-24 h-24 text-brand-turquoise/60" />
                          </div>
                        </div>
                        
                        {/* Benefits overlay */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-soft max-w-xs">
                          <h5 className="font-semibold text-brand-navy mb-3">Why Choose Us:</h5>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Star className="w-3 h-3 text-brand-turquoise flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We also offer specialized services to complete your home improvement projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <Card 
                  key={service.title}
                  className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2"
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
                    
                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-turquoise flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button 
                        variant="white-on-dark"
                        size="lg"
                        className="w-full group"
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to improve your home?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our experienced team is ready to transform your space with professional quality workmanship.
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

export default HomeImprovement;
