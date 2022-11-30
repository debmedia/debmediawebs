import React, { useState, useEffect } from "react";
import Thankyou from "../components/Thankyou"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['components','common'])),
    },
  };
}


export default function Thankyoupage() {


  return (
    <>
        <Thankyou />
    </>
  );
}
