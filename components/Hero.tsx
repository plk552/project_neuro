
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
          Профессиональный сервис аренды в Москве
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
          Создавай шедевры <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">с лучшей техникой</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Аренда профессионального фото и видео оборудования в Москве. От компактных камер до полноразмерных кино-сетапов.
        </p>
      </div>
    </section>
  );
};

export default Hero;
