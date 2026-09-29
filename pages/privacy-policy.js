import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Gujarati Farsanwala Gruh Udhyog</title>
      </Head>
      <div className="rangoli-stripe" />
      <Navbar />
      <main className="px-4 py-16 sm:px-6" style={{ background: '#FFFBF2' }}>
        <article className="max-w-3xl mx-auto rounded-2xl bg-white p-6 sm:p-10" style={{ border: '1px solid rgba(59,26,8,0.1)' }}>
          <Link href="/" className="text-sm font-bold" style={{ color: '#E8841A' }}>Back to home</Link>
          <h1 className="mt-5 text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A08' }}>Privacy Policy</h1>
          <p className="mt-2 text-sm" style={{ color: '#8B6B55' }}>Last updated: September 29, 2026</p>

          <div className="mt-8 space-y-7 text-sm leading-relaxed" style={{ color: '#6B4F3A' }}>
            <section>
              <h2 className="mb-2 text-xl font-bold" style={{ color: '#3B1A08' }}>Information we collect</h2>
              <p>When you contact Gujarati Farsanwala Gruh Udhyog, we may receive the name, phone number, email address, delivery details, and message you choose to provide. We only collect information needed to respond to enquiries, orders, and wholesale requests.</p>
            </section>
            <section>
              <h2 className="mb-2 text-xl font-bold" style={{ color: '#3B1A08' }}>How we use information</h2>
              <p>We use submitted information to communicate with you, respond to requests, coordinate product enquiries, and improve our website and customer service. We do not sell personal information.</p>
            </section>
            <section>
              <h2 className="mb-2 text-xl font-bold" style={{ color: '#3B1A08' }}>Third-party services</h2>
              <p>Our website may link to Instagram, WhatsApp, or other external services. Those services have their own privacy policies, and information shared with them is governed by their terms.</p>
            </section>
            <section>
              <h2 className="mb-2 text-xl font-bold" style={{ color: '#3B1A08' }}>Data security and retention</h2>
              <p>We take reasonable steps to protect information shared with us and retain it only as long as needed for legitimate business communication, legal, or record-keeping purposes.</p>
            </section>
            <section>
              <h2 className="mb-2 text-xl font-bold" style={{ color: '#3B1A08' }}>Contact</h2>
              <p>For privacy questions, contact us at gujaratifarsanwala2011@gmail.com or +91 98785 04950.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
