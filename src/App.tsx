// App.tsx - Update minimal sesuai struktur yang sudah ada
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import VillagesSection from './components/VillagesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import JelajahiProgram from './pages/JelajahiProgram'; // Import halaman baru
import { useScroll } from './hooks/useScroll';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'programs'>('home'); // State baru untuk navigasi
  const { isScrolled } = useScroll();
  const { isVisible: isStatsVisible, elementRef: statsRef } = useIntersectionObserver(0.5);

  // Fungsi untuk navigasi ke halaman program
  const handleJelajahiProgram = () => {
    setCurrentPage('programs');
    setIsMenuOpen(false); // Tutup menu jika terbuka
  };

  // Fungsi untuk kembali ke halaman utama
  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  // Jika sedang di halaman program, render halaman program
  if (currentPage === 'programs') {
    return (
      <div className="min-h-screen bg-white">
        <JelajahiProgram onBackToHome={handleBackToHome} />
      </div>
    );
  }

  // Halaman utama (tidak berubah, hanya tambah props)
  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
        onJelajahiProgram={handleJelajahiProgram} // Props baru
      />
      
      <HeroSection onJelajahiProgram={handleJelajahiProgram} />
      
      <StatsSection 
        isStatsVisible={isStatsVisible}
        statsRef={statsRef}
      />
      
      <VillagesSection />
      
      <GallerySection />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
}

export default App;