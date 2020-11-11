import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import {GA_TRACKING_ID} from '../lib/gtag'

export default class MyDocument extends Document {
  

  render() {
    return (
      <Html>
        <Head>
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <html lang='en' />
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