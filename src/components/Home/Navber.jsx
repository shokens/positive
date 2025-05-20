import React from 'react'

const menuList = [
    {
        id:1,
        name:'Home'
    },
     {
        id:2,
        name:'About us'
    },
     {
        id:3,
        name:'Service'
    },
     {
        id:4,
        name:'Use Cases'
    },
     {
        id:5,
        name:'Pricing'
    },
    {
        id:5,
        name:'Blog'
    },
    

]
const Navber = () => {
  return (
    <div>
        <header className=" px-4 bg-white ">
  <div className="container mx-auto py-5 flex justify-between items-center">
    
    {/* Logo on the left */}
    <img className="w-36 h-auto" src="/logo.png" alt="Logo" />

    {/* Navigation Items on the right */}
    <ul className="hidden md:flex lg:flex gap-4 items-center text-xl">
      {menuList.map((item, index) => (
        <li key={index} className="cursor-pointer hover:text-primary hover:bg-black hover:text-white px-4 py-2 rounded-lg transition font-primary">
          {item.name}
        </li>
      ))}
      <button className="px-5 font-primary py-2 border-2 border-black rounded-md hover:bg-black hover:text-white transition">
        Request a quote
      </button>
    </ul>
  </div>
</header>

    </div>
  )
}

export default Navber