import { useTranslation } from 'react-i18next';
import { FiBriefcase } from 'react-icons/fi';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { experiences } from '../../data/experience';

export function Experience() {
  const { t } = useTranslation();

  return (
    <Section id="experience" title={t('experience.title')} className="bg-soft-50/50 dark:bg-soft-800/30">
      <div className="space-y-6">
        {experiences.map((exp) => {
          const achievements = t(`experience.${exp.id === 'cgi-devops' ? 'cgi' : exp.id}.achievements`, { returnObjects: true }) as string[];
          return (
            <Card key={exp.id}>
              <div className="flex gap-4">
                <div className="mt-1 p-2 rounded-xl bg-primary-50 dark:bg-primary-900/30 self-start">
                  <FiBriefcase className="text-primary-500" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-soft-900 dark:text-soft-50">
                      {t(`experience.${exp.id === 'cgi-devops' ? 'cgi' : exp.id}.position`)}
                    </h3>
                    <span className="px-2 py-0.5 bg-accent-gold/20 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium">
                      {t(`experience.${exp.id === 'cgi-devops' ? 'cgi' : exp.id}.type`)}
                    </span>
                  </div>
                  <p className="text-base text-soft-700 dark:text-soft-300 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-soft-400 dark:text-soft-500 mb-3">
                    {exp.location} &middot; {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-sm text-soft-600 dark:text-soft-400 mb-3">
                    {t(`experience.${exp.id === 'cgi-devops' ? 'cgi' : exp.id}.description`)}
                  </p>
                  <ul className="space-y-1.5">
                    {Array.isArray(achievements) && achievements.map((a, i) => (
                      <li key={i} className="text-sm text-soft-600 dark:text-soft-300 flex gap-2">
                        <span className="text-primary-400 mt-0.5">&#8226;</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-soft-100 dark:bg-soft-700 text-soft-600 dark:text-soft-300 rounded-lg text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
