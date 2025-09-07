import React from 'react';
import { Code, Palette, Database, Globe, Layers, Server, Zap, FileText, Leaf, Clock } from 'lucide-react';

const Contenu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-800 to-pink-900">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image à gauche */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <img 
              src="https://uploads.teachablecdn.com/attachments/9rAtrfWYQnK0R6upBMrj_one.png" 
              alt="Logo"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain"
            />
          </div>

          {/* Contenu à droite */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Mohamed
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Daoud
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-200 mb-8 font-light">
              Développeur Full Stack 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => {
                  const event = new CustomEvent('navigate', { detail: 'projets' });
                  window.dispatchEvent(event);
                }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-white font-semibold">Mes Projets</span>
              </button>
              <button 
                onClick={() => {
                  const event = new CustomEvent('navigate', { detail: 'contact' });
                  window.dispatchEvent(event);
                }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-white font-semibold">Contactez-moi</span>
              </button>
            </div>
            </div>
            
            {/* Technologies */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-orange-200 mb-6 text-center lg:text-left">
                Technologies Maîtrisées
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Layers className="h-6 w-6 text-blue-400" />
                  </div>
                  <span className="text-xs text-orange-200 mt-2 font-medium">React JS</span>
                </div>
                
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Server className="h-6 w-6 text-green-400" />
                  </div>
                  <span className="text-xs text-orange-200 mt-2 font-medium">Node JS</span>
                </div>
                
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs text-orange-200 mt-2 font-medium">Next JS</span>
                </div>
                
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <FileText className="h-6 w-6 text-yellow-400" />
                  </div>
                  <span className="text-xs text-orange-200 mt-2 font-medium">JavaScript</span>
                </div>
                
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Leaf className="h-6 w-6 text-green-500" />
                  </div>
                  <span className="text-xs text-orange-200 mt-2 font-medium">MongoDB</span>
                </div>
                
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-xs text-orange-200 mt-2 font-medium">Récents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contenu;