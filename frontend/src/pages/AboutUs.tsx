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
  Mail,
  Facebook,
  Instagram,
  Menu,
  Leaf
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
      {/* Custom Header for AboutUs - White Background */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        {/* Top Contact Bar */}
        <div className="bg-brand-navy text-white py-2 px-4">
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call us: (727) 992-3578</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-turquoise transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-brand-turquoise transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Bar - White Background */}
        <nav className="bg-white py-4 px-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="Logo.png" alt="FreshC Your House Services" className="w-12 h-12" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-brand-navy">FreshC</h1>
                  <Leaf className="w-5 h-5 text-brand-turquoise" />
                </div>
                <p className="text-sm text-muted-foreground">Your House Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 justify-center flex-1">
              <Link to="/" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Home</Link>
              <Link to="/about-us" className="text-brand-turquoise font-medium">About Us</Link>
              <Link to="/residential-cleaning" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Residential Cleaning</Link>
              <Link to="/commercial-cleaning" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Commercial Cleaning</Link>
              <Link to="/contact" className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium">Contact Us</Link>
            </div>

            {/* GET IN TOUCH Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button variant="white-on-dark" size="sm">
                  GET IN TOUCH
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>
      
      <main className="pt-20">
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

        {/* Our Story Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-brand-navy mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Founded in 2018, All Around Your House began with a simple mission: to provide exceptional cleaning and maintenance services that make homes and businesses shine. What started as a small local operation has grown into a trusted name in the Dallas-Fort Worth metroplex.
                    </p>
                    <p>
                      Our journey has been driven by a commitment to quality, reliability, and customer satisfaction. We understand that every space is unique, and we've developed our services to meet the diverse needs of our community.
                    </p>
                    <p>
                      Today, we're proud to serve hundreds of satisfied customers across DFW, maintaining the same dedication to excellence that inspired us from the beginning.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-hero p-8 rounded-2xl text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Serving DFW Since 2018</h3>
                  <p className="text-brand-cream">Over 5 years of excellence in cleaning and maintenance services</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Mission & Values Section - Now with proper z-index */}
        <div className="relative z-10 bg-brand-cream">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Mission & Values
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our core principles guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Quality First</h3>
                  <p className="text-muted-foreground">We never compromise on the quality of our services or products</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Trust & Reliability</h3>
                  <p className="text-muted-foreground">Building lasting relationships through consistent, dependable service</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Customer Focus</h3>
                  <p className="text-muted-foreground">Your satisfaction is our top priority in every interaction</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Certifications Section - Now with proper z-index */}
        <div className="relative z-10 bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Certifications, Insurance & License
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're fully licensed, bonded, and insured for your peace of mind
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Licensed</h3>
                  <p className="text-muted-foreground text-sm">State-licensed cleaning and maintenance services</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Bonded</h3>
                  <p className="text-muted-foreground text-sm">Bonded for your financial protection</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Insured</h3>
                  <p className="text-muted-foreground text-sm">Fully insured for liability coverage</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Certified</h3>
                  <p className="text-muted-foreground text-sm">Industry-certified cleaning professionals</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Meet the Team Section - Now with proper z-index */}
        <div className="relative z-10 bg-brand-cream">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-navy mb-6">
                  Meet the Team
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our dedicated professionals are committed to delivering exceptional service
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Management Team</h3>
                  <p className="text-muted-foreground">Experienced leaders guiding our operations</p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Cleaning Specialists</h3>
                  <p className="text-muted-foreground">Trained professionals in all cleaning services</p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Support Staff</h3>
                  <p className="text-muted-foreground">Customer service and administrative support</p>
                </div>
              </div>
            </div>
          </section>
        </div>

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

        {/* CTA Section - Now with proper z-index */}
        <div className="relative z-10 bg-gradient-hero text-white">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to work with us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our services and get a free consultation
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
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
