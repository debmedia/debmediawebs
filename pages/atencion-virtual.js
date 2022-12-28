import React from "react";
import Header from "../components/Videollamada/Header"
import Brands from "../components/Brands"
import Market from "../components/Videollamada/Market"
import Flow from "../components/Videollamada/Flow"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Industries from "../components/Industries"
import Specs from "../components/Videollamada/Specs"
import Services from "../components/Services"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['atencion-virtual','components','common'])),
    },
  };
}

export default function Videocall() {


  return (
    <>
      <Header />
      <Brands />
      <Market />
      <Flow />
      <Specs />
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
