// pages/KatalogPage.tsx
import React from 'react';
import { ArrowLeft, Download, MapPin, Phone, Clock } from 'lucide-react';

interface KatalogPageProps {
  onBackToHome?: () => void;
}

const KatalogPage: React.FC<KatalogPageProps> = ({ onBackToHome }) => {
  const handleDownloadPDF = () => {
    const pdfUrl = '/katalog-umkm-tlobo.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Katalog-UMKM-Desa-Tlobo-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Kembali</span>
            </button>

            <h1 className="text-xl font-bold text-gray-800">
              Katalog UMKM Desa Tlobo 2025
            </h1>

            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Desa Tlobo Profile */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Profil Desa Tlobo
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Desa Tlobo di Kecamatan Jatiyoso, Karanganyar, adalah perpaduan harmonis 
                antara kekayaan alam, pertanian subur, dan geliat UMKM. Berada di lereng pegunungan, 
                Tlobo dianugerahi udara sejuk dan tanah gembur.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Menjadikannya sentra pertanian dengan komoditas unggulan seperti padi, jagung, 
                dan sayur-mayur segar yang melimpah. Keindahan bentang alam terasering juga 
                menambah pesona desa ini.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-4">Keunggulan Desa Tlobo:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Lokasi strategis di lereng pegunungan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Udara sejuk dan tanah gembur</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Sentra pertanian unggulan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Categories Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Food & Beverages</h4>
            <p className="text-gray-600 text-sm">
              Beragam usaha kuliner mulai dari seblak prasmanan, seafood, kafe, 
              hingga jajanan kekinian yang menggugah selera.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Dekorasi dan Kriya</h4>
            <p className="text-gray-600 text-sm">
              Produk-produk handcraft, rajutan, dan dekorasi buatan tangan 
              yang menampilkan kreativitas lokal.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌾</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Hasil Tani</h4>
            <p className="text-gray-600 text-sm">
              Produk-produk olahan hasil pertanian dan kebun yang fresh 
              langsung dari tangan petani lokal.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-8 bg-gradient-to-r from-green-50 via-white to-green-50 rounded-lg p-6 border border-green-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  📘 Katalog UMKM Desa Tlobo 2025
                </h3>
                <p className="text-gray-600">
                  Lihat dan unduh katalog resmi berisi profil lengkap UMKM unggulan desa Tlobo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                </button>
                <a
                  href="/katalog-umkm-tlobo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  👀 Lihat di Tab Baru
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300">
            <iframe
              src="/katalog-umkm-tlobo.pdf"
              title="Katalog UMKM Desa Tlobo"
              className="w-full h-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KatalogPage;
