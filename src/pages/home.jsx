import React from 'react'
import Slider from '../components/home/logoslider.jsx'
import PromoBanner from '../components/home/promoBanner.jsx'
import VehicleCards from '../components/home/VehicleCards.jsx'
import ShareVehicleSection from '../components/home/ShareVehiclesSection.jsx'
import WhyChooseUs from '../components/home/whyChooseUs.jsx'
import ReviewsAndNewsletter from '../components/home/ReviewsAndNewsletter.jsx'
import FAQSection from '../components/home/FAQSection.jsx'
import HeroSection from '../components/home/HeroSection.jsx'

const home = () => {
  return (
    <>
      <HeroSection/>
      <Slider/>
      <PromoBanner/>
      <VehicleCards/>
      <ShareVehicleSection/>
      <WhyChooseUs/>
      <ReviewsAndNewsletter/>
      <FAQSection/>
    </>
  )
}

export default home
