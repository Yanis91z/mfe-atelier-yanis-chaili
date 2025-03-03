# Micro Frontend Atelier

## Objectif
Ce projet a pour but de démontrer l'architecture Micro Frontend en utilisant Module Federation. Il se compose d'une application hôte (shell) et d'un micro frontend (header).

## Structure du Projet
Le projet est organisé comme suit :

```
mfe-atelier-yanis-chaili
├── header
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── Header.js
│   │   └── index.js
│   ├── .babelrc
│   ├── package.json
│   └── webpack.config.js
├── shell
│    ├── public
│    │   └── index.html
│    ├── src
│    │   ├── App.js
│    │   └── index.js
│    ├── .babelrc
│    ├── package.json
│    └── webpack.config.js
└── README.md
```

## Installation

1. Clonez le dépôt :
   ```
   git clone https://github.com/Yanis91z/mfe-atelier-yanis-chaili.git
   ```

2. Accédez au dossier `shell` et installez les dépendances :
   ```
   cd mfe-atelier-yanis-chaili
   cd shell
   npm install
   ```

3. Accédez au dossier `header` et installez les dépendances :
   ```
   cd ../header
   npm install
   ```

## Lancer le Projet

### Pour l'application Shell

1. Accédez au dossier `shell` :
   ```
   cd shell
   ```

2. Démarrez l'application :
   ```
   npm start
   ```

### Pour le Micro Frontend Header

1. Accédez au dossier `header` :
   ```
   cd header
   ```

2. Démarrez le micro frontend :
   ```
   npm start
   ```

## Utilisation
Une fois les deux applications démarrées, vous pouvez accéder à l'application shell via `http://localhost:3000` (ou le port configuré) et voir le micro frontend "header" intégré.

## Remarques
- Assurez-vous que les ports utilisés par les deux applications ne sont pas en conflit.

## Contributions
Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas à soumettre une pull request.
