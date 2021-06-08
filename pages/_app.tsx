import '../styles/globals.css'
import '../styles/tailwind.css'
import 'nprogress/nprogress.css'

import { AppProps } from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

import Layout from '../components/Layout'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: true,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pojok Cipanas</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Layout Component={Component} {...pageProps} />
    </>
  )
}

export default MyApp
