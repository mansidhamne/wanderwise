"use client"

import React from 'react'
import { PlaceholdersAndVanishInput } from '../ui/Placeholder'
import { motion } from 'framer-motion'
import SectionWrapper from '@/app/hoc/SectionWrapper'

const Hero = () => {
    const placeholders = [
        "Which is the best place to go in summers?",
        "Is Kerela safe in monsoon?",
        "Help me plan a trip to Paris!"
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };
      const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
      };

    return (
        <div className="px-10 md:px-0 h-screen bg-hero-pattern bg-cover bg-center flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} 
                transition={{ duration: 2 }}
                className='md:px-0 z-20 text-white font-medium text-3xl md:text-4xl pb-10 text-center leading-1'
            >
                Let WanderWise, your travel buddy <br className='hidden md:block'/>
                help you plan your perfect trip <br className='hidden md:block'/>
                with ease.
                 
            </motion.h2>
            <PlaceholdersAndVanishInput 
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default Hero;