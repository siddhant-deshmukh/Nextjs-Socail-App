'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import Calender from './Calender'

export function TopBarComponent() {
  const searchParams = useSearchParams()
  const modalName = searchParams.get("modal")

  return (
    // py-1.5 md:py-5
    <div className='border-b border-b-gray-200 dark:border-b-gray-800 w-full bg-base-main flex items-center justify-between  px-5 h-[var(--top-bar-height)] md:space-x-5'>
      {/* For small size of screen navbar slider will be appear so here is the modal for that */}

      <div className='flex items-center w-full justify-between'>
        {
          typeof modalName != 'string' &&
          <>
            {/* Search bar */}
            <div className='w-48 xs:w-full max-w-96 md:w-96 bg-[#FCFCFD] dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-3xl'>
              <div className='flex px-2 items-center py-2 md:py-3 md:px-4 space-x-3'>
                <img className='w-[17px] md:w-[24px] aspect-square' src="/search.svg" width={24} height={24} alt="search icon" />
                <input className='outline-none text-black dark:text-white text-xs md:text-sm bg-transparent w-full' type="text" placeholder='search' />
              </div>
            </div>

            {/* Calender */}
            <div className='hidden xl:block'>
              <Calender />
            </div>
          </>
        }
        {
          typeof modalName === 'string' &&
          <div className='text-black dark:text-white flex space-x-5 sm:space-x-10 items-center'>
            <Link href={'/'} className='w-8 h-8 rounded-md flex items-center justify-center '>
              <svg width="24" height="12" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16825 7.96846C4.30924 7.96846 4.42203 7.96846 4.53483 7.96846C10.8794 7.96846 17.231 7.96846 23.5756 7.96846C23.7237 7.96846 23.8788 7.96846 24.0197 7.94731C24.6119 7.84862 24.9855 7.41155 24.9996 6.81939C25.0137 6.24837 24.626 5.7831 24.0409 5.67031C23.8717 5.63506 23.7096 5.63506 23.5404 5.63506C17.2028 5.63506 10.8653 5.63506 4.52072 5.63506C4.40793 5.63506 4.29514 5.63506 4.1753 5.63506C4.1894 5.47998 4.29514 5.43063 4.36564 5.36013C5.47946 4.24631 6.59329 3.13953 7.70712 2.01865C8.30633 1.41239 8.17943 0.495952 7.46038 0.129376C7.01626 -0.103259 6.48754 -0.0186644 6.09982 0.354961C5.78964 0.651042 5.48651 0.961221 5.18338 1.26435C3.66068 2.78705 2.13798 4.30975 0.615281 5.83245C0.248705 6.19903 0.0301691 6.60085 0.192309 7.13662C0.262805 7.3622 0.396746 7.54549 0.558886 7.70763C2.39177 9.54051 4.22464 11.3804 6.05752 13.2133C6.47345 13.6292 6.91757 13.7138 7.37579 13.4953C7.84106 13.2768 8.11599 12.8115 8.07369 12.3039C8.04549 11.9867 7.86925 11.747 7.65777 11.5355C6.55804 10.4358 5.45831 9.33607 4.35859 8.23634C4.30219 8.16585 4.21055 8.1165 4.16825 7.96846Z" fill="currentColor" />
              </svg>
            </Link>
            <h1 className='text-lg sm:text-xl md:text-2xl  font-bold'>
              {modalName}
            </h1>
          </div>
        }
      </div>

      {/* User button */}
      <button
        onClick={() => {
          if (window.innerWidth <= 1280) {
            document.documentElement.style.setProperty("--nav-bar-modal-visibility", "block");
          }
        }}

        className='w-11 p-1 ml-2 xl:ml-2 rounded-full md:w-72 md:rounded-lg md:px-2.5 md:py-1.5 text-black dark:text-white bg-[#FCFCFD] dark:bg-gray-800 border-gray-300 dark:border-gray-700 flex items-center justify-between md:justify-between border'>
        <div className=' md:flex items-center justify-center md:justify-normal'>
          <div className='w-9 aspect-square'>
            <Image src={'/avatar.png'} alt='avatar logo' width={52} height={52} className='object-cover rounded-full md:rounded-md' />
          </div>
          <div className='text-left hidden md:block ml-0 md:ml-2'>
            <h4 className='text-[10px]'>Welcome back,</h4>
            <h2 className='text-base font-medium'>Akshita Patel</h2>
          </div>
        </div>
        <div className='hidden md:block'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 1E2875 */}
            <path d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z" fill="currentColor" />
          </svg>
        </div>
      </button>
    </div>
  )
}

export default function TopBar(){
  return <Suspense>
    <TopBarComponent />
  </Suspense>
}