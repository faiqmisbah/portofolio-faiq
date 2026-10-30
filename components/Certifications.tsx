import React, { useState, useEffect } from 'react';

export type CertificationType = 'certification' | 'course';

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
  type: CertificationType;
}

const certificationsData: Certification[] = [
  // --- CERTIFICATIONS ---
  {
    id: 'azure-ai-fundamentals',
    title: 'Azure AI Fundamentals',
    provider: 'Microsoft & elevAIte',
    period: '2025',
    category: 'AI & Cloud Computing',
    type: 'certification',
    icon: 'cloud',
    fullDescription:
      'A foundational certification course covering core artificial intelligence concepts and Microsoft Azure AI services. Validates comprehensive understanding of machine learning workloads, computer vision, natural language processing (NLP), conversational AI architecture, and responsible AI principles on Azure.',
    driveLink: 'https://drive.google.com/file/d/1JcX7ITUspLy0o6N8miFpGWn6iejrQSXt/view?usp=sharing',
    courseWebsite: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/',
    modules: [
      'Preparation Course for Azure AI Fundamentals (AI-900)',
      'Artificial Intelligence Workloads & Considerations',
      'Fundamental Principles of Machine Learning on Azure',
      'Computer Vision Workloads on Microsoft Azure',
      'Natural Language Processing (NLP) Workloads on Azure',
      'Conversational AI Architecture & Bot Framework'
    ],
  },
  {
    id: 'google-gemini-certified',
    title: 'Gemini Certified Student',
    provider: 'Google for Education',
    period: '2026 - 2029',
    category: 'AI & Large Language Models',
    type: 'certification',
    icon: 'auto_awesome',
    fullDescription:
      'Official certification issued by Google for Education validating foundational skills, prompt engineering proficiencies, and practical knowledge in utilizing Google Gemini AI models and tools within higher education, data analysis, research, and collaborative productivity environments.',
    driveLink: 'https://drive.google.com/file/d/1J4_Dmv2Km0uTw-hQ3AqwKQZNNSfHjRDr/view?usp=sharing',
    courseWebsite: 'https://edu.google.accredible.com/b07feed1-9f3b-4827-9635-558be4837166#acc.DBhExFIw',
    modules: [
      'Gemini Certification for Students',
      'Foundational LLM Principles & Architecture',
      'Advanced Prompt Engineering for Analysis & Research',
      'AI-Powered Productivity & Content Synthesis',
      'Ethical AI, Bias Mitigation & Fact Verification'
    ],
  },
  {
    id: 'eprt-english-proficiency',
    title: 'EPrT® (English Proficiency Test)',
    provider: 'Telkom University Language Center',
    period: '2026 - 2028',
    category: 'Language & Communication',
    type: 'certification',
    icon: 'translate',
    fullDescription:
      'Official English Proficiency Test (EPrT®) certification issued by Telkom University Language Center (No. 20353/SPi3-F/BHS/2026). Validates comprehensive academic and professional English communication abilities across Listening Comprehension, Structure & Written Expression (Grammar), and Reading Comprehension with a verified Total Score of 460.',
    driveLink: 'https://drive.google.com/file/d/1fTP57EtADr7g1IrKkDmIhZBBMSePY7ik/view?usp=sharing',
    courseWebsite: 'https://igracias.telkomuniversity.ac.id/languagecenter',
    modules: [
      'Overall Test Score: 460',
      'Listening Competence (Score: 48)',
      'Grammar & Written Expression Competence (Score: 43)',
      'Reading Comprehension Competence (Score: 47)',
      'Certificate No: 20353/SPi3-F/BHS/2026',
      'Official Validity Period: June 22, 2026 – June 22, 2028'
    ],
  },

  // --- COURSES & TRAINING ---
  {
    id: 'myskill-figma-uiux',
    title: 'UI-UX Research and Design (Figma for UI/UX Design)',
    provider: 'MySkill',
    period: '2026',
    category: 'UI/UX & Product Design',
    type: 'course',
    icon: 'design_services',
    fullDescription:
      'An intensive 22-module hands-on UI/UX design and prototyping program by MySkill mastering Figma and FigJam. The curriculum covers the end-to-end product design lifecycle: foundational wireframing, scalable design systems, auto layout & component variants, style guides, design tokens, responsive web & mobile layouts (dashboards, landing pages, onboarding, checkout, profile), hi-fi UI mockups, interactive prototyping with Figma Mirror, and collaborative FigJam ideation.',
    driveLink: 'https://drive.google.com/drive/folders/1kKmSYy1OEzTV-2XKvNld0Mqcm5DWGyrg?usp=sharing',
    courseWebsite: 'https://myskill.id/',
    modules: [
      'Introduction to Figma',
      'Figma Tools',
      'Wireframing for Website',
      'Making Design System',
      'Variants and Auto Layout',
      'Style Guide',
      'Plugin in Figma (ContentReel, Unsplash, Iconify)',
      'Making Hi-Fi for UI Design',
      'Design Documentation',
      'UI Design Improvement',
      'Designing Dashboard UI',
      'Designing Landing Page UI',
      'Designing Onboarding Process',
      'Designing Checkout Process',
      'Designing Profile Page',
      'Prototyping using Figma',
      'Prototyping using Figma Mirror',
      'Figma Community',
      'Collaboration in Figma',
      'FigJam Introduction',
      'FigJam for Brainstorming & Ideation',
      'Operating FigJam'
    ],
  },
  {
    id: 'anthropic-course',
    title: 'Anthropic Claude AI Ecosystem',
    provider: 'Anthropic Course',
    period: '2026',
    category: 'AI & Agentic Systems',
    type: 'course',
    icon: 'psychology',
    fullDescription:
      'A comprehensive learning path from Anthropic mastering the Claude AI ecosystem. This series covers foundational to advanced AI topics, including LLM prompt engineering, building agentic AI workflows with subagents and agent skills, integrating the Anthropic API across multi-cloud platforms (AWS Bedrock & Google Cloud), and implementing Model Context Protocol (MCP) for scalable AI applications.',
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
    title: 'Semrush AI Marketing & Search Academy',
    provider: 'Semrush Academy An Adobe Company',
    period: '2026',
    category: 'AI & Growth Marketing',
    type: 'course',
    icon: 'campaign',
    fullDescription:
      'A specialized learning track from Semrush Academy focused on leveraging AI tools for modern search optimization, PR strategies, brand visibility, and AI-powered marketing execution.',
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
    id: 'hp-life-courses',
    title: 'HP LIFE Professional Skills Collection',
    provider: 'HP LIFE Foundation',
    period: '2026',
    category: 'AI & Business IT',
    type: 'course',
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
  const [filter, setFilter] = useState<'all' | 'certification' | 'course'>('all');

  const certifications = certificationsData.filter((c) => c.type === 'certification');
  const courses = certificationsData.filter((c) => c.type === 'course');

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

  const renderCertCard = (cert: Certification) => {
    const isCertification = cert.type === 'certification';
    return (
      <div
        key={cert.id}
        onClick={() => setSelectedCert(cert)}
        className={`group relative bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-sm hover:shadow-xl ${
          isCertification
            ? 'border-emerald-200/90 hover:border-emerald-500 hover:shadow-emerald-900/10'
            : 'border-slate-200/90 hover:border-emerald-400 hover:shadow-emerald-900/10'
        }`}
      >
        <div className="flex flex-col gap-4">
          {/* Header info */}
          <div className="flex items-center justify-between gap-2">
            <div
              className={`w-11 h-11 rounded-xl text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform ${
                isCertification
                  ? 'bg-gradient-to-br from-[#0c3836] to-emerald-600 shadow-emerald-950/20'
                  : 'bg-gradient-to-br from-slate-800 to-emerald-800 shadow-slate-900/15'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{cert.icon}</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Type Badge */}
              {isCertification ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-bold">
                  <span className="material-symbols-outlined text-xs text-emerald-600">verified</span>
                  Certification
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 text-[11px] font-bold">
                  <span className="material-symbols-outlined text-xs text-slate-500">school</span>
                  Course & Training
                </span>
              )}

              <span className="px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200/80 text-xs font-semibold">
                {cert.period}
              </span>
            </div>
          </div>

          {/* Title & Provider */}
          <div className="py-2">
            <p className="text-xs font-bold text-emerald-700 tracking-wide uppercase">{cert.provider}</p>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-emerald-800 transition-colors mt-0.5 line-clamp-2">
              {cert.title}
            </h3>
          </div>
        </div>

        {/* Action footer link inside card */}
        <div className="flex items-center justify-between pt-5 mt-4 border-t border-slate-100 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
          <span className="flex items-center gap-1">
            {isCertification ? 'View Details & Credential' : 'View Details & Curriculum'}
          </span>
          <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="certificates" className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-16 md:py-24">
      <div className="flex flex-col gap-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
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
              Verified certifications and specialized training programs completed to continuously expand technical expertise in artificial intelligence, software engineering, product design, and cloud systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                filter === 'all'
                  ? 'bg-[#0c3836] text-white shadow-md shadow-[#0c3836]/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-400 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>All</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  filter === 'all' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {certificationsData.length}
              </span>
            </button>

            <button
              onClick={() => setFilter('certification')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                filter === 'certification'
                  ? 'bg-[#0c3836] text-white shadow-md shadow-[#0c3836]/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-400 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span className="material-symbols-outlined text-base text-emerald-400">verified</span>
              <span>Certifications</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  filter === 'certification' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {certifications.length}
              </span>
            </button>

            <button
              onClick={() => setFilter('course')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                filter === 'course'
                  ? 'bg-[#0c3836] text-white shadow-md shadow-[#0c3836]/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-400 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span className="material-symbols-outlined text-base text-slate-400">school</span>
              <span>Courses & Training</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  filter === 'course' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {courses.length}
              </span>
            </button>
          </div>
        </div>

        {/* Section 1: Certifications */}
        {(filter === 'all' || filter === 'certification') && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/80 border border-emerald-200 text-emerald-800 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900">Official Certifications</h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      {certifications.length}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Accredited credentials and standardized exams validating industry competencies and language proficiency
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map(renderCertCard)}
            </div>
          </div>
        )}

        {/* Section 2: Courses & Training */}
        {(filter === 'all' || filter === 'course') && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-xl">school</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900">Professional Courses & Training</h3>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold">
                      {courses.length}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Comprehensive curricula, technical workshops, and practical skill-building programs
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(renderCertCard)}
            </div>
          </div>
        )}
      </div>

      {/* EXPANDED & BALANCED MODAL POPUP (Matching Projects.tsx size & aesthetic) */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white border border-emerald-100 rounded-3xl max-w-4xl sm:max-w-5xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header & Navigation Bar */}
            <div className="shrink-0 bg-white border-b border-slate-100 px-6 sm:px-8 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0c3836] font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">
                    {selectedCert.type === 'certification' ? 'verified' : 'school'}
                  </span>
                  {selectedCert.type === 'certification' ? 'Official Certification' : 'Professional Training'}
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-xs font-semibold text-slate-500">
                  {selectedCert.category}
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-xs font-semibold text-slate-500">
                  {selectedCert.period}
                </span>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-[#0c3836] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Modal Scrollable Inner Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-gradient-to-b from-white via-[#f7fbf9] to-white">
              
              {/* 1. HERO TITLE & PROVIDER SECTION */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">
                    {selectedCert.provider} — {selectedCert.period}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                  {selectedCert.title}
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-4xl">
                  {selectedCert.fullDescription}
                </p>

                {/* Primary Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-3 border-b border-slate-200 pb-8">
                  <a
                    href={selectedCert.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0c3836] hover:bg-[#072725] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#0c3836]/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-base">
                      {selectedCert.type === 'certification' ? 'workspace_premium' : 'folder_open'}
                    </span>
                    <span>
                      {selectedCert.type === 'certification' ? 'View Official Certificate' : 'Open Certificate Folder'}
                    </span>
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>

                  {selectedCert.courseWebsite && (
                    <a
                      href={selectedCert.courseWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                    >
                      <span className="material-symbols-outlined text-base">language</span>
                      <span>Issuer / Course Website</span>
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>

              {/* 2. PROGRAM OVERVIEW & METADATA CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Credential Type</span>
                  <p className="text-sm font-extrabold text-slate-900">
                    {selectedCert.type === 'certification' ? 'Official Certification' : 'Professional Training'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Issuing Organization</span>
                  <p className="text-sm font-extrabold text-emerald-800 line-clamp-1">
                    {selectedCert.provider}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Curriculum Scope</span>
                  <p className="text-sm font-extrabold text-slate-900">
                    {selectedCert.modules.length} Verified Modules / Topics
                  </p>
                </div>
              </div>

              {/* 3. CURRICULUM & MODULE BREAKDOWN */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">menu_book</span>
                    Curriculum & Key Competencies ({selectedCert.modules.length} Modules)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
                  {selectedCert.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-emerald-300 transition-colors"
                    >
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {mod}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Fixed Bar */}
            <div className="shrink-0 bg-slate-50 border-t border-slate-200 px-6 sm:px-8 py-4 flex items-center justify-between flex-wrap gap-3 z-10">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={selectedCert.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0c3836] hover:bg-[#072725] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span className="material-symbols-outlined text-base">
                    {selectedCert.type === 'certification' ? 'workspace_premium' : 'folder_open'}
                  </span>
                  <span>
                    {selectedCert.type === 'certification' ? 'View Certificate (Google Drive)' : 'View Certificate Folder (Google Drive)'}
                  </span>
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                </a>

                {selectedCert.courseWebsite && (
                  <a
                    href={selectedCert.courseWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <span className="material-symbols-outlined text-base">language</span>
                    <span>Website</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-700 hover:text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
