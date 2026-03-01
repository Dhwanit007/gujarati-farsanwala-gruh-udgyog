import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MarqueeStrip from '../components/MarqueeStrip'
import About from '../components/About'
import Products from '../components/Products'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ReliancePopup from '../components/ReliancePopup'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gujarati Farsanwala Gruh Udgyog – Taste of Tradition Since 2011</title>
      </Head>

      {/* Reliance Gujarat popup — shows after 1.8s */}
      <ReliancePopup />

      {/* Top rangoli strip */}
      <div className="rangoli-stripe" />

      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <Products />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
