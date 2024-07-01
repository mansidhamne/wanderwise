"use client"

import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

interface FAQ{
    question: string,
    answer: string,
}

const FAQCard = ({faq} : {faq : FAQ}) => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div>
        <div className={`bg-white rounded-md shadow-lg flex flex-col w-full py-4 px-6 hover:cursor-pointer`}
        onClick={() => {
            setIsOpen(!isOpen);
        }}>
            <div className='flex flex-row items-center justify-between'>
                <h1 className='font-semibold text-slate-800'>{faq.question}</h1>
                {isOpen ? <FaMinus /> : <FaPlus />}
            </div>
        </div>
    {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0}}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0}}
          transition={{ type: "spring", opacity: 1, duration: 0.5, bounce: 0 }}
        >
            <div className='border-t-[1px] border-slate-100 bg-white py-4 px-6 shadow-lg text-slate-600'>
                {faq.answer}
            </div>
          </motion.div>
    )}
    </div>
  )
}

export default FAQCard