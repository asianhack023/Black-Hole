
import React, { useEffect, useRef } from 'react'

import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

const page = () => {

  const containerRef=useRef(null);

  useEffect(()=>{
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth:true,
    });

    return()=>{
      scroll.destroy();
    };
  },[]);
  
  
  return (
   <>
  <section className='home-section'>
<div className="main-text">
  <div className="one-text">
    <h1 className='main-h1'>Explore <span className='first-span'>Beauty</span> </h1>
    <p className='main-pasag'>
    Discover dream destinations with our Nepal Tourism Boards website. easy booking, exclusive deals, and experts giudance for your perfect gateway await
    </p>
  </div>
  <div className="next-box">
    <div className="home-btn">
      <button className='main-home-btn'>EXPLORE MORE</button>
      <div className="icon-for-arrow"><i class="ri-arrow-right-up-line"></i></div>
    </div>
    <h1 className="another-text">ALL OVER NEPAL</h1>
  </div>
</div>
<div className="main-search-bar">
  <input type="text" placeholder='Enter place Name....' className='text-field-search'/>
  <button className='Search-Place-btn'>Search Place</button>
</div>
 <video className='main-video' width={1000} autoPlay loop muted>
        <source className='video-parts' src="./mainvideo.mp4" type="video/mp4" />
        
      </video>

      {/* <div className="another-main-images">
      <Image  className='main-home-images' src="/images/one.jpg" width={1000} height={500} quality={100}/>

      </div> */}
 
  </section>

   </>
  )
}

export default page
