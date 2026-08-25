import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string; // Used on dashboard card summary
  fullDescription?: string; // Used inside popup modal
  size: 'normal' | 'large';
  link?: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const categories = ['All', 'UI/UX', 'Web Dev', 'Mobile', 'Data Analysis'];

  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "Web Dev",
      image: "./projects/Porto.png",
      description: "A sleek, modern portfolio website built to showcase my journey, technical skills, and creative projects as a developer.",
      fullDescription: "To establish a strong digital presence, I designed and built a personal portfolio website with a sleek dark-mode aesthetic. This platform serves as a central hub to showcase my technical skills and creative projects, structured to provide recruiters and clients with immediate access to my professional journey.",
      size: 'normal',
      link: "https://faiqmisbah.github.io/portofolio-faiq/"
    },
    {
      id: 2,
      title: "Quote Generator",
      category: "Web Dev",
      image: "./projects/QuoteGenerator.png",
      description: "An interactive web app that generates inspiring quotes based on mood categories, featuring copy & social sharing options.",
      fullDescription: "I developed an interactive web application designed to deliver daily inspiration. Integrating a custom API, I implemented features that allow users to filter quotes by mood and instantly share them on social media, combining technical functionality with a simple, user-centric design.",
      size: 'normal',
      link: "https://faiqmisbah.github.io/quote-generator/"
    },
    {
      id: 3,
      title: "JAKI Design System",
      category: "UI/UX",
      image: "./projects/DesignSystemJAKI.png",
      description: "A comprehensive design guideline created to ensure visual consistency across design and development teams.",
      fullDescription: "For the Jakarta Smart City (JAKI) ecosystem, I developed a comprehensive design system to ensure consistency across digital products. I created and documented a library of standardized UI components from typography to grid systems, which unified the visual language and significantly accelerated the workflow between design and development teams.",
      size: 'normal'
    },
    {
      id: 4,
      title: "Sakuin",
      category: "Web Dev",
      image: "./projects/Sakuin.png",
      description: "A professional landing page for a fintech app, designed to build trust and highlight financial management features.",
      fullDescription: "I designed a professional landing page for 'Sakuin' a personal finance management application. Utilizing a trustworthy color palette and structured layout, I highlighted key asset management features to instill confidence in users and promote financial literacy through clear visual communication.",
      size: 'normal',
      link: "https://sakuin-zeta.vercel.app/"
    },
    {
      id: 5,
      title: "E-Voting Platform Concept (Pemilu)",
      category: "Web Dev",
      image: "./projects/Pemilu.png",
      description: "A modern landing page concept for a digital election platform, focusing on clarity, security, and transparency.",
      fullDescription: "I conceptualized a modern e-voting platform aimed at enhancing transparency and civic engagement. I designed a clean, informative landing page that simplifies complex election information into digestible steps, fostering a more accessible and trustworthy voting experience for the public.",
      size: 'normal'
    },
    {
      id: 6,
      title: "FoodGo Web Platform",
      category: "Web Dev",
      image: "./projects/FoodGoWeb.png",
      description: "A responsive website version of the FoodGo platform, offering an organized catalog and intuitive ordering system.",
      fullDescription: "Complementing the mobile ecosystem, I designed the FoodGo web platform to optimize the ordering experience for desktop users. I crafted a responsive and expansive catalog interface that features intuitive search functionality, clear food categorization, and a streamlined dashboard, ensuring a consistent and seamless brand experience across all devices.",
      size: 'normal'
    },
    {
      id: 7,
      title: "FoodGo Mobile App",
      category: "Mobile",
      image: "./projects/AppFoodGo.png",
      description: "A user-friendly mobile interface designed for a seamless food delivery experience from browsing to checkout.",
      fullDescription: "I designed an end-to-end mobile interface for a food delivery service, prioritizing user convenience and visual appetite. From secure authentication to a seamless checkout flow, I crafted an intuitive user journey that simplifies the ordering process while maintaining a modern and vibrant aesthetic.",
      size: 'normal'
    },
    {
      id: 8,
      title: "Music Recommendation System",
      category: "Data Analysis",
      image: "./projects/SisRekMusik.png",
      description: "A machine learning project on Hugging Face using word embedding techniques to generate personalized music recommendations.",
      fullDescription: "I engineered a music recommendation engine using Natural Language Processing (NLP) to personalize listening experiences. By evaluating multiple word embedding models like GloVe, FastText, and Word2Vec, I built a system that analyzes user history to predict and suggest songs with high accuracy, deployed interactively on Hugging Face.",
      size: 'normal',
      link: "https://huggingface.co/spaces/faiqmisbah/musik-rekomendasi"
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
        <div>
          <span className="text-emerald-700 font-bold tracking-wider uppercase text-xs mb-2 block">Portfolio</span>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight">Featured Work</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                ? 'bg-[#0c3836] text-white shadow-md shadow-[#0c3836]/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-400 hover:text-slate-900 hover:bg-slate-50'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`group cursor-pointer flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 hover:border-emerald-400 transition-all transform hover:-translate-y-1 ${project.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            {/* Image Section - Top Half */}
            <div className="w-full overflow-hidden bg-slate-100 relative aspect-video group/img">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur text-slate-900 font-bold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="material-symbols-outlined text-base">visibility</span>
                  Quick View
                </span>
              </div>
            </div>

            {/* Text Section - Bottom Half */}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex gap-2">
                <span className="rounded-md bg-[#0c3836] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 line-clamp-3">
                {project.description}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 gap-2 group/link mt-2 text-left"
              >
                View Project Details
                <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors">
          View All Projects
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

      {/* Project Details Modal Popup (Enlarged Landscape Layout) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-slate-900/65 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-5xl lg:max-w-6xl w-full max-h-[92vh] md:h-[580px] overflow-y-auto md:overflow-hidden shadow-2xl border border-emerald-100/80 flex flex-col md:flex-row transform transition-all animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/40 md:bg-slate-100 hover:bg-slate-900/70 md:hover:bg-slate-200 text-white md:text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Left Column: Enlarged Landscape Image Preview (60% Width) */}
            <div className="w-full md:w-[60%] min-h-[300px] sm:min-h-[360px] md:h-full bg-[#f6f5f1] relative overflow-hidden flex items-center justify-center p-3 sm:p-5 md:p-6 border-b md:border-b-0 md:border-r border-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain object-center drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Right Column: Text Content & Actions (40% Width - Vertically Centered Content) */}
            <div className="w-full md:w-[40%] p-6 sm:p-8 flex flex-col justify-center gap-6 bg-white md:h-full">
              <div className="flex flex-col gap-4 my-auto overflow-y-auto pr-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#0c3836] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify font-normal">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </div>

              {/* Modal Actions Footer */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3 mt-auto shrink-0">
                {selectedProject.link ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0c3836] via-[#0e4844] to-emerald-700 hover:from-[#072725] hover:to-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all transform hover:scale-[1.02]"
                  >
                    <span>Visit Live Project</span>
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0c3836] to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-all"
                  >
                    <span>Contact About Project</span>
                    <span className="material-symbols-outlined text-base">mail</span>
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;