import React from 'react';
import { GrSubtractCircle } from "react-icons/gr";
const Work = () => {
  return (
    <div>
      <header>
        <div className='container mx-auto'>
                <div className=' md:flex space-x-5 gap-20 py-5 mb-10'>
                    <h2 className='text-3xl font-primary  md:bg-color1 py-2 px-4 rounded-lg'>Our Working Process </h2>
                    <p className='font-primary text-xl'>Step-by-Step Guide to Achieving <br /> Your Business Goals</p>
        </div>

            <div className='px-10 py-10 border-b-4 border-black bg-color1 rounded-3xl space-y-5 shadow-xl mx-5 md:mx-0 lg:mx-0'>
                <div className=' flex justify-between  '>
                   <div className='flex flex-row gap-5 text-center justify-center'>
                     <h1 className='font-primary text-4xl'>01</h1>
                    <h2 className='font-primary text-2xl'>Consultaion</h2>
                   </div>
                    <GrSubtractCircle className='size-10 text-black  px-1 py-1' />
                </div>
                <hr className='bg-black'/>
                <p className='font-primary'>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. 
                    This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
            </div>
        </div>
      </header>
    </div>
  );
}

export default Work;
