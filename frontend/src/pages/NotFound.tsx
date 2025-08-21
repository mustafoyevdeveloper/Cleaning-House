import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertTriangle className="w-16 h-16 text-brand-cream" />
            </div>
            <h1 className="text-8xl md:text-9xl font-bold mb-6 text-brand-cream">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Page Not Found
            </h2>
            <p className="text-xl md:text-2xl text-brand-cream max-w-3xl mx-auto leading-relaxed mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mb-8"></div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Let us help you find what you're looking for
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Here are some popular pages and services you might be interested in
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Link to="/" className="group">
                <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Home</h3>
                  <p className="text-muted-foreground">Return to our homepage</p>
                </div>
              </Link>

              <Link to="/about-us" className="group">
                <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">About Us</h3>
                  <p className="text-muted-foreground">Learn about our company</p>
                </div>
              </Link>

              <Link to="/residential-cleaning" className="group">
                <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Residential Cleaning</h3>
                  <p className="text-muted-foreground">Home cleaning services</p>
                </div>
              </Link>

              <Link to="/commercial-cleaning" className="group">
                <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Commercial Cleaning</h3>
                  <p className="text-muted-foreground">Business cleaning services</p>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button 
                  variant="white-on-dark"
                  size="xl"
                  className="px-8 py-4"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Need Help? Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              Can't find what you're looking for?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Our team is here to help! Contact us and we'll guide you to the right page or service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button 
                  variant="brand"
                  size="lg"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="brand-outline" 
                  size="lg"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Contact Support
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

export default NotFound;
