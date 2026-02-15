import { useTranslation } from 'react-i18next';
import { FiMail, FiCalendar, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { personalInfo } from '../../data/personal';

export function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact" title={t('contact.title')} className="bg-soft-50/50 dark:bg-soft-800/30">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-base text-soft-600 dark:text-soft-300 mb-8">
          {t('contact.subtitle')}
        </p>

        <Card hover={false} className="mb-8 text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-primary-50 dark:bg-primary-900/30">
              <FiCalendar className="text-primary-500" size={18} />
            </div>
            <div>
              <p className="font-semibold text-soft-900 dark:text-soft-50 text-sm mb-1">
                {t('contact.availability')}
              </p>
              <p className="text-sm text-soft-600 dark:text-soft-300">{t('contact.internship')}</p>
              <p className="text-sm text-soft-600 dark:text-soft-300">{t('contact.alternance')}</p>
            </div>
          </div>
        </Card>

        <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
          <Card hover={false}>
            <div className="flex items-center gap-3">
              <FiMail className="text-primary-500 shrink-0" size={18} />
              <div>
                <p className="text-xs text-soft-400">{t('contact.email')}</p>
                <a href={`mailto:${personalInfo.email}`} className="text-sm text-soft-800 dark:text-soft-200 hover:text-primary-500 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </Card>
          <Card hover={false}>
            <div className="flex items-center gap-3">
              <FiGithub className="text-primary-500 shrink-0" size={18} />
              <div>
                <p className="text-xs text-soft-400">GitHub</p>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm text-soft-800 dark:text-soft-200 hover:text-primary-500 transition-colors">
                  ZhanPascal
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href={`mailto:${personalInfo.email}`}>
            <FiMail size={16} />
            {t('contact.sendEmail')}
          </Button>
          <Button variant="outline" href={personalInfo.linkedin}>
            <FiLinkedin size={16} />
            LinkedIn
          </Button>
        </div>
      </div>
    </Section>
  );
}
