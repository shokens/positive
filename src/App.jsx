import { useState } from 'react'

import './App.css'
import Navber from './components/Home/Navber'
import Header from './components/Home/Header'
import Service from './components/Home/Service'
import Side from './components/Home/Side'
import Case from './components/Home/Case'
import Work from './components/Home/Work'
import Team from './components/Home/Team'
import Fotter from './components/Home/Fotter'


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
        <Fotter/>
      </div>
     
    </>
  )
}

export default App
