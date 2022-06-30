import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
      <title>INICIO</title>
      <meta name="description" content="Lideres en acabados!" />
  <meta property="og:title" content="About - STRONG CONCRETE" />
  <meta property="og:description" content="Lideres en acabados!" />
  <meta property="og:url" content="https://myclothingstore.com/about" />
  <meta property="og:type" content="website" />
  <link rel="icon" href="/favicon.ico" />

      </Head>
      <Navbar/>
      <Component {...pageProps} />
      
    </React.Fragment>
  );
}

export default MyApp;