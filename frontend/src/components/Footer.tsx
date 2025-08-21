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
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                <img src="logopng" alt="All Around Your House Services" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">All Around</h3>
                <p className="text-brand-cream">Your House Services</p>
              </div>
            </div>
            <p className="text-brand-cream mb-4 max-w-md">
              Professional cleaning and maintenance services for homes and businesses in the Dallas-Fort Worth metroplex.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-cream hover:text-brand-turquoise transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-cream hover:text-brand-turquoise transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/residential-cleaning" className="text-brand-cream hover:text-brand-turquoise transition-colors">
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link to="/commercial-cleaning" className="text-brand-cream hover:text-brand-turquoise transition-colors">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-brand-cream hover:text-brand-turquoise transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-cream hover:text-brand-turquoise transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-brand-cream">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(727) 992-3578</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@allaroundyourhouse.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Dallas-Fort Worth Metroplex</span>
              </div>
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