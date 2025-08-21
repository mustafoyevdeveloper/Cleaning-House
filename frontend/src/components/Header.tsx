import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Facebook, Instagram, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const navigationItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about-us" },
    { name: "Residential Cleaning", to: "/residential-cleaning" },
    { name: "Commercial Cleaning", to: "/commercial-cleaning" },
    { name: "Contact Us", to: "/contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-brand-navy text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Call us: 469-592-4438</span>
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

      {/* Navigation Bar - Dynamic Background */}
      <nav className={`py-4 px-4 transition-all duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="Logo.png" alt="FreshC Your House Services" className="w-12 h-12" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-brand-navy' : 'text-white'
                }`}>
                  FreshC
                </h1>
                <Leaf className="w-5 h-5 text-green-500" />
              </div>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-brand-cream'
              }`}>
                Your House Services
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

          {/* GET IN TOUCH Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="white-on-dark" size="sm">
                GET IN TOUCH
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors duration-300 p-2 rounded-lg hover:bg-white/10 relative z-50 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm mt-4 rounded-xl shadow-2xl border border-gray-200/50 mx-4" ref={menuRef}>
            <div className="py-6">
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
                  className="block px-6 py-4 text-gray-700 hover:text-brand-turquoise hover:bg-gray-50 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className="block px-6 py-4 text-gray-700 hover:text-brand-turquoise hover:bg-gray-50 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/residential-cleaning"
                  className="block px-6 py-4 text-gray-700 hover:text-brand-turquoise hover:bg-gray-50 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Residential Cleaning
                </Link>
                <Link
                  to="/commercial-cleaning"
                  className="block px-6 py-4 text-gray-700 hover:text-brand-turquoise hover:bg-gray-50 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Commercial Cleaning
                </Link>
                <Link
                  to="/contact"
                  className="block px-6 py-4 text-gray-700 hover:text-brand-turquoise hover:bg-gray-50 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
              <div className="px-6 pt-6 border-t border-gray-200 mt-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="brand" className="w-full py-3">
                    GET IN TOUCH
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;