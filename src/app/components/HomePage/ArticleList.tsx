import React from 'react'
import Article from './Article'

export default function ArticleList() {
  return (
    <>
      <div className='section-heading'>
        <h3>Top Articles</h3>
        <button>See all</button>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex mt-4 py-3 pl-3 space-x-2.5 sm:space-x-4 lg:space-x-9">
          {
            topArticleList.map((article, index) => {
              return (
                <Article article={article} key={index} />
              )
            })
          }

        </div>
      </div>
    </>
  )
}


const topArticleList = [
  {
    title: "7 Rules of Effective Branding",
    desc: "Why Branding matters for your Business",
    type: "created",
    date: "20 Sep 2022",
    topic: "BUISNESS",
    tags: ["Branding", "Communication", "Branding"],
    imgSrc: "/articles/articals-1.jpg"
  },
  {
    title: "Research on biodiversity an...",
    desc: "Lorem ipsum dolor sit amet, consectetur",
    type: "published",
    date: "20 Sep 2022",
    topic: "ECONOMY",
    tags: ["World", "Population"],
    imgSrc: "/articles/articals-2.jpg"
  },
  {
    title: "Close and historical ties to h...",
    desc: "Lorem ipsum dolor sit amet, consectetur",
    type: "published",
    date: "20 Sep 2022",
    topic: "POLITICS",
    tags: ["Politics", "Defence"],
    imgSrc: "/articles/articals-3.jpg"
  },
  {
    title: "7 Rules of Effective Branding",
    desc: "Why Branding matters for your Business",
    type: "created",
    date: "20 Sep 2022",
    topic: "BUISNESS",
    tags: ["Branding", "Communication", "Branding"],
    imgSrc: "/articles/articals-1.jpg"
  },
]