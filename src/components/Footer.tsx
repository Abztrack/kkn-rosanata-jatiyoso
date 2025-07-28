import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="/logo rosanata 2024.png" 
              alt="Rosanata 2025" 
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold">KKN Rosanata 2025</h3>
              <p className="text-gray-400 text-sm">Tlobo & Karangsari</p>
            </div>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Bersama membangun desa yang maju, mandiri, dan berkelanjutan melalui program-program inovatif dan pemberdayaan masyarakat.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 KKN Rosanata. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 