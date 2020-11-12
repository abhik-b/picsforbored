import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import {GA_TRACKING_ID} from '../lib/gtag'

export default class MyDocument extends Document {
  

  render() {
    return (
      <Html>
      <html lang='en'>
        <title>Pics For Bored </title>
        </html> 
       <Head>
        
        <meta name="title" content="Pics For Bored | Kill time with memes and random pictures"/>
        <meta name="keywords" content="Images,Pictures,PicsForBored,Bored,Memes,Art,Funny,Nature,TimeKill,Time Pass,Timepass,RefreshMood" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
          <script
          dangerouslySetInnerHTML={{
            __html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
            `
          }}
          >
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}