import React from 'react';
import { NEWS_ITEMS } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-10 border-b border-gray-200 pb-4">
             <h2 className="text-2xl font-bold text-gray-900">お知らせ</h2>
             <a href="#" className="text-sm text-gray-500 hover:text-brand-primary transition-colors">一覧を見る</a>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {NEWS_ITEMS.map((item, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="group flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-primary">
                <div className="flex items-center gap-4 min-w-[200px]">
                  <span className="text-brand-primary font-english font-bold text-sm">{item.date}</span>
                  <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded font-medium">{item.category}</span>
                </div>
                <h3 className="flex-grow font-medium text-gray-800 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <ArrowRight size={18} className="text-gray-300 transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};