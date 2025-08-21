import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
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
  Users,
  Phone,
  Facebook,
  Instagram,
  Menu,
  Leaf,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Custom Header for CommercialCleaning - White Background */}
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
              <Link to="/residential-cleaning" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Residential Cleaning</Link>
              <Link to="/commercial-cleaning" className="text-brand-turquoise font-medium">Commercial Cleaning</Link>
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
            <div className="lg:hidden bg-white/95 backdrop-blur-sm mt-4 rounded-xl shadow-2xl border border-gray-200/50 mx-4">
              <div className="py-6">
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
              Commercial Cleaning
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              Professional commercial cleaning services to maintain clean, healthy, and productive business environments.
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
                      <BeforeAfterSlider
                        beforeImageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                        afterImageUrl="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop"
                        className="mb-4"
                      />
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
        </div>

        {/* CTA Section - Now with proper z-index */}
        <div className="relative z-10 bg-gradient-hero text-white">
          <section className="py-20">
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommercialCleaning;
