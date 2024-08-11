import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();


const Offer = () => {

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
    <section className='offer-section'>
<div className="main-text-offer">
    <p className='offer-text'>Grab Offers</p>
    <h1  className='offer-heading'>Special Offer for New Tourist</h1>
</div>
<div className="two-offer">
    <div className="main-offer-box">
        <div className="two-offer-txt">
            <p className='small-txt'>Grab Offers</p>
            <h2 className='small-h2'>50%</h2>
        </div>
        <h1 className='small-h1'>1.Special Offer for Family</h1>
        <p className='pasag-offer'>
        Experience unforgettable family moments with our exclusive offer: spacious rooms, free meals for kids, and fun activities.        </p>
        <div className="btn-offer">
            <button className='offer-btn'>Get Started</button>
        </div>
        <div className="imgages-for-offer">
        <Image className='main-offer-images' src="/hotel.jpg" width={1000} height={500} quality={100}/>
        </div>
    </div>

    <div className="main-offer-box">
        <div className="two-offer-txt">
            <p className='small-txt'>Grab Offers</p>
            <h2 className='small-h2'>50%</h2>
        </div>
        <h1 className='small-h1'>1.Let’s Explore The Nepal</h1>
        <p className='pasag-offer'>
        Nepal, a captivating country nestled in the Himalayas, is renowned for its diverse culture, rich history, and breathtaking landscapes.
        </p>
        <div className="btn-offer">
            <button className='offer-btn'>Get Started</button>
        </div>
        <div className="imgages-for-offer">
        <Image className='main-offer-images' src="/images/offer.jpg" width={1000} height={500} quality={100}/>
        </div>
    </div>

</div>
    </section>
    
    </>
  )
}

export default Offer
