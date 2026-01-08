import React from 'react';
import { STATS } from '../../constants';
import { CountUp } from '../UI/CountUp';
import { ScrollReveal } from '../UI/ScrollReveal';

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-white relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#E67E22 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {STATS.map((stat, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 200}>
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-brand-light/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <stat.icon size={32} />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-500 font-medium tracking-wider text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};