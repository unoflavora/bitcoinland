import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/layout'
import { AppState } from './state/state'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <AppState>
      <Layout>
          <Component {...pageProps} />
      </Layout>
  </AppState>
)
}
