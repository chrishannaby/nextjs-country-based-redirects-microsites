const { LOCALES, DEFAULT_LOCALE, STORE_COUNTRY_PREFIX } = process.env;

const locales = LOCALES.split(",");

module.exports = {
  basePath: STORE_COUNTRY_PREFIX ? `/${STORE_COUNTRY_PREFIX}` : "/",
  i18n: {
    locales,
    defaultLocale: DEFAULT_LOCALE,
    localeDetection: false,
  },
};
