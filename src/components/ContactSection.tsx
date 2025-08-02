import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaUniversity, FaHeart } from "react-icons/fa";

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      id: 'instagram',
      name: 'Instagram',
      username: '@rosa.natajatiyoso_',
      url: 'https://www.instagram.com/rosa.natajatiyoso_/',
      icon: FaInstagram,
      gradient: 'from-pink-500 via-purple-500 to-orange-500',
      hoverGradient: 'from-pink-400 via-purple-400 to-orange-400',
      description: 'Foto & cerita kegiatan'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      username: '@rosanata.jatiyoso_',
      url: 'http://tiktok.com/@rosanata.jatiyoso_',
      icon: FaTiktok,
      gradient: 'from-black via-gray-800 to-gray-600',
      hoverGradient: 'from-gray-800 via-gray-600 to-gray-400',
      description: 'Video aktivitas seru'
    }
  ];

  return (
    <section id="kontak" className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <FaHeart className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium">Mari Terhubung</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-emerald-200 bg-clip-text text-transparent">
            Hubungi Kami
          </h2>
          
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
            Ikuti perjalanan KKN kami dan dapatkan insight menarik tentang pemberdayaan masyarakat desa
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            const isHovered = hoveredCard === social.id;
            
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block transition-all duration-500 transform hover:scale-105 ${
                  isHovered ? 'z-10' : ''
                }`}
                onMouseEnter={() => setHoveredCard(social.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`relative bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-500 ${
                  isHovered ? 'shadow-2xl shadow-white/20' : 'shadow-lg shadow-black/20'
                }`}>
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className={`bg-gradient-to-br ${isHovered ? social.hoverGradient : social.gradient} p-4 rounded-2xl shadow-lg transform group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-200 transition-colors duration-300">
                          {social.name}
                        </h3>
                        <p className="text-emerald-200 font-medium">{social.username}</p>
                      </div>
                    </div>
                    
                    <p className="text-emerald-100 text-lg mb-4">{social.description}</p>
                    
                    <div className="flex items-center text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors duration-300">
                      <span>Kunjungi Sekarang</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        
        {/* Enhanced Info Card */}
        <div className={`transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-white">KKN Rosanata Jatiyoso 2025</h3>
              <p className="text-emerald-100 text-lg leading-relaxed">
                Program pengabdian masyarakat yang bertujuan membangun dan memberdayakan potensi lokal
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl">
                  <FaUniversity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg text-white">Universitas Gadjah Mada</p>
                  <p className="text-emerald-200 text-sm">Institusi Pendidikan</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg text-white">Desa Tlobo & Karangsari</p>
                  <p className="text-emerald-200 text-sm">Lokasi Pengabdian</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-emerald-100 text-lg font-medium">
                "Bersama membangun desa, bersama merajut masa depan yang lebih baik"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;