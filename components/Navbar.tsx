import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 md:pt-4 pb-2 flex justify-center pointer-events-none">
      <div 
        className={`pointer-events-auto w-full max-w-6xl bg-gradient-to-r from-white/95 via-emerald-50/70 to-white/95 backdrop-blur-md rounded-full px-5 md:px-7 py-3 flex items-center justify-between shadow-xl shadow-emerald-950/5 border border-emerald-100/80 transition-all duration-300 relative ${
          isScrolled ? 'shadow-2xl py-2.5 border-emerald-200/90' : ''
        }`}
      >
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0c3836] to-emerald-500 flex items-center justify-center text-emerald-300 shadow-sm group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[18px]">terminal</span>
          </div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">FaiqDev</h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a 
            href="#contact" 
            className="hidden sm:flex items-center gap-2.5 h-10 px-5 rounded-full bg-gradient-to-r from-[#0c3836] via-[#0e4844] to-emerald-700 hover:from-[#072725] hover:to-emerald-800 text-white text-sm font-semibold shadow-md shadow-emerald-900/15 transition-all transform hover:scale-[1.02]"
          >
            <span>Let's Talk</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e676] animate-pulse"></span>
          </a>
          <button 
            className="md:hidden text-slate-800 p-1.5 focus:outline-none"
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
          <div className="md:hidden absolute top-full left-0 right-0 mt-3 mx-2 bg-white/98 rounded-3xl p-6 shadow-2xl border border-emerald-100 flex flex-col gap-4 text-slate-800 z-50">
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
              <span>Let's Talk</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00e676] animate-pulse"></span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;