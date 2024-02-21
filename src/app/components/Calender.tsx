import React from 'react'

export default function Calender() {
  return (
    <div className='flex flex-col xl:flex-row space-x-0 text-sm space-y-1 xl:space-y-0 xl:text-base xl:space-x-5 items-center border border-[#A0A3BD] bg-[#FCFCFD] p-1.5 xl:py-4 xl:px-6 rounded-lg'>
      <div className='relative'>
        <input
          className='outline-none bg-transparent w-[110px] xl:w-[112px] leading-none p-0'
          placeholder='11/10/2022'
          defaultValue={'2022-10-11'}
          // pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-\d{4}"
          type='date' />
        <img className='absolute top-0 xl:top-0.5 w-5 xl:w-5 aspect-square right-0' alt='calender icon' src="/calendar.svg"/>
      </div>
      <span>OR</span>
      <div className='relative'>
        <input
          className='outline-none bg-transparent w-[110px] xl:w-[112px] leading-none p-0'
          placeholder='11/10/2022'
          defaultValue={'2022-10-11'}
          // pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-\d{4}"
          type='date' />
        <img className='absolute top-0 xl:top-0.5 w-5 xl:w-5 aspect-square right-0' alt='calender icon' src="/calendar.svg"/>
      </div>
    </div>
  )
}
