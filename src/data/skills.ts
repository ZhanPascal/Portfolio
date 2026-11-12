// A skill is either a display name ('Python') or, when it needs translating,
// a key of the `labels` section in src/locales ('cryptography').
export interface SkillCategory {
  id: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    skills: ['Python', 'Java', 'C', 'C++', 'Ada', 'Rust', 'Kotlin', 'TypeScript', 'JavaScript', 'PHP', 'HTML/CSS'],
  },
  {
    id: 'web',
    skills: ['React', 'Vue.js', 'Node.js', 'Express', 'Spring', 'Prisma', 'REST API'],
  },
  {
    id: 'mobile',
    skills: ['Android', 'Jetpack Compose', 'MVVM', 'Room', 'Hilt', 'Coroutines'],
  },
  {
    id: 'ai-data',
    skills: ['TensorFlow', 'Keras', 'PyTorch', 'Hugging Face', 'LangGraph', 'Whisper', 'scikit-learn', 'Pandas', 'NumPy', 'Mistral'],
  },
  {
    id: 'devops',
    skills: ['Docker', 'CI/CD', 'Jenkins', 'GitLab', 'VMware', 'HyperV', 'Linux', 'Windows Server', 'GCP'],
  },
  {
    id: 'databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'InfluxDB', 'SQL', 'NoSQL'],
  },
  {
    id: 'security',
    skills: ['TCP/IP', 'Nmap', 'Wireshark', 'Kali Linux', 'WAF (F5)', 'cryptography', 'vulnerability-analysis', 'Pentest', 'security-audit'],
  },
  {
    id: 'iot',
    skills: ['Ada', 'CBTC', 'ESP32', 'MQTT', 'Node-RED', 'Grafana'],
  },
  {
    id: 'tools',
    skills: ['Git', 'GitHub', 'GitLab', 'Agile', 'UML', 'Design Patterns', 'unit-regression-tests','MATLAB', 'Simulink / SimEvents'],
  },
];
