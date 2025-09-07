# Guide de Contribution - Portfolio Mohamed DAOUD MOHAMED

Merci de votre intérêt pour contribuer à ce projet ! Ce guide vous aidera à contribuer efficacement.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ et npm
- Git
- Un éditeur de code (VS Code recommandé)
- Connaissance de base en React/TypeScript

### Installation
```bash
# 1. Fork le projet sur GitHub
# 2. Clonez votre fork
git clone https://github.com/ESIC775/portfolio-website.git
cd portfolio-website

# 3. Installez les dépendances
npm install

# 4. Lancez le serveur de développement
npm run dev

# 5. Ouvrez http://localhost:5173
```

## 📋 Types de Contributions

### 🐛 Corrections de Bugs
- Corrigez les bugs existants
- Améliorez la compatibilité navigateur
- Optimisez les performances

### ✨ Nouvelles Fonctionnalités
- Nouvelles sections du portfolio
- Améliorations de l'e-commerce
- Nouvelles animations/interactions

### 📚 Documentation
- Améliorez le README
- Ajoutez des commentaires au code
- Créez des guides d'utilisation

### 🎨 Design & UX
- Améliorez l'interface utilisateur
- Optimisez l'expérience mobile
- Ajoutez des animations

## 🔄 Processus de Contribution

### 1. Préparation
```bash
# Créez une branche pour votre contribution
git checkout -b type/description-courte

# Exemples :
git checkout -b feat/nouvelle-section-blog
git checkout -b fix/responsive-mobile
git checkout -b docs/ameliorer-readme
```

### 2. Développement
```bash
# Développez votre fonctionnalité
# Testez localement avec :
npm run dev

# Vérifiez le linting :
npm run lint

# Buildez pour vérifier :
npm run build
```

### 3. Tests
- Testez sur différentes tailles d'écran
- Vérifiez la compatibilité navigateur
- Testez les fonctionnalités e-commerce
- Validez l'accessibilité

### 4. Commit
```bash
# Ajoutez vos fichiers
git add .

# Commit avec message descriptif
git commit -m "feat: ajouter section blog avec pagination"

# Push vers votre fork
git push origin feat/nouvelle-section-blog
```

### 5. Pull Request
1. Allez sur GitHub
2. Cliquez "New Pull Request"
3. Remplissez le template de PR
4. Attendez la review

## 📝 Standards de Code

### Structure des Fichiers
```
src/
├── components/          # Composants React
│   ├── ui/             # Composants UI réutilisables
│   ├── sections/       # Sections du portfolio
│   └── ecommerce/      # Composants e-commerce
├── hooks/              # Hooks personnalisés
├── utils/              # Fonctions utilitaires
├── types/              # Types TypeScript
└── assets/             # Images, fonts, etc.
```

### Conventions de Nommage
```typescript
// Composants : PascalCase
const MonComposant = () => { ... }

// Fichiers : PascalCase pour composants
MonComposant.tsx
monUtilitaire.ts

// Variables/fonctions : camelCase
const maVariable = "valeur"
const maFonction = () => { ... }

// Constantes : UPPER_SNAKE_CASE
const API_URL = "https://api.example.com"

// Types/Interfaces : PascalCase
interface MonInterface { ... }
type MonType = string | number
```

### Style de Code
```typescript
// ✅ Bon
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAddToCart = useCallback(() => {
    // Logique d'ajout au panier
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price}€</p>
    </div>
  );
};

// ❌ Éviter
const productcard = (props) => {
  return <div style={{backgroundColor: 'white'}}>{props.product.name}</div>
}
```

### Tailwind CSS
```tsx
// ✅ Utilisez les classes Tailwind
<div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">

// ❌ Évitez les styles inline
<div style={{ background: 'linear-gradient(to right, orange, pink)' }}>
```

## 🎯 Conventions de Commit

Utilisez [Conventional Commits](https://www.conventionalcommits.org/) :

```bash
# Types principaux
feat:     # Nouvelle fonctionnalité
fix:      # Correction de bug
docs:     # Documentation
style:    # Formatage (pas de changement de logique)
refactor: # Refactoring
test:     # Tests
chore:    # Maintenance

# Exemples
git commit -m "feat: ajouter système de favoris dans e-commerce"
git commit -m "fix: corriger responsive sur mobile"
git commit -m "docs: améliorer documentation API"
git commit -m "style: formater code avec prettier"
git commit -m "refactor: optimiser composant ProductCard"
```

## 🧪 Tests et Qualité

### Avant de Soumettre
```bash
# 1. Linting
npm run lint

# 2. Build
npm run build

# 3. Tests manuels
npm run dev
# Testez toutes les fonctionnalités modifiées
```

### Checklist de Qualité
- [ ] Code formaté et sans erreurs ESLint
- [ ] Composants responsive (mobile, tablet, desktop)
- [ ] Fonctionnalités testées manuellement
- [ ] Pas de console.log oubliés
- [ ] Types TypeScript corrects
- [ ] Accessibilité respectée (alt, aria-labels)
- [ ] Performance optimisée (images, animations)

## 🐛 Signaler des Bugs

### Template de Bug Report
```markdown
**Description du Bug**
Description claire et concise du problème.

**Étapes pour Reproduire**
1. Allez sur '...'
2. Cliquez sur '...'
3. Faites défiler jusqu'à '...'
4. Voir l'erreur

**Comportement Attendu**
Description de ce qui devrait se passer.

**Captures d'Écran**
Si applicable, ajoutez des captures d'écran.

**Environnement**
- OS: [ex: Windows 10]
- Navigateur: [ex: Chrome 91]
- Version: [ex: 1.0.0]

**Contexte Supplémentaire**
Toute autre information utile.
```

## 💡 Demander une Fonctionnalité

### Template de Feature Request
```markdown
**Problème Résolu**
Description claire du problème que cette fonctionnalité résoudrait.

**Solution Proposée**
Description claire de ce que vous voulez qui se passe.

**Alternatives Considérées**
Description des solutions alternatives que vous avez considérées.

**Contexte Supplémentaire**
Toute autre information ou capture d'écran utile.
```

## 🎨 Guidelines Design

### Palette de Couleurs
```css
/* Couleurs principales */
--orange-500: #f97316;
--red-500: #ef4444;
--pink-500: #ec4899;

/* Transparences */
--white-10: rgba(255, 255, 255, 0.1);
--white-20: rgba(255, 255, 255, 0.2);
```

### Animations
```css
/* Transitions standard */
transition: all 0.3s ease;

/* Hover effects */
hover:scale-105
hover:bg-white/20

/* Animations personnalisées */
animate-pulse
animate-bounce
animate-spin-slow
```

## 📚 Ressources Utiles

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

### Outils Recommandés
- **VS Code** avec extensions :
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier
  - ESLint

## 🤝 Code de Conduite

### Notre Engagement
Nous nous engageons à faire de la participation à ce projet une expérience sans harcèlement pour tous.

### Standards
- Utilisez un langage accueillant et inclusif
- Respectez les différents points de vue
- Acceptez les critiques constructives
- Concentrez-vous sur ce qui est le mieux pour la communauté

### Responsabilités
Les mainteneurs du projet sont responsables de clarifier les standards de comportement acceptable.

## 📞 Support

### Obtenir de l'Aide
- **Issues GitHub** : Pour bugs et features
- **Discussions** : Pour questions générales
- **Email** : mohameddaoudmed@gmail.com

### Temps de Réponse
- Issues critiques : 24-48h
- Features/améliorations : 3-7 jours
- Questions générales : 1-3 jours

## 🏆 Reconnaissance

### Contributeurs
Tous les contributeurs seront ajoutés au README avec leurs contributions.

### Types de Contributions Reconnues
- 💻 Code
- 📖 Documentation
- 🎨 Design
- 🐛 Bug reports
- 💡 Idées
- 🤔 Questions/Support

---

## 📋 Checklist Finale

Avant de soumettre votre PR :

- [ ] J'ai lu et suivi ce guide de contribution
- [ ] Mon code suit les standards établis
- [ ] J'ai testé mes changements localement
- [ ] J'ai ajouté/mis à jour la documentation si nécessaire
- [ ] Mon commit suit les conventions
- [ ] Ma PR a un titre et une description clairs

---

**Merci de contribuer au projet ! 🚀**

*Développé avec ❤️ par Mohamed DAOUD MOHAMED*