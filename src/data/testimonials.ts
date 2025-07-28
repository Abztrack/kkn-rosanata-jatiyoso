export interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Bapak Suharto',
    role: 'Kepala Desa Tlobo',
    message: 'Program KKN ini sangat membantu kemajuan desa kami, terutama dalam bidang teknologi pertanian.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Bapak Hartanto',
    role: 'Kepala Desa Karangsari',
    message: 'Mahasiswa KKN membantu kami mengembangkan produk kerajinan lokal dengan pemasaran digital.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
]; 