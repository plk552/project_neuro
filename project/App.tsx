
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EquipmentGrid from './components/EquipmentGrid';
import Tariffs from './components/Tariffs';
import AuthModal from './components/AuthModal';
import DetailModal from './components/DetailModal';
import { Equipment, Tariff } from './types';

const App: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [selectedTariff, setSelectedTariff] = useState<Tariff | null>(null);

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Header onAuthOpen={() => setIsAuthModalOpen(true)} />
      <main>
        <Hero />
        
        <EquipmentGrid onItemSelect={setSelectedEquipment} />
        
        {/* About Section */}
        <section id="about" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden glass-effect p-1">
                    <img src="https://images.unsplash.com/photo-1492691523569-fc3157205244?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-2xl" alt="Lighting setup" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden glass-effect p-1">
                    <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-2xl" alt="Audio recording" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                   <div className="aspect-square rounded-3xl overflow-hidden glass-effect p-1">
                    <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-2xl" alt="Camera close up" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden glass-effect p-1">
                    <img src="https://images.unsplash.com/photo-1533350895844-325b822e1966?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-2xl" alt="RED Camera" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-600/30 blur-[80px] -z-10 rounded-full"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <div>
                <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">О проекте PixelRent</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Ваш технический партнер в мире <span className="text-gradient">визуального контента</span>
                </h3>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                Мы — команда профессионалов, которые знают цену каждой секунды на площадке. Мы собрали лучший парк техники в Москве, чтобы вы могли сосредоточиться на творчестве, не отвлекаясь на технические сложности.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                    <i className="fas fa-gem text-indigo-400"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Только ТОП</h4>
                    <p className="text-sm text-gray-500">В нашем парке только актуальные флагманы индустрии.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                    <i className="fas fa-hand-holding-heart text-indigo-400"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Забота</h4>
                    <p className="text-sm text-gray-500">Техника выдается в идеальном состоянии и полном комплекте.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-indigo-600/5 border border-indigo-500/10">
                <blockquote className="text-white italic text-lg font-medium mb-4">
                  "Мы верим, что качественное оборудование должно быть доступно каждому, кто хочет создавать великие истории."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                    <img src="https://i.pravatar.cc/100?u=ceo" alt="CEO" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Александр Волков</p>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">Основатель PixelRent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Tariffs onTariffSelect={setSelectedTariff} />

        {/* Contacts Section */}
        <section id="contacts" className="py-32 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                <div>
                  <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Свяжитесь с нами</h2>
                  <h3 className="text-4xl font-extrabold text-white">Всегда на связи для <br /> ваших <span className="text-gradient">идей</span></h3>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 items-center p-6 rounded-2xl glass-effect border-white/5 group hover:border-indigo-500/30 transition-all">
                    <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                      <i className="fas fa-phone-alt text-white"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Позвонить нам</p>
                      <a href="tel:+74951234567" className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors">+7 (495) 123-45-67</a>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center p-6 rounded-2xl glass-effect border-white/5 group hover:border-indigo-500/30 transition-all">
                    <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Наш офис</p>
                      <p className="text-xl font-bold text-white">Москва, ул. Большая Дмитровка, 12</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center p-6 rounded-2xl glass-effect border-white/5 group hover:border-indigo-500/30 transition-all">
                    <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Написать на почту</p>
                      <a href="mailto:hello@pixelrent.ru" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">hello@pixelrent.ru</a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {['fa-telegram', 'fa-whatsapp', 'fa-vk', 'fa-youtube'].map((icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all border-white/5">
                      <i className={`fab ${icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-effect p-8 md:p-12 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -z-10"></div>
                <h4 className="text-2xl font-bold text-white mb-8">Быстрая заявка</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 uppercase tracking-widest ml-1">Имя</label>
                      <input type="text" placeholder="Иван" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 uppercase tracking-widest ml-1">Телефон</label>
                      <input type="tel" placeholder="+7 (___) ___ __ __" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-widest ml-1">Что планируете снимать?</label>
                    <textarea placeholder="Опишите ваши задачи или список техники..." rows={4} className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/30 active:scale-95">
                    Отправить запрос
                  </button>
                  <p className="text-[10px] text-gray-500 text-center uppercase tracking-[0.1em]">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-camera-retro text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Pixel<span className="text-indigo-500">Rent</span></span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12 text-sm text-gray-500 uppercase tracking-widest font-medium">
            <a href="#catalog" className="hover:text-white transition-colors">Оборудование</a>
            <a href="#tariffs" className="hover:text-white transition-colors">Прайс-лист</a>
            <a href="#about" className="hover:text-white transition-colors">Манифест</a>
            <a href="#contacts" className="hover:text-white transition-colors">Связь</a>
          </div>
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] mb-4">Designed for high-end production in Moscow</p>
          <p className="text-gray-700 text-[10px] uppercase tracking-[0.1em]">© 2024 PixelRent. Все права защищены.</p>
        </div>
      </footer>
      
      {/* Global Modals */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
      
      <DetailModal 
        isOpen={!!selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
        title={selectedEquipment?.name || ''}
        subtitle={selectedEquipment?.brand}
        description={selectedEquipment?.fullDescription || selectedEquipment?.description}
        image={selectedEquipment?.imageUrl}
        specs={selectedEquipment?.specs}
        list={selectedEquipment?.includedItems}
        price={`${selectedEquipment?.pricePerDay}₽/сут`}
      />

      <DetailModal 
        isOpen={!!selectedTariff}
        onClose={() => setSelectedTariff(null)}
        title={selectedTariff?.name || ''}
        subtitle="Тарифный план"
        description={selectedTariff?.fullDescription || selectedTariff?.description}
        specsTitle="Преимущества"
        specs={selectedTariff?.features}
        price={selectedTariff?.price}
      />
    </div>
  );
};

export default App;
