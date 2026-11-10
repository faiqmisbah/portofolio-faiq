import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.expertise'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.certificates'), href: '#certificates' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div
      className={`flex items-center bg-slate-100/90 hover:bg-slate-200/60 p-0.5 rounded-full border border-slate-200/90 text-xs font-bold transition-all shadow-inner ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
          language === 'en'
            ? 'bg-[#0c3836] text-white shadow-sm font-extrabold'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('id')}
        aria-label="Ganti ke Bahasa Indonesia"
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
          language === 'id'
            ? 'bg-[#0c3836] text-white shadow-sm font-extrabold'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        ID
      </button>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 md:pt-4 pb-2 flex justify-center pointer-events-none">
      <div 
        className={`pointer-events-auto w-full max-w-6xl bg-gradient-to-r from-white/95 via-emerald-50/70 to-white/95 backdrop-blur-md rounded-full px-4 sm:px-6 md:px-7 py-3 flex items-center justify-between shadow-xl shadow-emerald-950/5 border border-emerald-100/80 transition-all duration-300 relative ${
          isScrolled ? 'shadow-2xl py-2.5 border-emerald-200/90' : ''
        }`}
      >
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2.5 cursor-pointer group shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0c3836] to-emerald-500 flex items-center justify-center text-emerald-300 shadow-sm group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[18px]">terminal</span>
          </div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">FaiqDev</h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Language Switcher & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Desktop Language Switcher */}
          <LanguageSwitcher className="hidden sm:flex" />

          <a 
            href="#contact" 
            className="hidden sm:flex items-center gap-2 h-10 px-4 sm:px-5 rounded-full bg-gradient-to-r from-[#0c3836] via-[#0e4844] to-emerald-700 hover:from-[#072725] hover:to-emerald-800 text-white text-sm font-semibold shadow-md shadow-emerald-900/15 transition-all transform hover:scale-[1.02] shrink-0"
          >
            <span>{t('nav.letsTalk')}</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e676] animate-pulse"></span>
          </a>

          {/* Mobile Language Switcher (Compact) */}
          <LanguageSwitcher className="flex sm:hidden" />

          <button 
            className="md:hidden text-slate-800 p-1.5 focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-3 mx-2 bg-white/98 rounded-3xl p-6 shadow-2xl border border-emerald-100 flex flex-col gap-4 text-slate-800 z-50 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-50">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {language === 'en' ? 'Language' : 'Bahasa'}
              </span>
              <LanguageSwitcher />
            </div>

            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-base font-semibold text-slate-700 hover:text-emerald-700 py-2 border-b border-emerald-50 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2.5 h-12 w-full rounded-full bg-gradient-to-r from-[#0c3836] to-emerald-700 text-white font-bold mt-2 shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t('nav.letsTalk')}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00e676] animate-pulse"></span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
