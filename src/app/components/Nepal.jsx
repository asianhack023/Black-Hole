import { useEffect} from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

import LocomotiveScroll from 'locomotive-scroll';
import Link from 'next/link';
const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger);

const GalaryAnimation = () => {

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        markers: false,
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,
      },
    });

    tl.to("#top", { top: "-100%" }, "a")
      .to("#bottom", { bottom: "-100%" }, "a");

    return () => {
      // Clean up ScrollTrigger instance on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="main-p">
      <div id="main">
        <div id="top">
          <h1 id="top-h">NEPAL</h1>
        </div>

        <div id="center">
          <div className="title-text-swiper-h1">
            <p className="get-to-know-us">
            Get To Know Us

            </p>
            <p className='main-bigger-text'>Travel place for
Your & your
Family</p>
<p className='nepal-description'>We don’t just work with concrete and steel.
We are Approachable, with even our highest
concrete and steel. We work with people</p>
<div className="all-food-list">
  <p className='event-list'>Local Food</p>
  <p className='event-list'>Local Culture</p>
  <p className='event-list'>Local Events</p>
</div>

          </div>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'>
          <div className="first-slide-images">
          <Image  className='main-slide-swipe' src="/mteverest.jpg" width={1000} height={500} quality={100}/>

          </div>
          <div className="all-contain-details">
            <figcaption className='figcaption'>Koshi Province</figcaption>
            <p className='pasag-different-province'>This province features a diverse landscape ranging from the lush Terai plains to the dramatic eastern Himalayas, including Mount Everest. Cities like Biratnagar are bustling with commerce and cultural vibrancy. The area is known for its rich cultural heritage, with vibrant festivals, historical temples, and natural beauty.</p>
          <div className="all-link-details">
          <Link className='load-more-province' href={""}>Read More</Link>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <div className="first-slide-images">
          <Image  className='main-slide-swipe' src="/Janki_mandir.jpg" width={1000} height={500} quality={100}/>

          </div>
          <div className="all-contain-details">
            <figcaption className='figcaption'>Madhesh Province</figcaption>
            <p className='pasag-different-province'>Predominantly a Terai region, Province 2 is characterized by its fertile agricultural land and a diverse mix of ethnic groups. Janakpur is a key cultural and religious hub, while Birgunj serves as an important economic and trade center. The province offers a blend of cultural traditions and commercial activity.</p>
          <div className="all-link-details">
          <Link className='load-more-province' href={"/"}>Read More</Link>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <div className="first-slide-images">
          <Image  className='main-slide-swipe' src="/ktm.jpg" width={1000} height={500} quality={100}/>

          </div>
          <div className="all-contain-details">
            <figcaption className='figcaption'>Bagmati Province</figcaption>
            <p className='pasag-different-province'> Centered around Kathmandu, the capital city of Nepal, this province blends rich historical landmarks with modern urban living. The area includes picturesque hills and valleys, offering a unique mix of ancient temples, bustling markets, and contemporary amenities. It’s a cultural and economic heartland.</p>
          <div className="all-link-details">
          <Link className='load-more-province' href={"/"}>Read More</Link>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <div className="first-slide-images">
          <Image  className='main-slide-swipe' src="/images/one.jpg" width={1000} height={500} quality={100}/>

          </div>
          <div className="all-contain-details">
            <figcaption className='figcaption'>Gandaki Province</figcaption>
            <p className='pasag-different-province'>Dominated by Pokhara, known for its stunning natural beauty including Phewa Lake and views of the Annapurna mountain range. This province is a gateway to adventure, offering activities like trekking, paragliding, and boating. The serene landscapes and outdoor opportunities make it a popular tourist destination.</p>
          <div className="all-link-details">
          <Link className='load-more-province' href={"/"}>Read More</Link>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <div className="first-slide-images">
          <Image  className='main-slide-swipe' src="/lumbini.jpg" width={1000} height={500} quality={100}/>

          </div>
          <div className="all-contain-details">
            <figcaption className='figcaption'>Lumbini Province</figcaption>
            <p className='pasag-different-province'> Home to Lumbini, the birthplace of Buddha, this province combines significant religious history with the fertile Terai plains. It features agricultural richness and a variety of historical and cultural landmarks. The blend of spiritual heritage and rural charm makes it a notable region for both historical and cultural exploration.</p>
          <div className="all-link-details">
          <Link className='load-more-province' href={"/"}>Read More</Link>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <div className="first-slide-images">
          <Image  className='main-slide-swipe' src="/rara.jpg" width={1000} height={500} quality={100}/>

          </div>
          <div className="all-contain-details">
            <figcaption className='figcaption'>Karnali Province</figcaption>
            <p className='pasag-different-province'> Known for its rugged and remote terrain, the Karnali region offers breathtaking natural landscapes and traditional village life. It is less traveled, providing an untouched and adventurous experience with opportunities for exploration in a pristine environment. The province is ideal for those seeking tranquility and natural beauty.</p>
          <div className="all-link-details">
          <Link className='load-more-province' href={"/"}>Read More</Link>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <div className="first-slide-images">
          <Image  className='main-slide-swipe' src="/sudur.png" width={1000} height={500} quality={100}/>

          </div>
          <div className="all-contain-details">
            <figcaption className='figcaption'>Sudurpaschim Province</figcaption>
            <p className='pasag-different-province'>The far-western region includes a diverse range of landscapes, from the Terai plains to the foothills of the Himalayas. Cities like Dhangadhi offer a mix of agricultural abundance and cultural diversity. The province blends traditional lifestyles with modern developments, providing a rich cultural experience amidst natural beauty.</p>
          <div className="all-link-details">
          <Link className='load-more-province' href={"/Province"}>Read More</Link>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
<div className="small-swiper-text">
  <p className='small-swiper-pasag'>
  Discover the diverse culture, vibrant events, and unique local food across different provinces. Each region offers a distinct flavor of traditions, festivities, and culinary delights. Explore cultural heritage, participate in local celebrations, and savor traditional dishes unique to each area.
  </p>
</div>
        </div>

        <div id="bottom">
          <h1 id="bottom-h">NEPAL</h1>
        </div>
      </div>
    </div>
  );
};

export default GalaryAnimation;
