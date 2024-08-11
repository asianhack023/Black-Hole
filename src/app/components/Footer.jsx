import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='main-footer'>

<div className="newsletter">
    <h1 className='news-letter-text'>OUR NEWSLETTER</h1>
    <p className='newsletter-pasag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
    <div className="two-footer-part">
        <input type="text" placeholder='Enter Email' className='footer-input-link' />
        <button className='btn-for-footer'>Subscribe</button>
    </div>
</div>

<div className="all-footer-details">
    <div className="footer-inner-box">
        <h1 className='main-title-footer-link'>About us</h1>
        <p className='footer-about-pasag'>Nepal is home to some of the world's most breathtaking landscapes, including the towering peaks of the Himalayas. Iconic mountains like Mount Everest, Annapurna, and Kanchenjunga attract trekkers and climbers from around the globe.</p>
    </div>
    <div className="footer-inner-box">
        <h1 className='main-title-footer-link'>Details</h1>
        <li className='footer-list-items' >Contact us</li>
        <li className='footer-list-items' >Pricing</li>
        <li className='footer-list-items' >How it work</li>
    </div>
    <div className="footer-inner-box">
        <h1 className='main-title-footer-link'>Brand Partnerss</h1>
        <li className='footer-list-items' >Terms & Conditions</li>
        <li className='footer-list-items' >Privacy policy</li>
        
    </div>
    <div className="footer-inner-box">
        <h1 className='main-title-footer-link'>Destination</h1>
        <li className='footer-list-items'>Kathmandu</li>
        <li className='footer-list-items'>Pokhara</li>
        <li className='footer-list-items'>Lumbini</li>
        <li className='footer-list-items'>Chitwan</li>
    </div>
</div>
<div className="copy-right">
<p className='copyright-text'>&copy; 2024 all Copyright reserved</p>
</div>

    </footer>
    </>
  )
}

export default Footer
