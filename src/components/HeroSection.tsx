// components/HeroSection.tsx - Updated version
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onJelajahiProgram?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onJelajahiProgram }) => {
  const handleGalleryClick = () => {
    const galleryElement = document.querySelector('#galeri');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400"></div>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(./2.jpg)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 via-blue-900/50 to-purple-900/50"></div>
      
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <img 
            src="/logo rosanata 2024.png" 
            alt="Rosanata 2025" 
            className="h-24 w-24 mx-auto mb-6 rounded-full shadow-2xl"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          KKN <span className="text-yellow-400">Rosanata</span><br className="sm:hidden" />
          <span className="text-yellow-400"> Jatiyoso</span> 2025
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
          "Upaya Pengembangan Ekonomi Mandiri dan Berkelanjutan melalui Optimalisasi Sumber Daya Pertanian, Pemberdayaan Sektor Pariwisata, serta Asistensi Bersama BUMDes"
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onJelajahiProgram}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Jelajahi Program
          </button>
          <button 
            onClick={handleGalleryClick}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Lihat Galeri
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;