import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';

const supportedLngs = ['en', 'pt', 'es'];

export default function i18n() {
  return i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      supportedLngs,
      debug: true,
      interpolation: {
        escapeValue: false,
      },
    });
}

export function usei18n() {
  const { t, i18n: context } = useTranslation();

  function getTranslationFor(key: string): string {
    return t(key);
  }

  function changeTranslationTo(key: string): void {
    context.changeLanguage(key);
  }

  function getCurrentTranslation(): string {
    return context.language;
  }

  function getAllTranslations(): string[] {
    return supportedLngs;
  }

  return { getTranslationFor, changeTranslationTo, getCurrentTranslation, getAllTranslations };
}
