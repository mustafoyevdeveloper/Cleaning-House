import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Facebook, Instagram, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "@/lib/api";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const { data: settings } = useQuery({ queryKey: ['settings'], queryFn: getSettings });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-brand-navy text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Call us: {settings?.phone || '469-592-4438'}</span>
          </div>
          <div className="flex gap-4">
            {settings?.social?.facebook && (
              <a href={settings.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-turquoise transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            )}
            {settings?.social?.instagram && (
              <a href={settings.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-turquoise transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Bar - Dynamic Background */}
      <nav className={`py-4 px-4 transition-all duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
          <Link to="/" className="flex items-center gap-[-1] ml-[-20px]">
 
            <div>
              <div className="flex items-center gap-0">
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-brand-navy' : 'text-white'
                }`}>
                  {settings?.siteName || 'FreshC'}
                </h1>
                <Leaf className="w-[4.5] h-[4.5] text-blue-green-500" />
              </div>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-brand-cream'
              }`}>
                We Make Clean Feel Fresh
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 justify-center flex-1">
            <Link to="/" className={`transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-brand-turquoise' : 'text-white hover:text-brand-turquoise'
            }`}>Home</Link>
            <Link to="/about-us" className={`transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-brand-turquoise' : 'text-white hover:text-brand-turquoise'
            }`}>About Us</Link>
            <Link to="/residential-cleaning" className={`transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-brand-turquoise' : 'text-white hover:text-brand-turquoise'
            }`}>Residential Cleaning</Link>
            <Link to="/commercial-cleaning" className={`transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-brand-turquoise' : 'text-white hover:text-brand-turquoise'
            }`}>Commercial Cleaning</Link>
            <Link to="/contact" className={`transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-brand-turquoise' : 'text-white hover:text-brand-turquoise'
            }`}>Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-all duration-300 p-2 rounded-lg hover:bg-white/10 relative z-50 mr-[-30px] ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            } ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6 pointer-events-none">
              <div className={`absolute inset-0 transition-all duration-300 pointer-events-none ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}>
                <Menu className="w-6 h-6" />
              </div>
              <div className={`absolute inset-0 transition-all duration-300 pointer-events-none ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}>
                <X className="w-6 h-6" />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-sm mt-4 rounded-xl shadow-2xl border border-gray-200/50 mx-4 transform transition-all duration-300 ease-in-out" ref={menuRef}>
            <div className="py-6">
                            {/* Mobile Logo and Tagline */}
              <div className="px-6 mb-6">
                                <div className="flex items-center gap-3 mb-3 ml-[-20px]">
 
                  <div>
                    <div className="flex items-center gap-0">
                      <h3 className="text-lg font-bold text-brand-navy">FreshC</h3>
                      <Leaf className="w-4 h-4 text-blue-green-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">We Make Clean Feel Fresh</p>
                  </div>
                </div>
              </div>
              
              {/* Close Button */}
              <div className="flex justify-end px-6 mb-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-1">
                <Link
                  to="/"
                  className={`block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform ${pathname === "/" ? "text-brand-turquoise bg-brand-turquoise/10" : "text-gray-700 md:hover:text-brand-turquoise"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className={`block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform ${pathname === "/about-us" ? "text-brand-turquoise bg-brand-turquoise/10" : "text-gray-700 md:hover:text-brand-turquoise"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/residential-cleaning"
                  className={`block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform ${pathname === "/residential-cleaning" ? "text-brand-turquoise bg-brand-turquoise/10" : "text-gray-700 md:hover:text-brand-turquoise"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Residential Cleaning
                </Link>
                <Link
                  to="/commercial-cleaning"
                  className={`block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform ${pathname === "/commercial-cleaning" ? "text-brand-turquoise bg-brand-turquoise/10" : "text-gray-700 md:hover:text-brand-turquoise"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Commercial Cleaning
                </Link>
                <Link
                  to="/contact"
                  className={`block px-6 py-4 transition-all duration-300 font-medium hover:bg-gray-50 hover:translate-x-2 transform ${pathname === "/contact" ? "text-brand-turquoise bg-brand-turquoise/10" : "text-gray-700 md:hover:text-brand-turquoise"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;