import React from "react";
import Contact from "../components/Contact"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['components','common'])),
    },
  };
}


export default function debQ() {


  return (
    <>
    <div className="contact-margin">
    <Contact />
    </div>
     
    </>
  );
}
