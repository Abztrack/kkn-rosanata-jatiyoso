// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import VillagesSection from './components/VillagesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import JelajahiProgram from './pages/JelajahiProgram';
import UmkmKamboja from './pages/UmkmKamboja';
import UmkmRambak from './pages/UmkmRambak';
import KatalogPage from './pages/KatalogPage';

import { useScroll } from './hooks/useScroll';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

// Komponen HomePage dipisah agar bisa digunakan dalam route
const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { isScrolled } = useScroll();
  const { isVisible: isStatsVisible, elementRef: statsRef } = useIntersectionObserver(0.5);

  const handleJelajahiProgram = () => {
    navigate('/programs');
  };

  const handleUmkmNavigation = (page: 'umkm-kamboja' | 'umkm-rambak' | 'katalog') => {
    navigate(`/${page}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
        onJelajahiProgram={handleJelajahiProgram}
        onUmkmNavigation={handleUmkmNavigation}
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
};

// App utama dengan router
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<JelajahiProgram onBackToHome={() => window.history.back()} />} />
        <Route path="/umkm-kamboja" element={<UmkmKamboja onBackToHome={() => window.history.back()} onUmkmNavigation={(p) => window.location.href = `/${p}`} />} />
        <Route path="/umkm-rambak" element={<UmkmRambak onBackToHome={() => window.history.back()} onUmkmNavigation={(p) => window.location.href = `/${p}`} />} />
        <Route path="/katalog" element={<KatalogPage onBackToHome={() => window.history.back()} />} />
      </Routes>
    </Router>
  );
};

export default App;
