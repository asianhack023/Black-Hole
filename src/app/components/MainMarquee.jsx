import React from 'react'
import Marquee from "react-fast-marquee";


const MainMarquee = () => {
  return (
    <>
     <Marquee className='main-scroll' pauseOnHover>
    <div className='main-slide-marquee'><h1 className='main-marque-h1'>Boating</h1></div>
    <div className='main-slide-marquee'><h1 className='main-marque-h1'>Hiking</h1></div>
    <div className='main-slide-marquee'><h1 className='main-marque-h1'>cycling</h1></div>
    <div className='main-slide-marquee'><h1 className='main-marque-h1'>Treking</h1></div>
    <div className="main-slide-marquee"><h1 className='main-marque-h1'>Night Camp</h1></div>
  </Marquee>
  </>
  )
}

export default MainMarquee
