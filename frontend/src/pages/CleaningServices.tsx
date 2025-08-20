import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Home, 
  Building, 
  MoveRight, 
  Star,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  Users,
  Calendar,
  Target,
  Zap,
  Heart,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const CleaningServices = () => {
  const services = [
    {
      id: "standard-cleaning",
      title: "Standard & Deep Cleaning",
      description: "Thorough cleaning for every room in your home or office with attention to detail",
      icon: Sparkles,
      features: [
        "Dusting all surfaces and furniture",
        "Vacuuming and mopping all floors",
        "Kitchen deep cleaning (appliances, counters, cabinets)",
        "Bathroom sanitization and cleaning",
        "Bedroom and living area organization",
        "Window and mirror cleaning",
        "Trash removal and fresh linens",
        "Baseboard and corner cleaning",
        "Light fixture dusting",
        "Air vent cleaning"
      ],
      duration: "2-4 hours depending on size",
      price: "Starting from $120",
      benefits: [
        "Professional cleaning products",
        "Eco-friendly options available",
        "Satisfaction guaranteed",
        "Flexible scheduling"
      ],
      bestFor: "Regular home maintenance, post-party cleanup, seasonal deep cleaning"
    },
    {
      id: "vacation-rentals",
      title: "Vacation Rentals & Airbnb",
      description: "Specialized cleaning service designed for vacation rentals and Airbnb properties",
      icon: Building,
      features: [
        "Full turnover cleaning between guests",
        "Linen and towel replacement",
        "Kitchen and bathroom deep sanitization",
        "Inventory checking and restocking",
        "Quality inspection and photo documentation",
        "Same-day service available",
        "24/7 emergency cleaning support",
        "Check-out cleaning services",
        "Property maintenance cleaning",
        "Guest amenity preparation"
      ],
      duration: "1-3 hours per turnover",
      price: "Starting from $80 per turnover",
      benefits: [
        "5-star guest experience",
        "Quick turnaround time",
        "Professional standards",
        "Emergency support"
      ],
      bestFor: "Airbnb hosts, vacation rental owners, property managers"
    },
    {
      id: "business-cleaning",
      title: "Small Business Cleaning", 
      description: "Professional commercial cleaning services to maintain a clean, healthy work environment",
      icon: Building,
      features: [
        "Office space cleaning and organization",
        "Reception area and common spaces",
        "Kitchen and break room sanitization",
        "Restroom cleaning and restocking",
        "Floor care (carpet and hard surfaces)",
        "Trash removal and recycling",
        "Regular maintenance schedules available",
        "Conference room preparation",
        "Desk and workspace cleaning",
        "Entryway maintenance"
      ],
      duration: "2-6 hours depending on size",
      price: "Starting from $150 per visit",
      benefits: [
        "Professional appearance",
        "Healthy work environment",
        "Customized schedules",
        "Commercial-grade products"
      ],
      bestFor: "Small offices, retail spaces, professional services, medical offices"
    },
    {
      id: "residential-cleaning",
      title: "Residential Cleaning",
      description: "Customized residential cleaning services to keep your home consistently clean",
      icon: Home,
      features: [
        "Weekly, bi-weekly, or monthly service",
        "Customized cleaning checklist",
        "All room cleaning and maintenance",
        "Seasonal deep cleaning options",
        "Pet-friendly cleaning products",
        "Flexible scheduling",
        "Trusted and insured cleaners",
        "Kitchen and bathroom focus",
        "Bedroom and living area care",
        "Special requests accommodated"
      ],
      duration: "2-5 hours per visit",
      price: "Starting from $100 per visit",
      benefits: [
        "Consistent cleanliness",
        "Customized service",
        "Trusted professionals",
        "Flexible scheduling"
      ],
      bestFor: "Busy families, working professionals, elderly homeowners, pet owners"
    },
    {
      id: "move-cleaning",
      title: "Move-In Move-Out",
      description: "Comprehensive cleaning service for properties during move-in or move-out transitions",
      icon: MoveRight,
      features: [
        "Complete property deep cleaning",
        "Cabinet and drawer cleaning inside/out",
        "Appliance cleaning and sanitization",
        "Floor care and carpet cleaning",
        "Window and fixture cleaning",
        "Wall washing and baseboard cleaning",
        "Final walkthrough and inspection",
        "Closet and storage cleaning",
        "Light fixture cleaning",
        "Air duct cleaning available"
      ],
      duration: "4-8 hours depending on property size",
      price: "Starting from $200",
      benefits: [
        "Security deposit protection",
        "Move-in ready condition",
        "Professional standards",
        "Comprehensive service"
      ],
      bestFor: "Renters, home sellers, property managers, real estate agents"
    },
    {
      id: "special-cleaning",
      title: "Special Cleaning Services",
      description: "Specialized cleaning services for unique situations and specific requirements",
      icon: Star,
      features: [
        "Post-construction cleaning",
        "Event cleanup services",
        "Hoarding situation cleanup",
        "Biohazard and trauma cleaning",
        "Carpet and upholstery cleaning",
        "Pressure washing services",
        "Custom cleaning projects",
        "Disaster recovery cleaning",
        "Mold remediation support",
        "Odor elimination"
      ],
      duration: "Varies by project scope",
      price: "Custom pricing based on requirements",
      benefits: [
        "Specialized expertise",
        "Professional equipment",
        "Custom solutions",
        "Emergency response"
      ],
      bestFor: "Construction companies, event planners, property restoration, special circumstances"
    }
  ];

  const cleaningProcess = [
    {
      step: "1",
      title: "Assessment",
      description: "We evaluate your space and discuss your specific cleaning needs and preferences",
      icon: Target
    },
    {
      step: "2",
      title: "Preparation",
      description: "We prepare the area and use appropriate cleaning products for your surfaces",
      icon: Zap
    },
    {
      step: "3",
      title: "Deep Cleaning",
      description: "We systematically clean every area with attention to detail and quality",
      icon: Sparkles
    },
    {
      step: "4",
      title: "Inspection",
      description: "We conduct a final walkthrough to ensure your complete satisfaction",
      icon: CheckCircle
    }
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: "We Care About Your Space",
      description: "We treat your home or business like our own, with attention to every detail"
    },
    {
      icon: Award,
      title: "Professional Standards",
      description: "Our team is trained in professional cleaning techniques and safety protocols"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "You can trust us with your property - we're fully licensed and insured"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our cleaners have years of experience in residential and commercial cleaning"
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
              All Around Cleaning
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              Enjoy a perfectly clean space, whether it's your home or your office. Our unique cleaning concept ensures that every room is cleaned thoroughly.
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Our Cleaning Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience Cleaning Services all around your house from a single source. We offer comprehensive cleaning solutions for every need.
              </p>
            </div>

            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-brand-navy">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-brand-navy mb-3">Best For:</h4>
                        <p className="text-muted-foreground">{service.bestFor}</p>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-brand-navy mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-brand-turquoise" />
                          Services Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-brand-turquoise rounded-full mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-brand-turquoise" />
                          <div>
                            <p className="font-semibold text-brand-navy">Duration</p>
                            <p className="text-sm text-muted-foreground">{service.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-brand-turquoise" />
                          <div>
                            <p className="font-semibold text-brand-navy">Pricing</p>
                            <p className="text-sm text-muted-foreground">{service.price}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link to="/contact">
                          <Button 
                            variant="white-on-dark"
                            size="lg"
                          >
                            Get Quote
                          </Button>
                        </Link>
                        <Link to="/contact">
                          <Button 
                            variant="outline-white" 
                            size="lg"
                          >
                            Book Service
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="relative">
                        <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-soft">
                          <div className="w-full h-full bg-gradient-to-br from-brand-turquoise/20 to-brand-navy/20 flex items-center justify-center">
                            <service.icon className="w-24 h-24 text-brand-turquoise/60" />
                          </div>
                        </div>
                        
                        {/* Benefits overlay */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-soft max-w-xs">
                          <h5 className="font-semibold text-brand-navy mb-3">Why Choose Us:</h5>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Star className="w-3 h-3 text-brand-turquoise flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cleaning Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Our Cleaning Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a systematic approach to ensure every cleaning job is completed to the highest standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cleaningProcess.map((step, index) => (
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
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Why Choose Our Cleaning Services?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We bring German precision and American service quality to every cleaning project
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
              Ready for a cleaner space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our experienced cleaning team is ready to transform your space.
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

export default CleaningServices;
