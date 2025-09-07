import React from 'react';
import { User, GraduationCap, Code, Smartphone, Cloud, Eye, Heart, Target, Award } from 'lucide-react';

const Apropos = () => {
  const skills = [
    { name: "HTML/CSS/JavaScript", icon: Code, color: "from-yellow-400 to-orange-500" },
    { name: "Angular & React", icon: Code, color: "from-blue-400 to-purple-500" },
    { name: "Développement Mobile", icon: Smartphone, color: "from-green-400 to-teal-500" },
    { name: "Microsoft Azure", icon: Cloud, color: "from-cyan-400 to-blue-500" },
    { name: "Réalité Augmentée/Virtuelle", icon: Eye, color: "from-purple-400 to-pink-500" }
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Propos de Moi</span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Découvrez mon parcours, mes passions et mes ambitions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image et informations principales */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Mohamed DAOUD MOHAMED</h3>
                  <p className="text-orange-200">Étudiant en Master 1 Informatique</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-orange-100 mb-4">
                <GraduationCap className="h-5 w-5 text-orange-300" />
                <span>Université Sorbonne Paris Nord</span>
              </div>
              
              <div className="flex items-center space-x-3 text-orange-100">
                <Target className="h-5 w-5 text-orange-300" />
                <span>Recherche de stage de 6 mois en développement web</span>
              </div>
            </div>

            {/* Compétences techniques */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <Award className="h-6 w-6 text-orange-300" />
                <span>Compétences Techniques</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-orange-100 text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-6 w-6 text-red-400" />
                <h4 className="text-xl font-bold text-white">Ma Passion</h4>
              </div>
              <p className="text-orange-100 leading-relaxed mb-4">
                Mon parcours académique et mes passions m'ont permis de développer des compétences variées, à la croisée de l'informatique et des nouvelles technologies. Étudiant en Master 1 Informatique à l'Université Sorbonne Paris Nord, je suis à la recherche d'un stage de 6 mois dans le domaine du développement web.
              </p>
              <p className="text-orange-100 leading-relaxed">
                Mes compétences techniques et mon expérience solide me motivent à relever de nouveaux défis et à contribuer activement aux projets. Ambitieux et passionné, je souhaite mettre mon enthousiasme et mon engagement au service d'une équipe pour contribuer à son succès.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="h-6 w-6 text-blue-400" />
                <h4 className="text-xl font-bold text-white">Mon Parcours</h4>
              </div>
              <p className="text-orange-100 leading-relaxed mb-4">
                Ma passion pour l'informatique a émergé dès mes années de lycée, et elle n'a cessé de grandir au fil de mes études universitaires. J'ai acquis une solide expérience en programmation, notamment avec des langages comme HTML, CSS et JavaScript.
              </p>
              <p className="text-orange-100 leading-relaxed mb-4">
                J'ai également eu l'opportunité de travailler avec des frameworks modernes tels qu'Angular et React, dans le cadre de projets académiques et professionnels.
              </p>
              <p className="text-orange-100 leading-relaxed">
                Au cours de mon Master, j'ai approfondi mes compétences en développement mobile tout en découvrant les bases de la réalité augmentée et virtuelle. Mon expertise inclut aussi des connaissances en cloud computing, ayant travaillé avec Microsoft Azure pour concevoir et déployer des solutions innovantes.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-orange-200 mb-6">Intéressé par mon profil ?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Télécharger mon CV
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <span className="text-white font-semibold">Me Contacter</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;