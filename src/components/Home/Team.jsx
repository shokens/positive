import React from 'react';
import { CiLinkedin } from "react-icons/ci";
const Team = () => {
  return (
    <div>
       <header>
        <div className='container mx-auto py-10'>
                <div className=' md:flex space-x-5 gap-20 py-5'>
                    <h2 className='text-3xl font-primary  md:bg-color1 py-2 px-4 rounded-lg'>Team </h2>
                    <p className='font-primary text-xl'>Meet the skilled and experienced team behind our <br /> successful digital marketing strategies</p>
        </div>
            <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-5 gap-5 mx-5 space-y-10 md:space-y-0'>
                <div className='border border-b-4 border-black shadow-lg rounded-3xl px-5 py-5'>
                    <div className='flex justify-between'>
                        <div className='flex space-x-5 py-5'>
                            <img className=" items-center w-auto rounded-full" src="/ian-dooley-d1UPkiFd04A-unsplash 1.png" alt="Logo" /> 
                        <h3 className='pt-12 font-primary font-medium '>John Smith <br /><span>CEO and Founder</span> </h3>
                        </div>
                        
                        <CiLinkedin className='size-10 text-color1 bg-black rounded-full px-1 py-1'/>
                    </div>
                    <hr />
                    <div className='py-5 font-primary'>
                        <p>10+ years of experience in digital marketing. 
                        Expertise in SEO, PPC, and content strategy</p>
                    </div>
                </div>
                  <div className='border border-b-4 border-black shadow-lg rounded-3xl px-5 py-5'>
                    <div className='flex justify-between'>
                        <div className='flex space-x-5 py-5'>
                            <img className=" items-center w-auto rounded-full" src="/suad-kamardeen-khewjy5l4Zo-unsplash 2.png" alt="Logo" /> 
                        <h3 className='pt-12 font-primary font-medium '>Jane Doe <br /><span>Director of Operations</span> </h3>
                        </div>
                        
                        <CiLinkedin className='size-10 text-color1 bg-black rounded-full px-1 py-1'/>
                    </div>
                    <hr />
                    <div className='py-5 font-primary'>
                        <p>7+ years of experience in project management and team leadership. 
                            Strong organizational and communication skills</p>
                    </div>
                </div>
                  <div className='border border-b-4 border-black shadow-lg rounded-3xl px-5 py-5'>
                    <div className='flex justify-between'>
                        <div className='flex space-x-5 py-5'>
                            <img className=" items-center w-auto rounded-full" src="/christian-buehner-DItYlc26zVI-unsplash 1.png" alt="Logo" /> 
                        <h3 className='pt-12 font-primary font-medium '>Michael Brown <br /><span>Senior SEO Specialist</span> </h3>
                        </div>
                        
                        <CiLinkedin className='size-10 text-color1 bg-black rounded-full px-1 py-1'/>
                    </div>
                    <hr />
                    <div className='py-5 font-primary'>
                        <p>5+ years of experience in SEO and content creation.
                             Proficient in keyword research and on-page optimization</p>
                    </div>
                </div>

                   <div className='border border-b-4 border-black shadow-lg rounded-3xl px-5 py-5'>
                    <div className='flex justify-between'>
                        <div className='flex space-x-5 py-5'>
                            <img className=" items-center w-auto rounded-full" src="/feli-ramsanjami-agung-wUe_Q-t4-cI-unsplash 1.png" alt="Logo" /> 
                        <h3 className='pt-12 font-primary font-medium '>PPC Manager<br /><span>Emily Johnson</span> </h3>
                        </div>
                        
                        <CiLinkedin className='size-10 text-color1 bg-black rounded-full px-1 py-1'/>
                    </div>
                    <hr />
                    <div className='py-5 font-primary'>
                        <p>3+ years of experience in paid search advertising. 
                            Skilled in campaign management and performance analysis</p>
                    </div>
                </div>

                   <div className='border border-b-4 border-black shadow-lg rounded-3xl px-5 py-5'>
                    <div className='flex justify-between'>
                        <div className='flex space-x-5 py-5'>
                            <img className=" items-center w-auto rounded-full" src="/chanvre-quebec-mXu1SpzHq6w-unsplash 1.png" alt="Logo" /> 
                        <h3 className='pt-12 font-primary font-medium '>Brain Willams <br /><span>Social Media Specialist</span> </h3>
                        </div>
                        
                        <CiLinkedin className='size-10 text-color1 bg-black rounded-full px-1 py-1'/>
                    </div>
                    <hr />
                    <div className='py-5 font-primary'>
                        <p>4+ years of experience in social media marketing. Proficient in creating
                             and scheduling content, analyzing metrics, and building engagement</p>
                    </div>
                </div>
                   <div className='border border-b-4 border-black shadow-lg rounded-3xl px-5 py-5'>
                    <div className='flex justify-between'>
                        <div className='flex space-x-5 py-5'>
                            <img className=" items-center w-auto rounded-full" src="/alexandra-gorn-smuS_jUZa9I-unsplash 1.png" alt="Logo" /> 
                        <h3 className='pt-12 font-primary font-medium '>Sarah Kim <br /><span>Content Creator</span> </h3>
                        </div>
                        
                        <CiLinkedin className='size-10 text-color1 bg-black rounded-full px-1 py-1'/>
                    </div>
                    <hr />
                    <div className='py-5 font-primary'>
                        <p>2+ years of experience in writing and editing
                                Skilled in creating compelling, 
                                SEO-optimized content for various industries</p>
                    </div>
                </div>

            </div>
        </div>
      </header>
    </div>
  );
}

export default Team;
