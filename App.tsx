import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background-dark text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden min-h-screen">
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