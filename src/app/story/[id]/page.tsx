import Image from "next/image";
import TopBar from "@/app/components/TopBar";

export default function Page({ params }: {
  params: { id: string }
}) {

  return (
    <div className=" bg-main-1 w-full min-h-screen ">
      <TopBar  />
      <div className="px-2 xs:px-10 mt-10">
        <div className="flex flex-col space-y-2 sm:space-y-0  sm:flex-row justify-between">
          <div className="flex items-center space-x-2 xs:space-x-5">
            <div className="w-8 md:w-10 aspect-square">
              <Image width={40} height={40} className="object-cover" src="/dp-avatar.jpg" alt="" />
            </div>
            <span className="font-semibold text-[#A0A3BD] text-xs xs:text-sm lg:text-xl">James&nbsp;Robert</span>
            <p className="font-medium text-[#58A4FF] text-[10px] xs:text-xs sm:text-sm lg:text-xl flex flex-wrap">Created on <span>13 January 2022</span></p>
          </div>
          <div className="flex  items-center justify-end sm:justify-normal space-x-2">
            <button className="ml-auto xs:ml-0 flex items-center text-xs md:text-base space-x-3 border p-2.5 md:px-4 md:py-3">
              <span>Accessibility</span>
              <Image className='hidden md:block' src={'/down-arrow.svg'} alt="" width={20} height={20} />
            </button>
            <button className="bg-[#FAFAFA] items-center flex justify-center rounded-xl w-[50px] sm:w-[70px]">
              <Image className="" alt="" src={'/3-dot.svg'} width={20} height={6} />
            </button>
          </div>
        </div>
        <div className="h-full w-auto md:w-full relative bg-transparent  flex justify-center mt-5">
          <div className="h-full relative flex space-x-0 md:space-x-10 items-center z-10">
            <button className="absolute inset-y-1/4 xs:inset-y-1/2 bg-opacity-50 md:bg-opacity-100 bg-white z-[25] left-2.5   md:static w-[30px] md:w-[60px] aspect-square p-2 md:p-[14px] rounded-xl md:bg-[#212121]">
              <img className="w-[14px] hidden md:block md:w-8 aspect-square" src="/left.svg" />
              <img className="w-[14px] block md:hidden md:w-8 aspect-square" src="/left-black.svg" />
            </button>
            <div className="my-2 relative overflow-hidden rounded-[20px] flex items-center justify-center">
              <div className="absolute top-5 w-[120px] md:w-[200px] h-[5px] flex justify-stretch space-x-[10px] z-20 mx-auto ">
                <div className="h-[5px w-full rounded-[10px] bg-white"></div>
                <div className="h-[5px w-full rounded-[10px] opacity-50 bg-white"></div>
                <div className="h-[5px w-full rounded-[10px] opacity-50 bg-white"></div>
              </div>
              <div className="absolute bottom-5 w-full px-2 md:px-5">
                <h1 className="text-[25px] md:text-[40px] font-bold text-white">
                  Chez pierre restaurant in Monte Carlo by Vuidafieri Partner
                </h1>
                <button className="text-[#9058FF] bg-[#F7EEFF] text-sm md:text-xl font-semibold py-2 md:py-4 w-28 md:w-[170px] rounded-md mt-5">
                  Business
                </button>
              </div>
              <Image className="object-cover" src={'/story/story-img.jpg'} alt="" width={561} height={812} />
            </div>
            <button className="absolute inset-y-1/4 xs:inset-y-1/2 bg-opacity-50 md:bg-opacity-100 bg-white z-[25] right-2.5  md:static w-[30px] md:w-[60px] aspect-square p-2 md:p-[14px] rounded-xl md:bg-[#212121]">
              <img className="w-[14px] hidden md:block md:w-8 aspect-square" src="/right.svg" />
              <img className="w-[14px] block md:hidden md:w-8 aspect-square" src="/right-black.svg" />
            </button>
          </div>
          {/* blur-sm bg-black opacity-60*/}
          <img className="absolute  hidden md:block w-full h-full  object-cover  object-center" src={'/story/story-img-bg.jpg'} alt="" />
        </div>
      </div>
    </div>
  );
}
