import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Section } from '../common/Section';
import { ProjectCard } from '../common/ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
  const { t } = useTranslation();

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section id="projects" title={t('projects.title')} className="bg-soft-50/50 dark:bg-soft-800/30">
      <div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 font-medium text-sm transition-colors"
        >
          {t('projects.viewAll')}
          <FiArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
