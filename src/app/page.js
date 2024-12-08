"use client";
import Burger from '@/components/Burger';
import BurgerSlider from '@/components/BurgerSlider';
import Chefs from '@/components/Chefs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Join from '@/components/Join';
import Navbar from '@/components/Navbar';
import Reservation from '@/components/Reservation';
import ScrollToTop from '@/components/ScrollToTop';
import Shipping from '@/components/Shipping';
import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  
useEffect(() =>{
  AOS.init();
  },[])
  
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Burger/>
      <BurgerSlider/>
      <Shipping/>
      <Chefs/>
      <Reservation/>
      <Join/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default Home;