import {
  ArrowLeft,
  ExternalLink,
  Github,
  Users,
  Bell,
  Shield,
  Zap,
  CheckCircle2,
  Calendar,
} from "lucide-react";

interface TaskManagementAppProps {
  onBack: () => void;
}

const TaskManagementApp = ({ onBack }: TaskManagementAppProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-800 to-green-900">
      {/* Header avec bouton retour */}
      <div className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-green-200 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour aux projets</span>
          </button>

          {/* Titre principal */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Task Management
              <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                App
              </span>
            </h1>
            <p className="text-xl text-green-200 max-w-3xl mx-auto leading-relaxed">
              Application web de gestion de tâches avec collaboration en temps
              réel, notifications et interface moderne
            </p>
          </div>
        </div>
      </div>

      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Boutons d'action principaux */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://demo-taskmanager.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
          >
            <ExternalLink className="h-6 w-6" />
            <span>Voir la Démo</span>
          </a>

          <a
            href="https://github.com/ESIC775/task-manager"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
          >
            <Github className="h-6 w-6" />
            <span>Code Source</span>
          </a>
        </div>

        {/* Stack technique */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Stack Technique
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">React</span>
              </div>
              <p className="text-green-200 font-medium">React + TypeScript</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">CSS</span>
              </div>
              <p className="text-green-200 font-medium">TailwindCSS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">🔥</span>
              </div>
              <p className="text-green-200 font-medium">Firebase</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">▲</span>
              </div>
              <p className="text-green-200 font-medium">Vercel</p>
            </div>
          </div>
        </div>

        {/* Fonctionnalités principales */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Fonctionnalités Principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Authentification
              </h3>
              <p className="text-green-200 text-sm leading-relaxed">
                Système d'inscription et de connexion sécurisé via Firebase Auth
                avec gestion des sessions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Gestion des Tâches
              </h3>
              <p className="text-green-200 text-sm leading-relaxed">
                Création, attribution et organisation des tâches avec listes,
                statuts et priorités.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Temps Réel</h3>
              <p className="text-green-200 text-sm leading-relaxed">
                Collaboration en temps réel avec mise à jour instantanée entre
                tous les utilisateurs.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Notifications
              </h3>
              <p className="text-green-200 text-sm leading-relaxed">
                Notifications push et in-app pour les nouvelles tâches,
                assignations et commentaires.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Collaboration
              </h3>
              <p className="text-green-200 text-sm leading-relaxed">
                Gestion des équipes avec assignation de tâches et suivi des
                membres du projet.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
              <p className="text-green-200 text-sm leading-relaxed">
                Vue calendrier et timeline pour planifier et suivre l'avancement
                des projets.
              </p>
            </div>
          </div>
        </div>

        {/* Description détaillée */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            À Propos du Projet
          </h2>
          <div className="text-green-200 leading-relaxed space-y-4">
            <p>
              <strong className="text-white">Task Management App</strong> est
              une application de gestion de tâches collaborative conçue pour les
              équipes modernes. Elle offre une solution complète pour organiser,
              suivre et collaborer sur des projets en temps réel.
            </p>
            <p>
              L'application propose une interface moderne et intuitive
              construite avec React et TypeScript, stylisée avec TailwindCSS
              pour une expérience utilisateur optimale sur tous les appareils.
            </p>
            <p>
              Le backend utilise Firebase pour la synchronisation temps réel,
              l'authentification sécurisée et le stockage des données,
              garantissant une performance et une fiabilité exceptionnelles.
            </p>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Prêt à découvrir l'application ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://demo-taskmanager.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Essayer la Démo</span>
            </a>

            <a
              href="https://github.com/ESIC775/task-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
            >
              <Github className="h-5 w-5" />
              <span>Voir le Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagementApp;
