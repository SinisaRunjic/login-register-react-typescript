import {initReactI18next} from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-http-backend'
/*translation*/
import englishTranslate from './englishTranslate.json';
import serbianTranslate from './serbianTranslate.json'
 

export const resources = {
  en: {
    translation:englishTranslate
  },
  rs:{
    translation:serbianTranslate
  }
 
} as const;



i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'rs'],

    ns: ['translation'],
    defaultNS: 'translation',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },

    react: {
      wait: true,
      useSuspense: false
    },
    resources
  });