export interface Village {
  name: string;
  description: string;
  image: string;
  programs: string[];
  population: string;
  area: string;
}

export const villages: Village[] = [
  {
    name: 'Desa Tlobo',
    description: 'Desa ini memiliki kontur wilayah yang berbukit dan didominasi oleh lahan pertanian. Masyarakat Tlobo terkenal dengan kegiatan gotong royong dan adat istiadat yang masih terjaga.',
    image: '/tlobo.png',
    programs: ['Pemberdayaan UMKM', 'Edukasi Kesehatan', 'Pengembangan Wisata'],
    population: '3,350 jiwa',
    area: '4,98 km²'
  },
  {
    name: 'Desa Karangsari',
    description: 'Kehidupan masyarakat Karangsari umumnya masih kental dengan budaya pedesaan. Sebagian besar penduduk bermata pencaharian di sektor pertanian dan peternakan.',
    image: 'karangsari.png',
    programs: ['Pemasangan Lampu Tenaga Surya', 'Screening Kesehatan', 'Pemberdayaan Ternak'],
    population: '5,427 jiwa',
    area: '7,32 km²'
  }
]; 