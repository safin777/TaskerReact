import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'
import TaksBoard from './task/TaksBoard'
export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <HeroSection />
        <TaksBoard />
      </div>
      <Footer />
    </>
  )
}
