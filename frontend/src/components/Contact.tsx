import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getSettings, submitMessage } from "@/lib/api";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const { data: settings } = useQuery({ queryKey: ['settings'], queryFn: getSettings });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: '',
    services: [] as string[], // Changed from serviceNeeded to services array
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
      page: 'home-contact'
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      First Name *
                    </label>
                    <Input 
                      placeholder="Your first name" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Your last name" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Phone *
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="(000) 000-0000" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Category *
                  </label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => {
                      handleInputChange('category', value);
                      handleInputChange('services', []); // Reset services array when category changes
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Cleaning</SelectItem>
                      <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Services Needed *
                  </label>
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
                          <span>Medical/Clinic Cleaning</span>
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
                  {!formData.category && (
                    <p className="text-sm text-gray-500 mt-2">
                      Please select a category first to see available services
                    </p>
                  )}
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

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project and any specific requirements..."
                    className="min-h-[120px]"
                    value={formData.details}
                    onChange={(e) => handleInputChange('details', e.target.value)}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="white-on-dark"
                  className="w-full font-semibold"
                  disabled={submitMut.isPending}
                >
                  {submitMut.isPending ? 'Sending...' : 'Send Message'}
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