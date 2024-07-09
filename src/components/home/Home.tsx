import Offer from './components/best_offers/Offer'
import HeroSection from './components/hero/HeroSection'

const Home = () => {
  return (
    <>
      <div className="home_wrpr">
        <HeroSection/>
        <Offer/>
      </div>  
    </>
  )
}

export default Home