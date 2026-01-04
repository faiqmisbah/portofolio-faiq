import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  size: 'normal' | 'large';
  link?: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'UI/UX', 'Web Dev', 'Mobile', 'Data Analysis'];

  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "Web Dev",
      image: "./projects/Porto.png",
      description: "A sleek, dark-themed portfolio website built to showcase my journey, technical skills, and creative projects as a developer.",
      size: 'normal',
      link: "https://faiqmisbah.github.io/portofolio-faiq/"
    },
    {
      id: 2,
      title: "Quote Generator",
      category: "Web Dev",
      image: "./projects/QuoteGenerator.png",
      description: "An interactive web app that generates inspiring quotes based on mood categories, featuring copy-to-clipboard and social sharing options.",
      size: 'normal',
      link: "https://faiqmisbah.github.io/quote-generator/"
    },
    {
      id: 3,
      title: "JAKI Design System",
      category: "UI/UX",
      image: "./projects/DesignSystemJAKI.png",
      description: "A comprehensive design guideline created to ensure visual consistency and streamline the workflow between design and development teams.",
      size: 'normal'
    },
    {
      id: 4,
      title: "Sakuin",
      category: "Web Dev",
      image: "./projects/Sakuin.png",
      description: "A professional landing page for a fintech app, designed to build trust and highlight features for effective personal finance management.",
      size: 'normal'
    },
    {
      id: 5,
      title: "E-Voting Platform Concept (Pemilu)",
      category: "Web Dev",
      image: "./projects/Pemilu.png",
      description: "A modern landing page concept for a digital election platform, focusing on clarity, transparency, and ease of access for voters.",
      size: 'normal'
    },
    {
      id: 6,
      title: "FoodGo Web Platform",
      category: "Web Dev",
      image: "./projects/FoodGoWeb.png",
      description: "A responsive website version of the FoodGo platform, offering an organized catalog and an intuitive ordering system for desktop users.",
      size: 'normal'
    },
    {
      id: 7,
      title: "FoodGo Mobile App",
      category: "Mobile",
      image: "./projects/AppFoodGo.png",
      description: "A user-friendly mobile interface designed for a seamless food delivery experience, from menu browsing to secure checkout.",
      size: 'normal'
    },
    {
      id: 8,
      title: "Music Recommendation System",
      category: "Data Analysis",
      image: "./projects/SisRekMusik.png",
      description: "A machine learning project hosted on Hugging Face that evaluates different word embedding techniques to generate personalized music recommendations. It features interactive model selection and visualizes performance metrics like Hit Rate.",
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
            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">Portfolio</span>
            <h2 className="text-white text-3xl md:text-4xl font-black leading-tight">Featured Work</h2>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                        filter === cat 
                        ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                        : 'bg-surface-dark text-text-secondary border border-border-dark hover:border-primary/50 hover:text-white'
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
            className={`group flex flex-col overflow-hidden rounded-2xl bg-surface-dark border border-border-dark hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 ${project.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            {/* Image Section - Top Half */}
            <div className="w-full overflow-hidden bg-surface-light relative aspect-video">
              <img 
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Text Section - Bottom Half */}
            <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex gap-2">
                    <span className="rounded-md bg-primary/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      {project.category}
                    </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {project.description}
                </p>
                <a 
                  href={project.link || "#contact"} 
                  target={project.link ? "_blank" : "_self"}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-hover gap-2 group/link mt-2"
                >
                    View Project 
                    <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
         <button className="flex items-center gap-2 text-text-secondary hover:text-white font-semibold transition-colors">
            View All Projects 
            <span className="material-symbols-outlined">arrow_forward</span>
         </button>
      </div>
    </section>
  );
};

export default Projects;