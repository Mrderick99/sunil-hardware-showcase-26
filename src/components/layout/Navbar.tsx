import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Phone, MapPin, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavbarProps {
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, onSearchChange, searchQuery }) => {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Categories', href: '#categories' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:9822222679" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">9822222679</span>
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Kanji House</span>
            </span>
          </div>
          <span className="text-xs sm:text-sm">Free Delivery on orders above ₹1000</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2" onClick={() => scrollToSection('#home')}>
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-xl text-foreground">Sunil Hardware</h1>
                <p className="text-xs text-muted-foreground">Quality You Can Trust</p>
              </div>
            </a>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="input-search pl-10"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="relative"
                onClick={onCartClick}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px]">
                  <div className="flex flex-col gap-6 mt-8">
                    {/* Mobile Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="input-search pl-10"
                      />
                    </div>

                    {/* Mobile Nav Links */}
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <button
                          key={link.name}
                          onClick={() => scrollToSection(link.href)}
                          className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                        >
                          {link.name}
                        </button>
                      ))}
                    </nav>

                    {/* Mobile Contact Info */}
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <a href="tel:9822222679" className="flex items-center gap-2 hover:text-primary">
                        <Phone className="w-4 h-4" />
                        9822222679
                      </a>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Kanji House
                      </span>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
