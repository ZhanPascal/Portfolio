import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { ProjectCard } from '../common/ProjectCard';
import { projects } from '../../data/projects';

export function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-soft-50 dark:bg-soft-900 pt-20">
      <div className="container mx-auto px-6 py-8 max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-soft-500 hover:text-primary-500 transition-colors"
          >
            <FiArrowLeft size={16} />
            {t('cv.back')}
          </Link>
          <h1 className="text-2xl font-bold text-soft-900 dark:text-soft-50">
            {t('projects.title')}
          </h1>
          <div className="w-20 hidden sm:block" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} showDate />
          ))}
        </div>
      </div>
    </div>
  );
}
