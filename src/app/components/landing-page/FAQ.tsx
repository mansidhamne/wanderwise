import React from 'react'
import FAQCard from '../ui/FAQCard'
import SectionWrapper from '@/app/hoc/SectionWrapper';

const FAQ = () => {
  return (
    <div id="faq" className='flex flex-col md:flex-row px-8 md:px-32 py-20 justify-around'>
      <div className='flex flex-col items-center'>
        <h1 className='text-center md:text-left text-3xl font-semibold text-teal-800'>
          Frequently Asked Questions
        </h1>
        <img src="/images/faq.png" alt="faq" className='w-[300px] h-auto scale-x-[-1]'/>
      </div>
      <div className='flex flex-col gap-6 w-full md:w-1/2'>
        {faqs.map((faq, index) => (
          <div key={index}>
            <FAQCard faq={faq}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(FAQ, "faq");

const faqs = [
  {
    question: "How does WanderWise work?",
    answer: "Navigate to the Buddy and start answering the questions. You can follow the fixed format or prompt your own questions. Once you are satisfied with your itinerary, you can click export to download your itinerary."
  },
  {
    question: "Do I have to pay anything?",
    answer: "Nope, all services are completely free!",
  },
  {
    question: "Can I trust the information on this site?",
    answer: "Yes, we only use the most reliable sources for our information."
  }
]