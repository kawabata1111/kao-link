import React from 'react';
import { ScrollReveal } from '../UI/ScrollReveal';
import { Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

export const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
         <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <ScrollReveal animation="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-white/90 text-lg mb-12">
            電気・ガス・通信のコスト削減のプロが、<br />
            あなたの暮らしをサポートします。
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center w-full md:w-auto min-w-[280px] border border-white/20">
                <Phone className="text-white mb-2" size={32} />
                <span className="text-white/80 text-sm mb-1">お電話でのお問い合わせ</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-2xl font-bold text-white hover:text-brand-accent transition-colors">{COMPANY_INFO.phone}</a>
             </div>
             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center w-full md:w-auto min-w-[280px] border border-white/20">
                <Mail className="text-white mb-2" size={32} />
                <span className="text-white/80 text-sm mb-1">メールでのお問い合わせ</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl font-bold text-white hover:text-brand-accent transition-colors">{COMPANY_INFO.email}</a>
             </div>
          </div>

          <a 
            href={`mailto:${COMPANY_INFO.email}`}
            className="inline-block px-12 py-5 bg-white text-brand-primary font-bold text-xl rounded-full shadow-lg hover:shadow-2xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300"
          >
            無料相談・お見積り
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};