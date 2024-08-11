"use client"
import React from 'react'
import Header  from './components/Header'
import Mainpage from './components/Mainpage'
import Nepal from './components/Nepal'
import Destination from './components/Destination'
import Offer from './components/Offer'
import MainMarquee from './components/MainMarquee'
import ChooseUs from './components/ChooseUs'
import Local from './components/Local'
import Hotel from './components/Hotel'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const page = () => {
  return (
    <>
    <main className='main-wrapper'>
      <Header/>
      <Mainpage/>
       <Nepal/>
      <MainMarquee/>
      <Offer/>
      <ChooseUs/>
      <Destination/> 
      <Local/>
      <Hotel/>
      <Footer/>
    </main>
    </>
  )
}

export default page
