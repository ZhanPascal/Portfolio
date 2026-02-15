import { useTranslation } from 'react-i18next';
import { Section } from '../common/Section';

export function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" title={t('about.title')}>
      <div className="max-w-3xl space-y-4">
        <p className="text-base text-soft-600 dark:text-soft-300 leading-relaxed">
          {t('about.p1')}
        </p>
        <p className="text-base text-soft-600 dark:text-soft-300 leading-relaxed">
          {t('about.p2')}
        </p>
        <p className="text-base text-soft-600 dark:text-soft-300 leading-relaxed">
          {t('about.p3')}
        </p>
        <p className="text-base text-soft-600 dark:text-soft-300 leading-relaxed">
          {t('about.p4')}
        </p>
        <p className="text-base text-primary-600 dark:text-primary-400 font-medium leading-relaxed">
          {t('about.bilingual')}
        </p>
        <p className="text-sm text-soft-400 dark:text-soft-500 italic">
          {t('about.languages')}
        </p>
        <p className="text-base text-primary-500 dark:text-primary-300 font-medium pt-2">
          {t('about.interests')}
        </p>
      </div>
    </Section>
  );
}
