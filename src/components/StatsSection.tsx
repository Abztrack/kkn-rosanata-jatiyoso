import React from 'react';
import { MapPin, Users, Calendar, Star } from 'lucide-react';
import NumberCounter from './NumberCounter';
import { achievements } from '../data/achievements';

interface StatsSectionProps {
  isStatsVisible: boolean;
  statsRef: React.RefObject<HTMLElement>;
}

const StatsSection: React.FC<StatsSectionProps> = ({ isStatsVisible, statsRef }) => {
  const iconMap = {
    MapPin: <MapPin className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Calendar: <Calendar className="w-6 h-6" />,
    Star: <Star className="w-6 h-6" />
  };

  return (
    <section ref={statsRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="text-emerald-600 mb-4 flex justify-center">
                  {iconMap[stat.iconName]}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {isStatsVisible ? (
                    <NumberCounter end={parseInt(stat.number)} duration={2000} />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 