import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Standard & Deep Cleaning",
    "Vacation Rentals & Airbnb",
    "Small Business Cleaning", 
    "Residential Cleaning",
    "Move-In Move-Out",
    "Handyman Services",
    "Home Maintenance",
    "Interior Design"
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center mr-3">
                <div className="text-white font-bold">A</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">All Around</h3>
                <p className="text-sm text-gray-300">Your House Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional home improvement and cleaning services in the Greater Tampa Bay Area. All your house needs from a single trusted source.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-brand-turquoise cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-brand-turquoise cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services & Quick Links Row */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Services</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Contact</a></li>
                <li><a href="#jobs" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-turquoise" />
                <span className="text-gray-300 text-sm">(727) 992-3578</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-turquoise" />
                <span className="text-gray-300 text-sm">info@all-aroundyourhouse.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-turquoise mt-0.5" />
                <span className="text-gray-300 text-sm">Greater Tampa Bay Area<br />Florida, USA</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-brand-turquoise/10 rounded-lg">
              <p className="text-brand-turquoise font-semibold text-sm mb-1">Licensed & Insured</p>
              <p className="text-gray-300 text-xs">Professional services you can trust</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} All Around Your House. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Serving the Greater Tampa Bay Area with pride
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;