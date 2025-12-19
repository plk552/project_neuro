
import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-md glass-effect border-indigo-500/30 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="p-10">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isLogin ? 'С возвращением' : 'Создать аккаунт'}
            </h2>
            <p className="text-gray-400 text-sm">
              {isLogin ? 'Войдите в личный кабинет PixelRent' : 'Начните пользоваться лучшим ренталом Москвы'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest ml-1">Имя</label>
                <input 
                  type="text" 
                  placeholder="Александр" 
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest ml-1">E-mail</label>
              <input 
                type="email" 
                placeholder="example@mail.ru" 
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest ml-1">Пароль</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>

            <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/30 active:scale-95">
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              {isLogin ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
              >
                {isLogin ? 'Создать' : 'Войти'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
