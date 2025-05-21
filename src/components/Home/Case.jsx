import React from 'react';

const Case = () => {
  return (
    <div>
      <header>
        <div className='container mx-auto px-10 py-10 md:px-0'>
                <div className=' md:flex space-x-5 gap-20 py-10 '>
                    <h2 className='text-3xl font-primary  md:bg-color1 py-2 px-4 rounded-lg'>Case Studies</h2>
                    <p className='font-primary text-xl'>Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies</p>
        </div>
                <div className='grid grid-cols-1 md:grid-cols-3 bg-black rounded-2xl gap-5 shadow-xl py-10 px-10'>
                        <div className='flex gap-5'>
                            <p className='font-primary text-xl text-white'>For a local restaurant, we implemented a targeted PPC campaign that resulted in 
                                a 50% increase in website traffic and a 25% increase in sales.</p>
                                
                                 {/* <div  className='pt-6 flex justify-start items-center space-x-4'>
                                         
                                <a href="" className=' font-primary text-xl text-color1'>Learn more</a>
                                   <img className="items-center" src="/Icon.png" alt="Logo" /> 
                                   
                                 </div> */}
                                 <div className='border border-r-2 border-white h-28'></div>
                        </div>
                        

                         <div className='flex gap-5'>
                            <p className='font-primary text-xl text-white'>For a B2B software company, we developed an SEO strategy that resulted in a 
                                first page ranking for key keywords and a 200% increase in organic traffic.</p>
                                
                                 {/* <div  className='pt-6 flex justify-start items-center space-x-4'>
                                         
                                <a href="" className=' font-primary text-xl text-color1'>Learn more</a>
                                   <img className="items-center" src="/Icon.png" alt="Logo" /> 
                                   
                                 </div> */}
                                 <div className='border border-r-2 border-white h-28'></div>
                        </div>

                         <div className='flex gap-5'>
                            <p className='font-primary text-xl text-white'>For a national retail chain, we created a social media marketing campaign that increased followers 
                                by 25% and generated a 20% increase in online sales.</p>
                                
                                 {/* <div  className='pt-6 flex justify-start items-center space-x-4'>
                                         
                                <a href="" className=' font-primary text-xl text-color1'>Learn more</a>
                                   <img className="items-center" src="/Icon.png" alt="Logo" /> 
                                   
                                 </div> */}
                               
                        </div>
                        
                </div>
        </div>
      </header>
    </div>
  );
}

export default Case;
