import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  Building, 
  MessageCircle,
  ArrowRight,
  Phone,
  Facebook,
  Instagram,
  Menu,
  Leaf,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  Search,
  ArrowLeft,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "@/lib/api";

const NotFound = () => {
  const { data: settings } = useQuery({ queryKey: ['settings'], queryFn: getSettings });
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: settings?.phone || "469-592-4438",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: settings?.email || "info@allaroundyourhouse.com",
      description: "Send us a message anytime"
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: settings?.address || "Dallas-Fort Worth Metroplex",
      description: "Serving the entire DFW area"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 8AM-6PM",
      description: "Weekend appointments available"
    }
  ];

  const services = [
    "Residential Cleaning",
    "Commercial Cleaning", 
    "Standard Cleaning",
    "Deep Cleaning",
    "Move-in/Move-out Cleaning",
    "Apartment Cleaning",
    "Office Cleaning",
    "Retail Cleaning",
    "Medical/Clinic Cleaning",
    "Restaurant Cleaning",
    "Post-construction Cleaning",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      {/* Custom Header for NotFound - White Background */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        {/* Top Contact Bar */}
        <div className="bg-brand-navy text-white py-2 px-4">
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call us: {settings?.phone || '469-592-4438'}</span>
            </div>
            <div className="flex gap-4">
              {settings?.social?.facebook && (
                <a href={settings.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-turquoise transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {settings?.social?.instagram && (
                <a href={settings.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-turquoise transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Bar - White Background */}
        <nav className="bg-white py-4 px-4">
          <div className="container mx-auto flex justify-between items-center">
                          {/* Logo */}
              <Link to="/" className="flex items-center gap-3 ml-[-20px]">
               
                <div>
                  <div className="flex items-center gap-0">
                    <h1 className="text-xl font-bold text-brand-navy">{settings?.siteName || 'FreshC'}</h1>
                    <Leaf className="w-[4.5] h-[4.5] text-blue-green-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">We Make Clean Feel Fresh</p>
                </div>
              </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 justify-center flex-1">
              <Link to="/" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Home</Link>
              <Link to="/about-us" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">About Us</Link>
              <Link to="/residential-cleaning" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Residential Cleaning</Link>
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
              className={`lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 relative z-50 mr-[-30px] ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6 pointer-events-none">
                <div className={`absolute inset-0 transition-all duration-300 pointer-events-none ${isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}>
                  <Menu className="w-6 h-6" />
                </div>
                <div className={`absolute inset-0 transition-all duration-300 pointer-events-none ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}>
                  <X className="w-6 h-6" />
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white/95 backdrop-blur-sm mt-4 rounded-xl shadow-2xl border border-gray-200/50 mx-4 transform transition-all duration-300 ease-in-out" ref={menuRef}>
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
                    className="block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform text-gray-700 hover:text-brand-turquoise"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about-us"
                    className="block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform text-gray-700 hover:text-brand-turquoise"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/residential-cleaning"
                    className="block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform text-gray-700 hover:text-brand-turquoise"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Residential Cleaning
                  </Link>
                  <Link
                    to="/commercial-cleaning"
                    className="block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform text-gray-700 hover:text-brand-turquoise"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Commercial Cleaning
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform text-gray-700 hover:text-brand-turquoise"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="px-6 pt-6 border-t border-gray-200 mt-4">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="brand" className="w-full py-3 transition-all duration-300 hover:scale-105 transform">
                      GET IN TOUCH
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
          <div className="container mx-auto px-4 text-center animate-fade-in">
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
                <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center animate-slide-up" style={{animationDelay: '0s'}}>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Home</h3>
                  <p className="text-muted-foreground">Return to our homepage</p>
                </div>
              </Link>

              <Link to="/about-us" className="group">
                <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center animate-slide-up" style={{animationDelay: '0.08s'}}>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">About Us</h3>
                  <p className="text-muted-foreground">Learn about our company</p>
                </div>
              </Link>

              <Link to="/residential-cleaning" className="group">
                <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center animate-slide-up" style={{animationDelay: '0.16s'}}>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Residential Cleaning</h3>
                  <p className="text-muted-foreground">Home cleaning services</p>
                </div>
              </Link>

              <Link to="/commercial-cleaning" className="group">
                <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 text-center animate-slide-up" style={{animationDelay: '0.24s'}}>
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
