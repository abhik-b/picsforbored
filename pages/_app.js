import '../styles/globals.css'
import React,{ useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return   <>
  <a target='_blank' href="https://twitter.com/_abhikB" className="logo">abhikB</a>
  <Component {...pageProps} />
  <div className="footer">Made by Abhik Bhattacharya on 2020</div>
  </>
}

export default MyApp
