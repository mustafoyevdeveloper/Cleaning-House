import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
        <Services />
        <Contact />
        
        {/* Quick Navigation Section */}
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Quick Navigation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find what you're looking for quickly with our organized service categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
              <Link to="/cleaning-services" className="group">
                <div className="bg-white p-2 md:p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-base md:text-2xl font-bold">🧹</span>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-brand-navy mb-1 md:mb-2">Cleaning Services</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">Professional cleaning for homes and businesses</p>
                </div>
              </Link>

              <Link to="/home-improvement" className="group">
                <div className="bg-white p-2 md:p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-base md:text-2xl font-bold">🔨</span>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-brand-navy mb-1 md:mb-2">Home Improvement</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">Repairs, maintenance, and upgrades</p>
                </div>
              </Link>

              <Link to="/interior-design" className="group">
                <div className="bg-white p-2 md:p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-base md:text-2xl font-bold">🎨</span>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-brand-navy mb-1 md:mb-2">Interior Design</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">Transform your space with expert design</p>
                </div>
              </Link>

              <Link to="/real-estate-services" className="group">
                <div className="bg-white p-2 md:p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-base md:text-2xl font-bold">🏠</span>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-brand-navy mb-1 md:mb-2">Real Estate</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">Property management and consulting</p>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button 
                  size="xl" 
                  variant="white-on-dark"
                  className="px-8 py-4"
                >
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

export default Index;
