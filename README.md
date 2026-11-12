# Pascal ZHAN - Portfolio

Portfolio personnel trilingue (FR/EN/中文) avec un design 温暖 (chaleureux) aux tons ambrés et dorés.

En ligne sur **[pascalzhan.com](https://pascalzhan.com)**.

## Stack technique

- **React 19** + **TypeScript** via **Vite 7**
- **Tailwind CSS v4** (palette warm custom)
- **Framer Motion** (animations)
- **react-i18next** (trilingue FR/EN/ZH, français par défaut)
- **React Router** (navigation SPA)

## Fonctionnalités

- Switch de langue FR / EN / 中 (sélecteur visuel), avec mise à jour de l'attribut `lang` de la page
- Dark mode avec persistance localStorage
- Navigation smooth scroll avec section active
- Responsive (mobile, tablette, desktop)
- 11 projets avec pages de détail individuelles (`/projects/:id`)
- Page listing de tous les projets (`/projects`), projets mis en avant sur l'accueil
- Cards cliquables vers les détails (contexte, rôle, défis techniques, résultats, stack)
- Intégration iframe pour les projets avec contenu HTML (ex: Jupyter)
- Page CV dédiée (`/cv`) :
  - Affiche le CV PDF de la langue active du site (FR / EN / ZH)
  - Onglets « Alternance » / « Stage » pour choisir la version
  - Bouton de téléchargement
- Liens directs fonctionnels sur GitHub Pages (`/cv`, `/projects/...`) grâce à `404.html`

## Développement

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

## Vérification, build & preview

```bash
npm run lint      # ESLint
npm run build     # vérification TypeScript + build de production dans dist/
npm run preview   # sert le build en local
```

## Déploiement

Le site est déployé via GitHub Pages + GitHub Actions ([deploy.yml](.github/workflows/deploy.yml)).
Chaque push sur `main` déclenche un build + deploy automatique.

Pré-requis :
- Activer GitHub Pages dans **Settings > Pages > Source: GitHub Actions**
- Configurer le domaine custom `pascalzhan.com` dans **Settings > Pages > Custom domain**
- DNS : enregistrement CNAME vers `zhanpascal.github.io`

## Structure

```
src/
├── assets/images/     Image de fond de l'accueil (WebP)
├── components/
│   ├── common/        Button, Card, ProjectCard, Section, SkillBadge
│   ├── layout/        Header, Footer, LanguageSwitcher
│   ├── pages/         CvPage, ProjectsPage, ProjectDetailPage
│   └── sections/      Hero, About, Experience, Education, Projects, Skills, Contact
├── data/              Données structurées (personal, experience, education, projects, skills)
├── hooks/             useTheme, useScrollSpy
├── locales/           Traductions : <langue>/translation.json (fr, en, zh)
├── styles/            Tailwind + palette warm
└── utils/             Configuration i18n
public/
├── cv/                CV PDF : cv-<langue>.pdf (alternance) et cv-<langue>-stage.pdf (stage)
├── 404.html           Redirection GitHub Pages pour les liens directs (/cv, /projects/...)
├── CNAME              Domaine custom
└── logo.png           Logo / favicon
```

## Modifier le contenu

Les données sont centralisées dans `src/data/` et les textes dans `src/locales/`.
Aucune modification de composant n'est nécessaire pour mettre à jour le contenu.
Tout texte affiché doit être renseigné dans les trois fichiers de traduction.

### Ajouter une expérience

1. Ajouter une entrée dans `src/data/experience.ts` (dates, lieu, technologies).
2. Ajouter les textes sous `experience.<id>` dans les trois `translation.json` : l'`id` de l'expérience sert de clé de traduction.

### Ajouter un projet

1. Ajouter une entrée dans `src/data/projects.ts` (`featured: true` pour l'afficher sur l'accueil).
2. Ajouter les textes sous `projects.<clé>` dans les trois `translation.json`. La clé est l'`id` du projet, sauf s'il est listé dans `getProjectKey` (ex. `ratp-iot` → `ratp`).

### Ajouter une compétence ou une technologie

- Un nom propre (Python, Docker, …) s'écrit tel quel dans `src/data/skills.ts` ou dans les `technologies` d'une expérience.
- Un libellé à traduire s'écrit sous forme de slug (ex. `cryptography`) et sa traduction va dans la section `labels` des trois `translation.json`.

### Mettre à jour un CV

Remplacer le PDF correspondant dans `public/cv/` en gardant le nom du fichier :

| Langue | Alternance | Stage |
| --- | --- | --- |
| Français | `cv-fr.pdf` | `cv-fr-stage.pdf` |
| Anglais | `cv-en.pdf` | `cv-en-stage.pdf` |
| Chinois | `cv-zh.pdf` | `cv-zh-stage.pdf` |
