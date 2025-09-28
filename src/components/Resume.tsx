import {
  Download,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mon{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              CV
            </span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto mb-8">
            Découvrez mon parcours professionnel et académique
          </p>

          {/* Call to action principal */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Intéressé par mon profil ?
            </h3>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto">
              <Download className="h-5 w-5" />
              <span>Télécharger mon CV</span>
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-8">
          {/* Header du CV */}
          <div className="text-center border-b border-white/20 pb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Mohamed DAOUD MOHAMED
            </h1>
            <p className="text-xl text-orange-200 mb-4">
              Développeur Full Stack
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-orange-100">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-300" />
                <span className="text-sm">mohameddaoudmed@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-300" />
                <span className="text-sm">+33 07 49 09 22 19</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-300" />
                <span className="text-sm">38 Rue du chemins, 93240 STAINS</span>
              </div>
            </div>
          </div>

          {/* Profil */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <User className="h-6 w-6 text-orange-300" />
              <h3 className="text-xl font-bold text-white">PROFIL</h3>
            </div>
            <p className="text-orange-100 leading-relaxed">
              Étudiant en Master 1 Informatique à l'Université Sorbonne Paris
              Nord, je suis à la recherche d'un stage de 3 mois dans le domaine
              du développement web. Mes compétences techniques et mon expérience
              solide me motivent à relever de nouveaux défis et à contribuer
              activement aux projets. Ambitieux et passionné, je souhaite mettre
              mon enthousiasme et mon engagement au service d'une équipe pour
              contribuer à son succès.
            </p>
          </div>

          {/* Expériences */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="h-6 w-6 text-orange-300" />
              <h3 className="text-xl font-bold text-white">
                EXPÉRIENCES PROFESSIONNELLES
              </h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-orange-400 pl-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-orange-300" />
                  <span className="text-orange-200 font-medium">
                    04/2021 - 07/2021
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  Développeur Web
                </h4>
                <p className="text-orange-200 mb-3">Al-Gamil - Djibouti</p>
                <ul className="text-orange-100 text-sm space-y-1">
                  <li>
                    • Développement d'applications web en utilisant HTML, CSS et
                    JavaScript
                  </li>
                  <li>
                    • Conception et développement de l'interface utilisateur
                  </li>
                  <li>• Développement d'interfaces web, front et back</li>
                  <li>• Mise en place de tests unitaires et d'intégration</li>
                  <li>
                    • Optimisation du code existant pour améliorer la
                    performance
                  </li>
                  <li>• Intégration d'APIs externes dans les projets web</li>
                </ul>
              </div>

              <div className="border-l-2 border-orange-400 pl-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-orange-300" />
                  <span className="text-orange-200 font-medium">
                    11/2020 - 02/2021
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  Développeur Web
                </h4>
                <p className="text-orange-200 mb-3">
                  Wilo-Technologie - Djibouti
                </p>
                <ul className="text-orange-100 text-sm space-y-1">
                  <li>
                    • Création de sites web dynamiques en utilisant HTML, CSS et
                    JavaScript
                  </li>
                  <li>
                    • Intégration de bases de données SQL pour le stockage des
                    données
                  </li>
                  <li>• Mise en place de bases de données relationnelles</li>
                  <li>
                    • Contrôle du bon fonctionnement du site web et de la
                    qualité de navigation
                  </li>
                  <li>
                    • Développement de fonctionnalités avec solutions techniques
                    innovantes
                  </li>
                  <li>
                    • Optimisation du code existant pour améliorer la
                    performance
                  </li>
                  <li>• Collaboration étroite avec les équipes commerciales</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formation */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="h-6 w-6 text-orange-300" />
              <h3 className="text-xl font-bold text-white">FORMATION</h3>
            </div>

            <div className="border-l-2 border-orange-400 pl-6">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-4 w-4 text-orange-300" />
                <span className="text-orange-200 font-medium">2024 - 2025</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">
                Master 1 Informatique
              </h4>
              <p className="text-orange-200">Université Sorbonne Paris Nord</p>
            </div>
          </div>

          {/* Compétences */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Code className="h-6 w-6 text-orange-300" />
              <h3 className="text-xl font-bold text-white">
                COMPÉTENCES TECHNIQUES
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-orange-200 font-medium mb-2">
                  Langages & Frameworks
                </h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML/CSS",
                    "JavaScript",
                    "React",
                    "Angular",
                    "Node.js",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-orange-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-orange-200 font-medium mb-2">
                  Technologies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MongoDB",
                    "SQL",
                    "Microsoft Azure",
                    "AR/VR",
                    "Mobile Dev",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-orange-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bouton de téléchargement en bas */}
          <div className="text-center pt-8 border-t border-white/20">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto">
              <Download className="h-5 w-5" />
              <span>Télécharger la version PDF</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
