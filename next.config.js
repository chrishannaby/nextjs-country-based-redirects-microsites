const { LOCALES, DEFAULT_LOCALE, STORE_COUNTRY } = process.env;

const locales = LOCALES.split(",");

module.exports = {
  basePath: `/${STORE_COUNTRY}`,
  i18n: {
    locales,
    defaultLocale: DEFAULT_LOCALE,
    localeDetection: false,
  },
};
