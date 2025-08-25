import { Phone, Mail, MapPin, Facebook, Instagram, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "@/lib/api";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { data: settings } = useQuery({ queryKey: ['settings'], queryFn: getSettings });

  

  return (
    <footer className="bg-brand-navy text-white relative z-20">
      <div className="container mx-auto px-4 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">

              <div>
                <div className="flex items-center gap-0">
                  <h3 className="text-xl font-bold text-white">{settings?.siteName || 'FreshC'}</h3>
                  <img src="/Leaf.png" alt="Leaf" className="w-[18px] h-[18px]" />
                </div>
                <p className="text-brand-cream">We Make Clean Feel Fresh</p>
              </div>
            </div>
            <p className="text-brand-cream mb-4 max-w-md">
            Professional residential and commercial cleaning services throughout Collin County
            </p>
            <div className="flex gap-4">
              {settings?.social?.facebook && (
                <a href={settings.social.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-cream hover:text-brand-turquoise transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {settings?.social?.instagram && (
                <a href={settings.social.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-cream hover:text-brand-turquoise transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
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
              {/* <li>
                <Link to="/about-us" className="text-brand-cream hover:text-brand-turquoise transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-cream hover:text-brand-turquoise transition-colors">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-brand-cream">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{settings?.phone || '469 592 4438'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{settings?.email || 'info@freshco-cleaning.com'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{settings?.address || '3300 Dallas Pkwy, Plano TX, 75093'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {settings?.siteName || 'All Around FrashCo'}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Service area: {settings?.address || 'North Dallas'}
            </p>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;