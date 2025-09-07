import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Code, Shield } from 'lucide-react';

const Formations = () => {
  const formations = [
    {
      title: "Master 1 Informatique",
      period: "2024/2025",
      institution: "Université Sorbonne Paris Nord",
      location: "France",
      level: "Bac+4",
      description: "Formation approfondie en informatique avec spécialisation en développement et nouvelles technologies",
      skills: ["Développement Web", "Mobile", "Cloud Computing", "AR/VR"],
      icon: Code,
      color: "from-blue-500 to-purple-600",
      status: "En cours"
    },
    {
      title: "Licence Informatique",
      period: "2020/2021",
      institution: "Université de Djibouti",
      location: "Djibouti",
      level: "Bac+3",
      description: "Formation fondamentale en informatique couvrant les bases de la programmation et des systèmes",
      skills: ["Programmation", "Bases de données", "Réseaux", "Algorithmique"],
      icon: BookOpen,
      color: "from-green-500 to-teal-600",
      status: "Obtenu"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'À venir': return 'text-orange-300 bg-orange-500/20';
      case 'En cours': return 'text-blue-300 bg-blue-500/20';
      case 'Obtenu': return 'text-green-300 bg-green-500/20';
      default: return 'text-gray-300 bg-gray-500/20';
    }
  };

  return (
    <section id="formations" className="py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Formations</span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Mon parcours académique en informatique et nouvelles technologies
          </p>
        </div>

        {/* Timeline des formations */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-red-400 to-pink-400 hidden md:block"></div>

          <div className="space-y-12">
            {formations.map((formation, index) => (
              <div key={index} className="relative">
                {/* Point sur la timeline */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full border-4 border-orange-900 hidden md:block"></div>

                {/* Contenu de la formation */}
                <div className="md:ml-20">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      
                      {/* Icône et infos principales */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 bg-gradient-to-r ${formation.color} rounded-xl flex items-center justify-center mb-4`}>
                          <formation.icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(formation.status)}`}>
                              {formation.status}
                            </span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-orange-200 font-medium">
                              {formation.level}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-orange-200">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{formation.period}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-orange-200">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm font-medium">{formation.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Détails de la formation */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{formation.title}</h3>
                        <div className="flex items-center space-x-2 text-orange-200 mb-4">
                          <GraduationCap className="h-5 w-5" />
                          <span className="font-medium">{formation.institution}</span>
                        </div>
                        
                        <p className="text-orange-100 mb-6 leading-relaxed">{formation.description}</p>

                        {/* Compétences acquises */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                            <Award className="h-5 w-5 text-orange-300" />
                            <span>Compétences acquises</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {formation.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-orange-200 font-medium hover:bg-white/20 transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">2</h4>
            <p className="text-orange-200">Diplômes</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">5</h4>
            <p className="text-orange-200">Années d'études</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">2</h4>
            <p className="text-orange-200">Universités</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-orange-200 mb-6">Découvrez mon parcours complet</p>
          <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <span className="text-white font-semibold">Télécharger mon CV</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Formations;