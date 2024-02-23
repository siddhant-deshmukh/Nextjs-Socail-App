'use client'

import Image from 'next/image';
import React, { Suspense } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function StoryComponent({ story, index }: {
  index: number
  story: {
    imgSrc: string;
    name: string;
    topic: string;
    type: string;
  }
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div
      //group transition-all duration-200 scale-100 hover:scale-105
      className=" flex flex-col w-[260px] sm:w-[340px] aspect-[340/500] bg-transparent">
      <div className="relative rounded-xl overflow-hidden">
        <Image src={story.imgSrc} alt="" className="-z-10 object-cover" width={340} height={500} />
        <div className="z-10 w-[260px] sm:w-[340px] aspect-[340/500] absolute top-0 left-0">
          <div className="flex flex-col h-full justify-between p-3">

            <div className="flex items-center justify-end space-x-3">
              <div className="flex bg-[#EDEEED] py-1.5 px-2.5 space-x-1.5 rounded-md items-center">
                <Image className='object-cover' src={'/eye.svg'} alt="" width={16} height={16} />
                <span className="text-[##9058FF] text-xs">428</span>
              </div>
              <div className="flex bg-[#EDEEED] py-1.5 px-2.5 space-x-1.5 rounded-md">
                <Image className='object-cover' src={'/chart.svg'} alt="" width={16} height={16} />
              </div>
            </div>

            <div className="text-white text-lg sm:text-2xl font-semibold" >
              <h1 className='text-left'>{story.name}</h1>
              <div>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-1 text-xs sm:text-base font-medium items-center">
                    <span className=" font-[900]">{story.topic}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="text-[#A0A3BD] font-bold">20 Sep 2022</span>
                  </div>
                  {
                    story.type === "published" &&
                    <div className={`bg-[#E4FFF8] text-[#0DAD82] hover:bg-[#0DAD82] hover:text-[#E4FFF8] transition-colors text-xs sm:text-base font-semibold rounded-md py-1.5 px-3 sm:py-2.5 sm:px-5 outline-none border-none`}>
                      Published
                    </div>
                  }
                  {
                    story.type === "created" &&
                    <div className={`bg-[#DAF1FB] text-[#58A4FF] hover:bg-[#58A4FF] hover:text-[#DAF1FB] transition-colors text-xs sm:text-base font-semibold rounded-md py-1.5 px-3 sm:py-2.5 sm:px-5 outline-none border-none`}>
                      Created
                    </div>
                  }
                  {
                    story.type === "draft" &&
                    <div className={`bg-[#F4F4F4] text-[#A0A3BD] hover:bg-[#A0A3BD] hover:text-[#F4F4F4] transition-colors text-xs sm:text-base font-semibold rounded-md py-1.5 px-3 sm:py-2.5 sm:px-5 outline-none border-none`}>
                      Draft
                    </div>
                  }
                </div>
              </div>
              <div className="flex mt-3 justify-between space-x-2">
                <button
                  onClick={() => {
                    const params = new URLSearchParams(searchParams.toString())
                    params.set('modal', 'Story')
                    params.set('storyUrl', story.name)
                    params.set('storyIndex', index.toString())
                    params.set('storyImgSrc', story.imgSrc)
                    params.set('storyHeading', story.name)
                    params.set('storyTopic', story.topic)
                    params.set('storyName', story.name)

                    router.push(pathname + "?" + params)
                  }}
                  className="view-btn py-2.5 sm:py-4 w-full">
                  View
                </button>
                <button className="three-dot">
                  <svg width="20" height="6" viewBox="0 0 21 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.21239" cy="3.49996" r="2.915" fill="currentColor" />
                    <circle cx="10.4996" cy="3.49996" r="2.915" fill="currentColor" />
                    <circle cx="17.7876" cy="3.49996" r="2.915" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Story({ story, index }: {
  index: number
  story: {
    imgSrc: string;
    name: string;
    topic: string;
    type: string;
  }
}) {
  return <Suspense>
    <StoryComponent story={story} index={index} />
  </Suspense>
}
