import React from 'react';
import { Code, Database, Globe, Wrench, FileText, Layers, Server, Zap, Shield, Cloud, Smartphone, Eye } from 'lucide-react';

const Competences = () => {
  const competenceCategories = [
    {
      title: "Microsoft Office",
      icon: FileText,
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Excel", icon: FileText },
        { name: "PowerPoint", icon: FileText },
        { name: "Word", icon: FileText }
      ]
    },
    {
      title: "Programmation",
      icon: Code,
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Java", icon: Code },
        { name: "Python", icon: Code },
        { name: "C#", icon: Code }
      ]
    },
    {
      title: "Programmation Web",
      icon: Globe,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Globe },
        { name: "JavaScript", icon: Globe }
      ]
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "React.js", icon: Layers },
        { name: "Node.js", icon: Server },
        { name: "Spring Boot", icon: Layers }
      ]
    },
    {
      title: "Bases de Données",
      icon: Database,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "SQL", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "NoSQL", icon: Database }
      ]
    },
    {
      title: "Modélisation Logicielle",
      icon: Wrench,
      color: "from-teal-500 to-cyan-600",
      skills: [
        { name: "UML", icon: Wrench },
        { name: "Merise", icon: Wrench }
      ]
    },
    {
      title: "Outils de Développement",
      icon: Wrench,
      color: "from-yellow-500 to-orange-600",
      skills: [
        { name: "Eclipse", icon: Wrench },
        { name: "Visual Studio Code", icon: Wrench },
        { name: "Git", icon: Wrench },
        { name: "GitLab (CI/CD)", icon: Wrench }
      ]
    },
    {
      title: "Technologies Avancées",
      icon: Zap,
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "Microsoft Azure", icon: Cloud },
        { name: "Développement Mobile", icon: Smartphone },
        { name: "AR/VR", icon: Eye }
      ]
    }
  ];


  return (
    <section id="competences" className="py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Compétences</span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Découvrez mes compétences techniques et mon niveau de maîtrise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {competenceCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
              {/* Header de la catégorie */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Liste des compétences */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <skill.icon className="h-4 w-4 text-orange-300" />
                    </div>
                    <span className="text-orange-100 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statistiques globales */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">6</h4>
            <p className="text-orange-200">Langages</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">3</h4>
            <p className="text-orange-200">Frameworks</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">3</h4>
            <p className="text-orange-200">Bases de données</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">6</h4>
            <p className="text-orange-200">Outils</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-orange-200 mb-6">Intéressé par mes compétences ?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Voir mes projets
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <span className="text-white font-semibold">Me contacter</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;