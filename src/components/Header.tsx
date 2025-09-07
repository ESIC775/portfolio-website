import React, { useState } from 'react';
import { Menu, X, User, Briefcase, FolderOpen, Info, Award, Mail, GraduationCap, FileText } from 'lucide-react';

interface HeaderProps {
  onSectionChange: (section: string) => void;
}

const Header = ({ onSectionChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    const section = href.replace('#', '');
    onSectionChange(section);
    closeMenu();
  };

  const navItems = [
    { name: 'Expériences', href: '#experiences', icon: Briefcase },
    { name: 'Projets', href: '#projets', icon: FolderOpen },
    { name: 'Formations', href: '#formations', icon: GraduationCap },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'À propos', href: '#apropos', icon: Info },
    { name: 'Compétences', href: '#competences', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <header className="bg-gradient-to-r from-orange-900/95 via-red-900/95 to-pink-900/95 backdrop-blur-sm shadow-lg border-b border-orange-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - responsive sur toutes les tailles */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onSectionChange('accueil')}
              className="text-xl sm:text-2xl font-bold text-orange-100 tracking-tight bg-gradient-to-r from-orange-300 via-red-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              PORTFOLIO
            </button>
          </div>

          {/* Navigation Desktop - cachée sur mobile et tablette */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-orange-100 hover:text-orange-300 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-orange-800/50 rounded-lg relative group flex items-center space-x-2"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Bouton menu mobile/tablette - visible sur mobile et tablette */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-orange-100 hover:text-orange-300 p-2 rounded-lg hover:bg-orange-800/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile/tablette - dropdown */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <nav className="py-4 space-y-2 border-t border-orange-700/50 mt-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center space-x-3 text-orange-100 hover:text-orange-300 hover:bg-orange-800/50 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg mx-2 border-l-2 border-transparent hover:border-orange-400"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;