import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Facebook, Instagram, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <Leaf className="w-5 h-5 text-brand-turquoise" />
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
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm mt-4 rounded-lg shadow-lg border border-gray-200">
            <div className="py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block py-3 text-gray-700 hover:text-brand-turquoise transition-colors border-b border-border last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/contact">
                  <Button variant="white-on-dark" className="w-full">
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