import React from 'react';
import { FLOW_STEPS } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';

export const Flow: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ご契約までの流れ</h2>
            <div className="w-12 h-1 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[12%] right-[12%] h-0.5 bg-gray-200 z-0">
            <div className="h-full bg-brand-primary w-full origin-left animate-pulse"></div>
          </div>

          {FLOW_STEPS.map((step, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 200}>
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:scale-110 group-hover:border-brand-primary">
                  <span className="font-english text-xl font-black text-brand-primary">{step.step}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};