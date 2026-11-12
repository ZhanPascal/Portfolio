import { useTranslation } from 'react-i18next';

const langs = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中' },
];

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { i18n } = useTranslation();

  return (
    <div className="flex rounded-xl overflow-hidden border border-soft-200 dark:border-soft-600">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`text-xs font-medium py-1.5 transition-colors ${compact ? 'px-2' : 'px-2.5'} ${
            i18n.language === code
              ? 'bg-primary-500 text-white'
              : 'bg-soft-100 dark:bg-soft-700 text-soft-500 dark:text-soft-400 hover:bg-soft-200 dark:hover:bg-soft-600'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
