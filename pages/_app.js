import '../styles/globals.css'
import React,{useState} from 'react'

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

function MyApp({ Component, pageProps }) {
  
  return   <>
  <div className="logo">abhikB</div>
  <Component {...pageProps}/>
  <div className="footer">Made by Abhik Bhattacharya on 2020</div>
  </>
}

export default MyApp
