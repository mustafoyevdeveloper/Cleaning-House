import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Users, Home, Building, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image - Fixed Position */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/60 to-brand-navy/40"></div>
            <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ALL AROUND{" "}
              <span className="text-brand-turquoise block">YOUR HOUSE</span>
            </h1>

            <div className="w-24 h-1 bg-brand-turquoise mx-auto mb-6"></div>

            <p className="text-xl md:text-2xl mb-8 text-brand-cream">
              FROM A SINGLE SOURCE!
            </p>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Home Improvement and Cleaning Services in the Greater Tampa Bay Area.
            </p>

            {/* Service Highlights */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-brand-turquoise" />
                <span className="text-white font-medium">Handyman</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-brand-turquoise" />
                <span className="text-white font-medium">Maintenance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-brand-turquoise" />
                <span className="text-white font-medium">Cleaning</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button
                  size="xl"
                  variant="white-on-dark"
                  className="px-8 py-4"
                >
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/residential-cleaning">
                <Button
                  size="xl"
                  variant="outline-white"
                  className="px-8 py-4"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
              <span className="text-sm">Scroll</span>
            </div>
          </div>
        </section>

        {/* Contact Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
          <Contact />
        </div>

        {/* Quick Navigation Section - Now with proper z-index */}
        <div className="relative z-10 bg-brand-cream">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Quick Navigation
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore our services and get in touch with us
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link to="/about-us" className="group">
                  <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-turquoise transition-colors">
                      About Us
                    </h3>
                    <p className="text-muted-foreground">
                      Learn about our company story, mission, and team
                    </p>
                  </div>
                </Link>

                <Link to="/residential-cleaning" className="group">
                  <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-turquoise transition-colors">
                      Residential Cleaning
                    </h3>
                    <p className="text-muted-foreground">
                      Professional home cleaning services
                    </p>
                  </div>
                </Link>

                <Link to="/commercial-cleaning" className="group">
                  <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-turquoise transition-colors">
                      Commercial Cleaning
                    </h3>
                    <p className="text-muted-foreground">
                      Business and office cleaning solutions
                    </p>
                  </div>
                </Link>

                <Link to="/contact" className="group">
                  <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-turquoise transition-colors">
                      Contact Us
                    </h3>
                    <p className="text-muted-foreground">
                      Get in touch for quotes and consultations
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer - Now with proper z-index */}
      <div className="relative z-10 bg-brand-navy">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
