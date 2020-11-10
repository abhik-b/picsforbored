import '../styles/globals.css'
import React,{ useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

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
  <div className="logo">abhikB</div>
  <Component {...pageProps}/>
  <div className="footer">Made by Abhik Bhattacharya on 2020</div>
  </>
}

export default MyApp
