import Image from 'next/image';
import React from 'react'

export default function Article({ article }: {
  article: {
    title: string;
    desc: string;
    type: string;
    date: string;
    topic: string;
    tags: string[];
    imgSrc: string;
  }
}) {
  return (
    // transition-all duration-200 scale-100 hover:cursor-pointer hover:scale-105
    <div className="flex  flex-col relative rounded-xl border bg-white p-0 sm:p-3 w-[320px] sm:w-[472px] ">
      <Image className="rounded-none sm:rounded-xl" src={article.imgSrc} alt="" width={448} height={228} />
      {/* Topic, Date, author */}
      <div className='p-3 sm:p-0'>
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-2 text-xs sm:text-sm font-medium items-center">
            <a href="#" className="text-[#9058FF] font-extrabold hover:underline">{article.topic}</a>
            <span className="w-1.5 h-1.5 bg-[#D9D9D9] rounded-full" />
            <span className="font-semibold">{article.date}</span>
          </div>
          <div className="flex space-x-2 items-center">
            <div className='w-[20px] sm:w-[30px] aspect-square'>
              <Image alt="avatar" className='object-cover' src={'/dp-avatar.jpg'} width={30} height={30} />
            </div>
            <span className="text-xs leading-none sm:text-base text-black font-semibold">Maria Doe</span>
          </div>
        </div>
        {/* Title */}
        <div className="flex justify-between items-center mt-3">
          <h1 className='inline-block sm:block text-[#22285E] text-[18px] sm:text-[24px] font-semibold'>
            {article.title}
          </h1>
          {
            article.type === "created" &&
            <span className='absolute top-1.5 right-1.5 sm:static'>
              <button className={`bg-[#E3D5FF] text-[#7950F2] hover:bg-[#7950F2] hover:text-white transition-colors font-semibold rounded-xl sm:rounded-lg text-xs py-1.5 px-2.5 sm:text-base sm:py-2.5 sm:px-5 outline-none border-none`}>
                Created
              </button>
            </span>
          }
          {
            article.type === "published" &&
            <span className='absolute top-1.5 right-1.5 sm:static'>
              <button className={`bg-[#E4FFF8] text-[#0DAD82] hover:bg-[#0DAD82] hover:text-white transition-colors font-semibold rounded-xl sm:rounded-lg text-xs py-1.5 px-2.5 sm:text-base sm:py-2.5 sm:px-5 outline-none border-none`}>
                Published
              </button>
            </span>
          }
        </div>
        {/* Description */}
        <div className=" mt-0">
          {article.desc}
        </div>
        {/* Tags */}
        <div className="flex space-x-3 mt-2 text-base leading-none font-semibold ">
          {
            article.tags.map((text, index) => {
              return <span key={index} className="text-xs py-1.5 px-2.5 sm:text-base sm:py-3 sm:px-4 border text-[#A0A3BD] bg-main-1 hover:bg-gray-100  transition">
                {text}
              </span>
            })
          }
        </div>
        {/* Footer btns */}
        <div className="flex mt-3 justify-between space-x-5">
          <button className="view-btn py-2.5 sm:py-4 w-[360px]">
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
  )
}
