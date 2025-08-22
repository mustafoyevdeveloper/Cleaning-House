import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Star, 
  Shield, 
  CheckCircle,
  Phone,
  Facebook,
  Instagram,
  Menu,
  Leaf,
  Building,
  MapPin,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "@/lib/api";

const AboutUs = () => {
  const { data: settings, isLoading: settingsLoading } = useQuery({ queryKey: ['settings'], queryFn: getSettings });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

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
      {/* Custom Header for AboutUs - White Background */}
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
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                {/* <img src="Logo.png" alt="WE MAKE CLEAN FEEL FRESH" className="w-12 h-12" /> */}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-brand-navy">{settings?.siteName || 'FreshC'}</h1>
                  <Leaf className="w-5 h-5 text-blue-green-500" />
                </div>
                <p className="text-sm text-muted-foreground">WE MAKE CLEAN FEEL FRESH</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 justify-center flex-1">
              <Link to="/" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Home</Link>
              <Link to="/about-us" className="text-brand-turquoise font-medium">About Us</Link>
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
              className={`lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 relative z-50 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
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
                    className={`block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform ${pathname === "/" ? "text-brand-turquoise bg-brand-turquoise/10" : "text-gray-700 md:hover:text-brand-turquoise"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about-us"
                    className={`block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform ${pathname === "/about-us" ? "text-brand-turquoise bg-brand-turquoise/10" : "text-gray-700 md:hover:text-brand-turquoise"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/residential-cleaning"
                    className={`block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform ${pathname === "/residential-cleaning" ? "text-brand-turquoise bg-brand-turquoise/10" : "text-gray-700 md:hover:text-brand-turquoise"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Residential Cleaning
                  </Link>
                  <Link
                    to="/commercial-cleaning"
                    className={`block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform ${pathname === "/commercial-cleaning" ? "text-brand-turquoise bg-brand-turquoise/10" : "text-gray-700 md:hover:text-brand-turquoise"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Commercial Cleaning
                  </Link>
                  <Link
                    to="/contact"
                    className={`block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform ${pathname === "/contact" ? "text-brand-turquoise bg-brand-turquoise/10" : "text-gray-700 md:hover:text-brand-turquoise"}`}
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
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed animate-fade-in">
              All Around Your House - Your trusted partner for professional cleaning and maintenance services
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Our Story Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-brand-navy mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {settingsLoading ? (
                      <div className="animate-pulse">
                        <div className="h-4 bg-gray-200 rounded mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    ) : (
                      <p className="break-words lg:break-normal">
                        {settings?.aboutUs?.ourStory || 'Founded in 2018, All Around Your House began with a simple mission: to provide exceptional cleaning and maintenance services that make homes and businesses shine. What started as a small local operation has grown into a trusted name in the Dallas-Fort Worth metroplex. Our journey has been driven by a commitment to quality, reliability, and customer satisfaction. We understand that every space is unique, and we\'ve developed our services to meet the diverse needs of our community. Today, we\'re proud to serve hundreds of satisfied customers across DFW, maintaining the same dedication to excellence that inspired us from the beginning.'}
                      </p>
                    )}
                  </div>
                </div>
                <div className="bg-gradient-hero p-4 sm:p-8 rounded-2xl text-white text-center relative overflow-hidden min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
                  {settings?.aboutUs?.images?.blueBoxImage ? (
                    <div className="absolute inset-0">
                      <img 
                        src={settings.aboutUs.images.blueBoxImage} 
                        alt="Blue Box Background" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Building className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    {settingsLoading ? (
                      <div className="animate-pulse">
                        <div className="h-8 bg-white/20 rounded mb-3 w-3/4 mx-auto"></div>
                        <div className="h-4 bg-white/20 rounded w-2/3 mx-auto"></div>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold mb-3">{settings?.aboutUs?.blueBox?.title || 'Serving DFW Since 2018'}</h3>
                        <p className="text-brand-cream">{settings?.aboutUs?.blueBox?.subtitle || 'Over 5 years of excellence in cleaning and maintenance services'}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Mission & Values Section - Now with proper z-index */}
        <div className="relative z-10 bg-brand-cream">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Mission & Values
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our core principles guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Quality First</h3>
                  <p className="text-muted-foreground">We never compromise on the quality of our services or products</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Trust & Reliability</h3>
                  <p className="text-muted-foreground">Building lasting relationships through consistent, dependable service</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Customer Focus</h3>
                  <p className="text-muted-foreground">Your satisfaction is our top priority in every interaction</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Certifications Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Certifications, Insurance & License
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're fully licensed, bonded, and insured for your peace of mind
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Licensed</h3>
                  <p className="text-muted-foreground text-sm">State-licensed cleaning and maintenance services</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Bonded</h3>
                  <p className="text-muted-foreground text-sm">Bonded for your financial protection</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Insured</h3>
                  <p className="text-muted-foreground text-sm">Fully insured for liability coverage</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Certified</h3>
                  <p className="text-muted-foreground text-sm">Industry-certified cleaning professionals</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Meet the Team Section - Now with proper z-index */}
        <div className="relative z-10 bg-brand-cream">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Meet the Team
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our dedicated professionals are committed to delivering exceptional service
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Management Team</h3>
                  <p className="text-muted-foreground">Experienced leaders guiding our operations</p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Cleaning Specialists</h3>
                  <p className="text-muted-foreground">Trained professionals in all cleaning services</p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Support Staff</h3>
                  <p className="text-muted-foreground">Customer service and administrative support</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Service Areas Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Service Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We proudly serve the Dallas-Fort Worth metroplex and surrounding areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <MapPin className="w-12 h-12 text-brand-turquoise mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Dallas</h3>
                <p className="text-muted-foreground">Downtown, Uptown, Oak Lawn, Lakewood</p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <MapPin className="w-12 h-12 text-brand-turquoise mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Fort Worth</h3>
                <p className="text-muted-foreground">Cultural District, West 7th, TCU Area</p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <MapPin className="w-12 h-12 text-brand-turquoise mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Suburbs</h3>
                <p className="text-muted-foreground">Plano, Irving, Arlington, Grapevine</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Now with proper z-index and margin */}
        <div className="relative z-10 bg-gradient-hero text-white mb-0">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to work with us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our services and get a free consultation
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
                    Contact Us
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

export default AboutUs;
