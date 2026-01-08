import React from 'react';
import { COMPANY_INFO, NAV_ITEMS } from '../../constants';
import { ArrowUp, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-secondary text-white pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          {/* Logo & About */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white font-bold">K</div>
               <h3 className="text-2xl font-bold tracking-wider">KAO LINK</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              お客様の暮らしを豊かにするライフラインパートナー。<br />
              信頼と実績で、最適なコスト削減をご提案します。
            </p>
            <div className="flex gap-4">
               {/* Social Placeholders */}
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors text-white"><Twitter size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors text-white"><Instagram size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors text-white"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Menu</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-brand-primary transition-colors block py-1">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <p className="text-gray-400 mb-2">{COMPANY_INFO.address}</p>
            <p className="text-2xl font-bold text-white mb-2">{COMPANY_INFO.phone}</p>
            <p className="text-gray-400">{COMPANY_INFO.email}</p>
            <p className="text-gray-500 text-sm mt-4">9:00 - 18:00 (土日祝除く)</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 {COMPANY_INFO.name} All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors mr-6">プライバシーポリシー</a>
             <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-brand-primary text-white p-4 rounded-full shadow-lg hover:bg-brand-dark hover:scale-110 hover:-translate-y-2 transition-all duration-300 group"
        aria-label="Back to top"
      >
        <ArrowUp size={24} className="group-hover:animate-bounce" />
      </button>
    </footer>
  );
};