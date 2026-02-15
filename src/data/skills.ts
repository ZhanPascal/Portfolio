export interface SkillCategory {
  id: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    skills: ['Python', 'Java', 'JavaScript', 'Rust', 'C', 'PHP', 'HTML/CSS'],
  },
  {
    id: 'ai-data',
    skills: ['TensorFlow', 'PyTorch', 'Hugging Face', 'LangGraph', 'scikit-learn', 'Pandas', 'NumPy', 'GPT', 'Claude', 'Mistral'],
  },
  {
    id: 'devops',
    skills: ['Docker', 'CI/CD', 'GitLab', 'VMware', 'HyperV', 'Linux', 'Windows Server'],
  },
  {
    id: 'databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'NoSQL'],
  },
  {
    id: 'security',
    skills: ['Nmap', 'Kali Linux', 'WAF (F5)', 'Cryptographie', 'Penetration Testing'],
  },
  {
    id: 'iot',
    skills: ['ESP32', 'MicroPython', 'MQTT', 'DHT11'],
  },
  {
    id: 'tools',
    skills: ['Git', 'GitHub', 'GitLab', 'Agile', 'REST API', 'SOAP'],
  },
];
