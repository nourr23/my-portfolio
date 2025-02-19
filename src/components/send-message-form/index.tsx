"use client";
export const SendMessageForm = () => {
  return (
    <div className="mt-6 flex flex-col gap-3 px-2 items-start">
      <div className=" w-full">
        <div className="text-white text-sm md:text-base">Name</div>
        <input className="w-full bg-transparent text-white border border-gray-600 rounded-md p-2" />
      </div>
      <div className=" w-full">
        <div className="text-white text-sm md:text-base">Email</div>
        <input className="w-full bg-transparent text-white border border-gray-600 rounded-md p-2" />
      </div>

      <div className=" w-full">
        <div className="text-white text-sm md:text-base">Message</div>
        <textarea className="w-full bg-transparent text-white border border-gray-600 rounded-md p-2" />
      </div>

      <div className=" p-[2px] mt-4 rounded-lg bg-gradient-to-r from-secondary-500 via-secondary-500 to-primary-500 ">
        <div className=" h-full w-full rounded-lg bg-dark-300 px-3 py-1">
          <button className="text-white uppercase text-base  justify-between gap-x-2">
            <div>SEND</div>
          </button>
        </div>
      </div>
    </div>
  );
};
