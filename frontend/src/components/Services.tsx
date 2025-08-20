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
  Shield
} from "lucide-react";

const Services = () => {
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
      title: "Handyman Services",
      description: "Professional repairs and maintenance for your home",
      icon: Hammer,
      details: {
        overview: "Comprehensive handyman services to fix, repair, and improve your home with professional quality.",
        services: [
          "Plumbing repairs and installations",
          "Electrical work and fixture installation",
          "Drywall repair and painting",
          "Cabinet and door adjustments",
          "Tile and flooring repairs",
          "Furniture assembly and mounting",
          "General home repairs and maintenance"
        ],
        duration: "1-6 hours depending on project",
        price: "Starting from $75 per hour"
      }
    },
    {
      title: "Home Maintenance",
      description: "Regular upkeep to keep your property in top condition",
      icon: Wrench,
      details: {
        overview: "Preventive maintenance services to keep your home in excellent condition and avoid costly repairs.",
        services: [
          "HVAC system maintenance and filter changes",
          "Gutter cleaning and maintenance",
          "Pressure washing exterior surfaces",
          "Caulking and weatherproofing",
          "Seasonal home inspections",
          "Preventive maintenance schedules",
          "Emergency repair services"
        ],
        duration: "2-4 hours per maintenance visit",
        price: "Starting from $120 per visit"
      }
    },
    {
      title: "Interior Design",
      description: "Transform your space with professional design expertise",
      icon: Palette,
      details: {
        overview: "Professional interior design services to create beautiful, functional spaces that reflect your style.",
        services: [
          "Space planning and layout design",
          "Color consultation and paint selection",
          "Furniture selection and arrangement",
          "Window treatment design and installation",
          "Lighting design and installation",
          "Decorative accessories and artwork",
          "Complete room makeovers"
        ],
        duration: "Consultation: 2 hours, Projects: 1-4 weeks",
        price: "Consultation: $150, Projects from $500"
      }
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-service">
      <div className="container mx-auto px-4">
        {/* Cleaning Services Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              All Around Cleaning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enjoy a perfectly clean space, whether it's your home or your office. Our unique cleaning concept ensures that every room is cleaned thoroughly. Experience Cleaning Services all around your house from a single source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaningServices.map((service, index) => (
              <Dialog key={service.title}>
                <DialogTrigger asChild>
                  <Card 
                    className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft cursor-pointer"
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
                      <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <Button 
                        variant="default"
                        className="w-full bg-brand-turquoise hover:bg-brand-turquoise-dark text-white shadow-sm"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl text-brand-navy">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.details.overview}
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-brand-navy mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Services Included:
                      </h3>
                      <ul className="space-y-2">
                        {service.details.services.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-brand-turquoise rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy">Duration</p>
                          <p className="text-sm text-muted-foreground">{service.details.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy">Pricing</p>
                          <p className="text-sm text-muted-foreground">{service.details.price}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button 
                        variant="white-on-dark"
                        size="lg"
                      >
                        Book This Service
                      </Button>
                      <Button 
                        variant="outline-white" 
                        size="lg"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Home Improvement Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              All Around Improvement
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A well-maintained home or business is the foundation for a better life. Do you have drywall that needs to be installed, or is there a tile cracked? Get your service all around your house from one single source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {improvementServices.map((service, index) => (
              <Dialog key={service.title}>
                <DialogTrigger asChild>
                  <Card 
                    className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft cursor-pointer"
                    style={{ animationDelay: `${(index + 6) * 0.1}s` }}
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
                      <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <Button 
                        variant="default"
                        className="w-full bg-brand-turquoise hover:bg-brand-turquoise-dark text-white shadow-sm"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl text-brand-navy">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.details.overview}
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-brand-navy mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Services Included:
                      </h3>
                      <ul className="space-y-2">
                        {service.details.services.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-brand-turquoise rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy">Duration</p>
                          <p className="text-sm text-muted-foreground">{service.details.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy">Pricing</p>
                          <p className="text-sm text-muted-foreground">{service.details.price}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button 
                        variant="brand"
                        size="lg"
                      >
                        Book This Service
                      </Button>
                      <Button 
                        variant="brand-outline" 
                        size="lg"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="xl"
            variant="white-on-dark"
            className="px-12 py-4"
          >
            Get Your Free Estimate Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;