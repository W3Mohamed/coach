import './App.css'
import Hero from './components/Hero.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Stats from './components/Stats.jsx'
import Service from './components/Service.jsx'
import Propos from './components/Propos.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/layout/Footer.jsx'

function App() {

  return (
    <div className='overflow-x-hidden font-heading bg-noir'>
      <Navbar />
      <Hero />
      <Stats />
      <Service />
      <Propos />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
