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

// Wrapper component untuk halaman dengan proper navigation
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  
  const handleBackToHome = () => {
    navigate('/');
  };

  const handleUmkmNavigation = (page: 'umkm-kamboja' | 'umkm-rambak' | 'katalog') => {
    navigate(`/${page}`);
  };

  // Clone children dan inject props
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onBackToHome: handleBackToHome,
        onUmkmNavigation: handleUmkmNavigation
      } as any);
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

// App utama dengan router
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={
          <PageWrapper>
            <JelajahiProgram />
          </PageWrapper>
        } />
        <Route path="/umkm-kamboja" element={
          <PageWrapper>
            <UmkmKamboja />
          </PageWrapper>
        } />
        <Route path="/umkm-rambak" element={
          <PageWrapper>
            <UmkmRambak />
          </PageWrapper>
        } />
        <Route path="/katalog" element={
          <PageWrapper>
            <KatalogPage />
          </PageWrapper>
        } />
      </Routes>
    </Router>
  );
};

export default App;
