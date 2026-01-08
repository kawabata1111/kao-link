import React from 'react';
import { SERVICES } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="business" className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full border-[40px] border-white/30"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-white/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-brand-accent font-bold tracking-widest text-sm uppercase block mb-2">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              私たちのサービス
              <div className="w-20 h-1.5 bg-white/50 mx-auto mt-4 rounded-full"></div>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} animation="fade-up" delay={index * 150} className="h-full">
              <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-secondary/20 group-hover:bg-brand-secondary/0 transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 right-0 p-4 z-20">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-primary shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      <service.icon size={28} />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                     <span className="text-xs font-bold text-brand-primary/60 tracking-widest uppercase">{service.subtitle}</span>
                     <h3 className="text-2xl font-bold text-gray-800 mt-1 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-brand-primary font-bold hover:text-brand-dark transition-colors group/link">
                    詳しく見る 
                    <ArrowRight size={18} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};