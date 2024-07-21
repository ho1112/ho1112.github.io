import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-localstorage-backend';
import { initReactI18next } from 'react-i18next';

import ko from './ko.json';
import ja from './ja.json';

const resources = {
  ko: {
    translation: ko,
  },
  ja: {
    translation: ja,
  },
};

i18n
  .use(initReactI18next)
  .use(Backend)
  // 初期レンダリングのタイミングで言語情報がなくて、エラーになることがあるため、コメントアウト
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'ja',
    preload: ['ja'],
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;