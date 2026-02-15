export interface Experience {
  id: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'cgi-devops',
    company: 'CGI France',
    location: 'Île-de-France, France',
    startDate: '2022-09',
    endDate: '2024-09',
    type: 'alternance',
    technologies: ['Java', 'Vue.js', 'PostgreSQL', 'Docker', 'Jenkins', 'VMware', 'Hyper-V', 'WAF F5', 'Git/Gitflow', 'REST API', 'Linux', 'Windows'],
  },
];
