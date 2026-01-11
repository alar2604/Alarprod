export const defaultLocale = 'ta';
export const locales = ['ta', 'en'] as const;
export type Locale = (typeof locales)[number];

export const getDictionary = async (locale: Locale) => {
  const dictionaries = {
    ta: () => import('@/dictionaries/ta.json').then((module) => module.default),
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
  };
  
  return (dictionaries[locale] || dictionaries.ta)();
};
