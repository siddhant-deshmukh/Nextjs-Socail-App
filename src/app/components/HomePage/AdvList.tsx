"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function AdvList() {
  const [leftEnd, setLeftEnd] = useState<boolean>(true)
  const [rightEnd, setRightEnd] = useState<boolean>(false)

  const scrollByValue = useRef<number>(100)
  const advListRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (advListRef.current) {
      scrollByValue.current = (advListRef.current.clientWidth*2)/3 
      window.addEventListener('resize', (event) => {
        // console.log(event, event.target?.height)
        if(advListRef.current){
          scrollByValue.current = (advListRef.current.clientWidth*2)/3 
        }
      })

      advListRef.current.addEventListener('scroll', () => {
        if (advListRef.current) {
          const scrollLeft = advListRef.current?.scrollLeft;
          if (scrollLeft === 0) setLeftEnd(true);
          else setLeftEnd(false)

          const scrollRight = advListRef.current?.scrollWidth - advListRef.current?.clientWidth - advListRef.current?.scrollLeft;
          if (scrollRight === 0) setRightEnd(true);
          else setRightEnd(false)
        }
      })
    }
  }, [advListRef])

  return (
    <div className='relative'>
      <div className='section-heading'>
        <h3>Advertisment</h3>
        <button>See all</button>
      </div>
      <div ref={advListRef} className="overflow-x-auto scroll-smooth no-scrollbar">
        <div className="flex space-x-5 w-fit py-10">
          {
            topAdvList.map((adv, index) => {
              return (
                // h-[212px]
                <div key={index} className="border ml-2 shadow-lg rounded-2xl overflow-hidden  ">
                  <div className="flex w-fit">
                    <div className='w-[150px] sm:w-[226px] aspect-[226/212]'>
                      <Image className='flex-nowrap object-cover' src={adv.imgSrc} width={226} height={212} alt="" />
                    </div>
                    <div className="p-2.5 sm:p-5 w-[200px] sm:w-[274px]">
                      <h4 className="text-lg sm:text-2xl font-semibold text-[#22285E]">{adv.name}</h4>
                      <p className="text-sm font-medium sm:text-base text-[#A0A3BD]">{adv.desc}</p>
                      <div id="visit-footer" className="flex mt-3 justify-between space-x-2">
                        <button className="view-btn py-2.5 sm:py-4 w-full">
                          Visit
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
                    <button
                      hidden={leftEnd}
                      onClick={() => {
                        if (advListRef.current) {
                          advListRef.current.scrollLeft -= 500
                          console.log("Left", advListRef.current.scrollLeft)
                        }
                      }}
                      className='absolute z-20 top-1/2 p-2 bg-purple-700 bg-opacity-50 aspect-square rounded-full left-2.5 sm:left-10'>
                      <svg className='w-4 h-2.5 sm:w-7 sm:h-4' viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path strokeWidth={5} d="M15.4141 1.2721C15.789 1.64715 15.9997 2.15577 15.9997 2.6861C15.9997 3.21642 15.789 3.72504 15.4141 4.1001L5.5141 14.0001L15.4141 23.9001C15.7784 24.2773 15.98 24.7825 15.9754 25.3069C15.9709 25.8313 15.7605 26.3329 15.3897 26.7037C15.0189 27.0746 14.5173 27.2849 13.9929 27.2894C13.4685 27.294 12.9633 27.0924 12.5861 26.7281L1.2721 15.4141C0.897154 15.039 0.686523 14.5304 0.686523 14.0001C0.686523 13.4698 0.897154 12.9612 1.2721 12.5861L12.5861 1.2721C12.9612 0.897154 13.4698 0.686523 14.0001 0.686523C14.5304 0.686523 15.039 0.897154 15.4141 1.2721Z" fill="white" />
                      </svg>
                    </button>
                    <button
                      hidden={rightEnd}
                      onClick={() => {
                        if (advListRef.current) {
                          advListRef.current.scrollLeft += 500
                          console.log("Right", advListRef.current.scrollLeft)
                        }
                      }}
                      className='absolute z-20 top-1/2 p-2 bg-purple-700 bg-opacity-50 aspect-square rounded-full right-2.5 sm:right-10'>
                      <svg className='w-4 h-2.5 sm:w-7 sm:h-4' viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path strokeWidth={5} d="M0.585904 26.7279C0.210962 26.3528 0.000331053 25.8442 0.0003311 25.3139C0.000331146 24.7836 0.210963 24.275 0.585904 23.8999L10.4859 13.9999L0.585906 4.0999C0.22159 3.7227 0.0200016 3.21749 0.0245583 2.6931C0.029115 2.16871 0.239453 1.66708 0.610269 1.29626C0.981085 0.925448 1.48271 0.715111 2.0071 0.710555C2.5315 0.705998 3.0367 0.907586 3.41391 1.2719L14.7279 12.5859C15.1028 12.961 15.3135 13.4696 15.3135 13.9999C15.3135 14.5302 15.1028 15.0388 14.7279 15.4139L3.4139 26.7279C3.03885 27.1028 2.53023 27.3135 1.9999 27.3135C1.46957 27.3135 0.960959 27.1028 0.585904 26.7279Z" fill="white" />
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const topAdvList = [
  { imgSrc: "/adv/adv-1.jpg", name: "Build your business", desc: "Shopify has all the tools you need to start, sell, market, and manage." },
  { imgSrc: "/adv/adv-2.jpg", name: "Libre Coffee", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
  { imgSrc: "/adv/adv-3.jpg", name: "KFC", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
]