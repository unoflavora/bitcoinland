import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './_components/layout'
import AppState from './state/state'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
    <Head>
      <title>Bitcoinland</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Bitcoinland"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://i.ibb.co/c8Jm0LN/ss.png"/>
      <meta property="og:url" content="https://bitcoinland.vercel.app"/>
      <meta name="twitter:card" content="summary_large_image"/>

      <meta property="og:description" content="The Bitcoin iconic building and masterplan city project."/>
      <meta property="og:site_name" content="European Travel, Inc."/>
      <meta name="twitter:image:alt" content="Alt text for image"/>
      <link rel="icon" href="/icon.png" sizes="any" />

    </Head>
    <AppState>
      <Layout>
          <Component {...pageProps} />
          <Analytics/>
      </Layout>
    </AppState>
    </>
    
)
}
