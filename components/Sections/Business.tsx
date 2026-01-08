import React from 'react';
import { SERVICES } from '../../constants';
import { SectionTitle } from '../UI/SectionTitle';
import { CityDivider } from '../UI/CityDivider';

export const Business: React.FC = () => {
  return (
    <section id="business" className="relative bg-brand-light py-20 lg:py-32">
       {/* Top Divider inside section to create smooth transition if needed, but here simple background works */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="事業内容" 
          subtitle="OUR MISSION" 
        />
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            ライフラインのコスト削減を通じて、<br className="md:hidden" />お客様の生活をより豊かに。
          </p>
          <p className="mt-4 text-gray-600">
            私たちは、電気・ガス・通信という生活に不可欠なインフラサービスの最適化をご提案します。
            複雑な料金体系をわかりやすく解説し、お客様一人ひとりに合ったプランをご案内いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-brand-orange relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-orange-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full text-white z-10">
        <CityDivider fill="#ffffff" />
      </div>
    </section>
  );
};