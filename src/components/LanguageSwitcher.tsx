"use client";

import { useRouter, useParams } from "next/navigation";
import { TfiWorld } from "react-icons/tfi";

export const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`);
  };

  const params = useParams();
  const locale = params.locale; // Get the current locale from the URL

  return (
    <div className="mx-auto flex  max-w-screen-sm items-center justify-center">
      <div className=" p-[1px] w-[64px] rounded-full bg-gradient-to-r from-secondary-500 via-secondary-500 to-primary-500 ">
        <div className=" h-full w-full rounded-2xl bg-dark-300 px-2 py-1">
          <button
            onClick={() =>
              locale === "en" ? changeLanguage("fr") : changeLanguage("en")
            }
            className="text-white text-[11px] w-full flex items-center justify-between gap-x-2"
          >
            <div>{locale === "en" ? "ENG" : "FRA"}</div>
            <TfiWorld color="white" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
