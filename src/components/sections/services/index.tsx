import { ServicesCard } from "@/components/services-card";
import { CgWebsite } from "react-icons/cg";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";

export const Services = ({
  messages,
}: {
  messages: Record<string, string>;
}) => {
  const servecies = [
    {
      id: 1,
      title: `${messages.services_1_title}`,
      description: `${messages.services_1_description}`,
    },
    {
      id: 2,
      title: `${messages.services_2_title}`,
      description: `${messages.services_2_description}`,
    },
    {
      id: 3,
      title: `${messages.services_3_title}`,
      description: `${messages.services_3_description}`,
    },
  ];
  return (
    <div className="border-b border-gray-800 w-full flex justify-center">
      <div className="max-w-[1080px] small:px-2 md:py-20 py-4 w-full md:px-6 px-2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-secondary-500/20 via-dark-300  to-dark-300">
        <div className="bg-gradient-to-r from-25% from-primary-500 via-secondary-500 to-secondary-500 inline-block text-transparent bg-clip-text text-2xl md:text-5xl uppercase">
          Services
        </div>
        <div className="w-full flex flex-col gap-y-7 md:gap-y-16 mt-8 relative items-center">
          <div className="absolute w-[1px] h-full bg-gray-200"></div>
          <div className="relative flex w-full md:justify-start justify-center">
            <ServicesCard object={servecies[0]}>
              <CgWebsite className="text-2xl text-secondary-500" />
            </ServicesCard>
          </div>
          <div className="relative flex w-full md:justify-end justify-center">
            <ServicesCard object={servecies[1]}>
              <FiSmartphone className="text-2xl text-secondary-500" />
            </ServicesCard>
          </div>
          <div className="relative flex w-full md:justify-start justify-center">
            <ServicesCard object={servecies[2]}>
              <IoCodeSlashSharp className="text-2xl text-secondary-500" />
            </ServicesCard>
          </div>
        </div>
      </div>
    </div>
  );
};
