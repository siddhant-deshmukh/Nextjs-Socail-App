import Script from "next/script";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import NavBar from "@/app/components/NavBar";

import "./globals.css";
import TopBar from "./components/TopBar";
import NavBarModal from "./components/NarBarModal";
import StoryModal from "./components/HomePage/StoryModal";
import Provider from "./provider";

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dash App",
  description: "Created by Siddhant Deshmukh",
  icons: "/vercel2.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="">
      <body className={`${urbanist.className}`} >
        <Provider>
          <NavBar />
          <NavBarModal />
          <div className="relative pl-0 pt-[59px] md:pt-[94px] sm:pl-14 2xl:pl-[296px] h-screen ">
            <div className="absolute left-0 w-full top-0 z-30 pl-0 sm:pl-14 2xl:pl-[296px]">
              <TopBar />
            </div>
            <div className="relative">
              <StoryModal />
            </div>
            <div className="max-h-full overflow-auto">
              {children}
            </div>
          </div>
        </Provider>
      </body>
      {/* <Script strategy="beforeInteractive" src="/detectDefaultTheme.js" /> */}
    </html>
  );
}
