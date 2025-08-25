import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  CheckCircle,
  Facebook,
  Instagram,
  Menu,
  Leaf,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSettings, submitMessage } from "@/lib/api";
import { toast } from "sonner";

const Contact = () => {
  const { data: settings } = useQuery({ queryKey: ['settings'], queryFn: getSettings });

  
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
      description: "Serving all of Collin County"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 8AM-6PM",
      description: "Weekend appointments available"
    }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: '',
    services: [] as string[], // Changed from serviceNeeded to services array
    location: '',
    details: ''
  });

  const submitMut = useMutation({
    mutationFn: submitMessage,
    onSuccess: () => {
      toast.success('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        category: '',
        services: [], // Reset services array
        location: '',
        details: ''
      });
    },
    onError: () => toast.error('Failed to send message'),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least one service is selected
    if (formData.services.length === 0) {
      toast.error('Please select at least one service');
      return;
    }
    
    console.log('Submitting form data:', formData);
    submitMut.mutate({
      ...formData,
      serviceNeeded: formData.services.join(', '), // Convert services array to string for API
      page: 'contact-page'
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
      {/* Custom Header for Contact - White Background */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        {/* Top Contact Bar */}
        <div className="bg-brand-navy text-white py-2 px-4">
          <div className="container mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${settings?.phone || '469-592-4438'}`} className="hover:text-brand-turquoise transition-colors cursor-pointer">
                  Call us: {settings?.phone || '469-592-4438'}
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
                  <a href={`tel:${settings?.phone || '469-592-4438'}`} className="truncate hover:text-brand-turquoise transition-colors cursor-pointer">
                    Call us: {settings?.phone || '469-592-4438'}
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
              <Link to="/contact" className="text-brand-turquoise font-medium">Contact Us</Link>
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
        <section className="py-20 sm:py-28 bg-cover bg-center sm:bg-top bg-no-repeat text-white relative" style={{
          backgroundImage: "url('/Contact.jpg')",
          backgroundPosition: "center center"
        }}>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed animate-fade-in">
                Get in touch with us today for a free consultation and quote. We're here to help with all your cleaning and maintenance needs.
              </p>
              <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
            </div>
          </div>
        </section>

        {/* Contact Information Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Get In Touch
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're here to help and answer any questions you might have
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="text-center hover:shadow-brand transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-brand-navy">
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-brand-turquoise font-semibold text-lg mb-2">
                        {info.value}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Contact Form Section - Now with proper z-index */}
        <div className="relative z-10 bg-white" id="contact-form">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-brand-navy mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <Card className="border-0 shadow-soft">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-brand-navy">
                      Contact Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-brand-navy font-semibold">
                            First Name *
                          </Label>
                          <Input 
                            id="firstName" 
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="Enter your first name"
                            className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-brand-navy font-semibold">
                            Last Name *
                          </Label>
                          <Input 
                            id="lastName" 
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Enter your last name"
                            className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-brand-navy font-semibold">
                            Email Address *
                          </Label>
                          <Input 
                            id="email" 
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="Enter your email address"
                            className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-brand-navy font-semibold">
                            Phone Number *
                          </Label>
                          <Input 
                            id="phone" 
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="Enter your phone number"
                            className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-brand-navy font-semibold">
                            Category *
                          </Label>
                          <Select 
                            value={formData.category} 
                            onValueChange={(value) => {
                              handleInputChange('category', value);
                              // Reset services when category changes
                              setFormData(prev => ({ ...prev, services: [] }));
                            }}
                          >
                            <SelectTrigger className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="residential">Residential Cleaning</SelectItem>
                              <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="services" className="text-brand-navy font-semibold">
                            Services Needed *
                          </Label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {formData.category === 'residential' && (
                              <>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    value="standard-cleaning"
                                    checked={formData.services.includes('standard-cleaning')}
                                    onChange={(e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        services: e.target.checked 
                                          ? [...prev.services, 'standard-cleaning']
                                          : prev.services.filter(s => s !== 'standard-cleaning')
                                      }));
                                    }}
                                    className="h-4 w-4 text-brand-turquoise focus:ring-brand-turquoise border-gray-300 rounded"
                                  />
                                  <span>Standard Cleaning</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    value="deep-cleaning"
                                    checked={formData.services.includes('deep-cleaning')}
                                    onChange={(e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        services: e.target.checked 
                                          ? [...prev.services, 'deep-cleaning']
                                          : prev.services.filter(s => s !== 'deep-cleaning')
                                      }));
                                    }}
                                    className="h-4 w-4 text-brand-turquoise focus:ring-brand-turquoise border-gray-300 rounded"
                                  />
                                  <span>Deep Cleaning</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    value="move-in-out-cleaning"
                                    checked={formData.services.includes('move-in-out-cleaning')}
                                    onChange={(e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        services: e.target.checked 
                                          ? [...prev.services, 'move-in-out-cleaning']
                                          : prev.services.filter(s => s !== 'move-in-out-cleaning')
                                      }));
                                    }}
                                    className="h-4 w-4 text-brand-turquoise focus:ring-brand-turquoise border-gray-300 rounded"
                                  />
                                  <span>Move-in/Move-out Cleaning</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    value="apartment-cleaning"
                                    checked={formData.services.includes('apartment-cleaning')}
                                    onChange={(e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        services: e.target.checked 
                                          ? [...prev.services, 'apartment-cleaning']
                                          : prev.services.filter(s => s !== 'apartment-cleaning')
                                      }));
                                    }}
                                    className="h-4 w-4 text-brand-turquoise focus:ring-brand-turquoise border-gray-300 rounded"
                                  />
                                  <span>Apartment Cleaning</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    value="specialty-cleaning"
                                    checked={formData.services.includes('specialty-cleaning')}
                                    onChange={(e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        services: e.target.checked 
                                          ? [...prev.services, 'specialty-cleaning']
                                          : prev.services.filter(s => s !== 'specialty-cleaning')
                                      }));
                                    }}
                                    className="h-4 w-4 text-brand-turquoise focus:ring-brand-turquoise border-gray-300 rounded"
                                  />
                                  <span>Specialty Cleaning</span>
                                </label>
                              </>
                            )}
                            {formData.category === 'commercial' && (
                              <>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    value="office-cleaning"
                                    checked={formData.services.includes('office-cleaning')}
                                    onChange={(e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        services: e.target.checked 
                                          ? [...prev.services, 'office-cleaning']
                                          : prev.services.filter(s => s !== 'office-cleaning')
                                      }));
                                    }}
                                    className="h-4 w-4 text-brand-turquoise focus:ring-brand-turquoise border-gray-300 rounded"
                                  />
                                  <span>Office Cleaning</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    value="retail-cleaning"
                                    checked={formData.services.includes('retail-cleaning')}
                                    onChange={(e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        services: e.target.checked 
                                          ? [...prev.services, 'retail-cleaning']
                                          : prev.services.filter(s => s !== 'retail-cleaning')
                                      }));
                                    }}
                                    className="h-4 w-4 text-brand-turquoise focus:ring-brand-turquoise border-gray-300 rounded"
                                  />
                                  <span>Retail Cleaning</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    value="medical-clinic-cleaning"
                                    checked={formData.services.includes('medical-clinic-cleaning')}
                                    onChange={(e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        services: e.target.checked 
                                          ? [...prev.services, 'medical-clinic-cleaning']
                                          : prev.services.filter(s => s !== 'medical-clinic-cleaning')
                                      }));
                                    }}
                                    className="h-4 w-4 text-brand-turquoise focus:ring-brand-turquoise border-gray-300 rounded"
                                  />
                                  <span>Public & Private Institutions</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    value="restaurant-cleaning"
                                    checked={formData.services.includes('restaurant-cleaning')}
                                    onChange={(e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        services: e.target.checked 
                                          ? [...prev.services, 'restaurant-cleaning']
                                          : prev.services.filter(s => s !== 'restaurant-cleaning')
                                      }));
                                    }}
                                    className="h-4 w-4 text-brand-turquoise focus:ring-brand-turquoise border-gray-300 rounded"
                                  />
                                  <span>Restaurant Cleaning</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    value="post-construction-cleaning"
                                    checked={formData.services.includes('post-construction-cleaning')}
                                    onChange={(e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        services: e.target.checked 
                                          ? [...prev.services, 'post-construction-cleaning']
                                          : prev.services.filter(s => s !== 'post-construction-cleaning')
                                      }));
                                    }}
                                    className="h-4 w-4 text-brand-turquoise focus:ring-brand-turquoise border-gray-300 rounded"
                                  />
                                  <span>Post-construction Cleaning</span>
                                </label>
                              </>
                            )}
                          </div>
                          {formData.services.length > 0 && (
                            <p className="text-sm text-green-600 mt-2">
                              Selected services: {formData.services.length}
                            </p>
                          )}
                          {formData.category && formData.services.length === 0 && (
                            <p className="text-sm text-red-600 mt-2">
                              Please select at least one service
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-brand-navy font-semibold">
                          Location/Address
                        </Label>
                        <Input 
                          id="location" 
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          placeholder="Enter your location or address"
                          className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="details" className="text-brand-navy font-semibold">
                          Additional Details
                        </Label>
                        <Textarea 
                          id="details" 
                          value={formData.details}
                          onChange={(e) => handleInputChange('details', e.target.value)}
                          placeholder="Tell us more about your cleaning needs, preferred dates, or any special requirements..."
                          rows={4}
                          className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
                        />
                      </div>

                      <div className="text-center">
                        <Button 
                          type="submit"
                          size="lg"
                          variant="white-on-dark"
                          className="px-12 py-4"
                          disabled={submitMut.isPending}
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          {submitMut.isPending ? 'Sending...' : 'Send Message'}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>

        {/* Map Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Service Areas
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We proudly serve the Dallas-Fort Worth metroplex and surrounding areas
                </p>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                  Google Maps Integration
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Interactive map showing our service areas in Collin County
                </p>
                <GoogleMap className="h-64" />
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
                 Why choose FreshCo Cleaning?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're committed to providing the best cleaning and maintenance services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Professional Service</h3>
                  <p className="text-muted-foreground">Licensed, insured, and background-checked team</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Quick Response</h3>
                  <p className="text-muted-foreground">We respond to all inquiries within 24 hours</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Free Consultation</h3>
                  <p className="text-muted-foreground">No-cost consultation and quote for all services</p>
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

export default Contact;
