import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head>
        <meta name="description" content="Gujarati Farsanwala Gruh Udhyog – Authentic Gujarati Namkeen, Khakhra, Pickles and Farali Snacks since 2011. Available online and at SMART BAZAAR stores in Gujarat." />
        <meta name="theme-color" content="#3B1A08" />
        <meta property="og:title" content="Gujarati Farsanwala Gruh Udhyog – Taste of Tradition Since 2011" />
        <meta property="og:description" content="Handcrafted Gujarati Namkeen, Khakhra, Pickles and Farali Snacks since 2011." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gujarati-farsanwala-gruh-udhyog.vercel.app/" />
        <meta property="og:site_name" content="Gujarati Farsanwala Gruh Udhyog" />
        <meta property="og:image" content="https://gujarati-farsanwala-gruh-udhyog.vercel.app/logo.png" />
        <meta property="og:image:alt" content="Gujarati Farsanwala Gruh Udhyog logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gujarati Farsanwala Gruh Udhyog – Taste of Tradition Since 2011" />
        <meta name="twitter:description" content="Handcrafted Gujarati Namkeen, Khakhra, Pickles and Farali Snacks since 2011." />
        <meta name="twitter:image" content="https://gujarati-farsanwala-gruh-udhyog.vercel.app/logo.png" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="xVfLmQ9iJtFZw5mL6R1wiPgvJHU2MIWnWTOEhy-BFfc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Gujarati Farsanwala Gruh Udhyog',
              url: 'https://gujarati-farsanwala-gruh-udhyog.vercel.app/',
              logo: 'https://gujarati-farsanwala-gruh-udhyog.vercel.app/logo.png',
              image: 'https://gujarati-farsanwala-gruh-udhyog.vercel.app/logo.png',
              description: 'Authentic Gujarati Namkeen, Khakhra, Pickles and Farali Snacks since 2011.',
              sameAs: ['https://www.instagram.com/gujaratifarsanwala/'],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
