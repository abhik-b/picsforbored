import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
export default class MyDocument extends Document {
  

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}