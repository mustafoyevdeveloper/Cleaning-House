import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

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
              <Link to="/" className="flex items-center">
                <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center mr-3">
                  <div className="text-white font-bold">A</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">All Around</h3>
                  <p className="text-sm text-gray-300">Your House Services</p>
                </div>
              </Link>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional home improvement and cleaning services in the Greater Tampa Bay Area. All your house needs from a single trusted source.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-brand-turquoise cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-brand-turquoise cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/cleaning-services" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Standard & Deep Cleaning</Link></li>
              <li><Link to="/cleaning-services" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Vacation Rentals & Airbnb</Link></li>
              <li><Link to="/cleaning-services" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Small Business Cleaning</Link></li>
              <li><Link to="/cleaning-services" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Residential Cleaning</Link></li>
              <li><Link to="/cleaning-services" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Move-In Move-Out</Link></li>
              <li><Link to="/home-improvement" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Handyman Services</Link></li>
              <li><Link to="/home-improvement" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Home Maintenance</Link></li>
              <li><Link to="/interior-design" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Interior Design</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Contact</Link></li>
              <li><Link to="/jobs" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Careers</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Privacy Policy</a></li>
            </ul>
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