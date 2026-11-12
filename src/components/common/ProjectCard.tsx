import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FiGithub, FiAward, FiArrowRight } from 'react-icons/fi';
import { Card } from './Card';
import { getProjectKey, type Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  showDate?: boolean;
}

export function ProjectCard({ project, showDate = false }: ProjectCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const key = getProjectKey(project.id);
  const achievement = t(`projects.${key}.achievement`, { defaultValue: '' });

  return (
    <Card
      onClick={() => navigate(`/projects/${project.id}`)}
      className="cursor-pointer hover:border-primary-300 dark:hover:border-primary-600"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-soft-900 dark:text-soft-50">
            {project.name}
          </h3>
          <p className="text-sm text-primary-500 dark:text-primary-400 font-medium">
            {t(`projects.${key}.subtitle`)}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {showDate && <span className="text-xs text-soft-400">{project.date}</span>}
          <span className={`px-2 py-0.5 rounded-lg text-xs font-medium ${
            project.status === 'in-progress'
              ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
              : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
          }`}>
            {t(`projects.status.${project.status === 'in-progress' ? 'inProgress' : 'completed'}`)}
          </span>
        </div>
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

      <div className="flex items-center gap-4">
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-soft-500 hover:text-primary-500 transition-colors"
          >
            <FiGithub size={14} />
            {t('projects.viewCode')}
          </a>
        )}
        <span className="inline-flex items-center gap-1.5 text-sm text-primary-500 ml-auto">
          {t('projects.learnMore')}
          <FiArrowRight size={14} />
        </span>
      </div>
    </Card>
  );
}
