import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next-translate-routes/router";
import metadata from "../json/meta.json";
import { appWithTranslation } from "next-i18next";
import { withTranslateRoutes } from "next-translate-routes";
import logo from "../asset/imgs/logo.svg"

function MyApp({ Component, pageProps }) {
    const {pathname, locale, asPath} = useRouter();
    const localMeta = metadata[locale] ? metadata[locale] : metadata["es"];
    const meta = localMeta[pathname] ?  localMeta[pathname] : localMeta["/"];
    return (
        <>
            <Layout>
                <Head>
                    <title>{meta.title}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content={meta.description} />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:description" content={meta.description} />
                    {/* TODO: habría que usar una variable de ambiente para la url base */}
                    <meta property="og:url" content={"https://debmedia.com" + asPath} />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content={"https://debmedia.com/meta/logo.png"} />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <Script
                    id="google-tag-manager-script"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4XJ42L');`,
                    }}></Script>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T4XJ42L" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}></noscript>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </Layout>
            {/* { <!-- Start of HubSpot Embed Code -->} */}
            <Script
                type="text/javascript"
                id="hs-script-loader"
                async
                defer
                src="//js.hs-scripts.com/1797020.js"></Script>
            {/* <!-- End of HubSpot Embed Code --> */}
            {/* Script para el chatbot de biatoz */}
            <Script type="text/javascript" src="https://demo.biatoz.com/static/js/chatbotSetup_debmedia.js"></Script>
        </>
    );
}

export default withTranslateRoutes(appWithTranslation(MyApp));
