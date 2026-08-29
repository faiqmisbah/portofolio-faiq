import React, { useState, useEffect } from 'react';

export interface MetricItem {
  label: string;
  value: string;
}

export interface HighlightItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  caption?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string; // Used on dashboard card summary
  fullDescription: string; // Used inside popup modal
  tags: string[];
  metrics: MetricItem[];
  businessQuestions: string[];
  keyInsights: HighlightItem[];
  methodology: ProcessStep[];
  tools: string[];
  gallery?: GalleryItem[];
  size: 'normal' | 'large';
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setActiveGalleryIndex(0);
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const categories = ['All', 'UI/UX', 'Web Dev', 'Mobile', 'Data Analysis'];

  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "Web Dev",
      year: "2026",
      image: "./projects/Porto.png",
      description: "A sleek, modern portfolio website built to showcase my journey, technical skills, and creative projects as a developer.",
      fullDescription: "To establish a strong digital presence, I designed and built a personal portfolio website with a sleek dark-mode aesthetic. This platform serves as a central hub to showcase my technical skills and creative projects, structured to provide recruiters and clients with immediate access to my professional journey.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
      metrics: [
        { label: "Lighthouse Score", value: "100/100" },
        { label: "Load Time", value: "< 0.8s" },
        { label: "Responsive", value: "100%" },
        { label: "Components", value: "Custom" }
      ],
      businessQuestions: [
        "How to showcase cross-disciplinary skills (Web Dev, UI/UX, Data Science) cohesively?",
        "How to deliver instant project previews and detailed case studies without page reloads?",
        "How to ensure maximum accessibility and lightning-fast loading speeds across devices?"
      ],
      keyInsights: [
        {
          title: "Modern Glassmorphism & Emerald Aesthetic",
          description: "Crafted a high-end visual aesthetic with smooth gradients, dark/light contrast, and subtle micro-interactions."
        },
        {
          title: "Interactive Deep-Dive Case Study Modals",
          description: "Built comprehensive popups allowing recruiters to dive deep into metrics, methodology, and live links."
        },
        {
          title: "High Performance Architecture",
          description: "Utilized Vite and lightweight dependencies for fast bundling and zero initial render lag."
        },
        {
          title: "Direct Client Conversion",
          description: "Integrated email service and direct contact buttons for quick inquiry submission."
        }
      ],
      methodology: [
        { step: "01", title: "UI Wireframing", description: "Designed layout structure and color tokens in Figma." },
        { step: "02", title: "Frontend Build", description: "Implemented modular React components with TypeScript type safety." },
        { step: "03", title: "Responsive Styling", description: "Applied Tailwind CSS flex/grid utility layout systems." },
        { step: "04", title: "Optimization & Deploy", description: "Optimized bundle size and deployed to GitHub Pages & Vercel." }
      ],
      tools: ["React", "TypeScript", "Tailwind CSS", "Vite", "Figma", "GitHub Pages"],
      size: 'normal',
      link: "https://faiqmisbah.github.io/portofolio-faiq/",
      github: "https://github.com/faiqmisbah/portofolio-faiq"
    },
    {
      id: 2,
      title: "Quote Generator",
      category: "Web Dev",
      year: "2025",
      image: "./projects/QuoteGenerator.png",
      description: "An interactive web app that generates inspiring quotes based on mood categories, featuring copy & social sharing options.",
      fullDescription: "I developed an interactive web application designed to deliver daily inspiration. Integrating a custom API, I implemented features that allow users to filter quotes by mood and instantly share them on social media, combining technical functionality with a simple, user-centric design.",
      tags: ["JavaScript", "HTML5", "CSS3", "REST API", "Web Share API"],
      metrics: [
        { label: "Curated Quotes", value: "500+" },
        { label: "Social Sharing", value: "1-Click" },
        { label: "API Latency", value: "< 100ms" },
        { label: "Categories", value: "5+ Moods" }
      ],
      businessQuestions: [
        "How to deliver daily inspiration with mood-based content filtering?",
        "How to make sharing quotes effortless across mobile and desktop platforms?",
        "How to handle API latency gracefully with loading states?"
      ],
      keyInsights: [
        {
          title: "Dynamic REST API Fetching",
          description: "Asynchronous REST API integration fetching fresh inspirational content dynamically."
        },
        {
          title: "Instant Social & Clipboard Sharing",
          description: "Integrated Web Share API and one-click clipboard copying for quick user engagement."
        },
        {
          title: "Mood Filtering System",
          description: "Categorized quotes by emotional state allowing tailored daily reflections."
        }
      ],
      methodology: [
        { step: "01", title: "API Integration", description: "Connected quotes REST API with fallback JSON handling." },
        { step: "02", title: "State Management", description: "Managed active mood filters and loading skeleton UI states." },
        { step: "03", title: "Social Features", description: "Implemented Web Share API & Clipboard API triggers." },
        { step: "04", title: "UI Polish", description: "Added glassmorphism styling and smooth state transitions." }
      ],
      tools: ["JavaScript (ES6+)", "HTML5", "CSS3", "Fetch API", "GitHub Pages"],
      size: 'normal',
      link: "https://faiqmisbah.github.io/quote-generator/",
      github: "https://github.com/faiqmisbah/quote-generator"
    },
    {
      id: 3,
      title: "JAKI Design System",
      category: "UI/UX",
      year: "2025",
      image: "./projects/DesignSystemJAKI.png",
      description: "A comprehensive design guideline created to ensure visual consistency across design and development teams.",
      fullDescription: "For the Jakarta Smart City (JAKI) ecosystem, I developed a comprehensive design system to ensure consistency across digital products. I created and documented a library of standardized UI components from typography to grid systems, which unified the visual language and significantly accelerated the workflow between design and development teams.",
      tags: ["Figma", "Design System", "UI/UX Design", "Design Tokens", "Accessibility"],
      metrics: [
        { label: "UI Components", value: "50+ Kits" },
        { label: "Workflow Speed", value: "+40%" },
        { label: "Accessibility", value: "WCAG AA" },
        { label: "Design Sync", value: "100%" }
      ],
      businessQuestions: [
        "How to standardize UI components across multiple government public service apps?",
        "How to streamline handoff between UI designers and frontend developers?",
        "How to enforce accessible color contrast and readable typography scales?"
      ],
      keyInsights: [
        {
          title: "Comprehensive Component Library",
          description: "Built modular Figma components with full Auto-Layout, variant sets, and reusable tokens."
        },
        {
          title: "Unified Brand Identity",
          description: "Established typography scale, color system, and micro-interaction guidelines for JAKI."
        },
        {
          title: "Design Tokens Standardization",
          description: "Mapped colors, spacing, and shadows to code tokens for direct engineering translation."
        }
      ],
      methodology: [
        { step: "01", title: "Research & Audit", description: "Audited existing JAKI interface components to find UX inconsistencies." },
        { step: "02", title: "Foundation Tokens", description: "Defined typography scales, color palettes, and spacing variables." },
        { step: "03", title: "Component Creation", description: "Built flexible component library with Figma variants and interactive states." },
        { step: "04", title: "Documentation", description: "Published usage guidelines for design and engineering teams." }
      ],
      tools: ["Figma", "Design Tokens", "Auto Layout", "Variants", "WCAG Guidelines"],
      size: 'normal',
      github: "https://github.com/faiqmisbah"
    },
    {
      id: 4,
      title: "Sakuin",
      category: "Web Dev",
      year: "2025",
      image: "./projects/Sakuin.png",
      description: "A professional landing page for a fintech app, designed to build trust and highlight financial management features.",
      fullDescription: "I designed a professional landing page for 'Sakuin' a personal finance management application. Utilizing a trustworthy color palette and structured layout, I highlighted key asset management features to instill confidence in users and promote financial literacy through clear visual communication.",
      tags: ["React", "Vite", "Tailwind CSS", "Fintech UI", "Landing Page"],
      metrics: [
        { label: "Core Modules", value: "3+ Features" },
        { label: "Mobile Sync", value: "100%" },
        { label: "Design Conversion", value: "High" },
        { label: "Framework", value: "React Vite" }
      ],
      businessQuestions: [
        "How to design a fintech landing page that builds immediate trust and financial clarity?",
        "How to present complex budgeting features through clean visual hero sections?",
        "How to convert casual visitors into registered mobile app users?"
      ],
      keyInsights: [
        {
          title: "Trustworthy Visual Language",
          description: "Utilized deep emerald & slate tones to communicate stability and financial security."
        },
        {
          title: "Conversion-Focused Hero Section",
          description: "Structured CTA placements to guide users toward app signup and feature exploration."
        },
        {
          title: "Interactive Feature Cards",
          description: "Highlighted expense tracking, budget insights, and automatic savings."
        }
      ],
      methodology: [
        { step: "01", title: "Persona Research", description: "Identified key user needs in personal expense tracking." },
        { step: "02", title: "High-Fidelity Design", description: "Designed landing page sections highlighting security and ease of use." },
        { step: "03", title: "Web Implementation", description: "Built clean, responsive web page with smooth scroll effects." },
        { step: "04", title: "Deployment", description: "Hosted production build on Vercel for instant availability." }
      ],
      tools: ["React", "Tailwind CSS", "Vite", "Figma", "Vercel"],
      size: 'normal',
      link: "https://sakuin-zeta.vercel.app/",
      github: "https://github.com/faiqmisbah/sakuin"
    },
    {
      id: 5,
      title: "E-Voting Platform Concept (Pemilu)",
      category: "Web Dev",
      year: "2024",
      image: "./projects/Pemilu.png",
      description: "A modern landing page concept for a digital election platform, focusing on clarity, security, and transparency.",
      fullDescription: "I conceptualized a modern e-voting platform aimed at enhancing transparency and civic engagement. I designed a clean, informative landing page that simplifies complex election information into digestible steps, fostering a more accessible and trustworthy voting experience for the public.",
      tags: ["UI/UX Design", "Web Architecture", "Public Tech", "Prototyping"],
      metrics: [
        { label: "Voting Steps", value: "3 Steps" },
        { label: "Verification", value: "Transparent" },
        { label: "Accessibility", value: "High" },
        { label: "Target", value: "Public Citizens" }
      ],
      businessQuestions: [
        "How to make digital e-voting accessible and easily understood by citizens of all ages?",
        "How to visually reassure voters regarding security, identity verification, and vote counting?",
        "How to structure public election information cleanly on web interfaces?"
      ],
      keyInsights: [
        {
          title: "Step-by-Step Voter Guidance",
          description: "Created visual walkthroughs breaking down registration, ballot selection, and verification."
        },
        {
          title: "Security & Verification Badges",
          description: "Highlighted real-time verification indicators to reinforce public trust."
        },
        {
          title: "Accessible High-Contrast UI",
          description: "Ensured readable font sizes and accessible color combinations for all demographics."
        }
      ],
      methodology: [
        { step: "01", title: "User Journey Mapping", description: "Mapped out voter onboarding, ballot selection, and verification steps." },
        { step: "02", title: "Wireframing Layout", description: "Constructed high-contrast layouts for maximum readability." },
        { step: "03", title: "Interactive Prototype", description: "Tested prototype flows for voting accuracy and ease of navigation." },
        { step: "04", title: "Feedback Iteration", description: "Refined visual hierarchy based on usability testing feedback." }
      ],
      tools: ["Figma", "Web Design", "UI Prototyping", "User Research"],
      size: 'normal',
      github: "https://github.com/faiqmisbah/PemiluApp"
    },
    {
      id: 6,
      title: "FoodGo Web Platform",
      category: "Web Dev",
      year: "2025",
      image: "./projects/FoodGoWeb.png",
      description: "A responsive website version of the FoodGo platform, offering an organized catalog and intuitive ordering system.",
      fullDescription: "Complementing the mobile ecosystem, I designed the FoodGo web platform to optimize the ordering experience for desktop users. I crafted a responsive and expansive catalog interface that features intuitive search functionality, clear food categorization, and a streamlined dashboard, ensuring a consistent and seamless brand experience across all devices.",
      tags: ["React", "Tailwind CSS", "E-Commerce", "Web Platform"],
      metrics: [
        { label: "Catalog Items", value: "100+" },
        { label: "Cart Summary", value: "Instant" },
        { label: "Layout Sync", value: "Responsive" },
        { label: "Ordering", value: "Seamless" }
      ],
      businessQuestions: [
        "How to extend a mobile food app into a full-featured desktop web ordering platform?",
        "How to optimize wide-screen layout for browsing large menus and instant cart management?",
        "How to streamline product search and filtering across food categories?"
      ],
      keyInsights: [
        {
          title: "Dual Layout Grid Architecture",
          description: "Designed wide-screen product grid alongside persistent order sidebar for zero-friction ordering."
        },
        {
          title: "Dynamic Filter & Search System",
          description: "Implemented instant category tabs, price filters, and live search bar response."
        },
        {
          title: "Consistent Brand Identity",
          description: "Aligned desktop interface styling with mobile app design tokens for cross-platform harmony."
        }
      ],
      methodology: [
        { step: "01", title: "Desktop UX Planning", description: "Adapted mobile order flows to wide-screen browser environments." },
        { step: "02", title: "Interface Building", description: "Constructed responsive grids and sidebar order summaries." },
        { step: "03", title: "Interaction Polish", description: "Added smooth item add animations and quick quantity controls." },
        { step: "04", title: "Testing", description: "Validated multi-screen responsiveness across browser viewports." }
      ],
      tools: ["React", "Tailwind CSS", "JavaScript", "Figma"],
      size: 'normal',
      github: "https://github.com/faiqmisbah/foodgo-mobile"
    },
    {
      id: 7,
      title: "FoodGo Mobile App",
      category: "Mobile",
      year: "2024",
      image: "./projects/AppFoodGo.png",
      description: "A user-friendly mobile interface designed for a seamless food delivery experience from browsing to checkout.",
      fullDescription: "I designed an end-to-end mobile interface for a food delivery service, prioritizing user convenience and visual appetite. From secure authentication to a seamless checkout flow, I crafted an intuitive user journey that simplifies the ordering process while maintaining a modern and vibrant aesthetic.",
      tags: ["Figma", "Mobile UI/UX", "iOS / Android Design", "User Experience"],
      metrics: [
        { label: "Screens", value: "15+ UI" },
        { label: "Checkout Flow", value: "3 Clicks" },
        { label: "Visual Style", value: "Modern" },
        { label: "Navigation", value: "One-Thumb" }
      ],
      businessQuestions: [
        "How to minimize food ordering friction on mobile devices?",
        "How to present appetizing food photography with clear customization options?",
        "How to structure mobile cart checkout for fast payment completion?"
      ],
      keyInsights: [
        {
          title: "Appetite-Driven Visual Aesthetic",
          description: "Highlighted vibrant food visuals with high contrast typography and warm accents."
        },
        {
          title: "One-Thumb Mobile Ergonomics",
          description: "Placed primary search, cart, and order CTA elements within natural thumb reach."
        },
        {
          title: "Customization Modal Sheet",
          description: "Built quick bottom sheet overlay for choosing portion sizes, toppings, and notes."
        }
      ],
      methodology: [
        { step: "01", title: "User Research", description: "Analyzed mobile food ordering pain points and competitor apps." },
        { step: "02", title: "User Flow Design", description: "Designed onboarding, home feed, food customization modal, and checkout screens." },
        { step: "03", title: "Prototyping", description: "Created interactive Figma prototype to validate ordering speed." },
        { step: "04", title: "Usability Testing", description: "Tested micro-interactions and refined checkout button placements." }
      ],
      tools: ["Figma", "Mobile UI", "Interactive Prototype", "UI Design"],
      size: 'normal',
      github: "https://github.com/faiqmisbah/foodgo-mobile"
    },
    {
      id: 8,
      title: "Music Recommender System",
      category: "Data Analysis",
      year: "2026",
      image: "./projects/SisRekMusik.png",
      description: "A 5-Fold Cross Validation study implementing a Content-Based Filtering music recommendation system powered by Word Embeddings and FAISS indexing.",
      fullDescription: "This research project implements a music recommendation system using a Content-Based Filtering approach powered by Word Embeddings to represent song lyrics. It systematically evaluates three distinct word embedding models (GloVe, FastText, Word2Vec) using a 5-Fold Cross Validation evaluation (K=5, Top-K=20). GloVe emerged as the best-performing model with a 92.65% Hit Rate, 0.4886 MRR, and 0.5792 NDCG score. The entire pipeline—from TF-IDF weighted embeddings and FAISS vector indexing to an interactive Gradio UI—is deployed live on Hugging Face Spaces.",
      tags: ["Python 3.10+", "NLP", "GloVe (92.65%)", "FastText", "Word2Vec", "FAISS", "5-Fold CV", "Hugging Face"],
      metrics: [
        { label: "GloVe Hit Rate", value: "92.65%" },
        { label: "GloVe MRR", value: "0.4886" },
        { label: "GloVe NDCG", value: "0.5792" },
        { label: "Validation Method", value: "5-Fold CV" }
      ],
      businessQuestions: [
        "How to represent complex semantic patterns in song lyrics using vector word embeddings?",
        "Which word embedding model (GloVe vs FastText vs Word2Vec) yields the highest recommendation precision?",
        "How to achieve sub-millisecond similarity search over high-dimensional audio & lyric vectors?",
        "How to deploy NLP recommendation pipelines interactively to web users via Hugging Face?"
      ],
      keyInsights: [
        {
          title: "GloVe Achieves Superior Performance (92.65% Hit Rate)",
          description: "GloVe outperformed FastText (90.83%) and Word2Vec (90.44%) across 5-fold cross validation with Top-K=20, MRR 0.4886, and NDCG 0.5792."
        },
        {
          title: "TF-IDF Weighted Lyrics Embeddings",
          description: "Applied term frequency-inverse document frequency weighting to lyric embeddings to emphasize unique genre-defining keywords."
        },
        {
          title: "Sub-Millisecond FAISS Similarity Search",
          description: "Utilized Facebook AI Similarity Search (FAISS) for ultra-fast L2 and Cosine vector retrieval over large song catalogs."
        },
        {
          title: "Automated Cloud Deployment to Hugging Face",
          description: "Packaged research modules into a interactive Gradio Blocks interface and deployed seamlessly to Hugging Face Spaces."
        }
      ],
      methodology: [
        { step: "01", title: "Data Preprocessing", description: "Loaded, cleaned, and merged Spotify track features with lyric datasets." },
        { step: "02", title: "Embedding & TF-IDF", description: "Generated TF-IDF weighted vector representations for GloVe, FastText, and Word2Vec." },
        { step: "03", title: "5-Fold CV Evaluation", description: "Evaluated models using Hit Rate, Mean Reciprocal Rank (MRR), and NDCG metrics." },
        { step: "04", title: "FAISS & Deployment", description: "Indexed vector embeddings with FAISS and published interactive Gradio app to Hugging Face." }
      ],
      gallery: [
        {
          title: "System Architecture & Pipeline",
          image: "./projects/music/arsitektur_sistem.png",
          caption: "End-to-end data pipeline from Spotify & lyrics datasets to TF-IDF embeddings, FAISS indexing, 5-Fold evaluation, and Gradio UI."
        },
        {
          title: "5-Fold CV Performance Comparison",
          image: "./projects/music/per_fold_comparison.png",
          caption: "Detailed per-fold evaluation line charts showing GloVe consistently outperforming FastText and Word2Vec in Hit Rate, MRR, and NDCG."
        },
        {
          title: "Interactive Application Interface",
          image: "./projects/music/app_demo.png",
          caption: "Live Gradio web interface deployed on Hugging Face Spaces allowing real-time track recommendations and genre filtering."
        }
      ],
      tools: ["Python 3.10+", "GloVe", "FastText", "Word2Vec", "FAISS", "NLTK", "Scikit-Learn", "Gradio", "Hugging Face"],
      size: 'normal',
      link: "https://huggingface.co/spaces/faiqmisbah/musik-rekomendasi",
      github: "https://github.com/faiqmisbah/music-recommendersystem-cbf"
    },
    {
      id: 9,
      title: "Movie Recommender System",
      category: "Data Analysis",
      year: "2026",
      image: "./projects/SisRekMovie.png",
      description: "An explainable hybrid movie recommendation system combining Matrix Factorization (40%) and Content-Based Filtering (60%) with temporal evaluation and transparent reasoning.",
      fullDescription: "Beyond Ratings is a rigorous data analysis research project developing an explainable movie recommendation system. The solution implements a Weighted Hybrid Model combining Collaborative Filtering via Matrix Factorization (40%) and Content-Based Recommendation (60%) with an optimal hybrid alpha (α = 0.4). Designed with strict temporal development splits and locked final-test evaluations, the system generates Top-10 movie recommendations accompanied by human-readable explanations—detailing matching genres, previously liked reference movies, and component contribution scores via a Streamlit web app.",
      tags: ["Python", "Hybrid Model (α=0.4)", "Matrix Factorization", "Content-Based", "Temporal Split", "Streamlit"],
      metrics: [
        { label: "Hybrid Alpha (α)", value: "0.4 (Optimal)" },
        { label: "Model Weighting", value: "40% MF / 60% CB" },
        { label: "Evaluation Design", value: "Temporal Split" },
        { label: "Recommendation", value: "Top-10 List" }
      ],
      businessQuestions: [
        "How to solve cold-start and data sparsity in collaborative filtering without sacrificing accuracy?",
        "What is the optimal weighting (α) between Matrix Factorization and Content-Based Filtering?",
        "How to evaluate recommender systems realistically using temporal data splits instead of random splits?",
        "How to generate transparent, explainable reasons for why each movie is recommended?"
      ],
      keyInsights: [
        {
          title: "Optimal Weighted Hybrid Architecture (α = 0.4)",
          description: "Determined that combining 40% Matrix Factorization with 60% Content-Based filtering produces the highest ranking precision while maintaining high catalog coverage."
        },
        {
          title: "Strict Temporal Development & Locked Test Sets",
          description: "Prevented data leakage by separating historical development data from a locked temporal final-test set."
        },
        {
          title: "Human-Explainable Recommendation Engine",
          description: "Calculated individual contribution scores, matching genres, and reference liked movies for complete transparency."
        },
        {
          title: "Interactive Streamlit Demo Layer",
          description: "Built a responsive web dashboard to explore user profiles, genre preferences, and recommendation explanations."
        }
      ],
      methodology: [
        { step: "01", title: "Temporal Dataset Preparation", description: "Created temporal development and locked final-test splits from raw rating histories." },
        { step: "02", title: "Dual Engine Modeling", description: "Trained Matrix Factorization for rating behavior and Content-Based TF-IDF for genre metadata." },
        { step: "03", title: "Alpha Selection & Evaluation", description: "Optimized hybrid alpha (α = 0.4) using Precision@K, Recall@K, NDCG@K, and Catalog Coverage." },
        { step: "04", title: "Explainability & Streamlit", description: "Integrated component score breakdowns and deployed interactive user profile demo." }
      ],
      gallery: [
        {
          title: "System Architecture & Pipeline",
          image: "./projects/movie/system_pipeline.png",
          caption: "End-to-end temporal evaluation pipeline separating Matrix Factorization and Content-Based modeling into a locked final-test evaluation."
        },
        {
          title: "Alpha Weight Selection (α = 0.4)",
          image: "./projects/movie/alpha_selection.png",
          caption: "Grid search evaluation across hybrid alpha weights identifying α = 0.4 (40% MF / 60% CB) as the sweet spot for ranking precision."
        },
        {
          title: "Final Ranking Metrics by K",
          image: "./projects/movie/metrics_by_k.png",
          caption: "Precision@K, Recall@K, NDCG@K, and MAP performance curves across different recommendation cutoffs."
        },
        {
          title: "Validation vs Locked Final Test",
          image: "./projects/movie/validation_vs_test.png",
          caption: "Comparative metric distribution confirming model stability between the validation phase and locked final test evaluation."
        },
        {
          title: "Catalog Coverage Analysis",
          image: "./projects/movie/catalog_coverage.png",
          caption: "Evaluating catalog coverage and item diversity across recommendation list sizes."
        }
      ],
      tools: ["Python", "Pandas", "Scikit-Learn", "Matrix Factorization", "TF-IDF", "Streamlit", "Matplotlib / Seaborn"],
      size: 'normal',
      link: "https://movie-recommendationsystemm.streamlit.app/",
      github: "https://github.com/faiqmisbah/movie-recommendation"
    },
    {
      id: 10,
      title: "Novel Recommender System",
      category: "Data Analysis",
      year: "2026",
      image: "./projects/SisRekNovel.png",
      description: "An explainable hybrid novel recommendation system combining Collaborative Filtering (90%) and Content-Based Filtering (10%) with cold-start evaluation, diversity analysis, and transparent recommendation scores.",
      fullDescription: "Novel Recommender is a rigorous data analysis research project developing a hybrid recommendation system for Fantasy & Paranormal novels. The solution combines Collaborative Filtering (90%) based on user–book interaction patterns and Content-Based Filtering (10%) using TF-IDF representations of book metadata, with an optimal hybrid alpha (α = 0.90). The system is evaluated using Precision@K, Recall@K, NDCG@K, catalog coverage, novelty, hit rate, popularity bias, and cold-start performance across different levels of known user interactions. The final model generates personalized Top-10 novel recommendations through a Streamlit web application, displaying hybrid, collaborative, and content-based scores to provide transparent insight into how each recommendation is ranked.",
      tags: ["Python", "Hybrid Model (α=0.90)", "User-Based CF", "TF-IDF & Content-Based", "Cold-Start Evaluation", "Streamlit"],
      metrics: [
        { label: "Hybrid Alpha (α)", value: "0.90 (90% CF / 10% CB)" },
        { label: "NDCG@10 Score", value: "13.0%" },
        { label: "Recall@10 Score", value: "12.8%" },
        { label: "Catalog Coverage", value: "36.1%" }
      ],
      businessQuestions: [
        "How to balance Collaborative Filtering and Content-Based Filtering to optimize recommendation precision?",
        "How does recommendation quality (NDCG@K, Recall@K) perform under cold-start conditions with limited user history (1, 3, 5 interactions)?",
        "What are the trade-offs between relevance, catalog coverage, novelty, and popularity bias in hybrid novel recommendation?",
        "How to deliver transparent and explainable Top-10 recommendation score breakdowns in an interactive web app?"
      ],
      keyInsights: [
        {
          title: "Optimal Hybrid Weighting (α = 0.90)",
          description: "Combining 90% Collaborative Filtering with 10% Content-Based Filtering produced the highest overall ranking performance (NDCG@10 = 13.0%, Recall@10 = 12.8%)."
        },
        {
          title: "Collaborative Filtering Dominance in Relevance",
          description: "User-based collaborative filtering provided the strongest relevance signals, outperforming Content-Based and Popularity baselines by over 3x in NDCG@10."
        },
        {
          title: "Content-Based Synergy for Coverage & Novelty",
          description: "TF-IDF book metadata representations expanded catalog coverage (44.9% CB vs 35.7% CF) and novelty (12.4 CB vs 5.2 CF), helping surface long-tail titles."
        },
        {
          title: "Cold-Start Resiliency & Interaction Trajectory",
          description: "Evaluation across sparse interaction levels showed steady ranking improvements as known items increased (NDCG@10 grew from 2.85% at 1 interaction to 3.93% at 5 interactions)."
        },
        {
          title: "Popularity Bias Transparency",
          description: "Rigorous evaluation highlighted that 93.41% of hybrid recommendations originate from the top 20% most popular titles, exposing key trade-offs in user interaction density."
        }
      ],
      methodology: [
        { step: "01", title: "Data Ingestion & Cleaning", description: "Processed and filtered 62,168 books, 49,980 users, and 3,070,371 interactions in the Fantasy & Paranormal domain." },
        { step: "02", title: "Dual Engine Modeling", description: "Constructed User-Item Cosine Similarity matrix for CF and TF-IDF vector matrix (62,168 x 80,000) for book metadata." },
        { step: "03", title: "Hybrid Optimization (α=0.90)", description: "Normalized component scores and evaluated hybrid alpha combinations across Precision@K, Recall@K, NDCG@K, Coverage, and Novelty." },
        { step: "04", title: "Cold-Start & Bias Analysis", description: "Tested recommendation degradation at 1, 3, and 5 known interactions and measured top-20% popularity bias concentration." },
        { step: "05", title: "Streamlit Deployment", description: "Built an interactive web app displaying Top-10 novel recommendations with transparent score breakdowns (CF vs Content)." }
      ],
      gallery: [
        {
          title: "Top-10 Model Performance Comparison",
          image: "./projects/novel/01_model_performance_at10.png",
          caption: "Evaluating Precision@10, Recall@10, and NDCG@10 across Popularity, Content-Based, Item-CF, and Hybrid (α=0.90) models."
        },
        {
          title: "Top-5 Model Performance Comparison",
          image: "./projects/novel/02_model_performance_at5.png",
          caption: "Performance metrics at K=5 cutoff demonstrating top-rank precision and early recall characteristics."
        },
        {
          title: "Catalog Coverage vs NDCG Trade-Off",
          image: "./projects/novel/03b_coverage_vs_ndcg_fixed.png",
          caption: "Analyzing catalog coverage percentage against ranking accuracy (NDCG@10) for all evaluated recommendation algorithms."
        },
        {
          title: "Novelty vs Hit Rate Analysis",
          image: "./projects/novel/04b_novelty_vs_hit_rate_fixed.png",
          caption: "Trade-off analysis comparing recommendation novelty (serendipity of long-tail items) with overall Hit Rate@10."
        },
        {
          title: "Popularity Bias Concentration",
          image: "./projects/novel/05_popularity_bias.png",
          caption: "Measuring the percentage of recommendations derived from the top 20% most popular items across models."
        },
        {
          title: "Cold-Start Performance Summary",
          image: "./projects/novel/06c_cold_start_summary.png",
          caption: "Evaluation of NDCG@K and Recall@K trajectory across sparse user profiles with 1, 3, and 5 known interactions."
        },
        {
          title: "Cold-Start NDCG@K Evaluation",
          image: "./projects/novel/06b_cold_start_ndcg_fixed.png",
          caption: "Detailed NDCG progression curves showing ranking improvement as user interaction context expands."
        },
        {
          title: "Cold-Start Recall@K Evaluation",
          image: "./projects/novel/07b_cold_start_recall_fixed.png",
          caption: "Recall progression curves under extreme cold-start constraints across different item cutoff thresholds."
        }
      ],
      tools: ["Python", "Pandas", "Scikit-Learn", "TF-IDF", "Collaborative Filtering", "Streamlit", "Matplotlib / Seaborn"],
      size: 'normal',
      github: "https://github.com/faiqmisbah"
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

      {/* Grid of Project Cards */}
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
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 rounded-full bg-white/95 backdrop-blur text-slate-900 font-bold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="material-symbols-outlined text-base text-emerald-700">visibility</span>
                  Quick View Details
                </span>
              </div>
            </div>

            {/* Text Section - Bottom Half */}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-md bg-[#0c3836] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  {project.category}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {project.year}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 line-clamp-3">
                {project.description}
              </p>

              {/* Action Link */}
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

      {/* FIXED & BALANCED CASE STUDY MODAL POPUP */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white border border-emerald-100 rounded-3xl max-w-4xl sm:max-w-5xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header & Fixed Navigation Bar */}
            <div className="shrink-0 bg-white border-b border-slate-100 px-6 sm:px-8 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0c3836] font-bold text-xs uppercase tracking-wider shadow-sm">
                  {selectedProject.category} • {selectedProject.year}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-[#0c3836] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Modal Scrollable Inner Body Container */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-gradient-to-b from-white via-[#f7fbf9] to-white">

              {/* 1. HERO HEADER SECTION */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">
                    {selectedProject.category} — {selectedProject.year}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                  {selectedProject.title}
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-4xl">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200 text-emerald-800 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Main Action CTAs (Includes Visit Live, GitHub Repo & Contact) */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-b border-slate-200 pb-8">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0c3836] hover:bg-[#072725] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#0c3836]/20 transition-all transform hover:-translate-y-0.5"
                    >
                      <span>Visit Live Project</span>
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                    </a>
                  )}

                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                    >
                      <span className="material-symbols-outlined text-base">code</span>
                      <span>GitHub Repo</span>
                    </a>
                  )}

                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm shadow-sm transition-all"
                  >
                    <span>Discuss This Project</span>
                    <span className="material-symbols-outlined text-base">mail</span>
                  </a>
                </div>
              </div>

              {/* 2. PROJECT SNAPSHOT (KEY METRICS GRID - OVERFLOW PROTECTED) */}
              {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                <div className="flex flex-col gap-4">
                  <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">
                    PROJECT SNAPSHOT & RESEARCH RESULTS
                  </span>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-emerald-50/70 border border-emerald-200/90 p-4 sm:p-5 rounded-2xl flex flex-col justify-between gap-2 shadow-sm min-w-0 overflow-hidden"
                      >
                        <p className="text-xl sm:text-2xl font-black text-[#0c3836] tracking-tight break-words line-clamp-2 min-w-0">
                          {metric.value}
                        </p>
                        <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider truncate">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. BUSINESS QUESTIONS / CORE OBJECTIVES */}
              {selectedProject.businessQuestions && selectedProject.businessQuestions.length > 0 && (
                <div className="bg-[#0c3836] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-12 items-start shadow-lg">
                  <div className="lg:w-1/3 flex flex-col gap-2 shrink-0">
                    <span className="text-emerald-300 font-bold uppercase tracking-widest text-xs">
                      CORE OBJECTIVES
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      What research problem does this project solve?
                    </h3>
                  </div>
                  <div className="lg:w-2/3 flex flex-col gap-3 w-full">
                    {selectedProject.businessQuestions.map((q, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur border border-white/10">
                        <span className="font-mono text-emerald-300 font-bold text-sm shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <p className="text-emerald-50 text-sm sm:text-base font-medium leading-snug">
                          {q}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. INTERACTIVE SHOWCASE / RESEARCH FIGURES GALLERY */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">
                    RESEARCH FIGURES & SYSTEM SHOWCASE
                  </span>
                </div>

                {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {/* Main Active Figure View */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 sm:p-4 flex flex-col gap-3 shadow-xl overflow-hidden">
                      <div className="w-full max-h-[480px] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center">
                        <img
                          src={selectedProject.gallery[activeGalleryIndex]?.image}
                          alt={selectedProject.gallery[activeGalleryIndex]?.title}
                          className="w-full h-full max-h-[460px] object-contain rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-1 px-2 py-1 bg-slate-900 text-slate-200">
                        <h4 className="text-base font-bold text-emerald-400">
                          {selectedProject.gallery[activeGalleryIndex]?.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {selectedProject.gallery[activeGalleryIndex]?.caption}
                        </p>
                      </div>
                    </div>

                    {/* Gallery Thumbnails Selector Bar */}
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1">
                      {selectedProject.gallery.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveGalleryIndex(idx)}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border text-left shrink-0 transition-all cursor-pointer ${activeGalleryIndex === idx
                            ? 'bg-[#0c3836] border-[#0c3836] text-white shadow-md'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-400 hover:bg-slate-50'
                            }`}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-10 h-10 object-cover rounded-lg border border-slate-300"
                          />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold leading-snug max-w-[140px] truncate">
                              {item.title}
                            </span>
                            <span className={`text-[10px] font-semibold ${activeGalleryIndex === idx ? 'text-emerald-300' : 'text-slate-400'}`}>
                              Figure 0{idx + 1}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-100 border border-slate-200 rounded-2xl p-3 sm:p-4 overflow-hidden flex items-center justify-center shadow-inner">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full max-h-[460px] object-contain rounded-xl shadow-md"
                    />
                  </div>
                )}
              </div>

              {/* 5. KEY INSIGHTS / FEATURE HIGHLIGHTS */}
              {selectedProject.keyInsights && selectedProject.keyInsights.length > 0 && (
                <div className="flex flex-col gap-4">
                  <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">
                    KEY INSIGHTS & RESEARCH FINDINGS
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    What stands out from this research work.
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.keyInsights.map((insight, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200/90 p-6 rounded-2xl flex flex-col gap-2.5 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all"
                      >
                        <span className="text-emerald-700 font-mono text-xs font-extrabold uppercase tracking-wider">
                          0{idx + 1}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 leading-snug">
                          {insight.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {insight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. METHODOLOGY & PROCESS STEPS */}
              {selectedProject.methodology && selectedProject.methodology.length > 0 && (
                <div className="flex flex-col gap-4 border-t border-slate-200 pt-8">
                  <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">
                    RESEARCH METHODOLOGY & PIPELINE
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    From raw data to validated recommendations.
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedProject.methodology.map((m, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 border border-slate-200/90 p-5 rounded-2xl flex flex-col gap-2 relative overflow-hidden"
                      >
                        <span className="text-emerald-700 font-mono text-xs font-extrabold">
                          {m.step}
                        </span>
                        <h4 className="text-base font-bold text-slate-900">
                          {m.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. TOOLS & TECHNOLOGIES USED */}
              {selectedProject.tools && selectedProject.tools.length > 0 && (
                <div className="flex flex-col gap-3 border-t border-slate-200 pt-6">
                  <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">
                    TOOLS & TECHNOLOGIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-xl bg-emerald-50 text-[#0c3836] border border-emerald-200 text-xs font-bold shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer Fixed Bar (Contains Open Live, GitHub Repo & Close Case Study) */}
            <div className="shrink-0 bg-slate-50 border-t border-slate-200 px-6 sm:px-8 py-4 flex items-center justify-between flex-wrap gap-3 z-10">
              <div className="flex flex-wrap items-center gap-2">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0c3836] hover:bg-[#072725] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <span>Open Live Application</span>
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <span className="material-symbols-outlined text-base">code</span>
                    <span>GitHub Repo</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-700 hover:text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;