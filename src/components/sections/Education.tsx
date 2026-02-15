import { useTranslation } from 'react-i18next';
import { FiAward } from 'react-icons/fi';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { education } from '../../data/education';

export function Education() {
  const { t } = useTranslation();

  return (
    <Section id="education" title={t('education.title')}>
      <div className="space-y-6">
        {education.map((edu) => {
          const key = edu.id === 'upec-master' ? 'upec' : 'but';
          return (
            <Card key={edu.id}>
              <div className="flex gap-4">
                <div className="mt-1 p-2 rounded-xl bg-primary-50 dark:bg-primary-900/30 self-start">
                  <FiAward className="text-primary-500" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-soft-900 dark:text-soft-50">
                      {t(`education.${key}.degree`)}
                    </h3>
                    {edu.current && (
                      <span className="px-2 py-0.5 bg-accent-sage/30 text-emerald-700 dark:text-emerald-300 rounded-lg text-xs font-medium">
                        {t(`education.${key}.current`)}
                      </span>
                    )}
                  </div>
                  <p className="text-base text-primary-500 dark:text-primary-400 mb-1 font-medium">
                    {t(`education.${key}.specialization`)}
                  </p>
                  <p className="text-sm text-soft-700 dark:text-soft-300">
                    {edu.school}
                  </p>
                  <p className="text-sm text-soft-400 dark:text-soft-500 mb-3">
                    {edu.location} &middot; {edu.startYear} - {edu.endYear}
                  </p>
                  <p className="text-sm text-soft-600 dark:text-soft-400">
                    {t(`education.${key}.description`)}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
