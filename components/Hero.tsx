import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-28 md:py-32 flex flex-col justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 flex-1 text-center lg:text-left">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center lg:justify-start">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                Available for work
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Digital Solutions</span> with Precision
            </h1>
            
            <p className="text-text-secondary text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hi, I'm Faiq Misbah Yazdi. A passionate developer and designer with expertise in UI/UX design, data analysis, and programming. I create intuitive digital experiences that solve real-world problems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a href="#projects" className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-primary-hover text-white text-base font-bold transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1">
              See My Work
            </a>
            <a href="#contact" className="flex items-center justify-center h-12 px-8 rounded-lg bg-surface-dark hover:bg-surface-light border border-border-dark text-white text-base font-bold transition-all hover:-translate-y-1">
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-border-dark/50 mt-6">
            <div>
              <p className="text-3xl font-bold text-white">3+</p>
              <p className="text-xs text-text-secondary uppercase tracking-wide font-semibold mt-1">Years Exp.</p>
            </div>
            <div className="w-px h-10 bg-border-dark"></div>
            <div>
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-xs text-text-secondary uppercase tracking-wide font-semibold mt-1">Projects</p>
            </div>
            <div className="w-px h-10 bg-border-dark"></div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-xs text-text-secondary uppercase tracking-wide font-semibold mt-1">Satisfaction</p>
            </div>
          </div>

        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative group">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
          
          <div className="relative w-full aspect-[4/3] max-w-[600px] rounded-2xl overflow-hidden border border-border-dark shadow-2xl bg-surface-dark">
            <div className="absolute inset-0 bg-gradient-to-tr from-background-dark/80 via-transparent to-transparent z-10"></div>
            <img 
              src="/profile.jpg" 
              alt="Faiq Misbah Yazdi" 
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
             {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 z-20 bg-surface-dark/90 backdrop-blur border border-border-dark p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
               <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <span className="material-symbols-outlined">code</span>
               </div>
               <div>
                  <p className="text-xs text-gray-400">Current Status</p>
                  <p className="text-sm font-bold text-white">Coding...</p>
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;