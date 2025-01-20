import React, { useState, useEffect } from "react";
import Header from "../components/Preatendedor/Header"
import Brands from "../components/Brands"
import Market from "../components/Preatendedor/Market"
import Steps from "../components/Preatendedor/Steps"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Industries from "../components/Industries"
import Modern from "../components/Preatendedor/Modern"
import Flow from "../components/Preatendedor/Flow"
import Services from "../components/Services"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['preatendedor','components','common'])),
    },
  };
}

export default function Preatendedor() {


  return (
    <>
      <Header /> 
      <Brands />
      <Market />
      <Steps />
      <Flow />
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
