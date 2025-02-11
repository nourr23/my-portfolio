import Image from "next/image";
import my_photo from "../../../../public/myPhoto5.png";
export const AboutMe = () => {
  return (
    <div className="w-full border-b border-[#3e4653] flex justify-center ">
      <div className="h-svh w-full md:justify-center justify-between gap-y-3 md:flex-row flex-col flex items-center max-w-[1080px]">
        <div className=" w-full md:h-full md:justify-center h-[55%] justify-end md:w-[50%] flex text-center flex-col gap-y-3 text-5xl md:text-6xl text-primary-500 ">
          <div className="bg-gradient-to-r from-25% from-primary-500 via-secondary-500 to-secondary-500 inline-block text-transparent bg-clip-text">
            FULLSTACK
          </div>
          <div className="bg-gradient-to-r from-25%  from-primary-500 via-secondary-500 to-secondary-500 inline-block text-transparent bg-clip-text">
            DEVELOPER
          </div>
          <div className="md:mt-8 text-white text-sm md:text-lg md:w-[420px] mx-auto">
            I am a fullstack developer with a passion for creating modern and
            responsive web and mobile applications.
          </div>
          <div className=" p-[2px] mt-4 mx-auto rounded-lg bg-gradient-to-r from-secondary-500 via-secondary-500 to-primary-500 ">
            <div className=" h-full w-full rounded-lg bg-dark-300 px-3 py-1">
              <button className="text-white uppercase text-base w-full flex items-center justify-between gap-x-2">
                <div>View my work</div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full relative md:h-full md:w-[50%] md:flex-1 flex items-center justify-center overflow-hidden">
          <div className="absolute h-[275px] text-white/10 text-lg italic text-center ">
            <div className=" bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-primary-500/20 via-dark-300  to-dark-300 px-4 rounded-md flex tracking-wider md:mt-14 h-full gap-y-4 md:gap-y-9 flex-col justify-center">
              <div>
                {
                  "<div className='bg-gradient-to-r from-25%  from-primary-500  text-transparent bg-clip-text'>          DEVELOPER </div>"
                }
              </div>
              <div>
                {
                  "<p className='w-full justify-center gap-y-3 md:flex-row flex-col-reverse'>    Test </p>"
                }
              </div>
              <div>{"console.log('newVar', let newVar = 0 | undefined);"}</div>
            </div>
          </div>

          <Image
            alt="my photo"
            className="md:absolute relative  bottom-[-20px] md:w-[400px] large:w-[460px]  w-[230px]  "
            src={my_photo}
            width={400}
            height={276}
          />
        </div>
      </div>
    </div>
  );
};
