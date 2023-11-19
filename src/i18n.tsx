import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {en, pt} from '@assets/translations';

const resources = {
  en: {translation: en},
  pt: {translation: pt},
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export {i18n};
