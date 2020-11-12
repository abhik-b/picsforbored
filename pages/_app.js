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
  <h2 className="description">
    bored images, bored pictures , pictures for bored
    Random pictures, random memes, dank memes, funniest memes, random pics,  memes , time pass , time kill ,Are you Bored ? Want some high quality funniest memes ? Mood Off ? Kill time with memes & random pictures of nature , art and many more Pics For Bored  Kill time with memes and random pictures , Memes/pics of nature,art  kill your time,cure boredom and refresh mood
  bored Photos. boring tired stress sad yawn work angry happy frustrated thinking quarantine lazy sleepy alone stressed sleeping office time meeting waiting lonely excited sleep bored at work working Confused boredom Random Pics and Memes
  </h2>
  <a rel="noopener" target='_blank' href="https://twitter.com/_abhikB" className="logo">abhikB</a>
  <Component {...pageProps} />
  <div className="footer">Made by Abhik Bhattacharya on 2020</div>
  </>
}

export default MyApp
