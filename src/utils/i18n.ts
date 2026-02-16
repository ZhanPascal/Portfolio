import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../../public/locales/en/translation.json';
import fr from '../../public/locales/fr/translation.json';
import zh from '../../public/locales/zh/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      zh: { translation: zh },
    },
    fallbackLng: 'fr',
    supportedLngs: ['en', 'fr', 'zh'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
