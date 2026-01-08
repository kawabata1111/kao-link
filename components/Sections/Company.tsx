import React from 'react';
import { COMPANY_INFO } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { OsakaSkylineFrame } from '../UI/OsakaSkylineFrame';

export const Company: React.FC = () => {
  return (
    <section id="company" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-bgLight skew-x-12 transform translate-x-20 pointer-events-none"></div>

      {/* Osaka Skyline Frame */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <OsakaSkylineFrame />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Table */}
          <ScrollReveal animation="slide-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 border-l-8 border-brand-primary pl-6">
              会社概要
            </h2>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden relative z-20">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    ['会社名', COMPANY_INFO.name],
                    ['代表者', COMPANY_INFO.representative],
                    ['設立', COMPANY_INFO.establishment],
                    ['資本金', COMPANY_INFO.capital],
                    ['従業員数', COMPANY_INFO.employees],
                    ['所在地', COMPANY_INFO.address],
                    ['電話番号', COMPANY_INFO.phone],
                    ['メール', COMPANY_INFO.email],
                  ].map(([label, value], i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors">
                      <th className="py-4 px-6 font-bold text-gray-600 w-1/3 bg-gray-50/50">{label}</th>
                      <td className="py-4 px-6 text-gray-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Map / Image */}
          <ScrollReveal animation="slide-right" delay={200}>
            <div className="h-full flex flex-col">
              <div className="flex-grow min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner relative group z-20">
                {/* Placeholder for map */}
                <img 
                  src="https://images.unsplash.com/photo-1577086664693-8945534a7a6a?auto=format&fit=crop&q=80&w=800" 
                  alt="Office Location" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-full backdrop-blur-sm">
                    大阪府門真市松生町1-16-211
                  </span>
                </div>
              </div>
              <div className="mt-8 text-right z-20 relative">
                <a href="#cta" className="text-brand-primary font-bold hover:underline">
                  Google Mapsで見る →
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};