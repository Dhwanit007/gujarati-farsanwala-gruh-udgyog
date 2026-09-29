import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Gujarati Farsanwala Gruh Udhyog</title>
      </Head>
      <div className="rangoli-stripe" />
      <Navbar />
      <main className="px-4 py-16 sm:px-6" style={{ background: '#FFFBF2' }}>
        <article className="max-w-3xl mx-auto rounded-2xl bg-white p-6 sm:p-10" style={{ border: '1px solid rgba(59,26,8,0.1)' }}>
          <Link href="/" className="text-sm font-bold" style={{ color: '#E8841A' }}>Back to home</Link>
          <h1 className="mt-5 text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A08' }}>Terms of Service</h1>
          <p className="mt-2 text-sm" style={{ color: '#8B6B55' }}>Last updated: September 29, 2026</p>

          <div className="mt-8 space-y-7 text-sm leading-relaxed" style={{ color: '#6B4F3A' }}>
            <section>
              <h2 className="mb-2 text-xl font-bold" style={{ color: '#3B1A08' }}>Using this website</h2>
              <p>This website provides information about Gujarati Farsanwala Gruh Udhyog products, availability, store locations, and enquiry options. You agree to use the website lawfully and respectfully.</p>
            </section>
            <section>
              <h2 className="mb-2 text-xl font-bold" style={{ color: '#3B1A08' }}>Product information</h2>
              <p>Product descriptions, availability, images, pricing, packaging, and store availability may change without notice. Images and descriptions are representative, and final details should be confirmed with us before purchase.</p>
            </section>
            <section>
              <h2 className="mb-2 text-xl font-bold" style={{ color: '#3B1A08' }}>Enquiries and orders</h2>
              <p>Submitting an enquiry does not guarantee an order, price, stock, delivery date, or acceptance. Orders are confirmed only after direct communication with Gujarati Farsanwala Gruh Udhyog. Quick e-commerce ordering will be available in the future.</p>
            </section>
            <section>
              <h2 className="mb-2 text-xl font-bold" style={{ color: '#3B1A08' }}>External links</h2>
              <p>Links to WhatsApp, Instagram, and other services are provided for convenience. We are not responsible for the content, availability, or policies of external websites.</p>
            </section>
            <section>
              <h2 className="mb-2 text-xl font-bold" style={{ color: '#3B1A08' }}>Contact</h2>
              <p>For questions about these terms, contact gujaratifarsanwala2011@gmail.com or +91 98785 04950.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
