import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import how1 from '../../asset/imgs/encuestas/how1.png'
import how2 from '../../asset/imgs/encuestas/how2.png'
import how3 from '../../asset/imgs/encuestas/how3.png'
import Link from 'next/link'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['encuestas', 'common']);

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