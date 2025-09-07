import React from "react";
import {
  ExternalLink,
  Github,
  Code,
  Globe,
  Database,
  Smartphone,
} from "lucide-react";

interface ProjetsProps {
  onProjectSelect?: (project: string) => void;
}

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  icon: React.ElementType;
  color: string;
  isDemo: boolean;
};

const Projets = ({ onProjectSelect }: ProjetsProps) => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "Plateforme e-commerce complète avec panier, paiement et gestion des commandes",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "ecommerce-demo",
      githubUrl: "https://github.com/ESIC775/portfolio-website",
      icon: Globe,
      color: "from-blue-500 to-purple-600",
      isDemo: true,
    },
    {
      title: "Task Management App",
      description:
        "Application de gestion de tâches avec collaboration en temps réel et notifications",
      technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo-taskmanager.example.com",
      githubUrl: "https://github.com/mohamedchehem/task-manager",
      icon: Code,
      color: "from-green-500 to-teal-600",
      isDemo: false,
    },
    {
      title: "Restaurant Mobile App",
      description:
        "Application mobile pour restaurant avec commande en ligne et système de réservation",
      technologies: ["React Native", "Express.js", "PostgreSQL", "Redux"],
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo-restaurant.example.com",
      githubUrl: "https://github.com/mohamedchehem/restaurant-app",
      icon: Smartphone,
      color: "from-orange-500 to-red-600",
      isDemo: false,
    },
    {
      title: "Portfolio Website",
      description:
        "Site portfolio personnel moderne avec animations et design responsive",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo-portfolio.example.com",
      githubUrl: "https://github.com/mohamedchehem/portfolio-website",
      icon: Code,
      color: "from-purple-500 to-indigo-600",
      isDemo: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "Tableau de bord météo avec prévisions détaillées et géolocalisation",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Vuetify"],
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo-weather.example.com",
      githubUrl: "https://github.com/mohamedchehem/weather-dashboard",
      icon: Database,
      color: "from-cyan-500 to-blue-600",
      isDemo: false,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Tableau de bord pour gérer plusieurs comptes de réseaux sociaux avec analytics et programmation de posts",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo-social.example.com",
      githubUrl: "https://github.com/mohamedchehem/social-dashboard",
      icon: Globe,
      color: "from-pink-500 to-rose-600",
      isDemo: false,
    },
  ];

  const handleDemoClick = (project: Project) => {
    if (project.isDemo && onProjectSelect) {
      onProjectSelect(project.demoUrl);
    } else {
      window.open(project.demoUrl, "_blank");
    }
  };

  return (
    <section
      id="projets"
      className="py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Découvrez mes réalisations et projets développés avec passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group"
            >
              {/* Image du projet */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div
                  className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}
                >
                  <project.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Contenu du projet */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-orange-100 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-orange-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Boutons d'action */}
                <div className="flex space-x-3">
                  <a
                    onClick={() => handleDemoClick(project)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Démo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-orange-200 mb-6">Vous avez un projet en tête ?</p>
          <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <span className="text-white font-semibold">Contactez-moi</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projets;
