import React from 'react';
import { FaFigma } from 'react-icons/fa';
import { SiGooglecolab } from 'react-icons/si';

interface SkillItem {
  name: string;
  icon: string | React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: SkillItem[] = [
    { name: 'ReactJS', icon: 'code' },
    { name: 'UI/UX Design', icon: 'brush' },
    { name: 'Figma', icon: <FaFigma className="text-[20px]" /> },
    { name: 'Flutter', icon: 'phone_android' },
    { name: 'Canva', icon: 'design_services' },
    { name: 'Python', icon: 'terminal' },
    { name: 'GoogleCollab', icon: <SiGooglecolab className="text-[20px]" /> },
    { name: 'HTML/CSS', icon: 'html' },
    { name: 'Data Analysis', icon: 'analytics' },
  ];

  return (
    <section id="services" className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <h2 className="text-slate-900 text-2xl md:text-3xl font-bold leading-tight">My Expertise</h2>
            <p className="text-slate-600 max-w-2xl">
                Passionate about UI/UX design and data analysis, with strong programming skills. I blend creativity and analytics to build user-centered solutions that deliver measurable results.
            </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group flex h-12 items-center justify-center gap-x-3 rounded-xl bg-white border border-slate-200/80 px-6 shadow-sm hover:shadow-md hover:border-emerald-400 hover:bg-emerald-50/50 transition-all cursor-default hover:-translate-y-1"
            >
              <span className="text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                {typeof skill.icon === 'string' ? (
                  <span className="material-symbols-outlined text-[24px]">{skill.icon}</span>
                ) : (
                  skill.icon
                )}
              </span>
              <p className="text-slate-800 text-sm font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;