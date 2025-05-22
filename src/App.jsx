import { useState } from 'react'

import './App.css'
import Navber from './components/Home/Navber'
import Header from './components/Home/Header'
import Service from './components/Home/Service'
import Side from './components/Home/Side'
import Case from './components/Home/Case'
import Work from './components/Home/Work'
import Team from './components/Home/Team'


function App() {
 

  return (
    <>
      <div className=''>
          
        <Navber/>
        <Header/>
        <Service/>
        <Side/>
        <Case/>
        <Work/>
        <Team/>
      </div>
     
    </>
  )
}

export default App
