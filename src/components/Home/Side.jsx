import React from 'react';

const Side = () => {
  return (
    <div>
        <header className='py-10 px-10'>
            <div className='container mx-auto px-10 py 10 bg-gray-100 rounded-lg shadow-md'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center py-10'>
                    <div>
                        <h2 className='font-primary text-xl font-semibold'>Let’s make things happen</h2>
                        <p className='font-primary py-5'>Contact us today to learn more about how our digital <br />
                    marketing services can help your business grow and succeed online.</p>
                    <button className=' bg-black text-white font-primary py-2 px-4 rounded-lg shadow-md'>Get your free proposal</button>
                    </div>
                    <div className='items-center justify-center mx-auto'>
                        <img className='size-60' src="/Illustration (6).png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </header>
      
    </div>
  );
}

export default Side;
