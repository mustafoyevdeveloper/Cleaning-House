import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
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

  const residentialOptions = [
    { value: 'standard-cleaning', label: 'Standard Cleaning' },
    { value: 'deep-cleaning', label: 'Deep Cleaning' },
    { value: 'move-in-out-cleaning', label: 'Move-in/Move-out Cleaning' },
    { value: 'apartment-cleaning', label: 'Apartment Cleaning' },
    { value: 'specialty-cleaning', label: 'Specialty Cleaning' },
    { value: 'carpet-upholstery-cleaning', label: 'Carpet & Upholstery Cleaning' },
    { value: 'window-cleaning', label: 'Window Cleaning' },
    { value: 'fridge-oven-cleaning', label: 'Fridge & Oven Cleaning' },
    { value: 'laundry-ironing-services', label: 'Laundry & Ironing Services' },
    { value: 'bed-making-linen-changes', label: 'Bed Making & Linen Changes' },
    { value: 'organizing-services', label: 'Organizing Services' },
  ];

  const commercialOptions = [
    { value: 'office-cleaning', label: 'Office Cleaning' },
    { value: 'retail-cleaning', label: 'Retail Cleaning' },
    { value: 'medical-clinic-cleaning', label: 'Public & Private Institutions' },
    { value: 'restaurant-cleaning', label: 'Restaurant Cleaning' },
    { value: 'post-construction-cleaning', label: 'Post-construction Cleaning' },
    { value: 'floor-care-services', label: 'Floor Care Services' },
    { value: 'high-touch-sanitizing', label: 'High-Touch Sanitizing' },
    { value: 'pressure-washing', label: 'Pressure Washing' },
    { value: 'event-clean-up', label: 'Event Clean-Up' },
  ];

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
    <section id="contact" className="py-20 bg-white">
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
                    <a href={`tel:${settings?.phone || '469-592-4438'}`} className="text-muted-foreground hover:text-brand-turquoise transition-colors cursor-pointer">
                      {settings?.phone || '469-592-4438'}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Email</p>
                    <p className="text-muted-foreground">{settings?.email || 'info@freshco-cleaning.com'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Address</p>
                    <p className="text-muted-foreground">{settings?.address || '3300 Dallas Pkwy, Plano, TX 75093'}</p>
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
                <CardTitle className="text-brand-navy">Why choose FreshCo Cleaning?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                    Expert Knowledge
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                    Professionalism
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                    Satisfaction Guarantee
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                    Consistent Quality
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                    Healthier Indoor Environment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                    Transparent Pricing
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button type="button" variant="outline" className="w-full justify-between">
                        {formData.services.length > 0 ? `${formData.services.length} selected` : 'Select services'}
                        <span className="text-muted-foreground">▾</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[320px] p-2">
                      <div className="space-y-2 max-h-64 overflow-auto pr-1">
                        {(formData.category === 'commercial' ? commercialOptions : formData.category === 'residential' ? residentialOptions : []).map((opt) => (
                          <label key={opt.value} className="flex items-center gap-2 text-sm">
                            <Checkbox
                              checked={formData.services.includes(opt.value)}
                              onCheckedChange={(checked) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: checked
                                    ? [...prev.services, opt.value]
                                    : prev.services.filter((s) => s !== opt.value),
                                }));
                              }}
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                        {formData.category && (formData.category === 'commercial' ? commercialOptions : residentialOptions).length === 0 && (
                          <p className="text-xs text-muted-foreground">No services available</p>
                        )}
                        {!formData.category && (
                          <p className="text-xs text-muted-foreground">Select category first</p>
                        )}
                      </div>
                    </PopoverContent>
                  </Popover>
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