import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

type i18nHook = {
  getTranslationFor: (key: string) => string;
  changeTranslationTo: (key: string) => void;
  getCurrentTranslation: () => string;
  getAllTranslations: () => string[];
};

export function usei18n(): i18nHook {
  const { t } = useTranslation();
  const context = useI18next();

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
    return context.languages;
  }

  return { getTranslationFor, changeTranslationTo, getCurrentTranslation, getAllTranslations };
}
