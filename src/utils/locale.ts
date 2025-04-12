import { useTranslation } from 'react-i18next';

type Locale = {
  getTranslationFor: (key: string) => string;
  changeTranslationTo: (key: string) => void;
  getCurrentTranslation: () => string;
  getAllTranslations: () => readonly string[];
};

export function useLocale(): Locale {
  const { t, i18n } = useTranslation();

  function getTranslationFor(key: string): string {
    return t(key);
  }

  function changeTranslationTo(key: string): void {
    i18n.changeLanguage(key);
  }

  function getCurrentTranslation(): string {
    return i18n.language;
  }

  function getAllTranslations(): readonly string[] {
    return i18n.languages;
  }

  return { getTranslationFor, changeTranslationTo, getCurrentTranslation, getAllTranslations };
}
