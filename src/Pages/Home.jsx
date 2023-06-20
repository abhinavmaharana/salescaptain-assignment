import Brands from '../components/HomeArea/Brands/Brands'
import BusinessLevel from '../components/HomeArea/BusinessLevel/BusinessLevel'
import CTA from '../components/HomeArea/CTA/CTA'
import HeroSection from '../components/HomeArea/HeroSection/HeroSection'
import HomeSection from '../components/HomeArea/HomeSection/HomeSection'
import Testimonial from '../components/HomeArea/Testimonials/Testimonial'

const Home = () => {
  return (
    <>
        <HeroSection />
        <HomeSection />
        <Brands />
        <Testimonial />
        <BusinessLevel />
        <CTA />
    </>
  )
}

export default Home