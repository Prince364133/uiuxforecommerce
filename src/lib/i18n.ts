import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations directly for build-time reliability
import hiCommon from '../../public/locales/hi/common.json';
import enCommon from '../../public/locales/en/common.json';
import bnCommon from '../../public/locales/bn/common.json';
import teCommon from '../../public/locales/te/common.json';
import mrCommon from '../../public/locales/mr/common.json';
import taCommon from '../../public/locales/ta/common.json';
import guCommon from '../../public/locales/gu/common.json';

const resources = {
  hi: { common: hiCommon },
  en: { common: enCommon },
  bn: { common: bnCommon },
  te: { common: teCommon },
  mr: { common: mrCommon },
  ta: { common: taCommon },
  gu: { common: guCommon }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hi', // Default to Hindi
    fallbackLng: 'hi',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
    }
  });

export default i18n;
