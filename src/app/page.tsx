import Tabs from "./components/HomePage/Tabs";
import AdvList from "./components/HomePage/AdvList";
import StoryList from "./components/HomePage/StoryList";
import ArticleList from "./components/HomePage/ArticleList";

export default function Home() {

  return (
    <div id="home-main"  className="bg-main-1 w-full min-h-full">
      <main className="relative pl-0 sm:px-0 sm:pl-4 md:pl-10 flex flex-col">
        <div className="mt-14 pl-3">
          <h1 className="text-[#212121] text-2xl sm:text-4xl font-semibold">Hello Admin,</h1>
          <p className="text-[#A0A3BD] text-sm sm:text-lg mt-1 ">This is what we got you for today</p>
        </div>
        <div className="mt-10">
          <Tabs />
          <div className="mt-14">
            <ArticleList />
          </div>
          <div className="mt-14">
            <StoryList />
          </div>
          <div className="mt-14 mb-20">
            <AdvList />
          </div>
        </div>
      </main>
    </div>
  );
}
