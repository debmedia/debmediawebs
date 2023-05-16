import React from "react";
import { Row, Container, Col, Stack } from "react-bootstrap";
import map from '../asset/imgs/map/map.svg';
import iso from '../asset/imgs/map/iso.png';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { useMediaQuery } from 'react-responsive'
import { useTranslation, Trans } from 'next-i18next';
import Image from "next/image";

export default function Map() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' });
    const { t } = useTranslation(['components', 'common']);
    let caption = t("MAP.CAPTION").split(" ")
    return (
        <div className="map-section">
            <Container fluid className="map-section relative">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h3 className="map-section_mapcontent-text">
                                <Trans t={t} i18nKey="MAP.CAPTION" />
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <div className="super-map">
            <Image src={map} className="img-fluid" layout="fill" objectFit="cover" alt="Mapa" objectPosition={"30% 50%"}/>
            </div>
            <div className="numbers-container my-2">
                <CoolNumber foo="number1" end={350} caption={"common:CLIENTS"}></CoolNumber>
                <CoolNumber foo="number2" end={100} caption={"common:INTERACTIONS"}></CoolNumber>
                <CoolNumber foo="number3" end={50} caption={"common:PARTNERS"}></CoolNumber>
                <CoolNumber foo="number4" end={3000} caption={"common:BRANCHES_IMPLEMENTED"}></CoolNumber>
            </div>
            <Container fluid className="map-section">
                <div className="iso-image-container my-3">
                    <Image src={iso} layout="responsive" className="img-fluid isoImg" alt="Iso" />
                </div>
            </Container>
        </div>
    );
}

function CoolNumber({foo, end, caption}) {
    const { t } = useTranslation(['components', 'common']);
    return (
        <div className={"numbers text-center " + foo}>
            <span className="quntity">
                +{" "}
                <CountUp end={end} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp>
            </span>
            <span className="type">
                <Trans t={t} i18nKey={caption} />
            </span>
        </div>
    );
}

function EvenLines({lines, children}) {
    let words = children.split(" ");
    let perLine = Math.ceil(words.length / lines);
    for (let i = lines - 1; i >= 0; i--) {
        words.splice(perLine*(i),0, <br/>)
    }
    return (<>
        {words.map(el => typeof el === 'string' ? el + " " : el)}
    </>);
}