import React from "react";
import Header from "../components/Salud/Header"
import Market from "../components/Salud/Market"
import Solutions from "../components/Salud/Solutions"
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
      ...(await serverSideTranslations(locale, ['salud','components','common'])),
    },
  };
}

export default function Salud() {


  return (
    <>
      <Header />
      <Market />
      <Solutions color="salud" />
      <SpecsIndus indus="salud" />
      <Review />
      <Partner />
      <Level color="industriasColor" />
      <Contact />
      <Posts indistry="salud" />
    </>
  );
}
