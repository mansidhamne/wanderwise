"use client"

import SectionWrapper from '@/app/hoc/SectionWrapper';
import React, { useState } from 'react'
import { FaPlaneDeparture } from "react-icons/fa";

const Demo = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        alert('Email sent successfully!');
        setEmail('');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending email.');
    }
  };

  return (
    <div id="demo" className='flex justify-center relative bg-demo-bg h-screen bg-cover px-8 md:px-32'>
      <div className='absolute inset-0 bg-teal-800/40'></div>
      <div className='z-30 flex flex-col mt-48 md:mt-20 gap-6 items-center'>
        <h1 className='font-semibold text-white text-3xl md:text-5xl text-center'>
          Don&apos;t wait any longer! Start your adventure right now and unlock unforgettable experiences.
        </h1>
        {submitted ? (
          <div className='text-2xl font-medium text-teal-100'>
            Can&apos;t wait to plan the perfect trip for you!
          </div>
        ) : (
          <>
            <h3 className='text-center font-medium text-teal-100 text-2xl'>Join the mailing list to be the first users of WanderWise!</h3>
            <div className='bg-black/80 text-white mt-4 px-6 py-2.5 rounded-full'>
              <form onSubmit={handleSubmit} className='flex items-center gap-4 md:gap-0'>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Drop your email address here :&#41;'
                  className='bg-transparent text-white placeholder-white/50 w-64 md:w-96 focus:outline-none focus:border-none'
                  required
                />
                <button type="submit"><FaPlaneDeparture /></button>
              </form>
            </div>
            </>
        )}
        
      </div>
      
    </div>
  )
}

export default SectionWrapper(Demo, "demo");