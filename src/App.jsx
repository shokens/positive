import { useState } from 'react'

import './App.css'
import Navber from './components/Home/Navber'
import Header from './components/Home/Header'
import Service from './components/Home/Service'
import Side from './components/Home/Side'
import Case from './components/Home/Case'

function App() {
 

  return (
    <>
      <div className=''>
          
        <Navber/>
        <Header/>
        <Service/>
        <Side/>
        <Case/>
      </div>
     
    </>
  )
}

export default App
