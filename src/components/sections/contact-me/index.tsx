"use client";
import { useState } from "react";
import { TbMessageDots } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";
import { SendMessageForm } from "@/components/send-message-form";

export const ContactMe = ({ messages }: { messages: any }) => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "+21694077836"; // The text you want to copy

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="border-b border-gray-800 w-full flex justify-center">
      <div className="max-w-[1080px] flex-wrap small:px-2 md:py-20 py-4 flex justify-between w-full md:px-11 px-2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-primary-500/10 via-dark-300  to-dark-300">
        <div className=" w-full md:w-[50%]">
          <div className="bg-gradient-to-r from-25% max-w-[390px] md:pr-1 from-primary-500 via-secondary-500 to-secondary-500 inline-block text-transparent bg-clip-text text-xl md:text-3xl uppercase">
            {messages.project_in_mind}
          </div>
          <div className="mt-6 items-center text-white text-base md:text-lg uppercase flex gap-x-4">
            <div>{messages.get_in_touch}</div>
            <TbMessageDots size={22} color="white" />
          </div>
          <div className="mt-8 flex w-full items-center">
            <div className=" w-[50%]">
              <div className="text-white uppercase text-xs md:text-sm">
                Contact
              </div>
            </div>
            <div className=" w-[50%]">
              <div className="text-white uppercase text-xs md:text-sm">
                {messages.my_online_presence}
              </div>
            </div>
          </div>

          <div className="mt-1 flex w-full items-center">
            <div className=" w-[50%]">
              <div className=" text-secondary-500 text-[10px] md:text-sm">
                nour.edaher.jouini@gmail.com
              </div>
            </div>
            <div className=" w-[50%]">
              <div className=" flex gap-x-2">
                <Link
                  href={"https://www.linkedin.com/in/nour-jouini-5252151a7/"}
                  target="_blank"
                >
                  <CiLinkedin size={24} color="white" />
                </Link>

                <Link
                  href={
                    "https://www.instagram.com/nour_codes?igsh=MTd5aGlxOTlzcXZqcA=="
                  }
                  target="_blank"
                >
                  <FiInstagram size={21} color="white" />
                </Link>
                <button
                  onClick={copyToClipboard}
                  className="group relative flex justify-center"
                >
                  <div className="absolute capitalize text-xs font-bold bottom-[-25px] whitespace-nowrap opacity-0 group-hover:opacity-100 text-white">
                    {copied ? "copied" : "Copie number"}
                  </div>
                  <FaWhatsapp size={22} color="white" />
                </button>
                <Link href={"https://github.com/nourr23"} target="_blank">
                  <FiGithub size={20} color="white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-[50%]">
          <div className="text-white text-lg md:text-xl">
            {messages.message_me}
          </div>
          <SendMessageForm messages={messages} />
        </div>
      </div>
    </div>
  );
};
