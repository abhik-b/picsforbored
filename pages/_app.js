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
    Bored Memes - Funny Boring Meme and Pictures , boredom stock images,
    bored images, bored pictures , pictures for bored,images for bored, time kill,pics for bored,
    Pics For Bored,Pics For Bored | Kill time with memes and random pictures, images, what to do when bored,when you are stuck inside and bored,fun websites, fun, images fun, fun images,
    Bored Memes. Best Collection of Funny Bored Pictures,
    Random pictures, random memes, dank memes, funniest memes, random pics,  memes , time pass , time kill , Bored funniest memes Mood Off Kill time with memes & random pictures of nature , art and many more Pics For Bored | Kill time with memes and random pictures , kill your time,cure boredom and refresh mood
  bored Photos. boring tired stress sad yawn work angry happy frustrated thinking quarantine lazy sleepy alone stressed sleeping office time meeting waiting lonely excited sleep bored at work working Confused boredom Random Pics and Memes
  </h2>
  <a rel="noopener" target='_blank' href="https://twitter.com/_abhikB" className="logo">abhikB</a>
  <Component {...pageProps} />
  <div className="footer">Made by Abhik Bhattacharya on 2020</div>
  </>
}

export default MyApp
