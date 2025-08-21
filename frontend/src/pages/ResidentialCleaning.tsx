import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Home, 
  ArrowRight, 
  Building,
  Star,
  CheckCircle,
  Clock,
  Shield,
  Phone,
  Facebook,
  Instagram,
  Menu,
  Leaf,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const ResidentialCleaning = () => {
  const residentialServices = [
    {
      title: "Standard Cleaning",
      description: "Regular maintenance cleaning to keep your home fresh and tidy",
      icon: Sparkles,
      features: [
        "Dusting all surfaces and furniture",
        "Vacuuming and mopping floors",
        "Kitchen and bathroom cleaning",
        "Trash removal and recycling",
        "Basic organization and tidying",
        "Mirror and glass cleaning"
      ],
      duration: "2-4 hours",
      price: "Starting from $100",
      bestFor: "Weekly or bi-weekly maintenance"
    },
    {
      title: "Deep Cleaning",
      description: "Comprehensive cleaning service for thorough home sanitization",
      icon: Star,
      features: [
        "All standard cleaning services",
        "Deep kitchen appliance cleaning",
        "Cabinet and drawer cleaning inside/out",
        "Baseboard and corner cleaning",
        "Window tracks and sills",
        "Light fixture cleaning",
        "Air vent cleaning"
      ],
      duration: "4-8 hours",
      price: "Starting from $200",
      bestFor: "Monthly deep cleaning or special occasions"
    },
    {
      title: "Move-in/Move-out Cleaning",
      description: "Complete property cleaning for moving transitions",
      icon: ArrowRight,
      features: [
        "Complete property deep cleaning",
        "Cabinet and drawer cleaning inside/out",
        "Appliance cleaning and sanitization",
        "Floor care and carpet cleaning",
        "Window and fixture cleaning",
        "Wall washing and baseboard cleaning",
        "Final walkthrough and inspection"
      ],
      duration: "4-8 hours",
      price: "Starting from $250",
      bestFor: "Moving in or out of properties"
    },
    {
      title: "Apartment Cleaning",
      description: "Specialized cleaning for apartment living spaces",
      icon: Building,
      features: [
        "Compact space optimization",
        "Efficient cleaning techniques",
        "Storage area organization",
        "Balcony and patio cleaning",
        "Entryway and hallway cleaning",
        "Pet-friendly cleaning options",
        "Flexible scheduling"
      ],
      duration: "2-5 hours",
      price: "Starting from $80",
      bestFor: "Apartment residents and renters"
    },
    {
      title: "Specialty Cleaning",
      description: "Customized cleaning solutions for specific needs",
      icon: Star,
      features: [
        "Carpet and upholstery cleaning",
        "Window and blind cleaning",
        "Oven and refrigerator deep cleaning",
        "Microwave and small appliance cleaning",
        "Ceiling fan and light fixture cleaning",
        "Garage and storage cleaning",
        "Custom cleaning projects"
      ],
      duration: "Varies by service",
      price: "Starting from $50 per service",
      bestFor: "Specific cleaning needs and maintenance"
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen">
      {/* Custom Header for ResidentialCleaning - White Background */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        {/* Top Contact Bar */}
        <div className="bg-brand-navy text-white py-2 px-4">
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call us: (727) 992-3578</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-turquoise transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-brand-turquoise transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Bar - White Background */}
        <nav className="bg-white py-4 px-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="Logo.png" alt="FreshC Your House Services" className="w-12 h-12" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-brand-navy">FreshC</h1>
                  <Leaf className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-sm text-muted-foreground">Your House Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 justify-center flex-1">
              <Link to="/" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Home</Link>
              <Link to="/about-us" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">About Us</Link>
              <Link to="/residential-cleaning" className="text-brand-turquoise font-medium">Residential Cleaning</Link>
              <Link to="/commercial-cleaning" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Commercial Cleaning</Link>
              <Link to="/contact" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Contact Us</Link>
            </div>

            {/* GET IN TOUCH Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button variant="white-on-dark" size="sm">
                  GET IN TOUCH
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-sm mt-4 rounded-xl shadow-2xl border border-gray-200/50 mx-4" ref={menuRef}>
              <div className="py-6">
                {/* Close Button */}
                <div className="flex justify-end px-6 mb-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="space-y-1">
                  <Link
                    to="/"
                    className="block px-6 py-4 text-gray-700 hover:text-brand-turquoise hover:bg-gray-50 transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about-us"
                    className="block px-6 py-4 text-gray-700 hover:text-brand-turquoise hover:bg-gray-50 transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/residential-cleaning"
                    className="block px-6 py-4 text-gray-700 hover:text-brand-turquoise hover:bg-gray-50 transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Residential Cleaning
                  </Link>
                  <Link
                    to="/commercial-cleaning"
                    className="block px-6 py-4 text-gray-700 hover:text-brand-turquoise hover:bg-gray-50 transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Commercial Cleaning
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-6 py-4 text-gray-700 hover:text-brand-turquoise hover:bg-gray-50 transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="px-6 pt-6 border-t border-gray-200 mt-4">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="brand" className="w-full py-3">
                      GET IN TOUCH
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Residential Cleaning
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              Professional home cleaning services tailored to your needs. From regular maintenance to deep cleaning, we keep your home spotless and comfortable.
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Services Section - Now with proper z-index */}
        <div className="relative z-10 bg-gradient-service">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                  Our Residential Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Comprehensive cleaning solutions designed specifically for homes and apartments
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {residentialServices.map((service, index) => (
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
        </div>

        {/* Why Choose Us Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Why Choose Us for Residential Cleaning?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We understand that your home is your sanctuary. That's why we provide the highest quality cleaning services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Professional Team</h3>
                  <p className="text-muted-foreground">Trained, insured, and background-checked cleaners</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Eco-Friendly Products</h3>
                  <p className="text-muted-foreground">Safe cleaning products for your family and pets</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">Convenient appointment times that work for you</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section - Now with proper z-index */}
        <div className="relative z-10 bg-gradient-hero text-white">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready for a cleaner home?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Our experienced team is ready to transform your home.
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResidentialCleaning;
