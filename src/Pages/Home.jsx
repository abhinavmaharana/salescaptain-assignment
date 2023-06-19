import Brands from '../components/HomeArea/Brands/Brands'
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
    </>
  )
}

export default Home