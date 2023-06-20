import Brands from '../components/HomeArea/Brands/Brands'
import BusinessLevel from '../components/HomeArea/BusinessLevel/BusinessLevel'
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
    </>
  )
}

export default Home