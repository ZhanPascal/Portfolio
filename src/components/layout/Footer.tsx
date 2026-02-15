import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/personal';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-soft-50 dark:bg-soft-900 border-t border-soft-100 dark:border-soft-800 py-8">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-soft-500 dark:text-soft-400">
          &copy; {new Date().getFullYear()} {personalInfo.name}. {t('footer.rights')}.
        </p>
        <div className="flex gap-5">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-soft-400 hover:text-primary-500 transition-colors" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-soft-400 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-soft-400 hover:text-primary-500 transition-colors" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
