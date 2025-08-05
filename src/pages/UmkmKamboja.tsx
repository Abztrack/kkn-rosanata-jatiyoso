// src/pages/UmkmKamboja.tsx

import React, { useEffect, useState } from "react";
import { ArrowLeft, MapPin, Phone, Clock, Star, Users } from "lucide-react";
import UmkmNavigation from "../components/UmkmNavigation";

interface UmkmKambojaProps {
  onBackToHome?: () => void;
  onUmkmNavigation?: (page: 'umkm-kamboja' | 'umkm-rambak') => void;
}

const UmkmKamboja: React.FC<UmkmKambojaProps> = ({ onBackToHome, onUmkmNavigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="mb-6 flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-opacity-30 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </button>
          )}

          <div
            className={`text-center transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-1 mb-4 backdrop-blur-sm">
              <Star className="w-3 h-3" />
              <span className="text-xs font-medium">UMKM Desa</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-emerald-200 bg-clip-text text-transparent">
              Kamboja Jepang
            </h1>

            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light mb-6">
              "Mas Sutardi" - Budidaya Kamboja Jepang Berkualitas Tinggi
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-emerald-100 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Desa Karangsari, Jatiyoso</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>08:00 - 17:00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="../public/judul_kamboja_jepang.jpg"
                alt="Kamboja Jepang Mas Sutardi"
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Kamboja+Jepang+Mas+Sutardi";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="../public/proses_kamboja_2.jpg"
                  alt="Proses Pembuatan"
                  className="w-full h-32 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300x200/059669/FFFFFF?text=Proses+Pembuatan";
                  }}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="../public/proses_kamboja_3.jpg"
                  alt="Hasil Produksi"
                  className="w-full h-32 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300x200/047857/FFFFFF?text=Hasil+Produksi";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Kamboja Jepang</h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                Mas Sutardi, atau yang akrab disapa Mas Dogol, merupakan seorang pelaku budidaya tanaman hias yang memfokuskan diri pada adenium, yang lebih dikenal masyarakat sebagai kamboja jepang. Ketertarikannya terhadap dunia bunga dan tanaman hias mendorongnya untuk menekuni budidaya adenium sebagai hobi yang kini berkembang menjadi kegiatan produktif.
                </p>
                
                <p>
                Proses budidaya yang dilakukan oleh Mas Sutardi mencakup seluruh tahapan, mulai dari pembibitan, pembenihan, pembesaran, hingga teknik perawatan seperti proning dan penyetekan. Menariknya, media tanam yang digunakan dibuat sendiri dari sekam bakar, yang mencerminkan kreativitas dan ketekunannya dalam merawat tanaman secara mandiri. Karakter adenium yang menyerupai bonsai namun berbunga menjadikan tanaman ini unik dan bernilai estetika tinggi.
                </p>

                <p>
                Lebih dari sekadar aktivitas berkebun, Mas Sutardi memiliki motivasi untuk memperindah lingkungan sekitarnya melalui tanaman. Kecintaannya terhadap bunga ia wujudkan sebagai bentuk kontribusi nyata dalam menciptakan lingkungan yang lebih asri dan menyenangkan untuk dipandang.


                </p>
              </div>
            </div>

            {/* Features */}
            {/*<div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-100">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Kualitas Premium</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Pengalaman 5+ Tahun</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>*/}
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Produk Unggulan</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="../public/adenium_cabang_seribu.jpg"
                  alt="Produk 1"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Produk+1";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kamboja Jepang Cabang Seribu</h3>
              {/*<p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>*/}
            </div>

            <div className="text-center space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="../public/adenium_merah.jpg"
                  alt="Produk 2"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300/059669/FFFFFF?text=Produk+2";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kamboja Jepang Merah</h3>
              {/*<p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>*/}
            </div>

            <div className="text-center space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="../public/adenium_putih.jpg"
                  alt="Produk 3"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300/047857/FFFFFF?text=Produk+3";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kamboja Jepang Putih</h3>
              {/*<p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>*/}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-xl mb-6 opacity-90">
            Tertarik dengan produk kami? Silakan hubungi Mas Sutardi untuk informasi lebih lanjut.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Desa Karangsari, Jatiyoso</span>
            </div>
          </div>
        </div>
      </div>

      {/* UMKM Navigation */}
      {onUmkmNavigation && (
        <UmkmNavigation 
          currentPage="umkm-kamboja" 
          onNavigate={onUmkmNavigation} 
        />
      )}
    </div>
  );
};

export default UmkmKamboja; 