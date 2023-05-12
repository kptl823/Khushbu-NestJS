import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import translationEN from '/public/locales/en/translation.json';
import translationDE from '/public/locales/de/translation.json';

// Set up i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      de: {
        translation: translationDE,
      },
    },
    lng: "de",
    fallbackLng: "de",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
