import React from 'react';
import { CheckCircle } from 'lucide-react';
import { villages } from '../data/villages';

const VillagesSection: React.FC = () => {

  return (
    <section id="desa" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Desa <span className="text-emerald-600">Binaan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mengenal lebih dekat kedua desa yang menjadi lokasi pengabdian KKN Rosanata 2025
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {villages.map((village, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={village.image} 
                    alt={village.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{village.name}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {village.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-emerald-600">{village.population}</div>
                      <div className="text-sm text-gray-600">Populasi</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">{village.area}</div>
                      <div className="text-sm text-gray-600">Luas Wilayah</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Program Utama:</h4>
                    <div className="space-y-2">
                      {village.programs.map((program, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                          {program}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-colors">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillagesSection; 