import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
const { NEXT_PUBLIC_STORE_COUNTRY } = process.env;

const locales = [
  {
    name: "en-US",
    path: "/",
    language: "en",
    country: "US",
  },
  {
    name: "es-US",
    path: "/es",
    language: "es",
    country: "US",
  },
  {
    name: "en-AT",
    path: "/at",
    language: "en",
    country: "AT",
  },
  {
    name: "de-AT",
    path: "/at/de",
    language: "de",
    country: "AT",
  },
];

function setLocaleCookies(locale) {
  const cookies = new Cookies();
  cookies.set("nf_country", locale.country, { path: "/" });
  cookies.set("nf_lang", locale.language, { path: "/" });
}

function clearLocaleCookies() {
  const cookies = new Cookies();
  cookies.remove("nf_country");
  cookies.remove("nf_lang");
}

export default function Home() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>{`${NEXT_PUBLIC_STORE_COUNTRY} ${locale}`}</title>
      </Head>
      <main>
        <h1>
          Country is {NEXT_PUBLIC_STORE_COUNTRY}
          <br /> Locale is {locale}
        </h1>
        <ul>
          {locales.map((locale) => {
            return (
              <li key={locale.name}>
                <button
                  onClick={() => {
                    setLocaleCookies(locale);
                    window.location.replace(
                      window.location.origin + locale.path
                    );
                  }}
                >
                  Set locale to {locale.name}
                </button>
              </li>
            );
          })}

          <li>
            <button onClick={() => clearLocaleCookies()}>
              Clear locale cookies
            </button>
          </li>
        </ul>
      </main>
    </>
  );
}
