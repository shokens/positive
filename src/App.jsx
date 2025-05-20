import { useState } from 'react'

import './App.css'
import Navber from './components/Home/Navber'
import Header from './components/Home/Header'
import Service from './components/Home/Service'

function App() {
 

  return (
    <>
      <div className=''>
          
        <Navber/>
        <Header/>
        <Service/>
      </div>
     
    </>
  )
}

export default App
