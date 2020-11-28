import * as path from 'path';
import NextI18next from 'next-i18next';

export const nextI18next = new NextI18next({
  defaultLanguage: 'en',
  defaultNS: 'common',
  fallbackLng: 'en',
  localePath: path.resolve('./locales'),
  otherLanguages: ['vi'],
});

export const {
  appWithTranslation,
  Trans,
  useTranslation,
  withTranslation,
} = nextI18next;
