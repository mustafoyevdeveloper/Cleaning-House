import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "@/lib/api";

const Contact = () => {
  const { data: settings } = useQuery({ queryKey: ['settings'], queryFn: getSettings });
  
  return (
    <section id="contact" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? Contact us today for a free consultation and quote.
          </p>
        </div>

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
                    <p className="text-muted-foreground">{settings?.phone || '(727) 992-3578'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Email</p>
                    <p className="text-muted-foreground">{settings?.email || 'info@all-aroundyourhouse.com'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Service Area</p>
                    <p className="text-muted-foreground">{settings?.address || 'Greater Tampa Bay Area, FL'}</p>
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
                  </div>
                </div>
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
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-brand-navy">Request Your Free Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Phone *
                  </label>
                  <Input type="tel" placeholder="(000) 000-0000" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Services Needed
                  </label>
                  <Input placeholder="e.g. House cleaning, handyman services..." />
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

                <Button 
                  type="submit" 
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
  );
};

export default Contact;