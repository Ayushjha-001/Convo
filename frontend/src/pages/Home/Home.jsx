import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import MessageContainer from '../../components/Messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-2xl backdrop-blur-xl'>
    <Sidebar/>
    <MessageContainer/>
    </div>
  )
  
}

export default Home