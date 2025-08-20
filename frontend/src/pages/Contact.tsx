import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              Ready to transform your space? Contact us today for a free consultation and quote.
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">Phone</p>
                        <p className="text-muted-foreground">(727) 992-3578</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">Email</p>
                        <p className="text-muted-foreground">info@all-aroundyourhouse.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">Service Area</p>
                        <p className="text-muted-foreground">Greater Tampa Bay Area, FL</p>
                        <p className="text-sm text-muted-foreground">Pasco, Pinellas, Hernando, Hillsborough Counties</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">Business Hours</p>
                        <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Sat: 9:00 AM - 4:00 PM</p>
                        <p className="text-muted-foreground">Emergency services available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center hover:bg-brand-turquoise-dark transition-colors">
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center hover:bg-brand-turquoise-dark transition-colors">
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* Why Choose Us */}
                <Card className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-brand-navy">Why Choose All Around Your House?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                        Licensed & Insured
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                        Free Estimates
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                        Satisfaction Guaranteed
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                        Local Tampa Bay Experts
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                        German Quality Standards
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                        Professional Team
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-brand-navy">Request Your Free Quote</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a free estimate.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Your first name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Your last name" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="your.email@example.com" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-2">
                        Phone *
                      </label>
                      <Input type="tel" placeholder="(000) 000-0000" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-2">
                        Services Needed *
                      </label>
                      <Input placeholder="e.g. House cleaning, handyman services..." required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-2">
                        Preferred Service Date
                      </label>
                      <Input type="date" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-2">
                        Property Type
                      </label>
                      <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-brand-turquoise">
                        <option value="">Select property type</option>
                        <option value="residential">Residential Home</option>
                        <option value="apartment">Apartment/Condo</option>
                        <option value="vacation-rental">Vacation Rental</option>
                        <option value="commercial">Commercial/Office</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project and any specific requirements..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="newsletter" className="rounded" />
                      <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                        Subscribe to our newsletter for tips and special offers
                      </label>
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      variant="white-on-dark"
                      className="w-full font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Areas Map */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Our Service Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We proudly serve the Greater Tampa Bay Area with comprehensive home services
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Pasco County", cities: ["New Port Richey", "Port Richey", "Holiday"] },
                { name: "Pinellas County", cities: ["Clearwater", "St. Petersburg", "Largo"] },
                { name: "Hernando County", cities: ["Spring Hill", "Brooksville", "Weeki Wachee"] },
                { name: "Hillsborough County", cities: ["Tampa", "Brandon", "Riverview"] }
              ].map((county, index) => (
                <Card key={county.name} className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-brand-navy mb-3">{county.name}</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {county.cities.map((city) => (
                        <li key={city}>{city}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
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
              Don't wait to transform your space. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="white-on-dark" size="xl">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline-white" size="xl">
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

export default Contact;
