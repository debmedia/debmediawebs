import React from "react";
import Header from "../components/Mobile/Header"
import Brands from "../components/Brands"
import Market from "../components/Mobile/Market"
import Steps from "../components/Mobile/Steps"
import Channels from "../components/Mobile/Channels"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Industries from "../components/Industries"
import Modern from "../components/Mobile/Modern"
import Services from "../components/Services"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['fila-virtual','components','common'])),
    },
  };
}

export default function Mobile() {


  return (
    <>
      <Header /> 
      <Brands />
      <Market />
      <Steps />
      <Channels />
      <Modern />
      <Review />
      <Industries />
      <Map />
      <Partner />
      <Services />
      <Level />
      <Contact />
      <Posts />
    </>
  );
}
