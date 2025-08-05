// src/components/JelajahiProgram.tsx

import React, { useEffect, useState } from "react";
import {
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  Clock,
  Target,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { programs } from "../data/programData"; // ✅ Import dari file terpisah

interface JelajahiProgramProps {
  onBackToHome?: () => void;
  onProgramSelect?: (programId: number) => void;
}

const JelajahiProgram: React.FC<JelajahiProgramProps> = ({ onBackToHome, onProgramSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: "semua", name: "Semua Program", color: "bg-blue-500" },
    { id: "ekonomi", name: "Ekonomi", color: "bg-green-500" },
    { id: "pariwisata", name: "Pariwisata", color: "bg-purple-500" },
    { id: "pertanian", name: "Pertanian", color: "bg-orange-500" },
    { id: "sosial", name: "Sosial", color: "bg-pink-500" },
    { id: "teknologi", name: "Teknologi", color: "bg-indigo-500" },
    { id: "kesehatan", name: "Kesehatan", color: "bg-red-500" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredPrograms =
    selectedCategory === "semua"
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Berlangsung":
        return "bg-green-100 text-green-800 border-green-200";
      case "Selesai":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Perencanaan":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

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
              <Target className="w-3 h-3" />
              <span className="text-xs font-medium">Program Kerja KKN</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-emerald-200 bg-clip-text text-transparent">
              Jelajahi Program
            </h1>

            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
              Temukan berbagai program inovatif yang kami jalankan untuk memberdayakan masyarakat dan mengembangkan potensi desa
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div> */}

        {/* Program Cards */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                      program.status
                    )}`}
                  >
                    {program.status}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-2 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-green-500" />
                      <span>{program.participants}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-red-500" />
                      <span>{program.location}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlight Program:</h4>
                    <div className="space-y-1 text-xs text-gray-600">
                      {program.highlights.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                  onClick={() => onProgramSelect?.(program.id)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JelajahiProgram;
