import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Sparkles, 
  Home, 
  Paintbrush, 
  Building, 
  MoveRight, 
  Star,
  Hammer,
  Wrench,
  Palette,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "@/lib/api";

const Services = () => {
  const { data: settings } = useQuery({ queryKey: ['settings'], queryFn: getSettings });
  const cleaningServices = [
    {
      title: "Standard & Deep Cleaning",
      description: "Thorough cleaning for every room in your home or office",
      icon: Sparkles,
      details: {
        overview: "Our standard and deep cleaning services ensure every corner of your space is spotless and sanitized.",
        services: [
          "Dusting all surfaces and furniture",
          "Vacuuming and mopping all floors",
          "Kitchen deep cleaning (appliances, counters, cabinets)",
          "Bathroom sanitization and cleaning",
          "Bedroom and living area organization",
          "Window and mirror cleaning",
          "Trash removal and fresh linens"
        ],
        duration: "2-4 hours depending on size",
        price: "Starting from $120"
      }
    },
    {
      title: "Vacation Rentals & Airbnb",
      description: "Professional cleaning services for short-term rentals",
      icon: Building,
      details: {
        overview: "Specialized cleaning service designed for vacation rentals and Airbnb properties to ensure 5-star guest experiences.",
        services: [
          "Full turnover cleaning between guests",
          "Linen and towel replacement",
          "Kitchen and bathroom deep sanitization",
          "Inventory checking and restocking",
          "Quality inspection and photo documentation",
          "Same-day service available",
          "24/7 emergency cleaning support"
        ],
        duration: "1-3 hours per turnover",
        price: "Starting from $80 per turnover"
      }
    },
    {
      title: "Small Business Cleaning", 
      description: "Keep your workspace clean and professional",
      icon: Building,
      details: {
        overview: "Professional commercial cleaning services to maintain a clean, healthy, and productive work environment.",
        services: [
          "Office space cleaning and organization",
          "Reception area and common spaces",
          "Kitchen and break room sanitization",
          "Restroom cleaning and restocking",
          "Floor care (carpet and hard surfaces)",
          "Trash removal and recycling",
          "Regular maintenance schedules available"
        ],
        duration: "2-6 hours depending on size",
        price: "Starting from $150 per visit"
      }
    },
    {
      title: "Residential Cleaning",
      description: "Regular home cleaning services tailored to your needs",
      icon: Home,
      details: {
        overview: "Customized residential cleaning services to keep your home consistently clean and comfortable.",
        services: [
          "Weekly, bi-weekly, or monthly service",
          "Customized cleaning checklist",
          "All room cleaning and maintenance",
          "Seasonal deep cleaning options",
          "Pet-friendly cleaning products",
          "Flexible scheduling",
          "Trusted and insured cleaners"
        ],
        duration: "2-5 hours per visit",
        price: "Starting from $100 per visit"
      }
    },
    {
      title: "Move-In Move-Out",
      description: "Complete cleaning for moving transitions",
      icon: MoveRight,
      details: {
        overview: "Comprehensive cleaning service for properties during move-in or move-out transitions.",
        services: [
          "Complete property deep cleaning",
          "Cabinet and drawer cleaning inside/out",
          "Appliance cleaning and sanitization",
          "Floor care and carpet cleaning",
          "Window and fixture cleaning",
          "Wall washing and baseboard cleaning",
          "Final walkthrough and inspection"
        ],
        duration: "4-8 hours depending on property size",
        price: "Starting from $200"
      }
    },
    {
      title: "Special Cleaning Services",
      description: "Customized cleaning solutions for unique needs",
      icon: Star,
      details: {
        overview: "Specialized cleaning services for unique situations and specific requirements.",
        services: [
          "Post-construction cleaning",
          "Event cleanup services",
          "Hoarding situation cleanup",
          "Biohazard and trauma cleaning",
          "Carpet and upholstery cleaning",
          "Pressure washing services",
          "Custom cleaning projects"
        ],
        duration: "Varies by project scope",
        price: "Custom pricing based on requirements"
      }
    }
  ];

  const improvementServices = [
    {
      title: "Painting & Wallpapering",
      description: "Professional painting and wallpaper installation services",
      icon: Paintbrush,
      details: {
        overview: "Expert painting and wallpaper services to transform your space with beautiful colors and patterns.",
        services: [
          "Interior and exterior painting",
          "Wallpaper installation and removal",
          "Color consultation and selection",
          "Surface preparation and priming",
          "Trim and detail painting",
          "Cabinet and furniture refinishing",
          "Quality finish and cleanup"
        ],
        duration: "1-5 days depending on scope",
        price: "Starting from $300"
      }
    },
    {
      title: "Drywall & Flooring",
      description: "Complete installation and repair of walls, floors, and tiles",
      icon: Building,
      details: {
        overview: "Professional drywall and flooring installation services for new construction and renovations.",
        services: [
          "Drywall installation and repair",
          "Flooring installation (hardwood, laminate, tile)",
          "Tile work and grouting",
          "Wall and ceiling repairs",
          "Subfloor preparation",
          "Trim and molding installation",
          "Final finishing and sealing"
        ],
        duration: "2-7 days depending on project size",
        price: "Starting from $500"
      }
    },
    {
      title: "Furniture Assembly",
      description: "Professional furniture assembly and installation",
      icon: Hammer,
      details: {
        overview: "Expert furniture assembly services to save you time and ensure proper installation.",
        services: [
          "Furniture assembly and setup",
          "TV mounting and installation",
          "Cabinet and shelf installation",
          "Appliance installation",
          "Picture and mirror hanging",
          "Curtain rod installation",
          "Assembly instruction assistance"
        ],
        duration: "1-4 hours depending on complexity",
        price: "Starting from $80"
      }
    },
    {
      title: "Fence Repair & Maintenance",
      description: "Complete fence repair and maintenance services",
      icon: Wrench,
      details: {
        overview: "Professional fence repair and maintenance to keep your property secure and beautiful.",
        services: [
          "Fence repair and replacement",
          "Gate installation and repair",
          "Fence staining and sealing",
          "Post replacement and reinforcement",
          "Fence cleaning and maintenance",
          "Security fence installation",
          "Regular maintenance programs"
        ],
        duration: "1-3 days depending on scope",
        price: "Starting from $200"
      }
    },
    {
      title: "Gutter & Roof Maintenance",
      description: "Gutter cleaning and roof soffit maintenance",
      icon: Building,
      details: {
        overview: "Essential gutter and roof maintenance services to protect your home from water damage.",
        services: [
          "Gutter cleaning and repair",
          "Roof soffit maintenance",
          "Downspout installation",
          "Gutter guard installation",
          "Roof leak detection",
          "Preventive maintenance",
          "Emergency repair services"
        ],
        duration: "2-6 hours depending on property size",
        price: "Starting from $150"
      }
    },
    {
      title: "Pressure Washing",
      description: "Professional pressure washing for all surfaces",
      icon: Sparkles,
      details: {
        overview: "Professional pressure washing services to restore the beauty of your home's exterior surfaces.",
        services: [
          "House exterior washing",
          "Driveway and walkway cleaning",
          "Deck and patio cleaning",
          "Fence and gate cleaning",
          "Commercial building cleaning",
          "Roof cleaning and treatment",
          "Eco-friendly cleaning options"
        ],
        duration: "2-8 hours depending on surface area",
        price: "Starting from $120"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-service overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 max-w-full">
        {/* Main Services Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            All around your house - Complete Home Improvement and Cleaning Services from a Single Source
          </p>
        </div>

        {/* Cleaning Services Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              All Around Cleaning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enjoy a perfectly clean space, whether it's your home or your office. Our unique cleaning concept ensures that every room is cleaned thoroughly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
            {cleaningServices.map((service, index) => (
              <Dialog key={service.title}>
                <DialogTrigger asChild>
                  <Card 
                    className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="text-center pb-2 md:pb-4">
                      <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                        <service.icon className="w-4 h-4 md:w-8 md:h-8 text-white" />
                      </div>
                      <CardTitle className="text-sm md:text-xl font-bold text-brand-navy">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground mb-3 md:mb-6 leading-relaxed text-xs md:text-base">
                        {service.description}
                      </CardDescription>
                      <Button 
                        variant="default"
                        size="sm"
                        className="w-full bg-brand-turquoise hover:bg-brand-turquoise-dark text-white shadow-sm"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] md:max-w-2xl max-h-[80vh] overflow-y-auto overflow-x-hidden">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-xl md:text-2xl text-brand-navy">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <span className="break-words">{service.title}</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 md:space-y-6 pt-4">
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {service.details.overview}
                    </p>
                    
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-brand-navy mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                        Services Included:
                      </h3>
                      <ul className="space-y-2">
                        {service.details.services.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                            <div className="w-2 h-2 bg-brand-turquoise rounded-full mt-2 flex-shrink-0" />
                            <span className="break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy text-sm md:text-base">Duration</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{service.details.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 md:w-5 md:h-5 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy text-sm md:text-base">Pricing</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{service.details.price}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Link to="/contact" className="w-full sm:w-auto">
                        <Button 
                          variant="brand-outline" 
                          size="lg"
                          className="w-full"
                        >
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/cleaning-services">
              <Button variant="white-on-dark" size="xl">
                View All Cleaning Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Home Improvement Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              All Around Improvement
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A well-maintained home or business is the foundation for a better life. Get your service all around your house from one single source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
            {improvementServices.map((service, index) => (
              <Dialog key={service.title}>
                <DialogTrigger asChild>
                  <Card 
                    className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft cursor-pointer"
                    style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                  >
                    <CardHeader className="text-center pb-2 md:pb-4">
                      <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                        <service.icon className="w-4 h-4 md:w-8 md:h-8 text-white" />
                      </div>
                      <CardTitle className="text-sm md:text-xl font-bold text-brand-navy">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground mb-3 md:mb-6 leading-relaxed text-xs md:text-base">
                        {service.description}
                      </CardDescription>
                      <Button 
                        variant="default"
                        size="sm"
                        className="w-full bg-brand-turquoise hover:bg-brand-turquoise-dark text-white shadow-sm"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] md:max-w-2xl max-h-[80vh] overflow-y-auto overflow-x-hidden">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-xl md:text-2xl text-brand-navy">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <span className="break-words">{service.title}</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 md:space-y-6 pt-4">
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {service.details.overview}
                    </p>
                    
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-brand-navy mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                        Services Included:
                      </h3>
                      <ul className="space-y-2">
                        {service.details.services.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                            <div className="w-2 h-2 bg-brand-turquoise rounded-full mt-2 flex-shrink-0" />
                            <span className="break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy text-sm md:text-base">Duration</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{service.details.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 md:w-5 md:h-5 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy text-sm md:text-base">Pricing</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{service.details.price}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button 
                        variant="brand"
                        size="lg"
                        className="w-full sm:w-auto"
                        onClick={() => {
                          const telegramLink = settings?.social?.telegram;
                          if (telegramLink) {
                            window.open(telegramLink, '_blank');
                          } else {
                            alert('Telegram link not configured. Please contact admin.');
                          }
                        }}
                      >
                        Book This Service
                      </Button>
                      <Link to="/contact" className="w-full sm:w-auto">
                        <Button 
                          variant="brand-outline" 
                          size="lg"
                          className="w-full"
                        >
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/home-improvement">
              <Button variant="white-on-dark" size="xl">
                View All Home Improvement Services
              </Button>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-0">
          <h2 className="text-4xl font-bold text-brand-navy mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Contact us today for a free consultation and quote. Our experienced team is ready to help with all your home improvement and cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button 
                variant="white-on-dark"
                size="lg"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;