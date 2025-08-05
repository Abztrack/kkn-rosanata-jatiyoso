// src/components/UmkmNavigation.tsx

import React from 'react';
import { ArrowLeft, ArrowRight, Store, Users } from 'lucide-react';

interface UmkmNavigationProps {
  currentPage: 'umkm-kamboja' | 'umkm-rambak';
  onNavigate: (page: 'umkm-kamboja' | 'umkm-rambak') => void;
}

const UmkmNavigation: React.FC<UmkmNavigationProps> = ({ currentPage, onNavigate }) => {
  const umkmData = {
    'umkm-kamboja': {
      name: 'Kamboja Jepang',
      owner: 'Mas Sutardi',
      location: 'Desa Karangsari',
      icon: Store,
      color: 'from-emerald-500 to-blue-500',
      nextPage: 'umkm-rambak' as const
    },
    'umkm-rambak': {
      name: 'Rambak',
      owner: 'Mbak Yuni',
      location: 'Desa Tlobo',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      nextPage: 'umkm-kamboja' as const
    }
  };

  const current = umkmData[currentPage];
  const next = umkmData[current.nextPage];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Navigation Card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 backdrop-blur-sm bg-opacity-95">
        <div className="flex items-center space-x-4">
          {/* Current UMKM Info */}
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${current.color} flex items-center justify-center`}>
              <current.icon className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">{current.name}</p>
              <p className="text-xs text-gray-600">{current.owner}</p>
            </div>
          </div>

          {/* Navigation Arrow */}
          <div className="flex items-center space-x-2">
            <div className="w-px h-8 bg-gray-200"></div>
            <button
              onClick={() => onNavigate(current.nextPage)}
              className="group relative p-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
              
              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Lihat {next.name}
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </button>
          </div>

          {/* Next UMKM Preview */}
          <div className="hidden sm:flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => onNavigate(current.nextPage)}>
            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${next.color} flex items-center justify-center`}>
              <next.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{next.name}</p>
              <p className="text-xs text-gray-600">{next.owner}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-3 flex justify-center">
        <div className="flex space-x-2">
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentPage === 'umkm-kamboja' ? 'bg-emerald-500 scale-125' : 'bg-gray-300'
          }`}></div>
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentPage === 'umkm-rambak' ? 'bg-emerald-500 scale-125' : 'bg-gray-300'
          }`}></div>
        </div>
      </div>
    </div>
  );
};

export default UmkmNavigation; 