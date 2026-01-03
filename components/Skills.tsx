import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'ReactJS', icon: 'code' },
    { name: 'UI/UX Design', icon: 'brush' },
    { name: 'Flutter', icon: 'phone_android' },
    { name: 'Canva', icon: 'design_services' },
    { name: 'Python', icon: 'terminal' },
    { name: 'HTML/CSS', icon: 'html' },
    { name: 'Data Analysis', icon: 'analytics' },
  ];

  return (
    <section id="services" className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">My Expertise</h2>
            <p className="text-text-secondary max-w-2xl">
                Passionate about UI/UX design and data analysis, with strong programming skills. I blend creativity and analytics to build user-centered solutions that deliver measurable results.
            </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group flex h-12 items-center justify-center gap-x-3 rounded-xl bg-surface-dark border border-border-dark px-6 hover:border-primary/50 hover:bg-surface-light transition-all cursor-default hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-primary text-[24px] group-hover:scale-110 transition-transform">
                {skill.icon}
              </span>
              <p className="text-white text-sm font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;