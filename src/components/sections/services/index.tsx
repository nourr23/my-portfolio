import { ServicesCard } from "@/components/services-card";
import { CgWebsite } from "react-icons/cg";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";

export const Services = () => {
  const servecies = [
    {
      id: 1,
      title: "Web Development",
      description:
        "I create websites based on your ready-made design. Whether it's a landing page or a business card website, I will make it look great and work smoothly on any device.",
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "I develop mobile applications based on your ready-made design. Whether it’s a business app or a personal project, I ensure a sleek and responsive user experience.",
    },
    {
      id: 3,
      title: "backend Development",
      description:
        "I develop robust and scalable APIs tailored to your needs. Whether it's for a web or mobile application, I ensure secure, high-performance, and well-documented endpoints.",
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
