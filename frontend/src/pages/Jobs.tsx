import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Heart,
  Award,
  Shield,
  Zap,
  Target,
  Building,
  Sparkles,
  Wrench,
  Palette
} from "lucide-react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const openPositions = [
    {
      title: "Professional House Cleaner",
      department: "Cleaning Services",
      location: "Tampa Bay Area",
      type: "Full-time / Part-time",
      experience: "Entry Level - Experienced",
      salary: "$15 - $25 per hour",
      description: "Join our cleaning team to provide exceptional cleaning services to residential and commercial clients.",
      requirements: [
        "Reliable transportation",
        "Attention to detail",
        "Physical stamina",
        "Customer service skills",
        "Flexible schedule availability"
      ],
      benefits: [
        "Competitive pay rates",
        "Flexible scheduling",
        "Training provided",
        "Career advancement opportunities",
        "Health benefits (full-time)"
      ],
      icon: Sparkles
    },
    {
      title: "Handyman / Maintenance Technician",
      department: "Home Improvement",
      location: "Tampa Bay Area",
      type: "Full-time",
      experience: "2+ years experience",
      salary: "$20 - $35 per hour",
      description: "Skilled handyman to perform various home improvement and maintenance tasks for our clients.",
      requirements: [
        "2+ years handyman experience",
        "Own tools and reliable vehicle",
        "Knowledge of basic repairs",
        "Excellent customer service",
        "Valid driver's license"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Paid time off",
        "Tool allowance",
        "Professional development"
      ],
      icon: Wrench
    },
    {
      title: "Interior Design Assistant",
      department: "Interior Design",
      location: "Tampa Bay Area",
      type: "Part-time / Contract",
      experience: "Entry Level - 1+ years",
      salary: "$18 - $25 per hour",
      description: "Support our interior design team with client consultations, space planning, and project coordination.",
      requirements: [
        "Interior design education or experience",
        "Strong communication skills",
        "Creative mindset",
        "Basic computer skills",
        "Willingness to learn"
      ],
      benefits: [
        "Flexible hours",
        "Creative work environment",
        "Portfolio building",
        "Mentorship opportunities",
        "Performance bonuses"
      ],
      icon: Palette
    },
    {
      title: "Property Management Coordinator",
      department: "Real Estate Services",
      location: "Tampa Bay Area",
      type: "Full-time",
      experience: "1+ years experience",
      salary: "$22 - $30 per hour",
      description: "Coordinate property management activities including tenant relations, maintenance, and financial reporting.",
      requirements: [
        "1+ years property management experience",
        "Strong organizational skills",
        "Customer service oriented",
        "Basic accounting knowledge",
        "Real estate license preferred"
      ],
      benefits: [
        "Competitive salary",
        "Health benefits",
        "Paid time off",
        "Professional development",
        "Performance bonuses"
      ],
      icon: Building
    }
  ];

  const departments = [
    {
      name: "Cleaning Services",
      icon: Sparkles,
      description: "Professional cleaning for residential and commercial properties",
      positions: 3
    },
    {
      name: "Home Improvement",
      icon: Wrench,
      description: "Handyman and maintenance services",
      positions: 2
    },
    {
      name: "Interior Design",
      icon: Palette,
      description: "Creative design and space planning services",
      positions: 1
    },
    {
      name: "Real Estate Services",
      icon: Building,
      description: "Property management and consulting",
      positions: 1
    }
  ];

  const whyWorkWithUs = [
    {
      icon: Heart,
      title: "Family-Oriented Culture",
      description: "We treat our team like family and support work-life balance"
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Opportunities for advancement and professional development"
    },
    {
      icon: Shield,
      title: "Job Security",
      description: "Stable employment with a growing company in a stable industry"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with experienced professionals who care about quality"
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application form with your resume and cover letter",
      icon: Target
    },
    {
      step: "2",
      title: "Initial Review",
      description: "Our HR team reviews your application and qualifications",
      icon: CheckCircle
    },
    {
      step: "3",
      title: "Interview",
      description: "Meet with our team to discuss the position and your experience",
      icon: Users
    },
    {
      step: "4",
      title: "Skills Assessment",
      description: "Complete a practical skills assessment if required for the position",
      icon: Star
    },
    {
      step: "5",
      title: "Offer & Onboarding",
      description: "Receive job offer and begin our comprehensive onboarding process",
      icon: Zap
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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto leading-relaxed">
              Build your career with All Around Your House. We're looking for passionate professionals to join our growing team in the Tampa Bay area.
            </p>
            <div className="w-24 h-1 bg-brand-turquoise mx-auto mt-8"></div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore current opportunities to join our professional team and grow your career with us.
              </p>
            </div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <Card 
                  key={position.title}
                  className="border-0 shadow-soft hover:shadow-brand transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                          <position.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-brand-navy mb-2">
                            {position.title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {position.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {position.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {position.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {position.salary}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:text-right">
                        <span className="inline-block px-3 py-1 bg-brand-turquoise/10 text-brand-turquoise rounded-full text-sm font-medium mb-2">
                          {position.experience}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {position.description}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-brand-navy mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-brand-turquoise" />
                          Requirements:
                        </h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-brand-turquoise rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-brand-navy mb-3 flex items-center gap-2">
                          <Star className="w-5 h-5 text-brand-turquoise" />
                          Benefits:
                        </h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-brand-turquoise rounded-full mt-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link to="/contact">
                        <Button 
                          variant="white-on-dark"
                          size="lg"
                        >
                          Apply Now
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button 
                          variant="outline-white" 
                          size="lg"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Our Departments
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore opportunities across our different service departments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {departments.map((dept, index) => (
                <Card 
                  key={dept.name}
                  className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <dept.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-navy">
                      {dept.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {dept.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-brand-turquoise/10 text-brand-turquoise rounded-full text-sm font-medium">
                      {dept.positions} open positions
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join a company that values its employees and provides opportunities for growth and success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyWorkWithUs.map((item, index) => (
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

        {/* Application Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Application Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our simple 5-step application process to join our team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {applicationProcess.map((step, index) => (
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to join our team?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="white-on-dark" size="xl">
                  Apply Now
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

export default Jobs;
