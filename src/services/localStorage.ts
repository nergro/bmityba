import { Locale } from 'types/locale';

export const setLocale = (locale: Locale): void => {
  localStorage.setItem('locale', JSON.stringify(locale));
};

export const getLocale = (): Locale | null => {
  const stringLocale = localStorage.getItem('locale');
  try {
    let json: Locale | null = null;
    if (stringLocale !== null) {
      json = JSON.parse(stringLocale) as Locale;
    }

    return json;
  } catch (err) {
    return null;
  }
};
