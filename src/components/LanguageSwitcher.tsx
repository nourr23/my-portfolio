// "use client";

// import { useRouter, useParams } from "next/navigation";
// import { TfiWorld } from "react-icons/tfi";

// export const LanguageSwitcher = () => {
//   const router = useRouter();

//   const changeLanguage = (locale: string) => {
//     router.push(`/${locale}`);
//   };

//   const params = useParams();
//   const locale = params.locale; // Get the current locale from the URL

//   return (
//     <div className="mx-auto flex  max-w-screen-sm items-center justify-center">
//       <div className=" p-[1px] w-[64px] rounded-full bg-gradient-to-r from-secondary-500 via-secondary-500 to-primary-500 ">
//         <div className=" h-full w-full rounded-2xl bg-dark-300 px-2 py-1">
//           <button
//             onClick={() =>
//               locale === "en" ? changeLanguage("fr") : changeLanguage("en")
//             }
//             className="text-white text-[11px] w-full flex items-center justify-between gap-x-2"
//           >
//             <div>{locale === "en" ? "ENG" : "FRA"}</div>
//             <TfiWorld color="white" size={14} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { TfiWorld } from "react-icons/tfi";

const locales = ["en", "fr"] as const;
type Locale = (typeof locales)[number];

const languageNames = {
  en: "EN",
  fr: "FR",
};

export const LanguageSwitcher = () => {
  const locale = useLocale();
  // const t = useTranslations("LanguageSwitcher");
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    // Persist preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Smart route preservation
    const path = window.location.pathname;
    const pathWithoutLocale = path
      .split("/")
      .filter((part) => !locales.includes(part as Locale))
      .join("/");
    router.replace(`/${newLocale}${pathWithoutLocale || "/"}`);
  };

  return (
    <div className="relative group flex flex-col justify-center">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const menu = e.currentTarget.nextElementSibling as HTMLElement;
          menu.classList.toggle("hidden");
        }}
        role="button"
        aria-haspopup="true"
        aria-label={"change_language"}
        className="flex items-center gap-2 p-2 text-white uppercase text-xs"
      >
        <TfiWorld size={14} />
        {/* {languageNames[locale]} */}
        {locale}
        <span aria-hidden>▼</span>
      </button>

      <ul
        role="menu"
        className="absolute hidden rounded group-hover:block w-full overflow-hidden bg-white shadow-lg z-10  top-[36px] left-0"
      >
        {locales.map((lang) => (
          <li key={lang}>
            <button
              onClick={() => switchLanguage(lang)}
              role="menuitem"
              disabled={lang === locale}
              className={`w-full text-left p-2 text-black text-xs ${
                lang === locale ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              lang={lang}
            >
              {languageNames[lang]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
