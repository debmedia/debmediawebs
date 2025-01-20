import React, { useState, useEffect } from "react";
import Clientes from "../components/Clientes/Solutions"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['clientes','components','common'])),
    },
  };
}


export default function Clients() {

  return (
    <>
      <Clientes/>
    </>
  );
}
