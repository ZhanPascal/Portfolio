# Pascal ZHAN - Portfolio

Portfolio personnel trilingue (FR/EN/中文) avec un design 温暖 (chaleureux) aux tons ambrés et dorés.

## Stack technique

- **React 19** + **TypeScript** via Vite
- **Tailwind CSS v4** (palette warm custom)
- **Framer Motion** (animations)
- **react-i18next** (trilingue FR/EN/ZH)
- **React Router** (navigation SPA)

## Fonctionnalités

- Switch de langue FR / EN / 中 (sélecteur visuel)
- Dark mode avec persistance localStorage
- Navigation smooth scroll avec section active
- Responsive (mobile, tablette, desktop)
- 11 projets avec pages de détail individuelles (`/projects/:id`)
- Page listing de tous les projets (`/projects`)
- Cards cliquables vers les détails (contexte, rôle, défis techniques, résultats, stack)
- Intégration iframe pour les projets avec contenu HTML (ex: Jupyter)
- Page CV dédiée (`/cv`) :
  - Affiche le CV PDF de la langue active du site (FR / EN / ZH)
  - Onglets « Alternance » / « Stage » pour choisir la version
  - Bouton de téléchargement

## Développement

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

## Build & Preview

```bash
npm run build
npm run preview
```

## Déploiement

Le site est déployé sur **[pascalzhan.com](https://pascalzhan.com)** via GitHub Pages + GitHub Actions.
Chaque push sur `main` déclenche un build + deploy automatique.

Pré-requis :
- Activer GitHub Pages dans **Settings > Pages > Source: GitHub Actions**
- Configurer le domaine custom `pascalzhan.com` dans **Settings > Pages > Custom domain**
- DNS : enregistrement CNAME vers `zhanpascal.github.io`

## Structure

```
src/
├── components/
│   ├── common/        Button, Card, ProjectCard, Section, SkillBadge
│   ├── layout/        Header, Footer, LanguageSwitcher
│   ├── pages/         CvPage, ProjectsPage, ProjectDetailPage
│   └── sections/      Hero, About, Experience, Education, Projects, Skills, Contact
├── data/              Données structurées (personal, experience, education, projects, skills)
├── hooks/             useTheme, useScrollSpy
├── locales/           Traductions FR / EN / ZH
├── styles/            Tailwind + palette warm
└── utils/             Configuration i18n
public/
├── cv/                CV PDF : cv-<langue>.pdf (alternance) et cv-<langue>-stage.pdf (stage)
└── 404.html           Redirection GitHub Pages pour les liens directs (/cv, /projects/...)
```

## Modifier le contenu

Les données sont centralisées dans `src/data/` et les traductions dans `src/locales/`.
Aucune modification de composant n'est nécessaire pour mettre à jour le contenu.
