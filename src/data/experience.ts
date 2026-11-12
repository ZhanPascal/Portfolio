export interface Experience {
  id: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'siemens',
    company: 'Siemens Mobility',
    location: 'Île-de-France, France',
    startDate: '2026-04',
    endDate: '2026-09',
    technologies: ['Ada', 'CBTC', 'critical-embedded', 'code-generation'],
  },
  {
    id: 'cgi',
    company: 'CGI France',
    location: 'Île-de-France, France',
    startDate: '2022-09',
    endDate: '2024-09',
    technologies: ['Python', 'Java', 'Vue.js', 'PostgreSQL', 'Docker', 'Jenkins', 'VMware', 'Hyper-V', 'WAF F5', 'Git/Gitflow', 'REST API', 'Linux', 'Windows'],
  },
];
