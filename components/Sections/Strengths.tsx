import React from 'react';
import { STRENGTHS } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';

export const Strengths: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
           <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              KAO LINKが<span className="text-brand-primary">選ばれる理由</span>
            </h2>
            <p className="text-gray-500">Why We Are Chosen</p>
           </ScrollReveal>
        </div>

        <div className="space-y-24">
          {STRENGTHS.map((strength, index) => (
            <div key={index} className={`flex flex-col ${strength.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <ScrollReveal animation={strength.reverse ? 'slide-right' : 'slide-left'}>
                  <div className="relative">
                    <div className={`absolute top-4 ${strength.reverse ? 'left-4' : 'right-4'} w-full h-full border-2 border-brand-primary rounded-2xl z-0 transform translate-x-2 translate-y-2`}></div>
                    <img 
                      src={strength.image} 
                      alt={strength.title} 
                      className="relative z-10 w-full rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </ScrollReveal>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <ScrollReveal animation={strength.reverse ? 'slide-left' : 'slide-right'} delay={200}>
                  <span className="font-english text-6xl font-black text-gray-100 block -mb-10 relative z-0">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative z-10">
                    {strength.title}
                  </h3>
                  <div className="w-12 h-1 bg-brand-primary mb-8"></div>
                  <p className="text-lg text-gray-600 leading-loose">
                    {strength.description}
                  </p>
                </ScrollReveal>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};