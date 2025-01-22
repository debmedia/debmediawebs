import React from "react";
import Header from "../components/Gobierno/Header"
import Market from "../components/Gobierno/Market"
import Solutions from "../components/Gobierno/Solutions"
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
      ...(await serverSideTranslations(locale, ['gobierno','components','common'])),
    },
  };
}

export default function Gobierno() {


  return (
    <>
      <Header />
      <Market />
      <Solutions color="gobierno" />
      <SpecsIndus indus="gobierno" />
      <Review />
      <Partner />
      <Level color="industriasColor" />
      <Contact />
      <Posts indistry="gobierno"/>
    </>
  );
}
