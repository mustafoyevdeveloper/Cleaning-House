import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Users, Home, Building, MessageCircle, Sparkles, Clock, Shield } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getSettings, listServices } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const Index = () => {
  const { data: settings } = useQuery({ queryKey: ['settings'], queryFn: getSettings });
  
  // Import services from both residential and commercial pages
  const { data: residentialServices = [], isLoading: residentialLoading, error: residentialError } = useQuery({
    queryKey: ['services', 'residential'],
    queryFn: () => listServices("residential"),
  });

  const { data: commercialServices = [], isLoading: commercialLoading, error: commercialError } = useQuery({
    queryKey: ['services', 'commercial'],
    queryFn: () => listServices("commercial"),
  });

  const isLoading = residentialLoading || commercialLoading;
  const error = residentialError || commercialError;
  
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image - Fixed Position */}
          <div className="fixed inset-0 z-0">
            <div className="w-full h-full bg-cover sm:bg-cover bg-center bg-no-repeat" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white pt-10 md:pt-0 animate-fade-in">
            <h1 className="text-xl md:text-6xl font-bold mb-6 leading-tight">
            Expert Cleaning You Can Trust - {" "}
              <span className="text-brand-turquoise block">Healthy Homes, Green Spaces</span>
            </h1>

            <div className="w-24 h-1 bg-brand-turquoise mx-auto mb-6"></div>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Your trusted partner in eco-friendly cleaning for healthier living in Collin County
            </p>

            {/* Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mb-12 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-6 h-6 text-brand-turquoise" />
                <span className="text-white font-medium">Residential</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-6 h-6 text-brand-turquoise" />
                <span className="text-white font-medium">Commercial</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-6 h-6 text-brand-turquoise" />
                <span className="text-white font-medium">Apartment</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-6 h-6 text-brand-turquoise" />
                <span className="text-white font-medium">Special</span>
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden md:block">
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
              <span className="text-sm">Scroll</span>
            </div>
          </div>
        </section>

        {/* Services Section - With Header Image Background */}
        <section className="relative py-20 overflow-hidden">
          {/* Header Image Background - Fixed Position */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/40 to-brand-navy/70"></div>
            <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Professional cleaning services tailored to your needs
              </p>
            </div>

            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-lg text-gray-200">Loading services...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-lg text-red-300">Error loading services. Please try again later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Residential Services (Left Column) */}
                {residentialServices.length > 0 && (
                  <div className="order-1 lg:order-none">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                      Residential Cleaning Services
                    </h3>
                    
                    {/* Single column, up to 5 cards */}
                    <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto mb-8">
                      {residentialServices.slice(0, 5).map((service: any, index: number) => (
                        <Card 
                          key={service.title}
                          className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft bg-white/95 backdrop-blur-sm"
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
                            <div className="mb-6">
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                {service.features && service.features.length > 0 ? (
                                  service.features.slice(0, 3).map((feature: string, i: number) => (
                                    <li key={i} className="flex items-center gap-2">
                                      <CheckCircle className="w-4 h-4 text-brand-turquoise flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))
                                ) : (
                                  <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-brand-turquoise flex-shrink-0" />
                                    Professional residential cleaning
                                  </li>
                                )}
                              </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-brand-turquoise" />
                                <div>
                                  <p className="font-semibold text-brand-navy text-sm">Duration</p>
                                  <p className="text-xs text-muted-foreground">{service.duration || 'Varies'}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-brand-turquoise" />
                                <div>
                                  <p className="font-semibold text-brand-navy text-sm">Price</p>
                                  <p className="text-xs text-muted-foreground">
                                    {service.price ? (service.price.startsWith('$') ? service.price : `$${service.price}`) : 'Contact for quote'}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="mb-4">
                              <p className="text-sm text-brand-turquoise font-semibold">
                                Best for: {service.bestFor || 'Residential cleaning needs'}
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
                  </div>
                )}

                {/* Commercial Services (Right Column) */}
                {commercialServices.length > 0 && (
                  <div className="order-2 lg:order-none">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                      Commercial Cleaning Services
                    </h3>
                    
                    {/* Single column, up to 5 cards */}
                    <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto mb-8">
                      {commercialServices.slice(0, 5).map((service: any, index: number) => (
                        <Card 
                          key={service.title}
                          className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft bg-white/95 backdrop-blur-sm"
                          style={{ animationDelay: `${(index + residentialServices.length) * 0.08}s` }}
                        >
                          <CardHeader className="text-center pb-4">
                            <BeforeAfterSlider
                              beforeImageUrl={service.images?.before || "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop"}
                              afterImageUrl={service.images?.after || "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"}
                              className="mb-4"
                            />
                            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                              <Building className="w-8 h-8 text-white" />
                            </div>
                            <CardTitle className="text-xl font-bold text-brand-navy">
                              {service.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-center">
                            <div className="mb-6">
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                {service.features && service.features.length > 0 ? (
                                  service.features.slice(0, 3).map((feature: string, i: number) => (
                                    <li key={i} className="flex items-center gap-2">
                                      <CheckCircle className="w-4 h-4 text-brand-turquoise flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))
                                ) : (
                                  <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-brand-turquoise flex-shrink-0" />
                                    Professional commercial cleaning
                                  </li>
                                )}
                              </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-brand-turquoise" />
                                <div>
                                  <p className="font-semibold text-brand-navy text-sm">Duration</p>
                                  <p className="text-xs text-muted-foreground">{service.duration || 'Varies'}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-brand-turquoise" />
                                <div>
                                  <p className="font-semibold text-brand-navy text-sm">Price</p>
                                  <p className="text-xs text-muted-foreground">
                                    {service.price ? (service.price.startsWith('$') ? service.price : `$${service.price}`) : 'Contact for quote'}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="mb-4">
                              <p className="text-sm text-brand-turquoise font-semibold">
                                Best for: {service.bestFor || 'Commercial cleaning needs'}
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
                  </div>
                )}

                {/* No Services Message */}
                {residentialServices.length === 0 && commercialServices.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-lg text-gray-200">No services available yet. Please add services through the admin panel.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
          <Contact />
        </div>

        {/* Quick Navigation Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
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
                      Learn about our story, mission, and team
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
      
      {/* CTA Section */}
      <div className="relative z-10 bg-brand-navy text-white">
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {settings?.bottomBar?.message || 'Ready to get started?'}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our trusted professionals deliver expert service to keep your home healthy and spotless
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={settings?.bottomBar?.buttonLink || '/contact'}>
                <Button 
                  variant="white-on-dark"
                  size="lg"
                  className="px-8 py-4"
                >
                  {settings?.bottomBar?.buttonText || 'Get Free Quote'}
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline-white" 
                  size="lg"
                  className="px-8 py-4"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer - Now with proper z-index */}
      <div className="relative z-20 bg-brand-navy">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
