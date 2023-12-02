import React, { useEffect } from 'react'
import Header from './Header'
import TrdFund from './TrdFund'
import Story from './Story'
import AppStore from '../../global/AppStore'
import About from '../about/About'

const Homepage = () => {
  
  
  return (
    <div className='lg:px-36'>
    <Header/>
    <About/>
    {/* <TrdFund/> */}
    {/* <Story/> */}
    {/* <AppStore/> */}
    
    </div>
  )
}

export default Homepage