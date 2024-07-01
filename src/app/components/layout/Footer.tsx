import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-teal-800 py-10 px-8 md:px-32 w-screen flex flex-col'>
        <div className='flex flex-col md:flex-row pb-5 gap-5 md:gap-0 justify-between items-center'>
          <div className='flex flex-col gap-1 text-teal-100 font-medium items-center md:items-start'>
            <img src="/images/logo-white.png" alt="" className='w-[200px]'/>
            <h3>Your one stop travel companion.</h3>
          </div>
          <div className='flex flex-col md:flex-row gap-2 md:gap-5 text-white items-center'>
            <Link href="#">Contact Us</Link>
            <div className='w-2 h-2 bg-white/80 rounded-full hidden md:block'></div>
            <Link href="#">Privacy Policy</Link>
            <div className='w-2 h-2 bg-white/80 rounded-full hidden md:block'></div>
            <Link href="#">Terms and Conditions</Link>
          </div>

        </div>
        <div className='border-t-[1px] pt-7 border-teal-100/20 text-center text-white'>© WanderWise, 2024. All rights reserved.</div>
    </div>
  )
}

export default Footer