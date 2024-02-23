import React from 'react'
import Link from 'next/link'
import ChangeThemeBtn from './ChangeThemeBtn'
import NavLinksList from './NavLinksList'

export default function NavBar() {
  return (
    <div className='hidden z-[31] sm:block fixed border-r simple-border top-0 left-0 w-auto px-3 2xl:px-0 2xl:w-[296px] h-screen bg-base-main'>
      <div id="main-nav-container" className='flex flex-col  w-full items-center mt-0 2xl:mt-10 py-2 h-full justify-between max-h-none 2xl:max-h-[700px]'>
        <nav id="main-nav" className='w-auto 2xl:w-[233px] flex flex-col space-y-2.5'>
          <NavLinksList />
        </nav>

        <div className='special-keys-list flex flex-col space-y-2 mb-5 '>
          <ChangeThemeBtn />
          <button className='flex 2xl:mt-14 items-center rounded-full 2xl:rounded-[10px] space-x-2.5 w-auto 2xl:w-[232px] bg-[#E8E9FF] p-2 2xl:px-[16px] 2xl:py-[11px]'>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className='hidden 2xl:block text-sm'>Contact Support</span>
          </button>
        </div>
      </div>
    </div>
  )
}




const LinkStyles: React.CSSProperties = {
  // paddingLeft: "20px",
  // paddingRight: "20px",
  // paddingTop: "16px",
  // paddingBottom: "16px",
  // // background: "#7950F2",
  // borderRadius: "12px"
}
const LinkContentStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
}
const LinkContentTextStyle: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "16.8px",
  marginLeft: "16px",
  fontWeight: 600,
}