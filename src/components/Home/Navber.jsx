import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const menuList = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About us' },
  { id: 3, name: 'Service' },
  { id: 4, name: 'Use Cases' },
  { id: 5, name: 'Pricing' },
  { id: 6, name: 'Blog' } // Changed id to avoid duplicate key
]

const Navber = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <header className="px-4 bg-white">
        <div className="container mx-auto py-5 flex justify-between items-center">
          
          {/* Logo on the left */}
          <img className="w-36 h-auto" src="/logo.png" alt="Logo" />

          {/* Navigation Items on the right */}
          <ul className="hidden md:flex lg:flex gap-1 items-center text-xl">
            {menuList.map((item) => (
              <li key={item.id} className="cursor-pointer hover:text-primary hover:bg-black hover:text-white px-4 py-2 rounded-lg transition font-primary">
                {item.name}
              </li>
            ))}
            <button className="px-5 font-primary py-2 border-2 border-black rounded-md hover:bg-black hover:text-white transition">
              Request a quote
            </button>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden lg:hidden'>
            {!toggle ? (
              <HiMenu className='size-10 cursor-pointer' onClick={() => setToggle(true)} />
            ) : (
              <IoCloseOutline className='size-10 cursor-pointer' onClick={() => setToggle(false)} />
            )}
          </div>
        </div>

        {/* Mobile Menu List */}
        {toggle && (
          <ul className="md:hidden lg:hidden flex flex-col  bg-black gap-2 py-4 text-xl">
            {menuList.map((item) => (
              <li key={item.id} className="cursor-pointer text-white hover:text-primary hover:bg-white hover:w-full hover:text-black px-4 py-2 rounded-lg transition font-primary hover:rounded-none">
                {item.name}
              </li>
            ))}
            <a className=" font-primary text-white hover:text-primary hover:bg-white hover:w-full hover:text-black px-4 py-2  transition  hover:rounded-none">
              Request a quote
            </a>
          </ul>
        )}
      </header>
    </div>
  )
}

export default Navber;
