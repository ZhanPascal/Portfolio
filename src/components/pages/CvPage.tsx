import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiPrinter } from 'react-icons/fi';
import { Button } from '../common/Button';
import { CvGenerated } from './CvGenerated';

export function CvPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'fr' ? 'fr' : 'en';
  const cvPath = `${import.meta.env.BASE_URL}cv/cv-${lang}.pdf`;
  const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    fetch(cvPath, { method: 'HEAD' })
      .then((res) => setPdfAvailable(res.ok && (res.headers.get('content-type')?.includes('pdf') ?? false)))
      .catch(() => setPdfAvailable(false));
  }, [cvPath]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Loading state
  if (pdfAvailable === null) {
    return (
      <div className="min-h-screen bg-soft-50 dark:bg-soft-900 pt-20 flex items-center justify-center">
        <div className="animate-pulse text-soft-400">...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-50 dark:bg-soft-900 pt-20">
      <div className={`container mx-auto px-6 py-8 ${pdfAvailable ? 'max-w-5xl' : 'max-w-[230mm]'}`}>
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 no-print">
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
          <div className="flex gap-3">
            {pdfAvailable ? (
              <Button href={cvPath}>
                <FiDownload size={16} />
                {t('cv.download')}
              </Button>
            ) : (
              <Button onClick={handlePrint}>
                <FiPrinter size={16} />
                {t('cv.print')}
              </Button>
            )}
          </div>
        </div>

        {pdfAvailable ? (
          <div className="bg-white dark:bg-soft-800 rounded-2xl shadow-sm border border-soft-100 dark:border-soft-700 overflow-hidden">
            <iframe
              src={cvPath}
              className="w-full"
              style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}
              title={t('cv.title')}
            />
          </div>
        ) : (
          <CvGenerated />
        )}
      </div>
    </div>
  );
}
