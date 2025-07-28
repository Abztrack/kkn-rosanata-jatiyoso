# KKN Rosanata 2025 Website

A modern, responsive website for the KKN Rosanata 2025 community service program, showcasing activities in Desa Tlobo and Desa Karangsari.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Beautiful gradients, animations, and hover effects
- **Modular Architecture**: Easy to maintain and modify
- **TypeScript**: Full type safety
- **Performance Optimized**: Fast loading and smooth animations

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navigation.tsx    # Navigation bar with mobile menu
│   ├── HeroSection.tsx   # Landing hero section
│   ├── StatsSection.tsx  # Statistics with animated counters
│   ├── VillagesSection.tsx # Village information cards
│   ├── TestimonialsSection.tsx # Testimonials from community
│   ├── GallerySection.tsx # Photo gallery
│   ├── ContactSection.tsx # Contact form and social links
│   ├── Footer.tsx        # Footer component
│   └── NumberCounter.tsx # Animated number counter
├── data/                 # Data files (content management)
│   ├── villages.ts       # Village information
│   ├── testimonials.ts   # Testimonial data
│   ├── achievements.ts   # Statistics data
│   └── gallery.ts        # Gallery images
├── hooks/                # Custom React hooks
│   ├── useScroll.ts      # Scroll detection hook
│   └── useIntersectionObserver.ts # Intersection observer hook
├── types/                # TypeScript type definitions
│   └── index.ts          # Centralized types
├── utils/                # Utility functions and constants
│   └── constants.ts      # App constants
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles (Tailwind)
```

## 🛠️ Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Icons** - Additional icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kkn-rosonoto/project
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Content Management

### Adding New Villages

Edit `src/data/villages.ts`:

```typescript
export const villages: Village[] = [
  {
    name: 'Desa Baru',
    description: 'Description of the new village...',
    image: '/path/to/image.jpg',
    programs: ['Program 1', 'Program 2'],
    population: '1,000 jiwa',
    area: '2.5 km²'
  }
];
```

### Adding New Testimonials

Edit `src/data/testimonials.ts`:

```typescript
export const testimonials: Testimonial[] = [
  {
    name: 'Nama Baru',
    role: 'Jabatan',
    message: 'Testimonial message...',
    avatar: 'https://example.com/avatar.jpg'
  }
];
```

### Adding Gallery Images

Edit `src/data/gallery.ts`:

```typescript
export const galleryImages = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg'
];
```

### Updating Statistics

Edit `src/data/achievements.ts`:

```typescript
export const achievements: Achievement[] = [
  { number: '5', label: 'Desa Binaan', iconName: 'MapPin' },
  { number: '50', label: 'Mahasiswa KKN', iconName: 'Users' }
];
```

## 🎨 Customization

### Colors and Styling

The project uses Tailwind CSS. Main color scheme:
- Primary: Emerald (`emerald-600`, `emerald-700`)
- Secondary: Blue (`blue-600`)
- Accent: Yellow (`yellow-400`)

### Adding New Sections

1. Create a new component in `src/components/`
2. Add data if needed in `src/data/`
3. Import and use in `App.tsx`

Example:
```typescript
// src/components/NewSection.tsx
import React from 'react';

const NewSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      {/* Your content */}
    </section>
  );
};

export default NewSection;
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Other Platforms

The project can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or support, please contact the KKN Rosanata 2025 team.

---

**KKN Rosanata 2025** - Building sustainable villages for a better future. 