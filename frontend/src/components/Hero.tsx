import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const services = ["Handyman", "Cleaning", "Maintenance"];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful house in Tampa Bay Area"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white animate-fade-in">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              ALL AROUND
              <span className="block text-brand-turquoise">YOUR HOUSE</span>
            </h1>
            <div className="w-24 h-1 bg-brand-turquoise mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-light">FROM A SINGLE SOURCE!</h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Home Improvement and Cleaning Services in the Greater Tampa Bay Area.
          </p>

          {/* Services List */}
          <div className="flex flex-wrap gap-6 mb-10">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-brand-turquoise rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-medium">{service}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button 
                size="xl" 
                variant="white-on-dark"
                className="px-8 py-4 w-full sm:w-auto"
              >
                Get Free Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="xl" 
                variant="outline-white"
                className="px-8 py-4 w-full sm:w-auto"
              >
                Our Services
              </Button>
            </Link>
          </div>
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