import React from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { Stats } from './components/Sections/Stats';
import { Services } from './components/Sections/Services';
import { Strengths } from './components/Sections/Strengths';
import { Flow } from './components/Sections/Flow';
import { Company } from './components/Sections/Company';
import { News } from './components/Sections/News';
import { CallToAction } from './components/Sections/CallToAction';

// New UI Components
import { LoadingScreen } from './components/UI/LoadingScreen';
import { CustomCursor } from './components/UI/CustomCursor';
import { ScrollProgress } from './components/UI/ScrollProgress';
import { ParticlesBackground } from './components/UI/ParticlesBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <ParticlesBackground />

      <Header />
      
      <main className="flex-grow relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Strengths />
        <Flow />
        <Company />
        <News />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default App;