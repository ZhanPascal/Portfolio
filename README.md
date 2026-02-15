# Pascal ZHAN - Portfolio

Portfolio personnel bilingue (FR/EN) avec un design 温暖 (chaleureux) aux tons ambrés et dorés.

## Stack technique

- **React 19** + **TypeScript** via Vite
- **Tailwind CSS v4** (palette warm custom)
- **Framer Motion** (animations)
- **react-i18next** (bilingue FR/EN)
- **React Router** (navigation SPA)

## Fonctionnalités

- Switch de langue FR / EN
- Dark mode avec persistance localStorage
- Navigation smooth scroll avec section active
- Responsive (mobile, tablette, desktop)
- Page CV dédiée (`/cv`) :
  - Affiche le PDF si disponible (`public/cv/cv-fr.pdf` / `cv-en.pdf`)
  - Génère automatiquement un CV HTML depuis les données du site sinon
  - Le CV suit la langue active du site
  - Bouton imprimer / télécharger

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
│   ├── common/        Button, Card, Section, SkillBadge
│   ├── layout/        Header, Footer
│   ├── pages/         CvPage, CvGenerated
│   └── sections/      Hero, About, Experience, Education, Projects, Skills, Contact
├── data/              Données structurées (personal, experience, education, projects, skills)
├── hooks/             useTheme, useScrollSpy
├── styles/            Tailwind + palette warm
└── utils/             Configuration i18n
public/
├── cv/                CV PDF (à fournir : cv-fr.pdf, cv-en.pdf)
└── locales/           Traductions FR / EN
```

## Modifier le contenu

Les données sont centralisées dans `src/data/` et les traductions dans `public/locales/`.
Aucune modification de composant n'est nécessaire pour mettre à jour le contenu.
