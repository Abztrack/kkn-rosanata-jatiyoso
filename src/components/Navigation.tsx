// components/Navigation.tsx - Updated sesuai struktur yang sudah ada
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
  onJelajahiProgram?: () => void; // Tambahan props untuk navigasi ke program
  onUmkmNavigation?: (page: 'umkm-kamboja' | 'umkm-rambak') => void; // Props untuk navigasi UMKM
}

const Navigation: React.FC<NavigationProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  isScrolled,
  onJelajahiProgram,
  onUmkmNavigation
}) => {
  const [isUmkmDropdownOpen, setIsUmkmDropdownOpen] = useState(false);
  const umkmDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (umkmDropdownRef.current && !umkmDropdownRef.current.contains(event.target as Node)) {
        setIsUmkmDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update navItems dengan menambahkan Program dan UMKM
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Program', action: onJelajahiProgram }, // Menggunakan action untuk navigasi
    { label: 'Desa', href: '#desa' }
  ];

  const umkmItems = [
    { label: 'Kamboja Jepang "Mas Sutardi"', page: 'umkm-kamboja' as const },
    { label: 'Rambak "Mbak Yuni"', page: 'umkm-rambak' as const }
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

  const handleUmkmClick = (page: 'umkm-kamboja' | 'umkm-rambak') => {
    if (onUmkmNavigation) {
      onUmkmNavigation(page);
    }
    setIsUmkmDropdownOpen(false);
    setIsMenuOpen(false);
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
            
            {/* UMKM Dropdown */}
            <div className="relative" ref={umkmDropdownRef}>
              <button
                onClick={() => setIsUmkmDropdownOpen(!isUmkmDropdownOpen)}
                className={`font-medium transition-colors cursor-pointer flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
                }`}
              >
                <span>UMKM</span>
                {isUmkmDropdownOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              
              {isUmkmDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {umkmItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleUmkmClick(item.page)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 font-medium transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
            
            {/* Mobile UMKM Section */}
            <div className="border-t border-gray-200 mt-2 pt-2">
              <div className="px-3 py-2 text-gray-700 font-medium">UMKM</div>
              {umkmItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleUmkmClick(item.page)}
                  className="block w-full text-left px-6 py-2 text-gray-600 hover:text-emerald-600 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;