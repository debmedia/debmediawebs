import { Trans, useTranslation } from 'next-i18next';
import { useRouter } from "next/dist/client/router";
import Link from 'next-translate-routes/link';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import how1_en from '../../asset/imgs/encuestas/EncuestasAutomatizada_Paso01_EN.png';
import how1_es from '../../asset/imgs/encuestas/EncuestasAutomatizada_Paso01_ES.png';
import how1_pt from '../../asset/imgs/encuestas/EncuestasAutomatizada_Paso01_PT.png';
import how2_es from '../../asset/imgs/encuestas/EncuestasAutomatizada_Paso02_ES.png';
import how2_pt from '../../asset/imgs/encuestas/EncuestasAutomatizada_Paso02_PT.png';
import how2_en from '../../asset/imgs/encuestas/EncuestasAutomatizada_Paso02_EN.png';
import how3_es from '../../asset/imgs/encuestas/EncuestasAutomatizada_Paso03_ES.png';
import how3_pt from '../../asset/imgs/encuestas/EncuestasAutomatizada_Paso03_PT.png';
import how3_en from '../../asset/imgs/encuestas/EncuestasAutomatizada_Paso03_EN.png';

const how1_lang = {es: how1_es, pt: how1_pt, en: how1_en};
const how2_lang = {es: how2_es, pt: how2_pt, en: how2_en};
const how3_lang = {es: how3_es, pt: how3_pt, en: how3_en};
export default function Market() {
    const { t } = useTranslation(['encuestas', 'common']);
    const { locale } = useRouter();
    const how1 = how1_lang[locale] || how1_lang["es"];
    const how2 = how2_lang[locale] || how2_lang["es"];
    const how3 = how3_lang[locale] || how3_lang["es"];
    return (
        <>
            <Container fluid className="flow-encuestas-section relative">
                <Container>
                    <Row >
                        <Col sm="12" className="flow-encuestas-section_maintitle text-center">
                            <h3>
                                <Trans t={t} i18nKey="FLOW.TITLE"/>
                            </h3>
                        </Col>
                        <Col sm="4" xs="12" className="text-center flow-encuestas-section_how">
                            <img src={how1.src} className="img-fluid" />
                            <figure>
                                <h5>
                                    <Trans t={t} i18nKey="FLOW.CAPTION_1.TITLE"/>
                                </h5>
                                <p>
                                    <Trans t={t} i18nKey="FLOW.CAPTION_1.SUBTITLE"/>
                                </p>
                            </figure>
                        </Col>
                        <Col sm="4" xs="12" className="text-center flow-encuestas-section_how">
                            <img src={how2.src} className="img-fluid" />
                            <figure>
                                <h5>
                                    <Trans t={t} i18nKey="FLOW.CAPTION_2.TITLE"/>
                                </h5>
                                <p>
                                    <Trans t={t} i18nKey="FLOW.CAPTION_2.SUBTITLE"/>
                                </p>
                            </figure>
                        </Col>
                        <Col sm="4" xs="12" className="text-center flow-encuestas-section_how">
                            <img src={how3.src} className="img-fluid" />
                            <figure>
                                <h5>
                                    <Trans t={t} i18nKey="FLOW.CAPTION_3.TITLE"/>
                                </h5>
                                <p>
                                    <Trans t={t} i18nKey="FLOW.CAPTION_3.SUBTITLE"/>
                                </p>
                            </figure>
                        </Col>
                        <Col className="text-center mt-4">
                        <Link href="/contacto">
                            <button className="citas-home_demobutton">
                                <Trans t={t} i18nKey="common:REQUEST_A_DEMO"/>
                            </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}