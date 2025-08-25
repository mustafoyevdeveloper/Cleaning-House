import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { 
  Building,
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
  X,
  Sparkles,
  MapPin
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { listServices, getSettings } from "@/lib/api";
import type { Service, ServiceType } from "@/lib/types";

const CommercialCleaning = () => {
  const [selectedServiceType, setSelectedServiceType] = useState<ServiceType | 'all'>('all');
  
  const { data: commercialServices = [], isLoading, error } = useQuery<Service[]>({
    queryKey: ["services", "commercial"],
    queryFn: () => listServices("commercial"),
  });

  const { data: settings } = useQuery({ queryKey: ['settings'], queryFn: getSettings });

  // Filter services by selected type
  const filteredServices = selectedServiceType === 'all' 
    ? commercialServices 
    : commercialServices.filter(service => service.serviceType === selectedServiceType);

  // Debug logging
  console.log('Commercial Services:', commercialServices);
  console.log('Loading:', isLoading);
  console.log('Error:', error);

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
      {/* Custom Header for CommercialCleaning - White Background */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        {/* Top Contact Bar */}
        <div className="bg-brand-navy text-white py-2 px-4">
          <div className="container mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:469-592-4438" className="hover:text-brand-turquoise transition-colors cursor-pointer">
                  Call us: 469-592-4438
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Cleaning Services in Collin County</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 8am-6pm | Sat-Sun: 9am-4pm</span>
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
            
            {/* Mobile Layout */}
            <div className="md:hidden space-y-2 text-xs">
              {/* First Row: Phone | Social Media */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <a href="tel:469-592-4438" className="truncate hover:text-brand-turquoise transition-colors cursor-pointer">
                    Call us: 469 592 4438
                  </a>
                </div>
                <div className="flex gap-3">
                  {settings?.social?.facebook && (
                    <a href={settings.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-turquoise transition-colors">
                      <Facebook className="w-3 h-3" />
                    </a>
                  )}
                  {settings?.social?.instagram && (
                    <a href={settings.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-turquoise transition-colors">
                      <Instagram className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
              {/* Second Row: Location | Time */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 flex-1 min-w-0">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate text-xs">Collin County</span>
                </div>
                <div className="flex items-center gap-1 flex-1 min-w-0 justify-end">
                  <Clock className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate text-xs">Mon-Fri: 8am-6pm | Sat-Sun: 9am-4pm</span>
                </div>
              </div>
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
                    <h1 className="text-xl font-bold text-brand-navy">FreshC</h1>
                    <img src="/Leaf.png" alt="Leaf" className="w-[18px] h-[18px]" />
                  </div>
                  <p className="text-sm text-muted-foreground">We Make Clean Feel Fresh</p>
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
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-28 sm:py-36 bg-cover bg-center sm:bg-top bg-no-repeat text-white relative" style={{
          backgroundImage: "url('/Commercial.jpg')",
          backgroundPosition: "center center"
        }}>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Commercial Cleaning
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Professional commercial cleaning services to maintain clean, healthy, and productive business environments
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </div>
        </section>

        {/* Services Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                  Our Commercial Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                At FreshCo Cleaning we understand that a clean workspace isn’t just about appearance—it’s about productivity, safety, and a positive impression. Our commercial cleaning services are designed to keep your business environment spotless, professional, and inviting
                </p>
                {/* Service Type Filter as clickable cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
                  {[
                    { key: 'all' as const, label: 'All Services' },
                    { key: 'office-cleaning' as const, label: 'Office Cleaning' },
                    { key: 'retail-cleaning' as const, label: 'Retail Cleaning' },
                    { key: 'medical-clinic-cleaning' as const, label: 'Public & Private' },
                    { key: 'restaurant-cleaning' as const, label: 'Restaurant' },
                    { key: 'post-construction-cleaning' as const, label: 'Post-construction' },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setSelectedServiceType(opt.key)}
                      className={`px-3 py-2 rounded-lg border transition-all text-sm font-medium 
                        ${selectedServiceType === opt.key 
                          ? 'bg-brand-navy text-white border-brand-navy shadow-brand' 
                          : 'bg-white text-brand-navy border-gray-200 hover:border-brand-navy/50 hover:shadow'}
                      `}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Conditional Layout based on filter */}
              {selectedServiceType === 'all' ? (
                // All Services - 2 cards on top, 3 cards below
                <div className="space-y-8">
                {isLoading ? (
                    <div className="text-center py-8">
                    <p className="text-lg text-muted-foreground">Loading services...</p>
                  </div>
                ) : error ? (
                    <div className="text-center py-8">
                    <p className="text-lg text-red-600">Error loading services. Please try again later.</p>
                    <p className="text-sm text-muted-foreground mt-2">Make sure the backend server is running.</p>
                  </div>
                ) : filteredServices.length === 0 ? (
                    <div className="text-center py-8">
                    <p className="text-lg text-muted-foreground">
                      {selectedServiceType === 'all' 
                        ? 'No services available yet. Please add services through the admin panel.'
                        : `No ${selectedServiceType.replace('-', ' ')} services available.`
                      }
                    </p>
                  </div>
                ) : (
                    <>
                      {/* First row - 2 cards */}
                      {filteredServices.length >= 2 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                          {filteredServices.slice(0, 2).map((service: any, index: number) => (
                    <Card 
                      key={service.title}
                      className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      <CardHeader className="text-center pb-4">
                        <BeforeAfterSlider
                          beforeImageUrl={service.images?.before || "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop"}
                          afterImageUrl={service.images?.after || "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"}
                          className="mb-4"
                        />
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-brand-navy">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                                {/* NO DESCRIPTION in All Services view */}
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
                                      <p className="text-xs text-muted-foreground">
                                        {service.price ? (service.price.startsWith('$') ? service.price : `$${service.price}`) : 'N/A'}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <p className="text-sm text-brand-turquoise font-semibold">
                                    Best for: {service.bestFor}
                                  </p>
                                </div>

                                <div className="flex gap-3">
                                  <Link to="/contact#contact-form" className="flex-1">
                                    <Button 
                                      variant="white-on-dark"
                                      size="lg"
                                      className="w-full"
                                    >
                                      Get Quote
                                    </Button>
                                  </Link>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}

                      {/* Second row - 3 cards */}
                      {filteredServices.length >= 3 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {filteredServices.slice(2).map((service: any, index: number) => (
                            <Card 
                              key={service.title}
                              className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft"
                              style={{ animationDelay: `${(index + 2) * 0.08}s` }}
                            >
                              <CardHeader className="text-center pb-4">
                                <BeforeAfterSlider
                                  beforeImageUrl={service.images?.before || "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop"}
                                  afterImageUrl={service.images?.after || "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"}
                                  className="mb-4"
                                />
                                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                                  <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-brand-navy">
                                  {service.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="text-center">
                                {/* NO DESCRIPTION in All Services view */}
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
                                      <p className="text-xs text-muted-foreground">
                                        {service.price ? (service.price.startsWith('$') ? service.price : `$${service.price}`) : 'N/A'}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <p className="text-sm text-brand-turquoise font-semibold">
                                    Best for: {service.bestFor}
                                  </p>
                                </div>

                                <div className="flex gap-3">
                                  <Link to="/contact#contact-form" className="flex-1">
                                    <Button 
                                      variant="white-on-dark"
                                      size="lg"
                                      className="w-full"
                                    >
                                      Get Quote
                                    </Button>
                                  </Link>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}

                      {/* If only 1 service, show it centered */}
                      {filteredServices.length === 1 && (
                        <div className="flex justify-center">
                          <div className="max-w-md">
                            <Card 
                              className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft"
                            >
                              <CardHeader className="text-center pb-4">
                                <BeforeAfterSlider
                                  beforeImageUrl={filteredServices[0].images?.before || "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop"}
                                  afterImageUrl={filteredServices[0].images?.after || "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"}
                                  className="mb-4"
                                />
                                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                                  <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-brand-navy">
                                  {filteredServices[0].title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="text-center">
                                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-brand-turquoise" />
                                    <div>
                                      <p className="font-semibold text-brand-navy text-sm">Duration</p>
                                      <p className="text-xs text-muted-foreground">{filteredServices[0].duration}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-brand-turquoise" />
                                    <div>
                                      <p className="font-semibold text-brand-navy text-sm">Price</p>
                                      <p className="text-xs text-muted-foreground">
                                        {filteredServices[0].price ? (filteredServices[0].price.startsWith('$') ? filteredServices[0].price : `$${filteredServices[0].price}`) : 'N/A'}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <p className="text-sm text-brand-turquoise font-semibold">
                                    Best for: {filteredServices[0].bestFor}
                                  </p>
                        </div>

                                <div className="flex gap-3">
                                  <Link to="/contact#contact-form" className="flex-1">
                                    <Button 
                                      variant="white-on-dark"
                                      size="lg"
                                      className="w-full"
                                    >
                                      Get Quote
                                    </Button>
                                  </Link>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ) : (
                // Filtered Services - Card + Description layout
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Card - Left Side */}
                  <div className="lg:col-span-1">
                    {isLoading ? (
                      <div className="text-center py-8">
                        <p className="text-lg text-muted-foreground">Loading services...</p>
                      </div>
                    ) : error ? (
                      <div className="text-center py-8">
                        <p className="text-lg text-red-600">Error loading services. Please try again later.</p>
                        <p className="text-sm text-muted-foreground mt-2">Make sure the backend server is running.</p>
                      </div>
                    ) : filteredServices.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-lg text-muted-foreground">
                          {`No ${selectedServiceType.replace('-', ' ')} services available.`}
                        </p>
                      </div>
                    ) : (
                      filteredServices.map((service: any, index: number) => (
                        <Card 
                          key={service.title}
                          className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft mb-6"
                          style={{ animationDelay: `${index * 0.08}s` }}
                        >
                          <CardHeader className="text-center pb-4">
                            <BeforeAfterSlider
                              beforeImageUrl={service.images?.before || "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop"}
                              afterImageUrl={service.images?.after || "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"}
                              className="mb-4"
                            />
                            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                              <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <CardTitle className="text-xl font-bold text-brand-navy">
                              {service.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-center">
                            {/* Only basic info in card, no description */}
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
                              <p className="text-xs text-muted-foreground">
                                {service.price ? (service.price.startsWith('$') ? service.price : `$${service.price}`) : 'N/A'}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm text-brand-turquoise font-semibold">
                            Best for: {service.bestFor}
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <Link to="/contact#contact-form" className="flex-1">
                            <Button 
                              variant="white-on-dark"
                              size="lg"
                              className="w-full"
                            >
                              Get Quote
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

                  {/* Service Description - Right Side (Qizil bilan belgilangan joy) */}
                  <div className="lg:col-span-2">
                    {filteredServices.length > 0 && (
                      <div className="bg-white rounded-xl shadow-soft p-8 h-fit sticky top-24">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-brand-navy mb-4">
                            {filteredServices[0]?.title || 'Service Details'}
                          </h3>
                          {/* Description ko'rsatiladi faqat o'ng tomonda */}
                          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            {filteredServices[0]?.description || 'Detailed description of the selected service will appear here.'}
                          </p>
                        </div>

                        {/* Features List */}
                        {filteredServices[0]?.features && filteredServices[0].features.length > 0 && (
                          <div className="mb-8">
                            <h4 className="text-xl font-semibold text-brand-navy mb-4">What's Included:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {filteredServices[0].features.map((feature: string, i: number) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                                  <CheckCircle className="w-5 h-5 text-brand-turquoise flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Service Details */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-brand-navy mb-4">Service Details:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                              <Clock className="w-6 h-6 text-brand-turquoise" />
                              <div>
                                <p className="font-semibold text-brand-navy">Duration</p>
                                <p className="text-sm text-muted-foreground">{filteredServices[0]?.duration || 'Varies'}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                              <Shield className="w-6 h-6 text-brand-turquoise" />
                              <div>
                                <p className="font-semibold text-brand-navy">Price</p>
                                <p className="text-sm text-muted-foreground">
                                  {filteredServices[0]?.price ? (filteredServices[0].price.startsWith('$') ? filteredServices[0].price : `$${filteredServices[0].price}`) : 'Contact for quote'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Best For Section */}
                        {filteredServices[0]?.bestFor && (
                          <div className="mb-8">
                            <h4 className="text-xl font-semibold text-brand-navy mb-4">Best For:</h4>
                            <div className="p-4 bg-brand-turquoise/10 rounded-lg border border-brand-turquoise/20">
                              <p className="text-brand-navy font-medium">{filteredServices[0].bestFor}</p>
                            </div>
                          </div>
                        )}

                        {/* CTA Section */}
                        <div className="text-center">
                          <Link to="/contact#contact-form">
                            <Button 
                              variant="white-on-dark"
                              size="lg"
                              className="w-full mb-3"
                            >
                              Get Free Quote
                            </Button>
                          </Link>
                          <Link to="/contact">
                            <Button 
                              variant="outline"
                              size="lg"
                              className="w-full"
                            >
                              Schedule Service
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
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

        {/* CTA Section - Now with proper z-index and margin */}
        <div className="relative z-10 bg-brand-navy text-white mb-0">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to get started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our trusted professionals deliver expert service to keep your home healthy and spotless
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
