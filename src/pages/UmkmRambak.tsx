// src/pages/UmkmRambak.tsx

import React, { useEffect, useState } from "react";
import { ArrowLeft, MapPin, Phone, Clock, Star, Users } from "lucide-react";
import UmkmNavigation from "../components/UmkmNavigation";

interface UmkmRambakProps {
  onBackToHome?: () => void;
  onUmkmNavigation?: (page: 'umkm-kamboja' | 'umkm-rambak') => void;
}

const UmkmRambak: React.FC<UmkmRambakProps> = ({ onBackToHome, onUmkmNavigation }) => {
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
              Rambak
            </h1>

            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light mb-6">
              "Mbak Yuni" - Pengusaha Rambak Berkualitas Tinggi
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-emerald-100 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Desa Tlobo, Jatiyoso</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7891</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>07:00 - 18:00 WIB</span>
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
                    src="/rambak_1.jpg"
                    alt="Rambak Mbak Yuni"
                    className="w-full h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Rambak+Mbak+Yuni";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/rambak_2.jpg"
                  alt="Proses Pembuatan"
                  className="w-full h-32 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300x200/059669/FFFFFF?text=Proses+Pembuatan";
                  }}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/rambak_3.jpg"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Rambak</h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                Ibu Sri Wahyuni merupakan pelaku usaha rumahan yang telah merintis usaha rambak sejak tahun 2015. Usaha ini bermula dari modal yang sangat terbatas, dimulai dengan hanya 4 hingga 5 karung bahan dasar. Jika mendapatkan keuntungan atau balik modal, barulah jumlah produksi ditambah secara bertahap. Semangat kewirausahaan ini terinspirasi dari sang kakak yang terlebih dahulu berjualan rambak.
                </p>
                
                <p>
                Dalam menjalankan usahanya, Ibu Sri Wahyuni sempat menghadapi berbagai tantangan, salah satunya adalah harga minyak goreng yang sempat melonjak hingga Rp25.000 per liter, yang menyulitkan proses produksi. Namun, dengan kegigihan dan keuletan, beliau terus mempertahankan dan mengembangkan usahanya.
                </p>

                <p>
                Pemasaran produk rambaknya dilakukan secara langsung ke warung-warung di sekitar desa, menjadikan sistem distribusi yang sederhana namun cukup efektif dalam menjangkau konsumen lokal. Lebih dari sekadar usaha, Ibu Sri Wahyuni memiliki harapan besar agar bisnis ini bisa berlanjut hingga ke anak cucu, sekaligus menjadi sumber penghidupan bagi orang-orang di sekitarnya. Beliau berharap usaha rambaknya bisa membuka lapangan pekerjaan dan memberikan manfaat ekonomi bagi masyarakat sekitar.
                </p>
              </div>
            </div>

            {/* Features */}
            {/* <div className="grid md:grid-cols-2 gap-4">
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
                  <h3 className="font-semibold text-gray-900">Pengalaman 15+ Tahun</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Produk Unggulan</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/placeholder-product-1.jpg"
                  alt="Produk 1"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Produk+1";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Rambak Tradisional</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/rambak_4.jpg"
                  alt="Produk 2"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300/059669/FFFFFF?text=Produk+2";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Rambak Modern</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/placeholder-product-3.jpg"
                  alt="Produk 3"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300/047857/FFFFFF?text=Produk+3";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Rambak Custom</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-xl mb-6 opacity-90">
            Tertarik dengan produk kami? Silakan hubungi Mbak Yuni untuk informasi lebih lanjut.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+62 812-3456-7891</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Desa Tlobo, Jatiyoso</span>
            </div>
          </div>
        </div>
      </div>

      {/* UMKM Navigation */}
      {onUmkmNavigation && (
        <UmkmNavigation 
          currentPage="umkm-rambak" 
          onNavigate={onUmkmNavigation} 
        />
      )}
    </div>
  );
};

export default UmkmRambak; 