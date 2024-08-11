import React from 'react'
import Image from 'next/image'

const Destination = () => {
  return (
    <>
    <section className='destination-section'>
<div className="two-txt-destination">
    <div className="first-destination-txt">
        <p className='first-pasag-destinition'>Top Destination</p>
        <h1 className='destinition-main-title'>Our Featured Destination</h1>
    </div>
    <div className="second-destination-txt">
        <p className='destination-pasag'>
        Our Featured Destination" is a section on a tourism website or in a travel marketing campaign that highlights a particular location of interest. This section aims to showcase the unique attributes of the destination and entice visitors to learn more or plan a visit. Here's a detailed description of what such a section might include
        </p>
        <div className="btn-destination">Load More</div>
    </div>
</div>

<div className="all-destination-place">
    <div className="one-box-destination">
<div className="main-destination-images-container">
<Image className='main-destinatio-images' src="/kathmandu.jpg" width={1000} height={500} quality={100}/>

</div>
<div className="all-info-destination">
<h1 className='main-provience-txt'>Kathmadu</h1>
<p className='main-provience-pasag'>Kathmandu, Nepal's capital, is a vibrant city known for its ancient temples, bustling markets, and rich cultural heritage. </p>
</div>
    </div>

    <div className="one-box-destination">
    <div className="main-destination-images-container">
<Image className='main-destinatio-images' src="/pokhara.jpg" width={1000} height={500} quality={100}/>

</div><div className="all-info-destination">
<h1 className='main-provience-txt'>Pokhara</h1>
<p className='main-provience-pasag'>Pokhara, Nepal, is famous for its stunning mountain views, serene lakes, and adventure activities like trekking and paragliding.</p>
</div>
    </div>

    <div className="one-box-destination">
    <div className="main-destination-images-container">
<Image className='main-destinatio-images' src="/rukum.jpg" width={1000} height={500} quality={100}/>

</div><div className="all-info-destination">
<h1 className='main-provience-txt'>Rukum</h1>
<p className='main-provience-pasag'>Rukum, a district in Nepal, is known for its rugged landscapes, traditional villages, and scenic beauty. </p>
</div>
    </div>

    <div className="one-box-destination">
    <div className="main-destination-images-container">
<Image className='main-destinatio-images' src="/large.png" width={1000} height={500} quality={100}/>

</div><div className="all-info-destination">
<h1 className='main-provience-txt'>Birgunj</h1>
<p className='main-provience-pasag'>Birgunj, a city in Nepal, is a key trade hub with bustling markets and diverse culture. It connects Nepal to India.</p>
</div>
    </div>

    <div className="one-box-destination">
    <div className="main-destination-images-container">
<Image className='main-destinatio-images' src="/sey.jpg" width={1000} height={500} quality={100}/>

</div><div className="all-info-destination">
<h1 className='main-provience-txt'>Shey Phoksundo Lake</h1>
<p className='main-provience-pasag'>Shey Phoksundo, in Nepal, is renowned for its stunning blue lake and remote, serene landscapes. It's a trekking paradise.</p>
</div>
    </div>
    <div className="one-box-destination">
    <div className="main-destination-images-container">
<Image className='main-destinatio-images' src="/mustang.jpg" width={1000} height={500} quality={100}/>

</div><div className="all-info-destination">
<h1 className='main-provience-txt'>Mustang</h1>
<p className='main-provience-pasag'>Mustang, Nepal, is a remote, ancient kingdom known for its arid landscapes, unique culture, and stunning mountain scenery.</p>
</div>
    </div>
</div>



    </section>
    
    </>
  )
}

export default Destination
