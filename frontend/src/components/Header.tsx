import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about-us" },
    { name: "Residential Cleaning", to: "/residential-cleaning" },
    { name: "Commercial Cleaning", to: "/commercial-cleaning" },
    { name: "Contact Us", to: "/contact" }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-navy text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Call us: (727) 992-3578</span>
          </div>
          <div className="flex items-center gap-3">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-brand-turquoise transition-colors" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-brand-turquoise transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-16 h-16 bg-brand-turquoise rounded-full flex items-center justify-center">
                  <div className="text-white font-bold text-lg">A</div>
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-brand-navy">All Around</h1>
                  <p className="text-sm text-muted-foreground">Your House Services</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link to="/contact">
                <Button variant="white-on-dark" className="hidden md:inline-flex">
                  GET IN TOUCH
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <nav className="container mx-auto px-4 py-4">
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
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;