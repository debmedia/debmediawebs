import React from "react";
import Header from "../components/Retail/Header"
import Market from "../components/Retail/Market"
import Solutions from "../components/Retail/Solutions"
import SpecsIndus from "../components/SpecsIndus"
import Review from "../components/Review"
import Partner from "../components/Partner"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['retail','components','common'])),
    },
  };
}

export default function Retail() {


  return (
    <>
      <Header />
      <Market />
      <Solutions color="retail"/>
      <SpecsIndus indus="retail" />
      <Review />
      <Partner />
      <Level color="industriasColor" />
      <Contact />
      <Posts indistry="retail"/>
    </>
  );
}
