export interface Project {
  id: string;
  name: string;
  date: string;
  technologies: string[];
  status: 'completed' | 'in-progress';
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'truthtrace',
    name: 'TruthTrace',
    date: '2025-10',
    technologies: ['React', 'Flask', 'LangGraph', 'Whisper', 'Mistral', 'Docker', 'Google Cloud Run'],
    status: 'completed',
    links: {
      github: 'https://github.com/ZhanPascal/Hackathon-AgentsIRL_10_2025',
    },
  },
  {
    id: 'esp32-weather',
    name: 'ESP32 Weather Station',
    date: '2026',
    technologies: ['ESP32', 'MicroPython', 'MQTT', 'Flask', 'PostgreSQL', 'Docker'],
    status: 'in-progress',
    links: {
      github: 'https://github.com/ZhanPascal/ESP32-Weather-Station',
    },
  },
  {
    id: 'security-tools',
    name: 'Security Tools',
    date: '2024',
    technologies: ['Python', 'Bash', 'Kali Linux', 'John the Ripper'],
    status: 'completed',
  },
];
