import React from "react";
import Header from "../components/Debsign/Header"
import Brands from "../components/Brands"
import Market from "../components/Debsign/Market"
import Steps from "../components/Debsign/Steps"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Industries from "../components/Industries"
import Services from "../components/Services"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['debsign','components','common'])),
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
