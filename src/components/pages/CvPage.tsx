import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDownload } from 'react-icons/fi';
import { Button } from '../common/Button';

type CvVariant = 'alternance' | 'stage';

const CV_LANGS = ['fr', 'en', 'zh'];

export function CvPage() {
  const { t, i18n } = useTranslation();
  const lang = CV_LANGS.includes(i18n.language) ? i18n.language : 'en';
  const [variant, setVariant] = useState<CvVariant>('alternance');
  // public/cv/cv-<lang>.pdf (alternance) and cv-<lang>-stage.pdf (stage)
  const cvPath = `${import.meta.env.BASE_URL}cv/cv-${lang}${variant === 'stage' ? '-stage' : ''}.pdf`;

  return (
    <div className="min-h-screen bg-soft-50 dark:bg-soft-900 pt-20">
      <div className="container mx-auto px-6 py-8 max-w-5xl">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-soft-500 hover:text-primary-500 transition-colors"
          >
            <FiArrowLeft size={16} />
            {t('cv.back')}
          </Link>
          <h1 className="text-2xl font-bold text-soft-900 dark:text-soft-50">
            {t('cv.title')}
          </h1>
          <Button href={cvPath}>
            <FiDownload size={16} />
            {t('cv.download')}
          </Button>
        </div>

        {/* Variant switch */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-xl bg-soft-100 dark:bg-soft-800 p-1" role="tablist">
            {(['alternance', 'stage'] as CvVariant[]).map((v) => (
              <button
                key={v}
                role="tab"
                aria-selected={variant === v}
                onClick={() => setVariant(v)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  variant === v
                    ? 'bg-white dark:bg-soft-700 text-primary-600 dark:text-primary-300 shadow-sm'
                    : 'text-soft-500 hover:text-primary-500'
                }`}
              >
                {t(`cv.variants.${v}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-soft-800 rounded-2xl shadow-sm border border-soft-100 dark:border-soft-700 overflow-hidden">
          <iframe
            key={cvPath}
            src={cvPath}
            className="w-full"
            style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}
            title={t('cv.title')}
          />
        </div>
      </div>
    </div>
  );
}
