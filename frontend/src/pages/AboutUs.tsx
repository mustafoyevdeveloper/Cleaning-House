import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Users, 
  Award, 
  Heart, 
  Star,
  CheckCircle,
  Building,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const serviceAreas = ["Pasco", "Pinellas", "Hernando", "Hillsborough"];
  
  const whyChooseUs = [
    {
      icon: Clock,
      title: "Many Years of Experience",
      description: "We look back on many years of experience in professional craftsmanship and maintenance."
    },
    {
      icon: Heart,
      title: "We specialize in Happiness",
      description: "Our focus is what makes you happy. No matter how hard a job is, we will be happy to help."
    },
    {
      icon: Award,
      title: "Affordable rates",
      description: "Thanks to us, almost everyone can now get professional home improvement services."
    },
    {
      icon: CheckCircle,
      title: "It depends on the details",
      description: "The eye for beauty, cleanliness and solid craftsmanship helps us improve your home just from a single source."
    }
  ];

  const workExamples = [
    "Pressure Washing",
    "Remodeling", 
    "Front and Backyard",
    "Pool Deck Construction",
    "Painting",
    "Fence Repair",
    "Gutter & Roof Cleaning"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About All Around Your House
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              Professional Home Improvement and Cleaning Services in the Greater Tampa Bay Area
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-brand-navy mb-8">
                  We've got you covered!
                </h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-brand-navy mb-4">Service Areas:</h3>
                  <div className="flex flex-wrap gap-3">
                    {serviceAreas.map((area) => (
                      <span key={area} className="px-4 py-2 bg-brand-turquoise/10 text-brand-turquoise rounded-full font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to <strong>All Around your House</strong>, the new address for Home Improvement and Cleaning Services in Pasco.
                  </p>
                  <p>
                    We gained the experience as handymen and building cleaners for years in Germany before coming to the USA. With the help of this experience, we can say that we are your best choice for any maintenance and beautification project around your home.
                  </p>
                  <p>
                    We know how important it is to have a beautiful, clean, and comfortable home. We have professional knowledge and practical experience in all services such as home improvement, cleaning services and our special interior design coaching. We care about your home.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-brand-navy mb-4">What are you looking for today?</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/cleaning-services">
                      <Button variant="white-on-dark">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Cleaning Services
                      </Button>
                    </Link>
                    <Link to="/home-improvement">
                      <Button variant="outline-white">
                        <Building className="w-4 h-4 mr-2" />
                        Home Improvement
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-hero rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Building className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Ready to improve your home professionally?</h3>
                    <p className="text-lg mb-6">
                      Better leave it to us. Our professional home improvement team will gladly help you transform any problem into happiness.
                    </p>
                    <Link to="/contact">
                      <Button variant="white-on-dark" size="lg">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Why choose us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We bring German precision and American service quality to every project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card 
                  key={item.title}
                  className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-navy">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Examples */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Examples of our work
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From pressure washing to complete remodeling, we handle it all
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {workExamples.map((work) => (
                <Card 
                  key={work}
                  className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-brand-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-brand-turquoise" />
                    </div>
                    <p className="text-sm font-medium text-brand-navy">{work}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="white-on-dark" size="xl">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to transform your space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our experienced team help you create the home of your dreams with professional quality and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="white-on-dark" size="xl">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline-white" size="xl">
                  Our Services
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

export default AboutUs;
