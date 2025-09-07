import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Contenu from './components/Contenu';
import Experiences from './components/Experiences';
import Projets from './components/Projets';
import Apropos from './components/Apropos';
import Resume from './components/Resume';
import Formations from './components/Formations';
import Competences from './components/Competences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ECommerce from './components/ECommerce';

function App() {
  const [currentSection, setCurrentSection] = useState('accueil');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    setSelectedProject(null);
  };

  const handleProjectSelect = (project: string) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setCurrentSection('projets');
  };

  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      setCurrentSection(event.detail);
    };

    window.addEventListener('navigate', handleNavigate as EventListener);

    return () => {
      window.removeEventListener('navigate', handleNavigate as EventListener);
    };
  }, []);

  // Si un projet est sélectionné, afficher le projet
  if (selectedProject === 'ecommerce-demo') {
    return (
      <div className="min-h-screen">
        <Header onSectionChange={handleSectionChange} />
        <ECommerce onBack={handleBackToProjects} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onSectionChange={handleSectionChange} />
      
      {currentSection === 'accueil' && <Contenu />}
      {currentSection === 'experiences' && <Experiences />}
      {currentSection === 'projets' && <Projets onProjectSelect={handleProjectSelect} />}
      {currentSection === 'apropos' && <Apropos />}
      {currentSection === 'resume' && <Resume />}
      {currentSection === 'formations' && <Formations />}
      {currentSection === 'competences' && <Competences />}
      {currentSection === 'contact' && <Contact />}
      
      <Footer />
    </div>
  );
}

export default App;