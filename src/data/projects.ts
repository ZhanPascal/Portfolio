export interface Project {
  id: string;
  name: string;
  date: string;
  technologies: string[];
  status: 'completed' | 'in-progress';
  featured?: boolean;
  embedUrl?: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export function getProjectKey(id: string): string {
  const mapping: Record<string, string> = {
    'esp32-weather': 'esp32',
    'security-tools': 'security',
    'ia-qa': 'iaqa',
    'gpt2-chatbot': 'gpt2',
    'python-game': 'game',
    'maths-analysis': 'maths',
    'raspberry-os': 'raspberry',
  };
  return mapping[id] || id;
}

export const projects: Project[] = [
  {
    id: 'truthtrace',
    name: 'TruthTrace',
    date: '2025',
    technologies: ['React', 'Flask', 'LangGraph', 'Whisper', 'Mistral', 'Docker', 'Google Cloud Run'],
    status: 'completed',
    featured: true,
    links: {
      github: 'https://github.com/ZhanPascal/Hackathon-AgentsIRL_10_2025',
    },
  },
  {
    id: 'ia-qa',
    name: 'QA Fine-tuning (SQuAD)',
    date: '2024',
    technologies: ['Python', 'Transformers', 'Docker', 'SQuAD'],
    status: 'completed',
    featured: true,
    links: {
      github: 'https://github.com/ZhanPascal/SAE-IA-QA',
    },
  },
  {
    id: 'gpt2-chatbot',
    name: 'Chatbot GPT-2',
    date: '2024',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Gradio', 'Jupyter'],
    status: 'completed',
    featured: true,
    links: {
      github: 'https://github.com/ZhanPascal/SAE-GPT2',
    },
  },
  {
    id: 'esp32-weather',
    name: 'ESP32 Weather Station',
    date: '2026',
    technologies: ['ESP32', 'MicroPython', 'MQTT', 'Flask', 'PostgreSQL', 'Docker'],
    status: 'in-progress',
    featured: true,
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
  {
    id: 'dracorporation',
    name: 'DraCorporation',
    date: '2023',
    technologies: ['PHP', 'Python', 'PostgreSQL', 'CSS'],
    status: 'completed',
    links: {
      github: 'https://github.com/ZhanPascal/SAE_DraCorporation',
    },
  },
  {
    id: 'python-game',
    name: 'Jeu Python',
    date: '2022',
    technologies: ['Python'],
    status: 'completed',
    links: {
      github: 'https://github.com/ZhanPascal/Project/tree/main/Jeu',
    },
  },
  {
    id: 'maths-analysis',
    name: 'Analyse Mathématique',
    date: '2022',
    technologies: ['Python', 'Jupyter'],
    status: 'completed',
    embedUrl: 'https://raw.githack.com/ZhanPascal/Project/main/SAE%20maths/SAE_Math.html',
    links: {
      github: 'https://github.com/ZhanPascal/Project/tree/main/SAE%20maths',
    },
  },
  {
    id: 'raspberry-os',
    name: 'Raspberry Pi OS',
    date: '2022',
    technologies: ['Raspberry Pi', 'Linux'],
    status: 'completed',
    links: {
      github: 'https://github.com/ZhanPascal/Project/tree/main/Raspberry',
    },
  },
];
