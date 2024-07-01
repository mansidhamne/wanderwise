import SectionWrapper from '@/app/hoc/SectionWrapper'
import React from 'react'
import FeatureCard from '../ui/FeatureCard'
import { TiWeatherSunny } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMdCalendar } from "react-icons/io";

const Features = () => {
    const styles = {
        backgroundColor: "rgb(204, 251, 241)",
        backgroundImage: "radial-gradient(at 86.84% 12.33%, rgb(17, 94, 89) 0, transparent 100%), radial-gradient(at 6.31% 91.00%, rgb(13, 148, 136) 0, transparent 34%)"
    }

  return (
    <div id="features" className='relative py-20 px-8 md:px-32 flex flex-col justify-center' style={styles}>
        <h1 className='text-center text-3xl md:text-4xl font-semibold text-white px-0 md:px-12 leading-1 pb-10 md:pb-20'>
            Explore custom itinerarys based on season, <br className='hidden md:block'/> budget and holiday duration.
        </h1>
        <div className='px-2 md:px-6 flex flex-col md:flex-row gap-8 justify-between'>
            {features.map((feature, index) => (
                <div key={index} className='flex justify-center'>
                    <FeatureCard feature={feature}/>
                </div>
            ))}
        </div>
        <img
            src="/images/paper-plane.png"
            alt="Paper plane"
            className="invert absolute top-0 right-0 rotate-180 w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-32"
        />
        <img
            src="/images/paper-plane.png"
            alt="Paper plane"
            className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-28"
        />
    </div>
  )
}

export default SectionWrapper(Features, "features")

const features = [
    {
        title: "Choice of Season",
        description: "Get suggestions to cities based on the season you are planning to travel.",
        image: "/images/season.jpg",
        icon: <TiWeatherSunny />
    },
    {
        title: "Customized Budget",
        description: "Choose your budget and we will create an itinerary that fits it.",
        image: "/images/budget.jpg",
        icon: <GiTakeMyMoney />,
    },
    {
        title: "Customised Duration",
        description: "Select your holidays and we will create an itinerary that fits your holidays.",
        image: "/images/holidays.png",
        icon: <IoMdCalendar/>,
    }
]