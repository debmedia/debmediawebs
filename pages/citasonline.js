import React from "react";
import Header from "../components/Citas/Header"
import Brands from "../components/Brands"
import Market from "../components/Citas/Market"
import Steps from "../components/Citas/Steps"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Industries from "../components/Industries"
import Modern from "../components/Citas/Modern"
import Services from "../components/Services"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['citasonline','components','common'])),
    },
  };
}


export default function Citas() {


  return (
    <>
      <Header /> 
      <Brands />
      <Market />
      <Steps />
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
