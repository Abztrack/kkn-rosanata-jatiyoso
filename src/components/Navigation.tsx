// components/Navigation.tsx - Updated sesuai struktur yang sudah ada
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
  onJelajahiProgram?: () => void; // Tambahan props untuk navigasi ke program
}

const Navigation: React.FC<NavigationProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  isScrolled,
  onJelajahiProgram 
}) => {
  // Update navItems dengan menambahkan Program
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Program', action: onJelajahiProgram }, // Menggunakan action untuk navigasi
    { label: 'Desa', href: '#desa' }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.action) {
      // Jika ada action (navigasi ke halaman program)
      item.action();
    } else if (item.href) {
      // Jika ada href (scroll ke section)
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Tutup menu mobile setelah klik
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo rosanata 2024.png" 
              alt="Rosanata 2024" 
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h1 className={`font-bold text-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                KKN Rosanata Jatiyoso 2025
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Desa Tlobo & Desa Karangsari
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Updated */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item)}
                className={`font-medium transition-colors cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Updated */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;