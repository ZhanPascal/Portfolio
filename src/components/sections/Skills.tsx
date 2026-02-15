import { useTranslation } from 'react-i18next';
import { Section } from '../common/Section';
import { SkillBadge } from '../common/SkillBadge';
import { skillsData } from '../../data/skills';

export function Skills() {
  const { t } = useTranslation();

  return (
    <Section id="skills" title={t('skills.title')}>
      <div className="space-y-8">
        {skillsData.map((category) => (
          <div key={category.id}>
            <h3 className="text-lg font-semibold text-soft-800 dark:text-soft-200 mb-3">
              {t(`skills.categories.${category.id}`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
