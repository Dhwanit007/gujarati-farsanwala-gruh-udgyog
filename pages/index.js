import Head from 'next/head'
import fs from 'fs'
import path from 'path'
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

export default function Home({ productImages }) {
  return (
    <>
      <Head>
        <title>Gujarati Farsanwala Gruh Udhyog – Taste of Tradition Since 2011</title>
      </Head>

      {/* Reliance Gujarat popup — shows after 1.8s */}
      <ReliancePopup />

      {/* Top rangoli strip */}
      <div className="rangoli-stripe" />

      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <Products productImages={productImages} />
      <WhyUs />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp']
  const dir = path.join(process.cwd(), 'public', 'products')

  let productImages = []
  try {
    productImages = fs
      .readdirSync(dir)
      .filter(f => IMAGE_EXTS.includes(path.extname(f).toLowerCase()))
      .map(f => f.toLowerCase())
  } catch {
    // folder missing or unreadable — cards fall back to emoji placeholders
  }

  return { props: { productImages } }
}
