import React from "react";
import Header from "../components/Partners/Header"
import Market from "../components/Partners/Market"
import Steps from "../components/Partners/Steps"
import ContactPartners from "../components/ContactPartners"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['partners','components','common'])),
    },
  };
}

export default function Partners() {


  return (
    <>
      <Header /> 
      <Market />
      <Steps />
      <ContactPartners />
    </>
  );
}
