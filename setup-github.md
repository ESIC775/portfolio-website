# 🚀 Configuration de votre Repository GitHub

> ⚠️ **Important** : Ces commandes Git doivent être exécutées dans votre terminal local, pas dans l'environnement de développement en ligne.

## Étape 1: Créer le repository sur GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur le bouton **"New"** (ou le **"+"** en haut à droite)
3. Nommez votre repository : `portfolio-website`
4. Ajoutez une description : "Portfolio personnel avec plateforme e-commerce"
5. Laissez en **Public**
6. **NE PAS** cocher "Add a README file" (vous en avez déjà un)
7. Cliquez **"Create repository"**

## Étape 2: Télécharger et configurer Git localement

### Installer Git (si pas déjà fait)
- **Windows** : Téléchargez depuis [git-scm.com](https://git-scm.com/)
- **macOS** : `brew install git` ou téléchargez depuis git-scm.com
- **Linux** : `sudo apt-get install git` (Ubuntu/Debian)

### Initialiser Git dans votre projet local

1. **Téléchargez** tous les fichiers de ce projet sur votre ordinateur
2. **Ouvrez un terminal** dans le dossier de votre projet local
3. **Exécutez ces commandes** :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "feat: initial commit - portfolio complet avec e-commerce"

# Ajouter l'origine GitHub (remplacez ESIC775 par votre username)
git remote add origin https://github.com/ESIC775/portfolio-website.git

# Renommer la branche principale
git branch -M main

# Pousser vers GitHub
git push -u origin main
```

## Étape 3: Vérifier que tout fonctionne

1. Allez sur `https://github.com/ESIC775/portfolio-website`
2. Vous devriez voir tous vos fichiers
3. Testez les liens dans votre portfolio

## 🔧 Si vous avez des erreurs

### Erreur d'authentification
```bash
# Configurez votre identité Git
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"
```

### Repository déjà existant
```bash
# Supprimez l'ancien remote et ajoutez le nouveau
git remote remove origin
git remote add origin https://github.com/ESIC775/portfolio-website.git
git push -u origin main
```

### Conflits de branches
```bash
# Forcez le push (attention: cela écrase le repository distant)
git push -f origin main
```

## 📝 Après le push

Une fois que votre code est sur GitHub :
- Les liens dans votre portfolio fonctionneront
- Les visiteurs pourront voir votre code source
- Vous pourrez partager le lien de votre repository

## 🎯 Commandes utiles pour la suite

```bash
# Ajouter des changements
git add .
git commit -m "feat: description du changement"
git push

# Voir le statut
git status

# Voir l'historique
git log --oneline
```