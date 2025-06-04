import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const menuList = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About us', path: '/about' },
  { id: 3, name: 'Service', path: '/services' },
  { id: 4, name: 'Use Cases', path: '/use-cases' },
  { id: 5, name: 'Pricing', path: '/pricing' },
  { id: 6, name: 'Blog', path: '/blog' }
];

const Navber = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <header className="px-4 bg-white">
        <div className="container mx-auto py-5 flex justify-between items-center">
          {/* Logo on the left */}
          <img className="w-36 h-auto" src="/logo.png" alt="Logo" />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex lg:flex gap-1 items-center text-xl">
            {menuList.map((item) => (
              <li key={item.id} className="cursor-pointer hover:text-primary hover:bg-black hover:text-white px-4 py-2 rounded-lg transition font-primary">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            <Link to="/quote">
              <button className="px-5 font-primary py-2 border-2 border-black rounded-md hover:bg-black hover:text-white transition">
                Request a quote
              </button>
            </Link>
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
          <ul className="md:hidden lg:hidden flex flex-col bg-black gap-2 py-4 text-xl">
            {menuList.map((item) => (
              <Link key={item.id} to={item.path} onClick={() => setToggle(false)}>
                <li className="cursor-pointer text-white hover:text-primary hover:bg-white hover:w-full hover:text-black px-4 py-2 transition font-primary hover:rounded-none">
                  {item.name}
                </li>
              </Link>
            ))}
            <Link to="/quote" onClick={() => setToggle(false)}>
              <li className="font-primary text-white hover:text-primary hover:bg-white hover:w-full hover:text-black px-4 py-2 transition hover:rounded-none">
                Request a quote
              </li>
            </Link>
          </ul>
        )}
      </header>
    </div>
  );
};

export default Navber;
