import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head>
        <meta name="description" content="Gujarati Farsanwala Gruh Udhyog – Authentic Gujarati Namkeen, Khakhra, Pickles and Farali Snacks since 2011. Available online and at SMART BAZAAR stores in Gujarat." />
        <meta property="og:title" content="Gujarati Farsanwala Gruh Udhyog – Taste of Tradition Since 2011" />
        <meta property="og:description" content="Handcrafted Namkeen, Khakhra, Pickles & more." />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
