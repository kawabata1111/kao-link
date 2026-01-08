import React, { useState, useEffect } from 'react';
import { ArrowDown, Zap, Flame, Wifi } from 'lucide-react';
import { ScrollReveal } from '../UI/ScrollReveal';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "暮らしをつなぐ、\n笑顔をつなぐ。";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bgLight pt-20">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-brand-primary/10"></div>
      </div>

      {/* Animated Floating Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 text-brand-primary/20 animate-float">
          <Zap size={80} />
        </div>
        <div className="absolute bottom-1/3 right-10 text-brand-dark/20 animate-float-delayed">
          <Flame size={100} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-brand-secondary/10 animate-float">
          <Wifi size={60} />
        </div>
        {/* Decorative Shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-brand-light/20 to-brand-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-brand-accent/20 to-brand-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <ScrollReveal animation="fade-up">
             <div className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur rounded-full border border-brand-primary/30 text-brand-dark font-bold text-sm tracking-wider mb-6 shadow-sm">
                LIFE LINE PARTNER
             </div>
          </ScrollReveal>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6 h-[2.5em] md:h-[auto] whitespace-pre-wrap">
            {text}<span className="animate-pulse text-brand-primary">|</span>
          </h1>

          <ScrollReveal animation="fade-up" delay={500}>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              電気・ガス・通信のプロフェッショナルとして、<br className="hidden md:block" />
              お客様のライフスタイルに合わせた最適なコスト削減をご提案します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#business" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-light to-brand-dark rounded-full shadow-lg hover:shadow-glow transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                サービスを見る
              </a>
              <a 
                href="#cta" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-primary bg-white border-2 border-brand-primary/30 rounded-full shadow-md hover:bg-brand-primary hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                お問い合わせ
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-brand-secondary animate-bounce-slow z-20 cursor-pointer" onClick={() => document.getElementById('stats')?.scrollIntoView()}>
        <div className="w-[30px] h-[50px] border-2 border-brand-secondary/30 rounded-full flex justify-center p-2 mb-2 bg-white/50 backdrop-blur">
          <div className="w-1 h-3 bg-brand-primary rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-10">
        <svg className="block w-full h-[60px] md:h-[100px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};