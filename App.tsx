import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#f4fbf7] to-[#ebf7f3] text-slate-900 font-sans selection:bg-emerald-600 selection:text-white overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center w-full overflow-hidden">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;