import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
            <div className='container mx-auto py-5 font-primary'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 items-center'>
                            <div className='items-center'>
                                <h2 className='font-primary text-4xl md:text-7xl lg:text-7xl'>Navigating the digital landscape  for success</h2>
                                <p className='font-primary py-10 text-xl'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO,
                                     PPC, social media marketing, and content creation.</p>
                                     <button className='bg-black rounded-xl text-white  py-4 px-6 font-primary cursor-pointer hover:bg-color1'>Book a consultation</button>
                            </div>
                            <div className='items-center justify-center'>
                                <img className="w-96 h-auto md:w-full lg:w-full items-center" src="/Illustration.png" alt="Logo" />
                            </div>
                    </div>

                    <div className='py-10 flex flex-wrap items-center justify-center gap-5 md:justify-between '>
                                <img className=" items-center w-auto" src="/Company logo.png" alt="Logo" />   
                                 <img className=" items-center w-auto" src="/Company logo (1).png" alt="Logo" />   
                                 <img className=" items-center w-auto" src="/Company logo (2).png" alt="Logo" />   
                                 <img className=" items-center w-auto" src="/Company logo (3).png" alt="Logo" />   
                                  <img className=" items-center w-auto" src="/Company logo (4).png" alt="Logo" />
                              <img className=" items-center w-auto" src="/Company logo (5).png" alt="Logo" />                                  
                    </div>
            </div>
        </header>
    </div>
  )
}

export default Header