import React from 'react'
import Story from './Story'

export default function StoryList() {
  return (
    <>
      <div className='section-heading'>
        <h3>Top Stories</h3>
        <button>See all</button>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex w-fit mt-4 py-3 pl-3 space-x-9">
          {
            topStoriesList.map((story, index) => {
              return (
                <Story story={story} key={index} index={index} />
              )
            })
          }

        </div>
      </div>
    </>
  )
}

const topStoriesList = [
  { imgSrc: "/story/stories-1.jpg", name: "How 7 lines code turned into $36 Billion Empire", topic: "BUISNESS", type: "published" },
  { imgSrc: "/story/stories-2.jpg", name: "Chez pierre restaurant in Monte Carlo by Vuidafieri", topic: "BUISNESS", type: "created" },
  { imgSrc: "/story/stories-3.jpg", name: "Teknion wins Gold at 2022 International Design Awards", topic: "POLITICS", type: "draft" },
  { imgSrc: "/story/stories-4.jpg", name: "How 7 lines code turned into $36 Billion Empire", topic: "BUISNESS", type: "published" },
  { imgSrc: "/story/stories-2.jpg", name: "Chez pierre restaurant in Monte Carlo by Vuidafieri", topic: "BUISNESS", type: "created" },
]