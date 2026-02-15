import { useTranslation } from 'react-i18next';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../../data/personal';
import { experiences } from '../../data/experience';
import { education } from '../../data/education';
import { projects } from '../../data/projects';
import { skillsData } from '../../data/skills';

export function CvGenerated() {
  const { t, i18n } = useTranslation();

  return (
    <div className="cv-container bg-white text-gray-900 max-w-[210mm] mx-auto shadow-lg rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-6">
        <h1 className="text-3xl font-bold mb-1">{personalInfo.name}</h1>
        <p className="text-lg text-primary-100 font-light mb-3">
          {t('hero.title')}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-primary-100">
          <span className="flex items-center gap-1.5">
            <FiMail size={13} /> {personalInfo.email}
          </span>
          <a href={personalInfo.github} className="flex items-center gap-1.5 hover:text-white">
            <FiGithub size={13} /> ZhanPascal
          </a>
          <a href={personalInfo.linkedin} className="flex items-center gap-1.5 hover:text-white">
            <FiLinkedin size={13} /> pascal-zhan
          </a>
        </div>
      </div>

      <div className="px-8 py-6 space-y-5">
        {/* About / Profile */}
        <section>
          <h2 className="text-lg font-bold text-primary-700 border-b-2 border-primary-200 pb-1 mb-3">
            {t('about.title')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            {t('about.p1')}
          </p>
          <p className="text-sm leading-relaxed text-gray-700 mt-1">
            {t('about.bilingual')}
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-lg font-bold text-primary-700 border-b-2 border-primary-200 pb-1 mb-3">
            {t('experience.title')}
          </h2>
          {experiences.map((exp) => {
            const key = exp.id === 'cgi-devops' ? 'cgi' : exp.id;
            const achievements = t(`experience.${key}.achievements`, { returnObjects: true }) as string[];
            return (
              <div key={exp.id} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm text-gray-900">
                    {t(`experience.${key}.position`)} — {exp.company}
                  </h3>
                  <span className="text-xs text-gray-500 shrink-0 ml-2">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1">
                  {exp.location} · {t(`experience.${key}.type`)}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  {t(`experience.${key}.description`)}
                </p>
                <ul className="space-y-0.5">
                  {Array.isArray(achievements) && achievements.map((a, i) => (
                    <li key={i} className="text-sm text-gray-700 pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-primary-500">
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg font-bold text-primary-700 border-b-2 border-primary-200 pb-1 mb-3">
            {t('education.title')}
          </h2>
          {education.map((edu) => {
            const key = edu.id === 'upec-master' ? 'upec' : 'but';
            return (
              <div key={edu.id} className="mb-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm text-gray-900">
                    {t(`education.${key}.degree`)} — {t(`education.${key}.specialization`)}
                  </h3>
                  <span className="text-xs text-gray-500 shrink-0 ml-2">
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {edu.school}, {edu.location}
                  {edu.current && <span className="ml-2 text-primary-600 font-medium">({t(`education.${key}.current`)})</span>}
                </p>
                <p className="text-sm text-gray-600 mt-0.5">
                  {t(`education.${key}.description`)}
                </p>
              </div>
            );
          })}
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-lg font-bold text-primary-700 border-b-2 border-primary-200 pb-1 mb-3">
            {t('projects.title')}
          </h2>
          <div className="space-y-2">
            {projects.map((project) => {
              const key = project.id === 'esp32-weather' ? 'esp32' : project.id === 'security-tools' ? 'security' : project.id;
              const achievement = t(`projects.${key}.achievement`, { defaultValue: '' });
              return (
                <div key={project.id}>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-bold text-sm text-gray-900">
                      {project.name}
                    </h3>
                    <span className="text-xs text-gray-500">— {t(`projects.${key}.subtitle`)}</span>
                    {achievement && (
                      <span className="text-xs text-primary-600 font-medium">
                        ({achievement})
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    {t(`projects.${key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-lg font-bold text-primary-700 border-b-2 border-primary-200 pb-1 mb-3">
            {t('skills.title')}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {skillsData.map((category) => (
              <div key={category.id}>
                <h3 className="font-semibold text-xs text-gray-800 mb-1">
                  {t(`skills.categories.${category.id}`)}
                </h3>
                <p className="text-xs text-gray-600">
                  {category.skills.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-lg font-bold text-primary-700 border-b-2 border-primary-200 pb-1 mb-3">
            {i18n.language === 'fr' ? 'Langues' : 'Languages'}
          </h2>
          <p className="text-sm text-gray-700">{t('about.languages')}</p>
        </section>
      </div>
    </div>
  );
}
