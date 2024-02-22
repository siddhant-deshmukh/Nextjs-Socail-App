"use client"

import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

export default function StoryModal() {

  const searchParams = useSearchParams()

  const storyUrl = searchParams.get('storyUrl')
  const storyIndex = searchParams.get('storyIndex')
  const storyImgSrc = searchParams.get('storyImgSrc')
  const storyHeading = searchParams.get('storyHeading')
  // const { storyImgSrc, storyHeading, storyUrl, storyIndex } = router.query

  useEffect(() => {
    // console.log(storyImgSrc, storyHeading, storyUrl, storyIndex)
    const homeMain = document.getElementById("home-main")
    if (!homeMain) return;
    if (storyImgSrc && storyHeading && storyUrl && storyIndex) {
      homeMain.style.display = "hidden"
    } else {
      homeMain.style.display = "block"
    }
  }, [storyImgSrc, storyHeading, storyUrl, storyIndex])

  if (storyImgSrc && storyHeading && storyUrl && storyIndex) {
    return (
      <div
        hidden={(storyImgSrc && storyHeading && storyUrl && storyIndex) ? false : true}
        className='absolute top-0 left-0 z-20 w-full img-modal-height'>
        <div className=" bg-base-1 w-full h-full pb-5">
          <div className="px-2 xs:px-10 pt-2.5 pb-5 img-modal-height flex flex-col">
            <div className="flex flex-col space-y-2 sm:space-y-0  sm:flex-row justify-between">
              <div className="flex items-center space-x-2 xs:space-x-5">
                <div className="w-8 md:w-10 aspect-square rounded-full overflow-hidden">
                  <Image width={40} height={40} className="object-cover" src="/dp-avatar.jpg" alt="" />
                </div>
                <span className="font-semibold text-[#A0A3BD] dark:text-gray-100 text-xs xs:text-sm lg:text-xl">James&nbsp;Robert</span>
                <p className="font-medium text-[#58A4FF] dark:text-blue-400 text-[10px] xs:text-xs sm:text-sm lg:text-xl flex flex-wrap">Created on <span className='px-2'>13 January 2022</span></p>
              </div>
              <div className="flex  items-center justify-end sm:justify-normal space-x-2"> 
                <button className="view-btn flex items-center space-x-3 simple-border p-2.5 md:px-4 md:py-3">
                  <span>Accessibility</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z" fill="currentColor" />
                  </svg>
                </button>
                <button className="three-dot h-10">
                  <svg width="20" height="6" viewBox="0 0 21 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.21239" cy="3.49996" r="2.915" fill="currentColor" />
                    <circle cx="10.4996" cy="3.49996" r="2.915" fill="currentColor" />
                    <circle cx="17.7876" cy="3.49996" r="2.915" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-full w-auto md:w-full relative bg-transparent  flex justify-center mt-5">
              <div className="h-full relative flex space-x-0 md:space-x-10 items-center z-10">
                <button className="absolute inset-y-1/4 xs:inset-y-1/2 bg-opacity-50 md:bg-opacity-100 bg-base-main z-[25] left-2.5   md:static w-[30px] md:w-[60px] aspect-square p-2 md:p-[14px] rounded-xl bg-[#212121] dark:bg-white dark:bg-opacity-60">
                  <img className="w-[14px] hidden md:block md:w-8 aspect-square" src="/left.svg" />
                  <img className="w-[14px] block md:hidden md:w-8 aspect-square" src="/left-black.svg" />
                </button>
                <div className="my-2 h-full relative overflow-hidden rounded-[20px] flex items-center justify-center">
                  <div className="absolute top-5 w-[120px] md:w-[200px] h-[5px] flex justify-stretch space-x-[10px] z-20 mx-auto ">
                    <div className="h-[5px w-full rounded-[10px] bg-base-main"></div>
                    <div className="h-[5px w-full rounded-[10px] opacity-50 bg-base-main"></div>
                    <div className="h-[5px w-full rounded-[10px] opacity-50 bg-base-main"></div>
                  </div>
                  <div className="absolute bottom-5 w-full px-2 md:px-5">
                    <h1 className="text-[25px] md:text-[40px] font-bold text-white">
                      {storyHeading}
                    </h1>
                    <button className="text-[#9058FF] bg-[#F7EEFF] text-sm md:text-xl font-semibold py-2 md:py-4 w-28 md:w-[170px] rounded-md mt-5">
                      Business
                    </button>
                  </div>
                  {/* width={561} height={812} */}
                  <img className="object-cover aspect-auto h-full" src={storyImgSrc} alt="" />
                </div>
                <button className="absolute inset-y-1/4 xs:inset-y-1/2 bg-opacity-50 md:bg-opacity-100 bg-base-main z-[25] right-2.5  md:static w-[30px] md:w-[60px] aspect-square p-2 md:p-[14px] rounded-xl bg-[#212121] dark:bg-white dark:bg-opacity-60">
                  <img className="w-[14px] hidden md:block md:w-8 aspect-square" src="/right.svg" />
                  <img className="w-[14px] block md:hidden md:w-8 aspect-square" src="/right-black.svg" />
                </button>
              </div>
              {/* blur-sm bg-black opacity-60*/}
              <img className="absolute  hidden md:block w-full h-full  object-cover  object-center" src={storyImgSrc} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <div hidden={(storyImgSrc && storyHeading && storyUrl && storyIndex) ? false : true}
      className='absolute top-0 left-0 z-50 bg-black bg-opacity-50 w-full min-h-full'></div>
  }
}
