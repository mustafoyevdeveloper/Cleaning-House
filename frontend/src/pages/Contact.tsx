import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "469-592-4438",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@allaroundyourhouse.com",
      description: "Send us a message anytime"
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: "Dallas-Fort Worth Metroplex",
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
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              Get in touch with us today for a free consultation and quote. We're here to help with all your cleaning and maintenance needs.
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-white">
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

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-service">
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
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-brand-navy font-semibold">
                          First Name *
                        </Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name"
                          className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-brand-navy font-semibold">
                          Last Name *
                        </Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name"
                          className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
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
                          placeholder="Enter your email address"
                          className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-brand-navy font-semibold">
                          Phone Number *
                        </Label>
                        <Input 
                          id="phone" 
                          type="tel"
                          placeholder="Enter your phone number"
                          className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-brand-navy font-semibold">
                          Service Needed *
                        </Label>
                        <Select>
                          <SelectTrigger className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-brand-navy font-semibold">
                          Location/Address *
                        </Label>
                        <Input 
                          id="location" 
                          placeholder="Enter your location or address"
                          className="border-gray-300 focus:border-brand-turquoise focus:ring-brand-turquoise"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-brand-navy font-semibold">
                        Additional Details
                      </Label>
                      <Textarea 
                        id="message" 
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
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
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

            <div className="bg-muted/50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Google Maps Integration
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Interactive map showing our service areas in the Dallas-Fort Worth metroplex. 
                We cover Dallas, Fort Worth, Plano, Irving, Arlington, Grapevine, and surrounding areas.
              </p>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-muted-foreground">
                  Google Maps will be embedded here showing DFW service areas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Why Choose Us?
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our experienced team is ready to help.
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
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
