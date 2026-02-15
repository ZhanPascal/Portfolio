import { useTranslation } from 'react-i18next';
import { FiGithub, FiAward } from 'react-icons/fi';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { projects } from '../../data/projects';

export function Projects() {
  const { t } = useTranslation();

  const getProjectKey = (id: string) => {
    if (id === 'esp32-weather') return 'esp32';
    if (id === 'security-tools') return 'security';
    return id;
  };

  return (
    <Section id="projects" title={t('projects.title')} className="bg-soft-50/50 dark:bg-soft-800/30">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const key = getProjectKey(project.id);
          const achievement = t(`projects.${key}.achievement`, { defaultValue: '' });
          return (
            <Card key={project.id}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-soft-900 dark:text-soft-50">
                    {project.name}
                  </h3>
                  <p className="text-sm text-primary-500 dark:text-primary-400 font-medium">
                    {t(`projects.${key}.subtitle`)}
                  </p>
                </div>
                <span className={`px-2 py-0.5 rounded-lg text-xs font-medium shrink-0 ${
                  project.status === 'in-progress'
                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                    : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                }`}>
                  {t(`projects.status.${project.status === 'in-progress' ? 'inProgress' : 'completed'}`)}
                </span>
              </div>

              {achievement && (
                <div className="flex items-center gap-2 mb-3 text-primary-500">
                  <FiAward size={14} />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              )}

              <p className="text-sm text-soft-600 dark:text-soft-300 mb-4 leading-relaxed">
                {t(`projects.${key}.description`)}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-soft-100 dark:bg-soft-700 text-soft-600 dark:text-soft-300 rounded-lg text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-soft-500 hover:text-primary-500 transition-colors"
                >
                  <FiGithub size={14} />
                  {t('projects.viewCode')}
                </a>
              )}
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
