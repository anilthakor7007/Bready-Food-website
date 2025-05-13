import React from 'react'
import ProductSlider from '../components/Landing page components/ProductSlider'
import AwardsSection from '../components/Landing page components/AwardSection'
import ScrollToTop from '../components/comman/ScrollToTop'
import ReviewCarousel from '../components/Landing page components/ReviewCarousel'
import DealOfTheDay from '../components/Landing page components/DealsOfTheDay'
import BlogSection from '../components/Landing page components/BlogSection'
import DeliverySection from '../components/Landing page components/DeliverySection'
const LandingPage = () => {
  return (
    <div>

    <ProductSlider />
    <AwardsSection/>
    <DealOfTheDay/>
    <ReviewCarousel/>
    <BlogSection/>
    <DeliverySection/>
    <ScrollToTop/>

    </div>
  )
}

export default LandingPage