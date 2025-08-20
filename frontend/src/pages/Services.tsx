import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

const Services = () => {
  const cleaningServices = [
    {
      title: "Standard & Deep Cleaning",
      description: "Thorough cleaning for every room in your home or office",
      icon: Sparkles,
      href: "/cleaning-services#standard-cleaning",
      features: ["Dusting all surfaces", "Floor care", "Kitchen deep cleaning", "Bathroom sanitization"]
    },
    {
      title: "Vacation Rentals & Airbnb",
      description: "Professional cleaning services for short-term rentals",
      icon: Building,
      href: "/cleaning-services#vacation-rentals",
      features: ["Full turnover cleaning", "Linen replacement", "Quality inspection", "24/7 support"]
    },
    {
      title: "Small Business Cleaning", 
      description: "Keep your workspace clean and professional",
      icon: Building,
      href: "/cleaning-services#business-cleaning",
      features: ["Office cleaning", "Common spaces", "Kitchen sanitization", "Regular schedules"]
    },
    {
      title: "Residential Cleaning",
      description: "Regular home cleaning services tailored to your needs",
      icon: Home,
      href: "/cleaning-services#residential-cleaning",
      features: ["Customized schedules", "All room cleaning", "Pet-friendly products", "Trusted cleaners"]
    },
    {
      title: "Move-In Move-Out",
      description: "Complete cleaning for moving transitions",
      icon: MoveRight,
      href: "/cleaning-services#move-cleaning",
      features: ["Complete property cleaning", "Appliance cleaning", "Final inspection", "Deep sanitization"]
    },
    {
      title: "Special Cleaning Services",
      description: "Customized cleaning solutions for unique needs",
      icon: Star,
      href: "/cleaning-services#special-cleaning",
      features: ["Post-construction", "Event cleanup", "Hoarding cleanup", "Custom projects"]
    }
  ];

  const improvementServices = [
    {
      title: "Painting and Wallpapering",
      description: "Professional painting and wallpaper installation services",
      icon: Paintbrush,
      href: "/home-improvement#painting",
      features: ["Interior painting", "Exterior painting", "Wallpaper installation", "Color consultation"]
    },
    {
      title: "Drywall, Flooring, Tiles",
      description: "Complete installation and repair of walls, floors, and tiles",
      icon: Building,
      href: "/home-improvement#drywall-flooring",
      features: ["Drywall installation", "Flooring installation", "Tile work", "Repairs"]
    },
    {
      title: "Furniture Assembly",
      description: "Professional furniture assembly and installation",
      icon: Hammer,
      href: "/home-improvement#furniture",
      features: ["Furniture assembly", "Mounting services", "Installation", "Setup"]
    },
    {
      title: "Fence Repair",
      description: "Complete fence repair and maintenance services",
      icon: Wrench,
      href: "/home-improvement#fence",
      features: ["Fence repair", "Maintenance", "Installation", "Staining"]
    },
    {
      title: "Gutter and Roof Soffit",
      description: "Gutter cleaning and roof soffit maintenance",
      icon: Building,
      href: "/home-improvement#gutter-roof",
      features: ["Gutter cleaning", "Soffit repair", "Maintenance", "Installation"]
    },
    {
      title: "Pressure Washing",
      description: "Professional pressure washing for all surfaces",
      icon: Sparkles,
      href: "/home-improvement#pressure-washing",
      features: ["House washing", "Driveway cleaning", "Deck cleaning", "Commercial"]
    }
  ];

  const additionalServices = [
    {
      title: "Interior Design",
      description: "Transform your space with professional design expertise",
      icon: Palette,
      href: "/interior-design",
      features: ["Space planning", "Color consultation", "Furniture selection", "Complete makeovers"]
    },
    {
      title: "Real Estate Services",
      description: "Professional real estate and property management services",
      icon: Building,
      href: "/real-estate-services",
      features: ["Property management", "Maintenance", "Inspections", "Consulting"]
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              All Around Your House - Complete Home Improvement and Cleaning Services from a Single Source
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Cleaning Services Section */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
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

                    <Link to={service.href}>
                      <Button 
                        variant="brand"
                        size="lg"
                        className="w-full group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
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
        </section>

        {/* Home Improvement Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                All Around Improvement
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A well-maintained home or business is the foundation for a better life. Do you have drywall that needs to be installed, or is there a tile cracked? Get your service all around your house from one single source.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {improvementServices.map((service, index) => (
                <Card 
                  key={service.title}
                  className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft"
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

                    <Link to={service.href}>
                      <Button 
                        variant="brand"
                        size="lg"
                        className="w-full group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
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
        </section>

        {/* Additional Services Section */}
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Specialized Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Beyond cleaning and maintenance, we offer specialized services to transform your space and property
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card 
                  key={service.title}
                  className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft"
                  style={{ animationDelay: `${(index + 12) * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-brand-navy">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <ul className="space-y-2 text-muted-foreground">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-turquoise flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={service.href}>
                      <Button 
                        variant="white-on-dark"
                        size="lg"
                        className="w-full group"
                      >
                        Learn More
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
              Ready to get started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our experienced team is ready to help with all your home improvement and cleaning needs.
            </p>
            <div className="flex gap-3 pt-4">
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
