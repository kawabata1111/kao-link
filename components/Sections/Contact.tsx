import React from 'react';
import { Button } from '../UI/Button';
import { COMPANY_INFO } from '../../constants';
import { Phone, Mail, Clock } from 'lucide-react';
import { SectionTitle } from '../UI/SectionTitle';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="お問い合わせ" 
          subtitle="CONTACT US" 
        />
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* Contact Info (Left Side) */}
          <div className="bg-gray-50 p-8 md:p-12 md:w-2/5 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              お気軽にご相談ください
            </h3>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              コスト削減のシミュレーション、プランの詳細など、どんなことでもお気軽にお問い合わせください。
              専門スタッフが丁寧にご案内いたします。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-widest">お電話でのお問い合わせ</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-bold text-gray-800 hover:text-brand-orange transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-widest">メールでのお問い合わせ</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-base font-bold text-gray-800 hover:text-brand-orange transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
              
               <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-gray-400">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-widest">営業時間</p>
                  <p className="text-sm font-bold text-gray-800">
                    9:00 - 18:00 (土日祝除く)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Form (Right Side) */}
          <div className="p-8 md:p-12 md:w-3/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">お名前 <span className="text-brand-orange">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="例：山田 太郎"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">メールアドレス <span className="text-brand-orange">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="例：info@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">お問い合わせ内容</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                  placeholder="ご質問やご相談内容をご記入ください"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <Button type="submit" className="w-full">
                  送信する
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};