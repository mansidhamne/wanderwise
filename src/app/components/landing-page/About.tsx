import SectionWrapper from '@/app/hoc/SectionWrapper'
import React from 'react'
import { WordsChange } from '../ui/WordsChange';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

const About = () => {
  const data=["time", "efforts", "money"];
        
  return (
    <div id="about-us" className='py-10 px-8 md:px-32'>
        <div className='flex flex-col md:flex-row gap-8 md:gap-36 items-start'>
            <div className='flex flex-col items-center md:items-start'>
                <h1 className='text-5xl font-bold text-teal-700 pb-8'>
                    Save 
                    <span>
                        <WordsChange words={data} duration={2000} className=''/>
                    </span>
                </h1>
                <p className='text-slate-600 text-lg text-justify pb-8'>
                    Say goodbye to traditional travel agents and hello to seamless trip planning all in one place. 
                    WanderWise empowers you to design your entire journey effortlessly, 
                    from itinerary creation to selecting accommodations and activities.
                    Harnessing powers of AI, WanderWise ensures that every aspect of your 
                    trip is personalized to your preferences and optimized for efficiency. 
                </p>
                <Link href="/buddy">
                    <button className='flex flex-row items-center gap-2 bg-teal-800 rounded-full px-6 md:px-4 py-2.5 text-white font-semibold hover:bg-teal-700'>
                        Try Now <FaArrowRight />
                    </button>
                </Link>
            </div>
            <img src="images/about.png" alt="about" className='h-[350px] md:h-[450px] w-[650px]'/>  
        </div>
    </div>
  )
}

export default SectionWrapper(About, "about-us")