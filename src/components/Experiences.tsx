import React from 'react';
import { Calendar, MapPin, Code, Database, Globe, TestTube, Zap, Users } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      title: "Développeur Web",
      period: "04/2021 - 07/2021",
      company: "Al-Gamil",
      location: "Djibouti",
      tasks: [
        "Développement d'applications web en utilisant HTML et CSS et JavaScript",
        "Concevoir et développer l'interface utilisateur",
        "Développement d'interfaces web, front et back",
        "Mise en place de tests unitaires et d'intégration pour garantir le bon fonctionnement du code",
        "Optimisation du code existant pour améliorer la performance et la convivialité des applications web",
        "Intégration d'APIs externes dans les projets web"
      ],
      icon: Code
    },
    {
      title: "Développeur Web",
      period: "11/2020 - 02/2021",
      company: "Wilo-Technologie",
      location: "Djibouti",
      tasks: [
        "Création de sites web dynamiques en utilisant HTML, CSS et JavaScript",
        "Intégration de bases de données SQL pour le stockage des données",
        "Mettre en place des bases des données relationnelle",
        "Contrôle du bon fonctionnement du site web et de la qualité de navigation",
        "Développement des fonctionnalités d'une application en apportant les solutions techniques innovantes correspondant aux besoins du client",
        "Optimisation du code existant pour améliorer la performance des applications web développées",
        "Collaboration étroite avec les équipes commerciales pour identifier les besoins clients et proposer des solutions adaptées"
      ],
      icon: Globe
    }
  ];

  const getTaskIcon = (task: string) => {
    if (task.includes('base') || task.includes('SQL')) return Database;
    if (task.includes('test')) return TestTube;
    if (task.includes('performance') || task.includes('Optimisation')) return Zap;
    if (task.includes('équipes') || task.includes('client')) return Users;
    return Code;
  };

  return (
    <section id="experiences" className="py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Expériences</span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Mon parcours professionnel dans le développement web
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icône et infos principales */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                    <exp.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center space-x-2 text-orange-200">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-orange-200">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.company} - {exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Tâches */}
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-4">Missions réalisées :</h4>
                  <div className="grid gap-3">
                    {exp.tasks.map((task, taskIndex) => {
                      const TaskIcon = getTaskIcon(task);
                      return (
                        <div key={taskIndex} className="flex items-start space-x-3 group">
                          <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                            <TaskIcon className="h-4 w-4 text-orange-300" />
                          </div>
                          <p className="text-orange-100 text-sm leading-relaxed flex-1">{task}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;