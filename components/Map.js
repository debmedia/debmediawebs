import React from "react";
import { Container } from "react-bootstrap";
import map from "../asset/imgs/map/map.svg";
import iso from "../asset/imgs/map/iso.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useMediaQuery } from "react-responsive";
import { useTranslation, Trans } from "next-i18next";
import Image from "next/image";

export default function Map() {
    const isMobile = useMediaQuery({ query: "(max-width:899px)" });
    const { t } = useTranslation(["components", "common"]);
    let caption = t("MAP.CAPTION").split(" ");
    return (
        <div className="map-section">
            <div className="map-container mr-0">
                <h3 className="map-section_mapcontent-text">
                    <Trans t={t} i18nKey="MAP.CAPTION" />
                </h3>
                <div className="map-image-wrapper">
                    <img src={map.src} alt="mapa" />
                </div>
            </div>

            <div style={{ backgroundColor: "#F6F7FB"}}>
            <Container>

            <div className="numbers-container my-2">
                <CoolNumber end={350} caption={"common:CLIENTS"}></CoolNumber>
                <CoolNumber end={50} caption={"common:INTERACTIONS"} numberSuffix={"M"}></CoolNumber>
                <CoolNumber end={50} caption={"common:PARTNERS"}></CoolNumber>
                <CoolNumber end={3000} caption={"common:BRANCHES_IMPLEMENTED"}></CoolNumber>
            </div>
            </Container>

            </div>
            <Container fluid className="map-section">
                <div className="iso-image-container my-3">
                    <Image src={iso} layout="responsive" className="img-fluid isoImg" alt="Iso" />
                </div>
            </Container>
        </div>
    );
}

function CoolNumber({ numberSuffix, end, caption }) {
    const { t } = useTranslation(["components", "common"]);
    return (
        <div className={"numbers text-center"}>
            <span className="quntity">
                +{" "}
                <CountUp end={end} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp>
                {numberSuffix}
            </span>
            <span className="type">
                <Trans t={t} i18nKey={caption} />
            </span>
        </div>
    );
}

