import React,{useState,useEffect} from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Facilities from '../components/Facilities'
import Gallery from '../components/Gallery'
import MoviesSection from '../components/MoviesSection'
import Cafeteria from '../components/Cafeteria'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
import VoucherSection from '../components/VoucherSection'
import { getVouchers } from '../services/api'
import { Carousel } from 'react-responsive-carousel';
import VisitorCounter from '../UI/VisitorCounter'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import News from '../components/News'
const HomePage = () => {
  const [vouchers, setVouchers] = useState([])
  const [showModal, setShowModal] = useState({
    show: false,
    id: null
  })
  useEffect(() => {
    const fetchVouchers = async () => {
      const response = await getVouchers()
      setVouchers(response.data.vouchers)
    }
    fetchVouchers()
  }, [])
  return (
    <div>
        <HeroSection />
        <VoucherSection />
        <MoviesSection tag={'PlayingNow'} title={'Screening'} useFlex={false}/>
        <MoviesSection tag={'ComingSoon'} title={'Coming Soon'} reverse={true} useFlex={true}/>
        <Facilities />
        <Gallery />
        <Cafeteria />
        <About />
        <div className="flex lg:flex-row flex-col items-center p-2">
        {/* <News /> */}
        <VisitorCounter />
        </div>
        <Feedback />
        <Footer />
    </div>
  )
}

export default HomePage