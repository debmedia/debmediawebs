import React from "react";
import Header from "../components/Encuestas/Header"
import Brands from "../components/Brands"
import Market from "../components/Encuestas/Market"
import Steps from "../components/Encuestas/Steps"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Industries from "../components/Industries"
import Opinion from "../components/Encuestas/Opinion"
import Modern from "../components/Encuestas/Modern"
import Flow from "../components/Encuestas/Flow"
import Services from "../components/Services"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['encuestas','components','common'])),
    },
  };
}

export default function Encuestas() {


  return (
    <>
      <Header /> 
      <Brands />
      <Market />
      <Steps />
      <Opinion />
      <Modern />
      <Flow />
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
