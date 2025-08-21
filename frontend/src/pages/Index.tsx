import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Contact />
        
        {/* Quick Navigation Section */}
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional cleaning and maintenance services for your home and business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
              <Link to="/about-us" className="group">
                <div className="bg-white p-2 md:p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-base md:text-2xl font-bold">🏢</span>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-brand-navy mb-1 md:mb-2">About Us</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">Learn about our company story and values</p>
                </div>
              </Link>

              <Link to="/residential-cleaning" className="group">
                <div className="bg-white p-2 md:p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-base md:text-2xl font-bold">🏠</span>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-brand-navy mb-1 md:mb-2">Residential Cleaning</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">Professional home cleaning services</p>
                </div>
              </Link>

              <Link to="/commercial-cleaning" className="group">
                <div className="bg-white p-2 md:p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-base md:text-2xl font-bold">🏢</span>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-brand-navy mb-1 md:mb-2">Commercial Cleaning</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">Business and office cleaning solutions</p>
                </div>
              </Link>

              <Link to="/contact" className="group">
                <div className="bg-white p-2 md:p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-base md:text-2xl font-bold">📞</span>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-brand-navy mb-1 md:mb-2">Contact Us</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">Get in touch for quotes and service</p>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button 
                  size="xl" 
                  variant="white-on-dark"
                  className="px-8 py-4"
                >
                  Get Free Quote
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

export default Index;
