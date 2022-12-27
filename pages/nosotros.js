import React from "react";
import Header from "../components/Nosotros/Header"
import Market from "../components/Nosotros/Market"
import Historia from "../components/Nosotros/Historia"
import Solutions from "../components/Nosotros/Solutions"
import Contact from "../components/Contact"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['nosotros','components','common'])),
    },
  };
}

export default function Banca() {


  return (
    <>
      <Header />
      <Market />
      <Historia />
      <Solutions />
      <Contact />
    </>
  );
}
