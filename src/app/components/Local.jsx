import Image from 'next/image'
import React from 'react'


const Local = () => {
  return (
    <>
    <section className='local-section'>
<div className="main-text-local">
    
    <h1 className='offer-heading'>Local Food and Culture</h1>
</div>
<div className="three-local-box">
    <div className="main-local-box">
        <div className="two-offer-txt">
            <p className='small-txt'>All Province Culture</p>
            
        </div>
        <h1 className='small-h1'>1.Let’s Explore The Local Culture by Province</h1>
        <p className='pasag-offer'>
        Nepal, a captivating country nestled in the Himalayas, is renowned for its diverse culture, rich history, and breathtaking landscapes.
        </p>
        <div className="btn-offer">
            <button className='offer-btn'>See More</button>
        </div>
        <div className="imgages-for-offer">
        <Image className='main-local-images' src="/images/pooja.jpg" width={1000} height={500} quality={100}/>
        </div>
    </div>

    <div className="main-local-box">
        <div className="two-offer-txt">
            <p className='small-txt'>All Province food</p>
            
        </div>
        <h1 className='small-h1'>1.Let’s Explore The Local Food by Province</h1>
        <p className='pasag-offer'>
        Nepal, a captivating country nestled in the Himalayas, is renowned for its diverse culture, rich history, and breathtaking landscapes.
        </p>
        <div className="btn-offer">
            <button className='offer-btn'>See More</button>
        </div>
        <div className="imgages-for-offer">
        <Image className='main-local-images' src="/images/food.jpg" width={1000} height={500} quality={100}/>
        </div>
    </div>

    <div className="main-local-box">
        <div className="two-offer-txt">
            <p className='small-txt'>All Province Events</p>
            
        </div>
        <h1 className='small-h1'>1.Let’s Explore The Local Events Province</h1>
        <p className='pasag-offer'>
        Nepal, a captivating country nestled in the Himalayas, is renowned for its diverse culture, rich history, and breathtaking landscapes.
        </p>
        <div className="btn-offer">
            <button className='offer-btn'>See More</button>
        </div>
        <div className="imgages-for-offer">
        <Image className='main-local-images' src="/images/chaat.jpg" width={1000} height={500} quality={100}/>
        </div>
    </div>
    

</div>
    </section>
    
    </>
  )
}

export default Local
