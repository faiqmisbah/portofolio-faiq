import React, { useState, useEffect } from 'react';

export interface Certification {
  id: string;
  title: string;
  provider: string;
  period: string;
  fullDescription: string;
  driveLink: string;
  courseWebsite?: string;
  modules: string[];
  icon: string;
  category: string;
}

const certificationsData: Certification[] = [
  {
    id: 'anthropic-course',
    title: 'Anthropic',
    provider: 'Anthropic Course',
    period: '2026',
    category: 'AI & LLMs',
    icon: 'psychology',
    fullDescription:
      'A comprehensive learning path from Anthropic mastering the Claude AI ecosystem. This series covers foundational to advanced AI topics, including LLM prompt engineering, building agentic AI workflows with subagents and agent skills, integrating the Anthropic API across multi-cloud platforms (AWS Bedrock & GCP), and implementing Model Context Protocol (MCP) for scalable AI applications.',
    driveLink: 'https://drive.google.com/drive/folders/11bIxXwK806DL_WQ-FovfRIysJXl1YMLv?usp=sharing',
    courseWebsite: 'https://anthropic.skilljar.com/',
    modules: [
      'Claude 101',
      'Claude Code 101',
      'Claude Platform 101',
      'Introduction to Claude Cowork',
      'Claude Code in Action',
      'AI Fluency: Framework & Foundations',
      'Building with the Claude API',
      'Introduction to Model Context Protocol',
      'AI Fluency for educators',
      'AI Fluency for students',
      'Model Context Protocol: Advanced Topics',
      'Claude with Amazon Bedrock',
      'Claude on Google Cloud',
      'Teaching AI Fluency',
      'AI Fluency for nonprofits',
      'Introduction to agent skills',
      'Introduction to subagents',
      'AI Capabilities and Limitations',
      'AI Fluency for Small Businesses',
      'AI Fluency for Builders',
      'AI Fluency for pK-12 Educators',
      'AI Fluency for Creative Work',
    ],
  },
  {
    id: 'semrush-courses',
    title: 'Semrush Courses',
    provider: 'Semrush Academy An Adobe Company',
    period: '2026',
    category: 'AI',
    icon: 'campaign',
    fullDescription:
      'A specialized learning path from Semrush Academy focused on leveraging AI tools for modern search optimization, PR strategies, brand visibility, and AI-powered marketing execution.',
    driveLink: 'https://drive.google.com/drive/folders/1w97gCZ4P_IUysGVRrVWyuJpxiOj0jR5p?usp=sharing',
    courseWebsite: 'https://www.semrush.com/academy/courses/',
    modules: [
      'AI Search Operating System',
      'AI PR Toolkit Crash Course',
      'AI Visibility Toolkit Crash Course',
      'Become an AI-Powered Marketer',
    ],
  },
  {
    id: 'azure-ai-fundamentals',
    title: 'Azure AI Fundamentals',
    provider: 'Microsoft & elevAIte',
    period: '2025',
    category: 'AI & Cloud',
    icon: 'cloud',
    fullDescription:
      'A foundational certification course covering artificial intelligence concepts and Microsoft Azure AI services, including machine learning workloads, computer vision, natural language processing (NLP), and conversational AI architecture on Azure.',
    driveLink: 'https://drive.google.com/drive/folders/1U3O37NqA57jnPRRXDMkiUUPkPertTMrm?usp=sharing',
    courseWebsite: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/',
    modules: [
      'Preparation Course for Azure AI Fundamentals (AI-900)',
    ],
  },
  {
    id: 'hp-life-courses',
    title: 'HP LIFE Courses',
    provider: 'HP LIFE Foundation',
    period: '2026',
    category: 'AI & Business IT',
    icon: 'school',
    fullDescription:
      'A practical skill-building course collection from HP LIFE covering artificial intelligence foundations, critical thinking in the AI era, data analytics, cybersecurity awareness, design thinking, and business IT strategy.',
    driveLink: 'https://drive.google.com/drive/folders/1XYJonq1bJ0tMaSs_F3993P437AT-kr_h?usp=sharing',
    courseWebsite: 'https://www.life-global.org/allcourses',
    modules: [
      'Critical Thinking in the AI Era',
      'AI for Beginners',
      'Data Science & Analytics',
      'Introduction to Cybersecurity Awareness',
      'Design Thinking',
      'IT for Business Success',
    ],
  },
];

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-16 md:py-24">
      <div className="flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              Professional Development
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications & Courses
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl">
            Verified certifications and specialized training programs I have completed to continuously expand my expertise in artificial intelligence, software engineering, and modern cloud technologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              <div className="flex flex-col gap-4">
                
                {/* Header info */}
                <div className="flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0c3836] to-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-xl">{cert.icon}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold">
                    {cert.period}
                  </span>
                </div>

                {/* Title & Provider */}
                <div className="py-2">
                  <p className="text-xs font-bold text-emerald-700 tracking-wide uppercase">{cert.provider}</p>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-emerald-800 transition-colors mt-0.5">
                    {cert.title}
                  </h3>
                </div>

              </div>

              {/* Action footer link inside card */}
              <div className="flex items-center justify-between pt-5 mt-4 border-t border-slate-100 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span className="flex items-center gap-1">
                  View Details & Certificate
                </span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Popup Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/70 backdrop-blur-md animate-fade-in overflow-y-auto"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-emerald-900 via-[#0c3836] to-teal-900 text-white relative">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur transition-all"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-emerald-300">
                  <span className="material-symbols-outlined text-xl">{selectedCert.icon}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">{selectedCert.provider}</span>
                  <p className="text-xs text-slate-300">{selectedCert.period}</p>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold text-white pr-8">
                {selectedCert.title}
              </h3>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex flex-col gap-6">
              
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Course Overview
                </h4>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {selectedCert.fullDescription}
                </p>
              </div>

              {/* Modules Completed */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Completed Modules ({selectedCert.modules.length})
                </h4>
                <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto pr-1">
                  {selectedCert.modules.map((mod, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                {selectedCert.courseWebsite && (
                  <a
                    href={selectedCert.courseWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold border border-slate-200 transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">language</span>
                    <span>Course Website</span>
                    <span className="material-symbols-outlined text-base text-slate-500">open_in_new</span>
                  </a>
                )}
                <a
                  href={selectedCert.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0c3836] hover:bg-[#072725] text-white text-sm font-bold shadow-md shadow-emerald-950/20 transition-all hover:scale-[1.02]"
                >
                  <span className="material-symbols-outlined text-lg">folder_open</span>
                  <span>View Certificate Folder</span>
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;
