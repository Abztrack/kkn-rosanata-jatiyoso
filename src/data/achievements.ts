export interface Achievement {
  number: string;
  label: string;
  iconName: 'MapPin' | 'Users' | 'Calendar' | 'Star';
}

export const achievements: Achievement[] = [
  { number: '2', label: 'Desa Binaan', iconName: 'MapPin' },
  { number: '28', label: 'Mahasiswa KKN', iconName: 'Users' },
  { number: '50', label: 'Hari Pengabdian', iconName: 'Calendar' },
  { number: '8777', label: 'Masyarakat yang Terlibat', iconName: 'Star' }
]; 