import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiGithub, FiAward, FiExternalLink } from 'react-icons/fi';
import { projects, getProjectKey } from '../../data/projects';
import { Card } from '../common/Card';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-soft-50 dark:bg-soft-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-soft-500 mb-4">{t('projects.notFound')}</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
          >
            <FiArrowLeft size={16} />
            {t('projects.viewAll')}
          </Link>
        </div>
      </div>
    );
  }

  const key = getProjectKey(project.id);
  const achievement = t(`projects.${key}.achievement`, { defaultValue: '' });
  const challenges = t(`projects.${key}.detail.challenges`, { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-soft-50 dark:bg-soft-900 pt-20">
      <div className="container mx-auto px-6 py-8 max-w-3xl">
        {/* Navigation */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-soft-500 hover:text-primary-500 transition-colors mb-8"
        >
          <FiArrowLeft size={16} />
          {t('projects.viewAll')}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div>
              <h1 className="text-3xl font-bold text-soft-900 dark:text-soft-50 mb-1">
                {project.name}
              </h1>
              <p className="text-lg text-primary-500 dark:text-primary-400 font-medium">
                {t(`projects.${key}.subtitle`)}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-soft-400">{project.date}</span>
              <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                project.status === 'in-progress'
                  ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                  : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
              }`}>
                {t(`projects.status.${project.status === 'in-progress' ? 'inProgress' : 'completed'}`)}
              </span>
            </div>
          </div>

          {achievement && (
            <div className="flex items-center gap-2 text-primary-500 mb-4">
              <FiAward size={16} />
              <span className="font-medium">{achievement}</span>
            </div>
          )}

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-soft-500 hover:text-primary-500 transition-colors"
            >
              <FiGithub size={16} />
              {t('projects.viewCode')}
              <FiExternalLink size={12} />
            </a>
          )}
        </div>

        {/* Content sections */}
        <div className="space-y-6">
          {/* Context */}
          <Card>
            <h2 className="text-lg font-bold text-soft-900 dark:text-soft-50 mb-3">
              {t('projects.detailSections.context')}
            </h2>
            <p className="text-soft-600 dark:text-soft-300 leading-relaxed">
              {t(`projects.${key}.detail.context`)}
            </p>
          </Card>

          {/* Role */}
          <Card>
            <h2 className="text-lg font-bold text-soft-900 dark:text-soft-50 mb-3">
              {t('projects.detailSections.role')}
            </h2>
            <p className="text-soft-600 dark:text-soft-300 leading-relaxed">
              {t(`projects.${key}.detail.role`)}
            </p>
          </Card>

          {/* Challenges */}
          <Card>
            <h2 className="text-lg font-bold text-soft-900 dark:text-soft-50 mb-3">
              {t('projects.detailSections.challenges')}
            </h2>
            <ul className="space-y-2">
              {Array.isArray(challenges) && challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-soft-600 dark:text-soft-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Results */}
          <Card>
            <h2 className="text-lg font-bold text-soft-900 dark:text-soft-50 mb-3">
              {t('projects.detailSections.results')}
            </h2>
            <p className="text-soft-600 dark:text-soft-300 leading-relaxed">
              {t(`projects.${key}.detail.results`)}
            </p>
          </Card>

          {/* Embed */}
          {project.embedUrl && (
            <Card>
              <h2 className="text-lg font-bold text-soft-900 dark:text-soft-50 mb-3">
                {t('projects.detailSections.preview')}
              </h2>
              <div className="rounded-xl overflow-hidden border border-soft-100 dark:border-soft-700">
                <iframe
                  src={project.embedUrl}
                  title={project.name}
                  className="w-full bg-white"
                  style={{ height: '600px' }}
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </Card>
          )}

          {/* Tech Stack */}
          <Card>
            <h2 className="text-lg font-bold text-soft-900 dark:text-soft-50 mb-3">
              {t('projects.detailSections.stack')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-soft-100 dark:bg-soft-700 text-soft-600 dark:text-soft-300 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
