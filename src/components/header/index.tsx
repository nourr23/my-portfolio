"use client";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const t = useTranslations("home");
  const Links = () => {
    return (
      <>
        <Link className=" text-white uppercase text-sm" href={"#services"}>
          {t("services")}
        </Link>
        <Link className=" text-white uppercase text-sm" href={`#skills`}>
          {t("technologies")}
        </Link>
        <Link className=" text-white uppercase text-sm" href={`/projects`}>
          {t("projects")}
        </Link>
        <Link className=" text-white uppercase text-sm" href={`#contact-me`}>
          contact
        </Link>
      </>
    );
  };
  return (
    <div className=" z-10 absolute h-20 mx-auto justify-between bg-dark-300 self-center top-8 border-white border rounded-2xl w-[calc(100%-16px)] md:w-full max-w-[1080px] flex items-center px-5">
      <div className=" md:hidden flex ">
        <button onClick={() => setOpen(true)}>
          <GiHamburgerMenu size={24} color="white" />
        </button>
      </div>
      <Link href={"/"} className="  text-white text-sm md:text-xl">
        Jouini Mohamed Nour
      </Link>
      <div className="md:flex gap-x-4 hidden ">
        <Links />
      </div>
      <div className=" flex justify-end">
        <LanguageSwitcher />
      </div>
      {/* Mobile Menu Overlay - Only renders when open */}
      {open && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black/90 gap-y-5 z-10 flex flex-col py-10 px-5"
          onClick={() => setOpen(false)}
        >
          <Links />
        </div>
      )}
    </div>
  );
};
