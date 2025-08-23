import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/60 to-brand-navy/40"></div>
        <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          All around
          <span className="text-brand-turquoise block">your house</span>
        </h1>
        
        <div className="w-24 h-1 bg-brand-turquoise mx-auto mb-6"></div>
        
        <p className="text-xl md:text-2xl mb-8 text-brand-cream">
         
        </p>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Home Improvement and Cleaning Services in the Greater Tampa Bay Area.
        </p>

        {/* Service Highlights */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-brand-turquoise" />
            <span className="text-white font-medium">Residential Cleaning</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-brand-turquoise" />
            <span className="text-white font-medium">Commercial Cleaning</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-brand-turquoise" />
            <span className="text-white font-medium">Apartment Cleaning</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-brand-turquoise" />
            <span className="text-white font-medium">Special Cleaning</span>
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
  );
};

export default Hero;