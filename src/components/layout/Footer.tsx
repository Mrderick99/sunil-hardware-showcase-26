import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Sunil Hardware</h3>
                <p className="text-xs text-background/70">Quality You Can Trust</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Your trusted partner for quality hardware products. Serving the community with dedication and excellence since years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#categories" className="hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#products" className="hover:text-primary transition-colors">Electrical Items</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Plumbing Materials</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Construction Tools</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Paint & Accessories</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Safety Equipment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:9822222679" className="hover:text-primary transition-colors">9822222679</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kanji House</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@sunilhardware.com" className="hover:text-primary transition-colors">
                  info@sunilhardware.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon-Sat: 9AM - 8PM</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/50">
          <p>© {currentYear} Sunil Hardware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
