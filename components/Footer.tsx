import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    // UBAH DISINI: py-4 diganti jadi py-10 atau py-12 agar lebih tebal
    <footer className="w-full border-t border-slate-200 bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Bagian Kiri (Brand) */}
        <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex items-center gap-2 text-slate-900">
                <span className="material-symbols-outlined text-2xl text-emerald-600">terminal</span>
                <h2 className="text-lg font-bold">FaiqDev</h2>
            </div>
            <p className="text-slate-500 text-sm">© 2026 FaiqDev Portfolio. All rights reserved.</p>
        </div>

        {/* Bagian Kanan (Socials) */}
        <div className="flex items-center gap-4">
            <a href="https://wa.me/6285218555204" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all" title="WhatsApp">
                <FaWhatsapp size={20} />
            </a>
            <a href="https://www.instagram.com/faiqmisbah_/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all" title="Instagram">
                <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/faiq-misbah/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" title="LinkedIn">
                <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/faiqmisbah" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all" title="GitHub">
                <FaGithub size={20} />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;