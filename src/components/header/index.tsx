"use client";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

type HeaderProps = {
  messages?: Record<string, string>;
  locale: string; // Adjust this based on your JSON structure
};

export const Header = ({ messages, locale }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  if (!messages) return null;
  const Links = () => {
    return (
      <>
        <Link className=" text-white uppercase text-sm" href={""}>
          {messages.services}
        </Link>
        <Link
          className=" text-white uppercase text-sm"
          href={`${locale}/technologies`}
        >
          {messages.technologies}
        </Link>
        <Link
          className=" text-white uppercase text-sm"
          href={`${locale}/projects`}
        >
          {messages.projects}
        </Link>
        <Link
          className=" text-white uppercase text-sm"
          href={`${locale}/about`}
        >
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
      <div className="  text-white text-sm md:text-xl">Jouini Mohamed Nour</div>
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
