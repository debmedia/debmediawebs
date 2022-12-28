import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mar1 from '../../asset/imgs/partners/mar1.svg'
import mar2 from '../../asset/imgs/partners/mar2.svg'
import mar3 from '../../asset/imgs/partners/mar3.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function SpecsIndus() {
    const { t } = useTranslation(['partners', 'common']);
    return (
        <>
            <Container fluid className="modern-partners-section">
                <Container>
                    <Row>
                        <Col className="modern-partners-section_maintitle">
                            <h3 className="text-center">
                                <Trans t={t} i18nKey="MARKET.TITLE"/>
                            </h3>
                        </Col>
                    </Row>
                    <Row className=" d-flex justify-content-center">
                        <Col sm="4" xs="12" className="modern-partners-section_feature">
                            <Row>
                                <Col xs="12" className="modern-partners-section_feature-img d-flex justify-content-center">
                                    <Image src={mar1.src} width={100}
                                        height={100} className={'img-fluid'} />
                                </Col>
                                <Col xs="12" className="modern-partners-section_feature-text text-center">
                                    <h5>
                                       <Trans t={t} i18nKey="MARKET.CAPTION_1"/>
                                    </h5>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4" xs="12" className="modern-partners-section_feature">
                            <Row>
                                <Col xs="12" className="modern-partners-section_feature-img d-flex justify-content-center">
                                    <Image src={mar2.src} width={100}
                                        height={100} className={'img-fluid'} />
                                </Col>
                                <Col xs="12" className="modern-partners-section_feature-text text-center">
                                    <h5>
                                        <Trans t={t} i18nKey="MARKET.CAPTION_1"/>
                                    </h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4" xs="12" className="modern-partners-section_feature">
                            <Row>
                                <Col xs="12" className="modern-partners-section_feature-img d-flex justify-content-center">
                                    <Image src={mar3.src} width={100}
                                        height={100} className={'img-fluid'} />
                                </Col>
                                <Col xs="12" className="modern-partners-section_feature-text text-center">
                                    <h5>
                                        <Trans t={t} i18nKey="MARKET.CAPTION_1"/>
                                    </h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}