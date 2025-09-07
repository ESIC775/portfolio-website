import React from 'react';
import { Github, Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-800/90 via-red-800/90 to-pink-800/90 backdrop-blur-sm border-t border-orange-600/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Section Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">MES RÉSEAUX</h3>
            <p className="text-orange-100 mb-4">N'hésitez pas à me contacter sur</p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-orange-100">
                <MapPin className="h-5 w-5 text-orange-300" />
                <span>38 Rue du chemins,<br />93240 STAINS</span>
              </div>
              
              <div className="flex items-center space-x-3 text-orange-100">
                <Phone className="h-5 w-5 text-orange-300" />
                <span>+33 07 49 09 22 19</span>
              </div>
              
              <div className="flex items-center space-x-3 text-orange-100">
                <Mail className="h-5 w-5 text-orange-300" />
                <span>mohameddaoudmed@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Section Réseaux Sociaux */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Suivez-moi</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ESIC775/portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl flex items-center justify-center hover:bg-white/25 transition-all duration-300 group hover:scale-110"
              >
                <Github className="h-6 w-6 text-white group-hover:text-orange-200" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl flex items-center justify-center hover:bg-white/25 transition-all duration-300 group hover:scale-110"
              >
                <Facebook className="h-6 w-6 text-blue-300 group-hover:text-blue-200" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl flex items-center justify-center hover:bg-white/25 transition-all duration-300 group hover:scale-110"
              >
                <Twitter className="h-6 w-6 text-sky-300 group-hover:text-sky-200" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl flex items-center justify-center hover:bg-white/25 transition-all duration-300 group hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
              </a>
            </div>
          </div>

          {/* Section vide pour l'équilibrage sur desktop */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-600/50 mt-8 pt-8 text-center">
          <p className="text-orange-100 text-sm">
            Developed by <span className="font-semibold text-white">DAOUD Mohamed</span>
          </p>
          <p className="text-white text-sm mt-1">
            Copyright © 2025 DAOUD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;