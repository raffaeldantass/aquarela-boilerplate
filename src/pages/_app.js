import Head from 'next/head'

import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Boilerplate </title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="description" content="A simple boilerplate" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
