import React, { useState, useEffect } from "react";
import Header from "../components/Partners/Header"
import Market from "../components/Partners/Market"
import Steps from "../components/Partners/Steps"
import ContactPartners from "../components/ContactPartners"


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
