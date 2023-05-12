import React, { useState, useEffect } from "react";
import '../styles/globals.css'
import '../styles/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from "next/head";
import Script from 'next/script'
import Layout from "../components/layout";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useRouter } from 'next-translate-routes/router'
import Meta from '../json/meta.json';
import { appWithTranslation } from 'next-i18next';
import { withTranslateRoutes } from 'next-translate-routes'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [metainfo, setMeta] = useState({});

  useEffect(() => {
      let result = Meta[0][router.pathname];
      if(result === undefined) {
        result = Meta[0]["/"];
      } 
      setMeta(result);
  }, [router.pathname]);

  return (
    <>
      <Layout>
        <Head>
          <title>{metainfo.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={metainfo.description} />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4XJ42L');`}}></script>
        </Head>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T4XJ42L"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        {!router.pathname.includes("blog") && <Navbar />}
        <Component {...pageProps} />
        <Footer />
      </Layout>
     {/* { <!-- Start of HubSpot Embed Code -->} */}
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/1797020.js"></script>
      {/* <!-- End of HubSpot Embed Code --> */}
    </>

  );
}


export default withTranslateRoutes(appWithTranslation(MyApp));
