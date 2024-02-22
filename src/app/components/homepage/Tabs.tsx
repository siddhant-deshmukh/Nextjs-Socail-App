import React from 'react'

export default function Tabs() {
  return (
    <div className="pl-1.5 xs:pl-3 sm:mt-0 grid grid-cols-2 gap-0.5 xs:gap-2 md:gap-5 mr-2 md:mr-0 lg:gap-0 lg:flex justify-between max-w-[470px] sm:max-w-[650px] lg:max-w-[1250px] desktop:max-w-[1500px]">
      {
        tabsList.map(({ name, imgSrc, count }, index) => {
          return <div key={index} className="flex text-[#212121] dark:text-slate-100 simple-border mr-2 space-x-1.5 xl:space-x-3 items-center  rounded-[20px] w-full md:w-[290px] lg:w-[250px] xl:w-[290px] h-16 xs:h-20 sm:h-28 pl-1 sm:pl-3 lg:pl-1.5 xl:pl-3 desktop:px-0 desktop:py-0 desktop:pl-5 desktop:h-36 desktop:w-[350px] bg-base-main">
            <img className='w-[28px] xs:w-[40px] sm:w-[60px] lg:w-[52.5px] xl:w-[60px] desktop:w-[78px] aspect-square' src={imgSrc} alt="" />
            <div>
              <h1 className=" text-[12px] xs:text-[16px] sm:text-[24px] lg:text-[20px] xl:text-[24px] desktop:text-[28px] leading-5 sm:leading-10 font-[600]">{name}</h1>
              <h4 className=" text-xs  xs:text-sm xl:text-lg mt-0 xl:mt-1">{count} New Updates</h4>
            </div>
          </div>
        })
      }
    </div>
  )
}

const tabsList = [
  { name: "Article", imgSrc: "story/tabs/tab-article.svg", count: "4,950" },
  { name: "Categories", imgSrc: "story/tabs/tab-category.svg", count: "10,275" },
  { name: "Stories", imgSrc: "story/tabs/tab-stories.svg", count: "4,193" },
  { name: "Advertisements", imgSrc: "story/tabs/tab-adv.svg", count: "928" },
]