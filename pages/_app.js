import '../styles/globals.css'
import {useState} from 'react'

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

function MyApp({ Component, pageProps }) {
  
  return <Component {...pageProps}/>
}

export default MyApp
