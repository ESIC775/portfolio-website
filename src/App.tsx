import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Contenu from "./components/Contenu";
import Experiences from "./components/Experiences";
import Projets from "./components/Projets";
import Apropos from "./components/Apropos";
import Resume from "./components/Resume";
import Formations from "./components/Formations";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ECommerce from "./components/ECommerce";
import TaskManagementApp from "./components/TaskManagementApp";
import Loading from "./components/loading";

function App() {
  const [currentSection, setCurrentSection] = useState("accueil");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSectionChange = (section: string) => {
    // Si on clique sur projets ou accueil, montrer le loading
    if (section === "projets" || section === "accueil") {
      setIsLoading(true);

      setTimeout(() => {
        setCurrentSection(section);
        setSelectedProject(null);
        setIsLoading(false);
      }, 100); // 0.1 seconde
    } else {
      setCurrentSection(section);
      setSelectedProject(null);
    }
  };

  const handleProjectSelect = (project: string) => {
    setIsLoading(true);

    setTimeout(() => {
      setSelectedProject(project);
      setIsLoading(false);
    }, 100); // 0.1 seconde
  };

  const handleBackToProjects = () => {
    setIsLoading(true);

    setTimeout(() => {
      setSelectedProject(null);
      setCurrentSection("projets");
      setIsLoading(false);
    }, 100); // 0.1 seconde
  };

  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      setCurrentSection(event.detail);
    };

    window.addEventListener("navigate", handleNavigate as EventListener);

    return () => {
      window.removeEventListener("navigate", handleNavigate as EventListener);
    };
  }, []);

  // Afficher le loading
  if (isLoading) {
    return <Loading />;
  }

  // Si un projet est sélectionné, afficher le projet
  if (selectedProject === "ecommerce-demo") {
    return (
      <div className="min-h-screen">
        <Header onSectionChange={handleSectionChange} />
        <ECommerce onBack={handleBackToProjects} />
        <Footer />
      </div>
    );
  }

  if (selectedProject === "task-management-demo") {
    return (
      <div className="min-h-screen">
        <Header onSectionChange={handleSectionChange} />
        <TaskManagementApp onBack={handleBackToProjects} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onSectionChange={handleSectionChange} />

      {currentSection === "accueil" && <Contenu />}
      {currentSection === "experiences" && <Experiences />}
      {currentSection === "projets" && (
        <Projets onProjectSelect={handleProjectSelect} />
      )}
      {currentSection === "apropos" && <Apropos />}
      {currentSection === "resume" && <Resume />}
      {currentSection === "formations" && <Formations />}
      {currentSection === "competences" && <Competences />}
      {currentSection === "contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
