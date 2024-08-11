import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'


const Hotel = () => {
  return (
    <>
    <section className='hotel-section'>
       <div className="two-hotel-title-box">
       <div className="hotel-title-text">
            <h1 className="find-hotel-text-nepal">Find Your Ideal Hotel </h1>
            <p className='find-hotel-pasag'>Discover the perfect hotel that matches your travel needs and preferences. Whether you're seeking a luxurious retreat, a cozy boutique stay, or a convenient business hotel, our extensive selection ensures you'll find accommodations that exceed your expectations. </p>
        </div>
        <Marquee className='main-scroll-hotel' pauseOnHover>
    <div className='main-slide-hotel'><h1 className='main-marque-hotel'>5 Star Hotel</h1></div>
    <div className='main-slide-hotel'><h1 className='main-marque-hotel'>Home Stay</h1></div>
    <div className='main-slide-hotel'><h1 className='main-marque-hotel'>Traditional Hotel</h1></div>
    <div className='main-slide-hotel'><h1 className='main-marque-hotel'>Private Residence</h1></div>
    <div className="main-slide-hotel"><h1 className='main-marque-hotel'>Camping</h1></div>
  </Marquee>
       </div>
   <div className="hotel-main-details">
    <div className="img-for-hotel">
    <Image className='hotel-home-images' src="/images/hotel.png" width={1000} height={500} quality={100}/>

    </div>
    <div className="input-field-hotel">
      
        <input className='inut-type-text' required type="text" name="" placeholder='Select Province '/>
        <input className='inut-type-text' type="text" name="" placeholder='Select District' />
        <input className='inut-type-text hotel-date' required type="date" name="" />
        <input className='inut-type-text' type="text" placeholder='Search Room type'/>
        <button className='Hotel Btn'><i class="ri-search-eye-line"></i></button>
    </div>
   </div>
    </section>
    </>
  )
}

export default Hotel
