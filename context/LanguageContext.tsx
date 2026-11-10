import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'id';

export interface Translations {
  [key: string]: {
    en: string;
    id: string;
  };
}

export const translations: Translations = {
  // Navbar
  'nav.about': { en: 'About', id: 'Tentang' },
  'nav.expertise': { en: 'Expertise', id: 'Keahlian' },
  'nav.projects': { en: 'Projects', id: 'Proyek' },
  'nav.certificates': { en: 'Certificates', id: 'Sertifikasi' },
  'nav.contact': { en: 'Contact', id: 'Kontak' },
  'nav.letsTalk': { en: "Let's Talk", id: 'Hubungi Saya' },

  // Hero
  'hero.available': { en: 'Available for work', id: 'Terbuka untuk Peluang Kerja' },
  'hero.titlePrefix': { en: 'Crafting ', id: 'Membangun ' },
  'hero.titleGradient': { en: 'Digital Solutions', id: 'Solusi Digital' },
  'hero.titleSuffix': { en: ' with Precision', id: ' dengan Presisi' },
  'hero.bio': {
    en: "Hi, I'm Faiq Misbah Yazdi. A passionate developer and designer with expertise in UI/UX design, data analysis, and programming. I create intuitive digital experiences that solve real-world problems.",
    id: 'Halo, saya Faiq Misbah Yazdi. Pengembang dan desainer berdedikasi dengan keahlian dalam desain UI/UX, analisis data, dan pemrograman. Saya menciptakan pengalaman digital intuitif yang memecahkan masalah nyata.',
  },
  'hero.viewCv': { en: 'View CV', id: 'Lihat CV' },
  'hero.contactMe': { en: 'Contact Me', id: 'Hubungi Saya' },
  'hero.portfolioPdf': { en: 'Portfolio PDF', id: 'Portofolio PDF' },
  'hero.certificates': { en: 'Certificates', id: 'Sertifikasi' },
  'hero.yearsExp': { en: 'Years Exp.', id: 'Tahun Pengalaman' },
  'hero.projectsCount': { en: 'Projects', id: 'Proyek' },
  'hero.currentStatus': { en: 'Current Status', id: 'Status Terkini' },
  'hero.coding': { en: 'Coding...', id: 'Sedang Ngoding...' },

  // Skills
  'skills.title': { en: 'My Expertise', id: 'Keahlian Saya' },
  'skills.desc': {
    en: 'Passionate about UI/UX design and data analysis, with strong programming skills. I blend creativity and analytics to build user-centered solutions that deliver measurable results.',
    id: 'Berdedikasi dalam desain UI/UX dan analisis data, didukung keterampilan pemrograman yang solid. Memadukan kreativitas dan analitika untuk membangun solusi yang berpusat pada pengguna serta memberikan hasil terukur.',
  },

  // Projects
  'projects.badge': { en: 'Portfolio', id: 'Portofolio' },
  'projects.title': { en: 'Featured Work', id: 'Karya Unggulan' },
  'projects.filterAll': { en: 'All', id: 'Semua' },
  'projects.quickView': { en: 'Quick View Details', id: 'Lihat Cepat' },
  'projects.viewDetails': { en: 'View Project Details', id: 'Lihat Detail Proyek' },
  'projects.visitLive': { en: 'Visit Live Project', id: 'Kunjungi Proyek' },
  'projects.figmaPrototype': { en: 'Figma Prototype & Design', id: 'Prototipe & Desain Figma' },
  'projects.githubRepo': { en: 'GitHub Repo', id: 'Repositori GitHub' },
  'projects.discussProject': { en: 'Discuss This Project', id: 'Diskusikan Proyek Ini' },
  'projects.businessQuestions': { en: 'Key Business Questions', id: 'Pertanyaan Bisnis Utama' },
  'projects.insights': { en: 'Key Insights & Discoveries', id: 'Wawasan & Temuan Utama' },
  'projects.methodology': { en: 'Methodology & Architecture', id: 'Metodologi & Arsitektur' },
  'projects.visualizations': { en: 'Visualizations & Findings', id: 'Visualisasi & Temuan' },
  'projects.tools': { en: 'Tools & Technologies', id: 'Alat & Teknologi' },
  'projects.openLive': { en: 'Open Live Application', id: 'Buka Aplikasi Langsung' },
  'projects.openFigma': { en: 'Open Figma Link', id: 'Buka Tautan Figma' },
  'projects.closeModal': { en: 'Close Case Study', id: 'Tutup Studi Kasus' },

  // Certifications
  'certs.badge': { en: 'Professional Development', id: 'Pengembangan Profesional' },
  'certs.title': { en: 'Certifications & Courses', id: 'Sertifikasi & Pelatihan' },
  'certs.subtitle': {
    en: 'Verified certifications and specialized training programs completed to continuously expand technical expertise in artificial intelligence, software engineering, product design, and cloud systems.',
    id: 'Sertifikasi resmi dan program pelatihan terspesialisasi yang telah diselesaikan untuk terus memperluas keahlian teknis dalam kecerdasan buatan, rekayasa perangkat lunak, desain produk, dan sistem cloud.',
  },
  'certs.all': { en: 'All', id: 'Semua' },
  'certs.filterCerts': { en: 'Certifications', id: 'Sertifikasi' },
  'certs.filterCourses': { en: 'Courses & Training', id: 'Pelatihan' },
  'certs.sectionCerts': { en: 'Official Certifications', id: 'Sertifikasi Resmi' },
  'certs.sectionCertsDesc': {
    en: 'Accredited credentials and standardized exams validating industry competencies and language proficiency',
    id: 'Kredensial terakreditasi dan ujian terstandar yang memvalidasi kompetensi industri dan kemahiran bahasa',
  },
  'certs.sectionCourses': { en: 'Professional Courses & Training', id: 'Program Pelatihan & Kursus' },
  'certs.sectionCoursesDesc': {
    en: 'Comprehensive curricula, technical workshops, and practical skill-building programs',
    id: 'Kurikulum komprehensif, workshop teknis, dan program peningkatan keterampilan praktis',
  },
  'certs.badgeCert': { en: 'Certification', id: 'Sertifikasi' },
  'certs.badgeCourse': { en: 'Course & Training', id: 'Pelatihan' },
  'certs.actionCert': { en: 'View Details & Credential', id: 'Lihat Detail & Sertifikat' },
  'certs.actionCourse': { en: 'View Details & Curriculum', id: 'Lihat Detail & Kurikulum' },
  'certs.modalCertBadge': { en: 'Official Certification', id: 'Sertifikasi Resmi' },
  'certs.modalCourseBadge': { en: 'Professional Training', id: 'Program Pelatihan' },
  'certs.viewCert': { en: 'View Official Certificate', id: 'Buka Sertifikat Resmi' },
  'certs.viewFolder': { en: 'Open Certificate Folder', id: 'Buka Folder Sertifikat' },
  'certs.issuerWebsite': { en: 'Issuer / Course Website', id: 'Website Resmi / Kursus' },
  'certs.credType': { en: 'Credential Type', id: 'Tipe Kredensial' },
  'certs.issuer': { en: 'Issuing Organization', id: 'Lembaga Penerbit' },
  'certs.curriculumScope': { en: 'Curriculum Scope', id: 'Cakupan Materi' },
  'certs.verifiedModules': { en: 'Verified Modules / Topics', id: 'Modul / Topik Terverifikasi' },
  'certs.curriculumTitle': { en: 'Curriculum & Key Competencies', id: 'Kurikulum & Kompetensi Utama' },
  'certs.modulesCount': { en: 'Modules', id: 'Modul' },
  'certs.footerCertDrive': { en: 'View Certificate (Google Drive)', id: 'Buka Sertifikat (Google Drive)' },
  'certs.footerFolderDrive': { en: 'View Certificate Folder (Google Drive)', id: 'Buka Folder Sertifikat (Google Drive)' },
  'certs.website': { en: 'Website', id: 'Website' },
  'certs.closeModal': { en: 'Close Details', id: 'Tutup Detail' },

  // Contact
  'contact.title': { en: "Let's Connect", id: 'Mari Terhubung' },
  'contact.subtitle': {
    en: "Have a project in mind or just want to say hi? Feel free to reach out directly or use the form. I'm always open to discussing new projects and creative ideas.",
    id: 'Punya ide proyek atau sekadar ingin menyapa? Jangan ragu untuk menghubungi langsung atau gunakan formulir di bawah. Saya selalu terbuka untuk mendiskusikan peluang proyek dan ide-ide kreatif baru.',
  },
  'contact.direct': { en: 'Direct Contact', id: 'Kontak Langsung' },
  'contact.directDesc': { en: 'Drop me an email or reach out via WhatsApp.', id: 'Kirim email atau hubungi langsung via WhatsApp.' },
  'contact.location': { en: 'Location', id: 'Lokasi' },
  'contact.locationValue': { en: 'Indonesia', id: 'Indonesia' },
  'contact.socials': { en: 'Socials', id: 'Media Sosial' },
  'contact.name': { en: 'Name', id: 'Nama' },
  'contact.namePlaceholder': { en: 'John Doe', id: 'Nama Anda' },
  'contact.email': { en: 'Email', id: 'Email' },
  'contact.subject': { en: 'Subject', id: 'Subjek' },
  'contact.subGeneral': { en: 'General Inquiry', id: 'Pertanyaan Umum' },
  'contact.subProposal': { en: 'Project Proposal', id: 'Penawaran Proyek' },
  'contact.subFreelance': { en: 'Freelance Opportunity', id: 'Peluang Freelance' },
  'contact.message': { en: 'Message', id: 'Pesan' },
  'contact.messagePlaceholder': { en: 'Tell me about your project...', id: 'Ceritakan tentang proyek Anda...' },
  'contact.success': {
    en: "Message sent successfully! I'll get back to you soon.",
    id: 'Pesan berhasil dikirim! Saya akan segera menghubungi Anda kembali.',
  },
  'contact.errorTitle': {
    en: 'EmailJS credentials are not yet active/connected.',
    id: 'Kredensial EmailJS belum aktif/terhubung.',
  },
  'contact.errorDesc': {
    en: 'Don’t worry! You can still reach me directly via email or WhatsApp using the buttons below:',
    id: 'Jangan khawatir! Anda tetap bisa mengirimkan pesan langsung ke email atau WhatsApp saya melalui tombol berikut:',
  },
  'contact.sendViaEmail': { en: 'Send via Email App', id: 'Kirim via Aplikasi Email' },
  'contact.sendViaWa': { en: 'Send via WhatsApp', id: 'Kirim via WhatsApp' },
  'contact.sending': { en: 'Sending...', id: 'Mengirim...' },
  'contact.send': { en: 'Send Message', id: 'Kirim Pesan' },

  // Footer
  'footer.rights': { en: '© 2026 FaiqDev Portfolio. All rights reserved.', id: '© 2026 Portofolio FaiqDev. Hak cipta dilindungi undang-undang.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('faiqdev_lang') as Language;
      if (saved === 'en' || saved === 'id') {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('faiqdev_lang', lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

