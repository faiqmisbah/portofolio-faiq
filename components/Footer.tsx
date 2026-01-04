import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border-dark bg-background-dark py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-3">
        
        <div className="flex flex-col gap-1 items-center md:items-start">
            <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-xl text-primary">terminal</span>
                <h2 className="text-base font-bold">FaiqDev</h2>
            </div>
            <p className="text-text-secondary text-xs">© 2026 FaiqDev Portfolio. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-3">
            <a href="https://wa.me/6285218555204" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-dark border border-border-dark text-text-secondary hover:bg-green-600 hover:text-white hover:border-green-600 transition-all" title="WhatsApp">
                <FaWhatsapp size={18} />
            </a>
            <a href="https://www.instagram.com/faiqmisbah_/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-dark border border-border-dark text-text-secondary hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all" title="Instagram">
                <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/faiq-misbah/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-dark border border-border-dark text-text-secondary hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" title="LinkedIn">
                <FaLinkedinIn size={18} />
            </a>
            <a href="https://github.com/faiqmisbah" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-dark border border-border-dark text-text-secondary hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-all" title="GitHub">
                <FaGithub size={18} />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;