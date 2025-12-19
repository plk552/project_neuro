
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onAuthOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthOpen }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Каталог', href: '#catalog', id: 'catalog' },
    { name: 'Тарифы', href: '#tariffs', id: 'tariffs' },
    { name: 'О нас', href: '#about', id: 'about' },
    { name: 'Контакты', href: '#contacts', id: 'contacts' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const headerOffset = 120; // Offset to trigger active state slightly before hitting the top
      const scrollPosition = window.scrollY + headerOffset;
      
      // Define the sections in order of appearance
      const sections = ['hero', 'catalog', 'about', 'tariffs', 'contacts'];
      
      // Find the current section by checking which one's offsetTop is closest to scrollPosition
      let currentSection = 'hero';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            currentSection = sectionId;
          }
        }
      }
      
      // Special case: if at the very bottom of the page, force contacts active
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        currentSection = 'contacts';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Explicitly set active section after click for immediate feedback
      setActiveSection(id);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 bg-indigo-600 group-hover:bg-indigo-500 rounded-lg flex items-center justify-center transition-all shadow-lg shadow-indigo-600/20">
              <i className="fas fa-camera-retro text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Pixel<span className="text-indigo-500">Rent</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1 bg-white/5 p-1 rounded-xl border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeSection === link.id 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={onAuthOpen}
              className="bg-white/5 hover:bg-white/10 text-white px-5 py-2 rounded-lg transition-all font-medium border border-white/10 active:scale-95 text-sm"
            >
              Личный кабинет
            </button>
            
            <button 
              className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-lg bg-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-x-0 top-[73px] bottom-0 bg-slate-950/95 backdrop-blur-2xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-2xl font-bold transition-all ${
                activeSection === link.id ? 'text-indigo-500' : 'text-gray-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-white/10 my-4"></div>
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onAuthOpen(); }}
            className="text-left text-2xl font-bold text-white hover:text-indigo-500 transition-colors"
          >
            Войти в кабинет
          </button>
          <div className="h-px bg-white/10 my-4"></div>
          <p className="text-gray-500 text-sm">Служба поддержки:</p>
          <a href="tel:+74951234567" className="text-xl font-bold text-white">+7 (495) 123-45-67</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
