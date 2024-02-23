'use client'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Calender from './Calender'
import ChangeThemeBtn from './ChangeThemeBtn'
import NavLinksList from './NavLinksList'


export default function NavBarModal() {

  const modalRef = useRef<HTMLDivElement | null>(null)
  const navbarRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (modalRef.current != null && navbarRef.current != null) {
      // console.log("In here!")
      //@ts-ignore
      modalRef.current?.addEventListener('click', (event) => {
        if (event.target != navbarRef.current) {
          // setModalToggle(false)
          console.log("Changing property!")
          document.documentElement.style.setProperty("--nav-bar-modal-visibility", "hidden");
        }
      })
    }
  }, [navbarRef, modalRef])

  return (
    <div
      onClick={(e) => {
        if (navbarRef.current && navbarRef.current != e.target) {
          // setModalToggle(false)
          document.documentElement.style.setProperty("--nav-bar-modal-visibility", "hidden");
        }
      }}
      ref={modalRef} id="nav-bar-modal" className='w-full h-screen fixed top-0 left-0 bg-black z-[40] bg-opacity-25'>
      <div ref={navbarRef} className='text-[#53545C] dark:text-slate-400 block xl:hidden fixed border-r simple-border top-0 left-0 w-auto px-3 2xl:px-0 2xl:w-[296px] h-screen bg-base-main'>
        <div id="nav-modal-container" className='flex flex-col  w-full items-center py-2 h-full justify-between'>
          <nav id="nav-modal" className='w-[233px] text-sm flex flex-col space-y-2'>
            {/* <Link style={LinkStyles} href={"/"} className='relative nav-link-m'>
              <div style={LinkContentStyle} className='nav-content z-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z" fill="currentColor" />
                  <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="currentColor" />
                </svg>
                <span className='block' style={LinkContentTextStyle}>Dashboard</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='relative nav-link-m-selected'>
              <div style={LinkContentStyle} className='nav-content z-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="currentColor" />
                  <path d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z" fill="currentColor" />
                  <path d="M13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75Z" fill="currentColor" />
                  <path d="M11 17.75H7C6.59 17.75 6.25 17.41 6.25 17C6.25 16.59 6.59 16.25 7 16.25H11C11.41 16.25 11.75 16.59 11.75 17C11.75 17.41 11.41 17.75 11 17.75Z" fill="currentColor" />
                </svg>
                <span className='block' style={LinkContentTextStyle}>Content</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='relative nav-link-m'>
              <div style={LinkContentStyle} className='nav-content z-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.15963 11.62C9.12963 11.62 9.10963 11.62 9.07963 11.62C9.02963 11.61 8.95963 11.61 8.89963 11.62C5.99963 11.53 3.80963 9.25 3.80963 6.44C3.80963 3.58 6.13963 1.25 8.99963 1.25C11.8596 1.25 14.1896 3.58 14.1896 6.44C14.1796 9.25 11.9796 11.53 9.18963 11.62C9.17963 11.62 9.16963 11.62 9.15963 11.62ZM8.99963 2.75C6.96963 2.75 5.30963 4.41 5.30963 6.44C5.30963 8.44 6.86963 10.05 8.85963 10.12C8.91963 10.11 9.04963 10.11 9.17963 10.12C11.1396 10.03 12.6796 8.42 12.6896 6.44C12.6896 4.41 11.0296 2.75 8.99963 2.75Z" fill="currentColor" />
                  <path d="M16.5396 11.75C16.5096 11.75 16.4796 11.75 16.4496 11.74C16.0396 11.78 15.6196 11.49 15.5796 11.08C15.5396 10.67 15.7896 10.3 16.1996 10.25C16.3196 10.24 16.4496 10.24 16.5596 10.24C18.0196 10.16 19.1596 8.96 19.1596 7.49C19.1596 5.97 17.9296 4.74 16.4096 4.74C15.9996 4.75 15.6596 4.41 15.6596 4C15.6596 3.59 15.9996 3.25 16.4096 3.25C18.7496 3.25 20.6596 5.16 20.6596 7.5C20.6596 9.8 18.8596 11.66 16.5696 11.75C16.5596 11.75 16.5496 11.75 16.5396 11.75Z" fill="currentColor" />
                  <path d="M9.16961 22.55C7.20961 22.55 5.23961 22.05 3.74961 21.05C2.35961 20.13 1.59961 18.87 1.59961 17.5C1.59961 16.13 2.35961 14.86 3.74961 13.93C6.74961 11.94 11.6096 11.94 14.5896 13.93C15.9696 14.85 16.7396 16.11 16.7396 17.48C16.7396 18.85 15.9796 20.12 14.5896 21.05C13.0896 22.05 11.1296 22.55 9.16961 22.55ZM4.57961 15.19C3.61961 15.83 3.09961 16.65 3.09961 17.51C3.09961 18.36 3.62961 19.18 4.57961 19.81C7.06961 21.48 11.2696 21.48 13.7596 19.81C14.7196 19.17 15.2396 18.35 15.2396 17.49C15.2396 16.64 14.7096 15.82 13.7596 15.19C11.2696 13.53 7.06961 13.53 4.57961 15.19Z" fill="currentColor" />
                  <path d="M18.3396 20.75C17.9896 20.75 17.6796 20.51 17.6096 20.15C17.5296 19.74 17.7896 19.35 18.1896 19.26C18.8196 19.13 19.3996 18.88 19.8496 18.53C20.4196 18.1 20.7296 17.56 20.7296 16.99C20.7296 16.42 20.4196 15.88 19.8596 15.46C19.4196 15.12 18.8696 14.88 18.2196 14.73C17.8196 14.64 17.5596 14.24 17.6496 13.83C17.7396 13.43 18.1396 13.17 18.5496 13.26C19.4096 13.45 20.1596 13.79 20.7696 14.26C21.6996 14.96 22.2296 15.95 22.2296 16.99C22.2296 18.03 21.6896 19.02 20.7596 19.73C20.1396 20.21 19.3596 20.56 18.4996 20.73C18.4396 20.75 18.3896 20.75 18.3396 20.75Z" fill="currentColor" />
                </svg>
                <span className='block' style={LinkContentTextStyle}>Team</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='relative nav-link-m'>
              <div style={LinkContentStyle} className='nav-content z-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0001 22.7498H9.00014C7.68014 22.7498 6.58015 22.6198 5.65015 22.3398C5.31015 22.2398 5.09015 21.9098 5.11015 21.5598C5.36015 18.5698 8.39015 16.2197 12.0001 16.2197C15.6101 16.2197 18.6301 18.5598 18.8901 21.5598C18.9201 21.9198 18.7001 22.2398 18.3501 22.3398C17.4201 22.6198 16.3201 22.7498 15.0001 22.7498ZM6.72015 21.0598C7.38015 21.1898 8.13015 21.2498 9.00014 21.2498H15.0001C15.8701 21.2498 16.6201 21.1898 17.2801 21.0598C16.7501 19.1398 14.5601 17.7197 12.0001 17.7197C9.44015 17.7197 7.25015 19.1398 6.72015 21.0598Z" fill="currentColor" />
                  <path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.9999 14.92C9.60992 14.92 7.66992 12.97 7.66992 10.58C7.66992 8.19002 9.60992 6.25 11.9999 6.25C14.3899 6.25 16.3299 8.19002 16.3299 10.58C16.3299 12.97 14.3899 14.92 11.9999 14.92ZM11.9999 7.75C10.4399 7.75 9.16992 9.02002 9.16992 10.58C9.16992 12.15 10.4399 13.42 11.9999 13.42C13.5599 13.42 14.8299 12.15 14.8299 10.58C14.8299 9.02002 13.5599 7.75 11.9999 7.75Z" fill="currentColor" />
                </svg>
                <span className='block' style={LinkContentTextStyle}>User</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='relative nav-link-m'>
              <div style={LinkContentStyle} className='nav-content z-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 17.6998H6.21C2.41 17.6998 1.25 16.5398 1.25 12.7398V6.73979C1.25 2.93979 2.41 1.77979 6.21 1.77979H16.74C20.54 1.77979 21.7 2.93979 21.7 6.73979C21.7 7.14979 21.36 7.48979 20.95 7.48979C20.54 7.48979 20.2 7.14979 20.2 6.73979C20.2 3.79979 19.68 3.27979 16.74 3.27979H6.21C3.27 3.27979 2.75 3.79979 2.75 6.73979V12.7398C2.75 15.6798 3.27 16.1998 6.21 16.1998H10C10.41 16.1998 10.75 16.5398 10.75 16.9498C10.75 17.3598 10.41 17.6998 10 17.6998Z" fill="currentColor" />
                  <path d="M10 22.2199C9.59 22.2199 9.25 21.8799 9.25 21.4699V16.9399C9.25 16.5299 9.59 16.1899 10 16.1899C10.41 16.1899 10.75 16.5299 10.75 16.9399V21.4699C10.75 21.8899 10.41 22.2199 10 22.2199Z" fill="currentColor" />
                  <path d="M10 13.7002H2C1.59 13.7002 1.25 13.3602 1.25 12.9502C1.25 12.5402 1.59 12.2002 2 12.2002H10C10.41 12.2002 10.75 12.5402 10.75 12.9502C10.75 13.3602 10.41 13.7002 10 13.7002Z" fill="currentColor" />
                  <path d="M9.99999 22.2202H6.73999C6.32999 22.2202 5.98999 21.8802 5.98999 21.4702C5.98999 21.0602 6.32999 20.7202 6.73999 20.7202H9.99999C10.41 20.7202 10.75 21.0602 10.75 21.4702C10.75 21.8802 10.41 22.2202 9.99999 22.2202Z" fill="currentColor" />
                  <path d="M19.04 22.2198H15.49C12.72 22.2198 11.78 21.2798 11.78 18.5098V12.7998C11.78 10.0298 12.72 9.08984 15.49 9.08984H19.04C21.81 9.08984 22.75 10.0298 22.75 12.7998V18.5098C22.75 21.2898 21.81 22.2198 19.04 22.2198ZM15.49 10.5898C13.53 10.5898 13.28 10.8398 13.28 12.7998V18.5098C13.28 20.4698 13.53 20.7198 15.49 20.7198H19.04C21 20.7198 21.25 20.4698 21.25 18.5098V12.7998C21.25 10.8398 21 10.5898 19.04 10.5898H15.49Z" fill="currentColor" />
                  <path d="M17.3 18.9698C17.04 18.9698 16.78 18.8698 16.59 18.6798C16.5 18.5898 16.43 18.4798 16.38 18.3598C16.33 18.2298 16.3 18.0998 16.3 17.9698C16.3 17.7098 16.41 17.4498 16.59 17.2698C16.82 17.0398 17.17 16.9298 17.5 16.9898C17.56 17.0098 17.62 17.0298 17.68 17.0498C17.74 17.0798 17.8 17.1098 17.85 17.1398C17.91 17.1798 17.96 17.2198 18.01 17.2698C18.19 17.4498 18.3 17.7098 18.3 17.9698C18.3 18.0998 18.27 18.2298 18.22 18.3598C18.17 18.4798 18.1 18.5898 18.01 18.6798C17.96 18.7298 17.91 18.7698 17.85 18.7998C17.8 18.8398 17.74 18.8698 17.68 18.8998C17.62 18.9198 17.56 18.9398 17.5 18.9498C17.43 18.9698 17.37 18.9698 17.3 18.9698Z" fill="currentColor" />
                </svg>
                <span className='block' style={LinkContentTextStyle}>App/Web</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='relative nav-link-m'>
              <div style={LinkContentStyle} className='nav-content z-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.88 18.9001C6.47 18.9001 6.13 18.5601 6.13 18.1501V16.0801C6.13 15.6701 6.47 15.3301 6.88 15.3301C7.29 15.3301 7.63 15.6701 7.63 16.0801V18.1501C7.63 18.5701 7.29 18.9001 6.88 18.9001Z" fill="currentColor" />
                  <path d="M12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15C12.75 18.57 12.41 18.9 12 18.9Z" fill="currentColor" />
                  <path d="M17.12 18.9002C16.71 18.9002 16.37 18.5602 16.37 18.1502V11.9302C16.37 11.5202 16.71 11.1802 17.12 11.1802C17.53 11.1802 17.87 11.5202 17.87 11.9302V18.1502C17.87 18.5702 17.54 18.9002 17.12 18.9002Z" fill="currentColor" />
                  <path d="M6.88001 13.1799C6.54001 13.1799 6.24001 12.9499 6.15001 12.6099C6.05001 12.2099 6.29001 11.7999 6.70001 11.6999C10.38 10.7799 13.62 8.76992 16.09 5.89992L16.55 5.35992C16.82 5.04992 17.29 5.00992 17.61 5.27992C17.92 5.54992 17.96 6.01992 17.69 6.33992L17.23 6.87992C14.56 9.99992 11.04 12.1699 7.06001 13.1599C7.00001 13.1799 6.94001 13.1799 6.88001 13.1799Z" fill="currentColor" />
                  <path d="M17.12 9.5201C16.71 9.5201 16.37 9.1801 16.37 8.7701V6.6001H14.19C13.78 6.6001 13.44 6.2601 13.44 5.8501C13.44 5.4401 13.78 5.1001 14.19 5.1001H17.12C17.53 5.1001 17.87 5.4401 17.87 5.8501V8.7801C17.87 9.1901 17.54 9.5201 17.12 9.5201Z" fill="currentColor" />
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="currentColor" />
                </svg>
                <span className='block' style={LinkContentTextStyle}>Analytics</span>
                <span className='alert-b'>3</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='relative nav-link-m'>
              <div style={LinkContentStyle} className='nav-content z-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="currentColor" />
                  <path d="M10.76 16.3698C10.34 16.3698 9.95003 16.2698 9.60003 16.0698C8.80003 15.6098 8.34003 14.6698 8.34003 13.4798V10.5198C8.34003 9.33981 8.80003 8.3898 9.60003 7.9298C10.4 7.4698 11.44 7.53981 12.47 8.13981L15.04 9.6198C16.06 10.2098 16.65 11.0798 16.65 11.9998C16.65 12.9198 16.06 13.7898 15.04 14.3798L12.47 15.8598C11.89 16.1998 11.3 16.3698 10.76 16.3698ZM10.77 9.12981C10.61 9.12981 10.47 9.1598 10.36 9.2298C10.04 9.4198 9.85003 9.88981 9.85003 10.5198V13.4798C9.85003 14.1098 10.03 14.5798 10.36 14.7698C10.68 14.9598 11.18 14.8798 11.73 14.5598L14.3 13.0798C14.85 12.7598 15.16 12.3698 15.16 11.9998C15.16 11.6298 14.85 11.2298 14.3 10.9198L11.73 9.4398C11.37 9.2298 11.04 9.12981 10.77 9.12981Z" fill="currentColor" />
                </svg>
                <span className='block' style={LinkContentTextStyle}>Media</span>
                <span className='alert-b'>10</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='relative nav-link-m'>
              <div style={LinkContentStyle} className='nav-content z-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.02 20.5299C9.68999 20.5299 7.35999 20.1599 5.14999 19.4199C4.30999 19.1299 3.66999 18.5399 3.38999 17.7699C3.09999 16.9999 3.19999 16.1499 3.65999 15.3899L4.80999 13.4799C5.04999 13.0799 5.26999 12.2799 5.26999 11.8099V8.91992C5.26999 5.19992 8.29999 2.16992 12.02 2.16992C15.74 2.16992 18.77 5.19992 18.77 8.91992V11.8099C18.77 12.2699 18.99 13.0799 19.23 13.4899L20.37 15.3899C20.8 16.1099 20.88 16.9799 20.59 17.7699C20.3 18.5599 19.67 19.1599 18.88 19.4199C16.68 20.1599 14.35 20.5299 12.02 20.5299ZM12.02 3.66992C9.12999 3.66992 6.76999 6.01992 6.76999 8.91992V11.8099C6.76999 12.5399 6.46999 13.6199 6.09999 14.2499L4.94999 16.1599C4.72999 16.5299 4.66999 16.9199 4.79999 17.2499C4.91999 17.5899 5.21999 17.8499 5.62999 17.9899C9.80999 19.3899 14.24 19.3899 18.42 17.9899C18.78 17.8699 19.06 17.5999 19.19 17.2399C19.32 16.8799 19.29 16.4899 19.09 16.1599L17.94 14.2499C17.56 13.5999 17.27 12.5299 17.27 11.7999V8.91992C17.27 6.01992 14.92 3.66992 12.02 3.66992Z" fill="currentColor" />
                  <path d="M13.88 3.94018C13.81 3.94018 13.74 3.93018 13.67 3.91018C13.38 3.83018 13.1 3.77018 12.83 3.73018C11.98 3.62018 11.16 3.68018 10.39 3.91018C10.11 4.00018 9.80999 3.91018 9.61999 3.70018C9.42999 3.49018 9.36999 3.19018 9.47999 2.92018C9.88999 1.87018 10.89 1.18018 12.03 1.18018C13.17 1.18018 14.17 1.86018 14.58 2.92018C14.68 3.19018 14.63 3.49018 14.44 3.70018C14.29 3.86018 14.08 3.94018 13.88 3.94018Z" fill="currentColor" />
                  <path d="M12.02 22.8101C11.03 22.8101 10.07 22.4101 9.37002 21.7101C8.67002 21.0101 8.27002 20.0501 8.27002 19.0601H9.77002C9.77002 19.6501 10.01 20.2301 10.43 20.6501C10.85 21.0701 11.43 21.3101 12.02 21.3101C13.26 21.3101 14.27 20.3001 14.27 19.0601H15.77C15.77 21.1301 14.09 22.8101 12.02 22.8101Z" fill="currentColor" />
                </svg>
                <span className='block' style={LinkContentTextStyle}>Notification</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='relative nav-link-m'>
              <div style={LinkContentStyle} className='nav-content z-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.8067 7.62337L20.1842 6.54328C19.6577 5.62936 18.4907 5.31408 17.5755 5.83847V5.83847C17.1399 6.0951 16.6201 6.16791 16.1307 6.04084C15.6413 5.91378 15.2226 5.59727 14.9668 5.16113C14.8023 4.8839 14.7139 4.56815 14.7105 4.2458V4.2458C14.7254 3.72898 14.5304 3.22816 14.17 2.85743C13.8096 2.48669 13.3145 2.27762 12.7975 2.27783H11.5435C11.037 2.27783 10.5513 2.47967 10.194 2.8387C9.83669 3.19773 9.63717 3.68435 9.63961 4.19088V4.19088C9.6246 5.23668 8.77248 6.07657 7.72657 6.07646C7.40421 6.07311 7.08846 5.9847 6.81123 5.82017V5.82017C5.89606 5.29577 4.72911 5.61105 4.20254 6.52497L3.53435 7.62337C3.00841 8.53615 3.3194 9.70236 4.23 10.2321V10.2321C4.8219 10.5738 5.18653 11.2053 5.18653 11.8888C5.18653 12.5723 4.8219 13.2038 4.23 13.5456V13.5456C3.32056 14.0717 3.00923 15.2351 3.53435 16.1451V16.1451L4.16593 17.2344C4.41265 17.6795 4.8266 18.0081 5.31619 18.1472C5.80578 18.2863 6.33064 18.2247 6.77462 17.9758V17.9758C7.21108 17.7211 7.73119 17.6513 8.21934 17.782C8.70749 17.9126 9.12324 18.2328 9.37416 18.6714C9.5387 18.9486 9.62711 19.2644 9.63046 19.5868V19.5868C9.63046 20.6433 10.487 21.4998 11.5435 21.4998H12.7975C13.8505 21.4998 14.7055 20.6489 14.7105 19.5959V19.5959C14.7081 19.0878 14.9089 18.5998 15.2682 18.2405C15.6275 17.8812 16.1155 17.6804 16.6236 17.6829C16.9452 17.6915 17.2596 17.7795 17.5389 17.9392V17.9392C18.4517 18.4651 19.6179 18.1541 20.1476 17.2435V17.2435L20.8067 16.1451C21.0618 15.7073 21.1318 15.1858 21.0012 14.6961C20.8706 14.2065 20.5502 13.7891 20.111 13.5364V13.5364C19.6718 13.2837 19.3514 12.8663 19.2208 12.3767C19.0902 11.8871 19.1603 11.3656 19.4154 10.9277C19.5812 10.6381 19.8214 10.398 20.111 10.2321V10.2321C21.0161 9.70265 21.3264 8.54325 20.8067 7.63252V7.63252V7.62337Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12.1751" cy="11.8886" r="2.63616" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='block' style={LinkContentTextStyle}>Settings</span>
              </div>
            </Link> */}
            <NavLinksList />
          </nav>

          <div className='special-keys-list-m w-[232px] mt-5'>
            <Calender />
            <ChangeThemeBtn />
            <button className=''>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className=''>Contact Support</span>
            </button>
          </div>
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
  fontSize: "12px",
  marginLeft: "16px",
  fontWeight: 600,
}