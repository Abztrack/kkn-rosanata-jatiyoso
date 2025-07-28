import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import VillagesSection from './components/VillagesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScroll } from './hooks/useScroll';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScroll();
  const { isVisible: isStatsVisible, elementRef: statsRef } = useIntersectionObserver(0.5);

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
      />
      
      <HeroSection />
      
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