import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type HeaderProps = {
  messages: Record<string, string>;
  locale: string; // Adjust this based on your JSON structure
};
export const Header = ({ messages, locale }: HeaderProps) => {
  console.log("messages", messages);
  return (
    <div className=" fixed h-24 mx-auto justify-between self-center top-8 border-white border rounded-2xl w-full max-w-[1080px] flex items-center px-5">
      <div className="  text-white text-xl">Jouini Mohamed Nour</div>
      <div className="flex gap-x-4 ">
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
      </div>
      <div className=" flex justify-end">
        <LanguageSwitcher />
      </div>
    </div>
  );
};
