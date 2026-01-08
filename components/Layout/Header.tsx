import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
             <div className="w-10 h-10 bg-gradient-to-br from-brand-light to-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                K
              </div>
            <div className={`font-bold text-xl tracking-wider ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              KAO LINK
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium hover:text-brand-primary transition-colors relative group ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#cta" 
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-md ${
                isScrolled 
                  ? 'bg-gradient-to-r from-brand-primary to-brand-dark text-white hover:shadow-glow' 
                  : 'bg-white text-brand-primary hover:bg-gray-50'
              }`}
            >
              お問い合わせ
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-300 flex flex-col justify-center items-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-bold text-gray-800 hover:text-brand-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-dark text-white rounded-full font-bold shadow-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            お問い合わせ
          </a>
      </div>
    </header>
  );
};