import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
const menuList = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About us' },
  { id: 3, name: 'Service' },
  { id: 4, name: 'Use Cases' },
  { id: 5, name: 'Pricing' },
  { id: 6, name: 'Blog' } // Changed id to avoid duplicate key
]
const Fotter = () => {
  return (
    <div>
      <header className='container mx-auto '>
            <div className=' bg-black rounded-tr-3xl  rounded-tl-3xl'>
                    <div className='px-20 py-10  flex justify-between items-center'>
                                 <img className="w-36 h-auto " src="/Logo 2.png" alt="Logo" />
                                 <ul className="hidden md:flex lg:flex gap-1 items-center text-xl">
            {menuList.map((item) => (
              <li key={item.id} className="cursor-pointer hover:text-primary   text-white hover:text-white px-4 py-2 rounded-lg transition font-primary">
                {item.name}
              </li>
            ))}
            
          </ul>
          <div className='flex space-x-3'>
                    <FaFacebook className='size-8  text-white rounded-full '/>
                      <CiLinkedin className='size-8  bg-white rounded-full px-1 py-1'/>
                      <FaTwitter className='size-8  bg-white rounded-full px-1 py-1'/>
          </div>
                    </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                  
                    <div className='font-primary text-white px-20 py-10  justify-between items-center space-y-2'>
                    <h3 className=' font-primary text-color1 text-xl  py-1  rounded-2xl'>Contact Us</h3>
                    <p className='font-primary'>Email: info@positivus.com</p>
                    <p className='font-primary'>Phone: 555-567-8901</p>
                    <p className='font-primary'>Address: 1234 Main St <br />
                            Moonstone City, Stardust State 12345</p>
                  </div>

                  <div className='mx-8 my-4 '>
                    <div className='flex justify-center items-center space-x-2 bg-gray-300/10 px-10 py-10 rounded-2xl'>
                      <input type="Email" placeholder='Email'  className='bg-transparent px-2 py-2 border-2 w-72 text-white'  />
                    <button className='text-black font-primary bg-color1 px-2 py-2 rounded '>Subscribe to news</button>
                    </div>
                  </div>
                 
                 
            </div>
            <hr className='py-5 mx-20' />

            <div className=' flex px-20 justify-center items-center gap-5 py-3'>
              <p className='font-primary text-white'>© 2025 Positivus. All Rights Reserved.</p>
              <p className='font-primary text-white'>Privacy Policy</p>
            </div>
            </div>
             
      </header>
    </div>
  );
}

export default Fotter;
