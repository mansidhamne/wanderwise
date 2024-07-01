import React from 'react'

interface Feature{
    title: string,
    description: string,
    image: string,
    icon: any       
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  
    return (
     <>
      <div className='relative w-full max-w-[350px] hover:max-w-[500px] transition hover:cursor-pointer'>
      <div className='h-[400px] overflow-hidden rounded-xl shadow-sm'>
        <img src={feature.image} className='object-cover h-full w-full' alt={feature.title} />
      </div>
      <div className='rounded-xl z-30 absolute inset-0 bg-black/30 hover:bg-black/50 flex flex-col justify-end text-white p-4'>
        <h1 className='text-2xl font-bold flex flex-row items-center gap-2'>{feature.title}{feature.icon}</h1>
        <p className='mt-2'>{feature.description}</p>
      </div>
    </div>
      </>
    );
  };
  
export default FeatureCard



