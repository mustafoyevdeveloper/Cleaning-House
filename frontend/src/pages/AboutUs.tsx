import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Award, 
  Shield,
  CheckCircle,
  Star,
  Heart,
  Building,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      description: "With over 15 years in the cleaning industry, Sarah leads our company with passion and expertise.",
      image: "👩‍💼"
    },
    {
      name: "Mike Rodriguez",
      position: "Operations Manager",
      description: "Mike ensures every service meets our high standards and customer expectations.",
      image: "👨‍💼"
    },
    {
      name: "Emily Chen",
      position: "Customer Success Manager",
      description: "Emily is dedicated to ensuring every customer has an exceptional experience.",
      image: "👩‍💻"
    }
  ];

  const certifications = [
    {
      title: "Licensed & Bonded",
      description: "Fully licensed by the state of Texas with comprehensive bonding for your protection",
      icon: Shield
    },
    {
      title: "Insured",
      description: "General liability insurance covering up to $2 million for complete peace of mind",
      icon: Shield
    },
    {
      title: "EPA Certified",
      description: "Certified in safe and effective cleaning practices by the Environmental Protection Agency",
      icon: Award
    },
    {
      title: "Green Cleaning Certified",
      description: "Certified in eco-friendly cleaning methods and sustainable practices",
      icon: Award
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              All Around Your House - Your trusted partner for professional cleaning and maintenance services
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2018, All Around Your House began with a simple mission: to provide exceptional cleaning and maintenance services that make a real difference in people's lives.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  What started as a small local cleaning service has grown into a trusted company serving homes and businesses across the Dallas-Fort Worth metroplex. Our journey has been driven by our commitment to quality, reliability, and customer satisfaction.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to be the go-to choice for residential and commercial cleaning needs, known for our attention to detail, professional approach, and dedication to exceeding expectations.
                </p>
              </div>
              <div className="bg-gradient-hero p-8 rounded-2xl text-white text-center">
                <Building className="w-24 h-24 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Serving DFW Since 2018</h3>
                <p className="text-lg">Over 5 years of excellence in cleaning and maintenance services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Our Mission & Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're driven by core values that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Excellence</h3>
                <p className="text-muted-foreground">We strive for excellence in every service, every time</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Care</h3>
                <p className="text-muted-foreground">We care about our customers, our team, and our community</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Reliability</h3>
                <p className="text-muted-foreground">You can count on us to deliver on our promises</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Quality</h3>
                <p className="text-muted-foreground">We never compromise on the quality of our services</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Teamwork</h3>
                <p className="text-muted-foreground">We work together to achieve the best results</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Integrity</h3>
                <p className="text-muted-foreground">We conduct business with honesty and transparency</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Certifications, Insurance & License
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your peace of mind is our priority. We maintain all necessary credentials and protections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.title}
                  className="text-center hover:shadow-brand transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-brand-navy">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dedicated professionals committed to delivering exceptional service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={member.name}
                  className="text-center hover:shadow-brand transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft"
                >
                  <CardHeader className="pb-4">
                    <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                      {member.image}
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-navy">
                      {member.name}
                    </CardTitle>
                    <p className="text-brand-turquoise font-semibold">
                      {member.position}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <MapPin className="w-12 h-12 text-brand-turquoise mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Dallas</h3>
                <p className="text-muted-foreground">Downtown, Uptown, Oak Lawn, Lakewood</p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <MapPin className="w-12 h-12 text-brand-turquoise mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Fort Worth</h3>
                <p className="text-muted-foreground">Cultural District, West 7th, TCU Area</p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <MapPin className="w-12 h-12 text-brand-turquoise mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Suburbs</h3>
                <p className="text-muted-foreground">Plano, Irving, Arlington, Grapevine</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to work with us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our services and get a free quote.
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
              <Link to="/residential-cleaning">
                <Button 
                  variant="outline-white" 
                  size="lg"
                >
                  View Services
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
