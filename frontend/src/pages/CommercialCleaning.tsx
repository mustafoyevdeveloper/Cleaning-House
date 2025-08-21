import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  ShoppingBag, 
  Heart, 
  ChefHat,
  Hammer,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const CommercialCleaning = () => {
  const commercialServices = [
    {
      title: "Office Cleaning",
      description: "Professional office cleaning to maintain a productive work environment",
      icon: Building,
      features: [
        "Workstation and desk cleaning",
        "Conference room preparation",
        "Reception area maintenance",
        "Kitchen and break room sanitization",
        "Restroom cleaning and restocking",
        "Floor care and carpet cleaning",
        "Trash removal and recycling"
      ],
      duration: "2-8 hours depending on size",
      price: "Starting from $150",
      bestFor: "Corporate offices and professional spaces"
    },
    {
      title: "Retail Cleaning",
      description: "Comprehensive cleaning for retail stores and shopping centers",
      icon: ShoppingBag,
      features: [
        "Sales floor cleaning and maintenance",
        "Fitting room sanitization",
        "Display case and fixture cleaning",
        "Entrance and exit area cleaning",
        "Storage room organization",
        "Restroom maintenance",
        "After-hours deep cleaning"
      ],
      duration: "2-6 hours depending on store size",
      price: "Starting from $120",
      bestFor: "Retail stores and shopping centers"
    },
    {
      title: "Medical/Clinic Cleaning",
      description: "Specialized cleaning for healthcare facilities with strict hygiene standards",
      icon: Heart,
      features: [
        "Exam room sanitization",
        "Waiting area disinfection",
        "Medical equipment cleaning",
        "Restroom deep sanitization",
        "Floor and surface disinfection",
        "Biohazard safety protocols",
        "HIPAA compliance cleaning"
      ],
      duration: "3-8 hours depending on facility size",
      price: "Starting from $200",
      bestFor: "Medical offices, clinics, and healthcare facilities"
    },
    {
      title: "Restaurant Cleaning",
      description: "Comprehensive cleaning for food service establishments",
      icon: ChefHat,
      features: [
        "Kitchen deep cleaning and sanitization",
        "Dining area maintenance",
        "Equipment and appliance cleaning",
        "Floor and surface sanitization",
        "Restroom cleaning and restocking",
        "Grease trap maintenance",
        "Health code compliance cleaning"
      ],
      duration: "4-10 hours depending on restaurant size",
      price: "Starting from $250",
      bestFor: "Restaurants, cafes, and food service businesses"
    },
    {
      title: "Post-construction Cleaning",
      description: "Thorough cleaning after construction or renovation projects",
      icon: Hammer,
      features: [
        "Construction debris removal",
        "Dust and particle cleanup",
        "Surface preparation and cleaning",
        "Window and glass cleaning",
        "Floor and wall cleaning",
        "HVAC system cleaning",
        "Final inspection and touch-ups"
      ],
      duration: "4-12 hours depending on project scope",
      price: "Starting from $300",
      bestFor: "Post-construction and renovation cleanup"
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
              Commercial Cleaning
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              Professional commercial cleaning services to maintain clean, healthy, and productive business environments.
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Our Commercial Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Specialized cleaning solutions designed for businesses of all sizes and industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialServices.map((service, index) => (
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

                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy text-sm">Duration</p>
                          <p className="text-xs text-muted-foreground">{service.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy text-sm">Price</p>
                          <p className="text-xs text-muted-foreground">{service.price}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-brand-turquoise font-semibold">
                        Best for: {service.bestFor}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="white-on-dark"
                        size="lg"
                        className="flex-1"
                      >
                        Get Quote
                      </Button>
                      <Button 
                        variant="brand" 
                        size="lg"
                        className="flex-1"
                      >
                        Book Service
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Why Choose Us for Commercial Cleaning?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We understand the unique cleaning needs of businesses and provide reliable, professional services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Experienced Team</h3>
                <p className="text-muted-foreground">Trained professionals with commercial cleaning expertise</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Licensed & Insured</h3>
                <p className="text-muted-foreground">Fully licensed, bonded, and insured for your protection</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Flexible Scheduling</h3>
                <p className="text-muted-foreground">After-hours and weekend cleaning to minimize business disruption</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to improve your business environment?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our experienced team is ready to help your business shine.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button 
                  variant="white-on-dark"
                  size="lg"
                >
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline-white" 
                  size="lg"
                >
                  Schedule Service
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

export default CommercialCleaning;
