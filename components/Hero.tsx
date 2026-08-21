import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-28 md:py-36 flex flex-col justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 flex-1 text-center lg:text-left">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center lg:justify-start">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                Available for work
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c3836] via-emerald-600 to-teal-500">Digital Solutions</span> with Precision
            </h1>
            
            <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hi, I'm Faiq Misbah Yazdi. A passionate developer and designer with expertise in UI/UX design, data analysis, and programming. I create intuitive digital experiences that solve real-world problems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="https://drive.google.com/file/d/1lwiE3EdkZ1_jBc2JHmbgMk1c6exiQ1Bl/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 px-8 rounded-xl bg-[#0c3836] hover:bg-[#072725] text-white text-base font-bold transition-all shadow-lg shadow-[#0c3836]/20 hover:-translate-y-1"
            >
              Lihat CV
            </a>
            <a href="#contact" className="flex items-center justify-center h-12 px-8 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-base font-bold transition-all hover:-translate-y-1 shadow-sm">
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200 mt-6">
            <div>
              <p className="text-3xl font-extrabold text-slate-900">3+</p>
              <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">Years Exp.</p>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900">10+</p>
              <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">Projects</p>
            </div>
          </div>

        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative group">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-emerald-400/20 blur-[100px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
          
          <div className="relative w-full aspect-[4/3] max-w-[600px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-transparent z-10"></div>
            <img 
              src="./profile.jpg" 
              alt="Faiq Misbah Yazdi" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur border border-slate-200 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
               <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <span className="material-symbols-outlined">code</span>
               </div>
               <div>
                  <p className="text-xs text-slate-500 font-medium">Current Status</p>
                  <p className="text-sm font-bold text-slate-900">Coding...</p>
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;