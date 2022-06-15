import React, { useState, useEffect } from "react";
import Header from "../components/Debq/Header"
import Brands from "../components/Brands"
import Market from "../components/Debq/Market"
import Steps from "../components/Debq/Steps"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Industries from "../components/Industries"
import Modern from "../components/Debq/Modern"
import Services from "../components/Services"
import Level from "../components/Debq/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import Footer from "../components/Footer"


export default function debQ() {


  return (
    <>
      <Header /> 
      <Brands />
      <Market />
      <Steps />
      <Modern />
      <Review />
      <Industries />
      <Map />
      <Partner />
      <Services />
      <Level />
      <Contact />
      <Posts />
      <Footer />
    </>
  );
}
