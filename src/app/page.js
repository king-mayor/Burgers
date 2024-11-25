import Burger from '@/components/Burger';
import BurgerSlider from '@/components/BurgerSlider';
import Chefs from '@/components/Chefs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Join from '@/components/Join';
import Navbar from '@/components/Navbar';
import Reservation from '@/components/Reservation';
import Shipping from '@/components/Shipping';
import React from 'react'

const Home = () => {
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
    </div>
  )
}

export default Home;