import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Home, 
  Search, 
  FileText, 
  Users,
  CheckCircle,
  Clock,
  Shield,
  Star,
  ArrowRight,
  MapPin,
  Calculator,
  Camera,
  Wrench,
  Award,
  Heart,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const RealEstateServices = () => {
  const services = [
    {
      title: "Property Management",
      description: "Comprehensive property management services for residential and commercial properties",
      icon: Building,
      features: [
        "Tenant screening and management",
        "Rent collection and financial reporting",
        "Property maintenance coordination",
        "Emergency response handling",
        "Lease agreement management",
        "Property inspections",
        "Vendor management",
        "Legal compliance monitoring"
      ],
      duration: "Ongoing monthly service",
      price: "Starting from 8% of monthly rent",
      benefits: [
        "Professional management",
        "24/7 support",
        "Legal compliance",
        "Financial transparency"
      ]
    },
    {
      title: "Property Maintenance",
      description: "Regular maintenance and repair services to keep your property in top condition",
      icon: Wrench,
      features: [
        "Preventive maintenance schedules",
        "Emergency repair coordination",
        "Vendor selection and management",
        "Quality control inspections",
        "Maintenance cost tracking",
        "Property value preservation",
        "Tenant satisfaction maintenance",
        "Compliance with regulations"
      ],
      duration: "Scheduled and on-demand",
      price: "Starting from $150 per visit",
      benefits: [
        "Property value protection",
        "Tenant satisfaction",
        "Cost control",
        "Professional oversight"
      ]
    },
    {
      title: "Property Inspections",
      description: "Comprehensive property inspections for buyers, sellers, and property managers",
      icon: Search,
      features: [
        "Pre-purchase inspections",
        "Pre-listing inspections",
        "Routine property inspections",
        "Move-in/move-out inspections",
        "Maintenance inspections",
        "Safety and code compliance",
        "Detailed inspection reports",
        "Photo documentation"
      ],
      duration: "2-4 hours per inspection",
      price: "Starting from $200",
      benefits: [
        "Professional expertise",
        "Detailed reporting",
        "Photo documentation",
        "Compliance verification"
      ]
    },
    {
      title: "Real Estate Consulting",
      description: "Expert advice on property investment, development, and management strategies",
      icon: FileText,
      features: [
        "Investment property analysis",
        "Market research and trends",
        "Property development planning",
        "ROI optimization strategies",
        "Risk assessment and mitigation",
        "Portfolio management advice",
        "Tax and legal guidance",
        "Exit strategy planning"
      ],
      duration: "Consultation: 2-4 hours, Ongoing: Monthly",
      price: "Consultation: $150/hour, Monthly: $500",
      benefits: [
        "Expert guidance",
        "Market insights",
        "Risk management",
        "Investment optimization"
      ]
    },
    {
      title: "Tenant Services",
      description: "Comprehensive services to support tenants and improve rental experiences",
      icon: Users,
      features: [
        "24/7 maintenance hotline",
        "Online rent payment portal",
        "Maintenance request tracking",
        "Emergency response coordination",
        "Tenant portal access",
        "Community event coordination",
        "Tenant satisfaction surveys",
        "Conflict resolution support"
      ],
      duration: "24/7 availability",
      price: "Included in management fees",
      benefits: [
        "Improved tenant satisfaction",
        "Reduced vacancy rates",
        "Better tenant retention",
        "Professional service"
      ]
    },
    {
      title: "Financial Management",
      description: "Comprehensive financial management and reporting for property owners",
      icon: Calculator,
      features: [
        "Rent collection and processing",
        "Expense tracking and management",
        "Financial reporting and analysis",
        "Tax preparation support",
        "Budget planning and monitoring",
        "Cash flow management",
        "Investment performance tracking",
        "Annual financial reviews"
      ],
      duration: "Monthly reporting and ongoing management",
      price: "Included in management fees",
      benefits: [
        "Financial transparency",
        "Tax optimization",
        "Performance tracking",
        "Professional oversight"
      ]
    }
  ];

  const serviceAreas = [
    "Pasco County",
    "Pinellas County", 
    "Hernando County",
    "Hillsborough County",
    "New Port Richey",
    "Clearwater",
    "Tampa",
    "St. Petersburg"
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: "Local Expertise",
      description: "Deep knowledge of the Tampa Bay real estate market and local regulations"
    },
    {
      icon: Award,
      title: "Professional Standards",
      description: "Licensed and insured professionals with years of experience"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Tailored solutions that meet your specific property management needs"
    },
    {
      icon: Shield,
      title: "Full Protection",
      description: "Comprehensive coverage and risk management for your investments"
    }
  ];

  const managementProcess = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We evaluate your property and discuss your management needs and goals",
      icon: Target
    },
    {
      step: "2",
      title: "Service Planning",
      description: "We create a customized management plan tailored to your property",
      icon: FileText
    },
    {
      step: "3",
      title: "Implementation",
      description: "We begin managing your property with our professional team and systems",
      icon: Wrench
    },
    {
      step: "4",
      title: "Ongoing Management",
      description: "We provide continuous management, maintenance, and tenant support",
      icon: Building
    },
    {
      step: "5",
      title: "Performance Review",
      description: "Regular reviews and optimization to maximize your property's performance",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Estate Services
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              Professional property management, maintenance, and consulting services to maximize your real estate investments in the Tampa Bay area.
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Our Real Estate Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From property management to investment consulting, we provide comprehensive real estate services to protect and grow your investments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className="hover:shadow-brand transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-soft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-navy">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-turquoise flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-3 bg-muted/50 rounded-lg mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy">Duration</p>
                          <p className="text-xs text-muted-foreground">{service.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-brand-turquoise" />
                        <div>
                          <p className="font-semibold text-brand-navy">Starting Price</p>
                          <p className="text-xs text-muted-foreground">{service.price}</p>
                        </div>
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button 
                        variant="white-on-dark"
                        className="w-full shadow-sm group"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Service Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We serve the Greater Tampa Bay Area with comprehensive real estate services
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {serviceAreas.map((area, index) => (
                <Card 
                  key={area}
                  className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-brand-turquoise" />
                    </div>
                    <p className="text-sm font-medium text-brand-navy">{area}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Management Process */}
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Our Management Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a proven 5-step process to ensure your property is managed professionally and profitably
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {managementProcess.map((step, index) => (
                <Card 
                  key={step.step}
                  className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-navy">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Why Choose Our Real Estate Services?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We bring local expertise, professional standards, and personalized service to every client
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card 
                  key={item.title}
                  className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-navy">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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
              Ready to maximize your real estate investment?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our professional services can protect and grow your property investments.
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

export default RealEstateServices;
