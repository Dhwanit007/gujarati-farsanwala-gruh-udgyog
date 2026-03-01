import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Gujarati Farsanwala Gruh Udgyog – Authentic Gujarati Namkeen, Khakhra, Pickles and Farali Snacks since 2011. Available online and at Reliance stores in Gujarat." />
        <meta property="og:title" content="Gujarati Farsanwala Gruh Udgyog – Taste of Tradition Since 2011" />
        <meta property="og:description" content="Handcrafted Namkeen, Khakhra, Pickles & more. No preservatives. Pan-India delivery." />
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
