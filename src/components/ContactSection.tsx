import React from 'react';
import { FaInstagram, FaTiktok } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section id="kontak" className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hubungi <span className="text-yellow-400">Kami</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Ikuti kami di media sosial untuk informasi terbaru tentang program KKN
          </p>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 rounded-3xl p-12 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Ikuti Kami</h3>
            <p className="text-emerald-100 mb-8">
              Dapatkan update terbaru tentang kegiatan dan program KKN Rosanata Jatiyoso 2025
            </p>
            
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.instagram.com/rosa.natajatiyoso_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-3 p-6 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-full">
                  <FaInstagram className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">Instagram</p>
                  <p className="text-sm text-emerald-100">@rosa.natajatiyoso_</p>
                </div>
              </a>
              
              <a
                href="http://tiktok.com/@rosanata.jatiyoso_"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-3 p-6 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-black to-gray-800 p-4 rounded-full">
                  <FaTiktok className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">TikTok</p>
                  <p className="text-sm text-emerald-100">@rosanata.jatiyoso_</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white border-opacity-20">
              <p className="text-emerald-100 text-sm">
                <strong>Universitas Gadjah Mada</strong> • Desa Tlobo & Karangsari
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 