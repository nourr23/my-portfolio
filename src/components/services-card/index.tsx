import { ReactNode } from "react";
import { CgWebsite } from "react-icons/cg";

export const ServicesCard = ({
  object,
  children,
}: {
  object: { title: string; description: string; id: number };
  children: ReactNode;
}) => {
  return (
    <div className=" border-[1px] bg-dark-300 border-x-gray-800 rounded-xl px-6 py-4 w-full md:w-[60%]">
      <div className="flex gap-x-3 items-center">
        {children}
        <div className="text-lg text-white">{object.title}</div>
      </div>
      <div className="mt-2 text-white xsmall:text-sm text-xs ">
        {object.description}
      </div>
    </div>
  );
};
