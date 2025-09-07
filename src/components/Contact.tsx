import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Github, Linkedin, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Me <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Contacter</span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Mes Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-orange-200">mohameddaoudmed@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Téléphone</h4>
                    <p className="text-orange-200">+33 07 49 09 22 19</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Adresse</h4>
                    <p className="text-orange-200">38 Rue du chemins<br />93240 STAINS, France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Suivez-moi</h3>
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
                  <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
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
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Disponibilité</h3>
              <p className="text-orange-200 mb-4">
                Actuellement à la recherche d'un stage de 6 mois en développement web
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-medium">Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-orange-200 font-medium mb-2">
                  Nom complet
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-300" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-orange-200 font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-300" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-orange-200 font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-orange-200 font-medium mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-orange-300" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                    placeholder="Votre message..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <Send className="h-5 w-5" />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Prêt à collaborer ?</h3>
            <p className="text-orange-200 mb-6">
              Je suis toujours ouvert aux nouvelles opportunités et aux projets intéressants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:mohameddaoudmed@gmail.com"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Envoyer un email</span>
              </a>
              <a 
                href="tel:+33749092219"
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Appeler</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;