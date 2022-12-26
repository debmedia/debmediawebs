import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import modern1 from '../../asset/imgs/mobile/modern1.png'
import modern2 from '../../asset/imgs/mobile/modern2.png'
import modern3 from '../../asset/imgs/mobile/modern3.png'
import modern4 from '../../asset/imgs/mobile/modern4.png'
import { useTranslation, Trans } from 'next-i18next';

export default function Modern() {
    const { t } = useTranslation(['fila-virtual', 'common']);

    return (
        <>
            <Container fluid className="modern-section">
                <Container>
                    <Row>
                        <Col className="modern-section_maintitle">
                            <h3 className="text-center no-br-sm">
                                <Trans t={t} i18nKey="MODERN.TITLE"/>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="modern-section_div">
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern1.src} width={330}
                                        height={420} />
                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_1.TITLE"/>
                                        </h4>
                                        <p className="modern-section_parraf">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_1.SUBTITLE"/>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-sm-flex reverseXs">
                                <Col sm={5} xs={12} className="modern-section_div-text modern-section_div-text-center">
                                    <div>
                                        <h4 className="modern-section_title">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_2.TITLE"/>
                                        </h4>
                                        <p className="modern-section_parraf">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_2.SUBTITLE"/>
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={7} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern2.src} width={300}
                                        height={300} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern3.src} width={380}
                                        height={300} />
                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_3.TITLE"/>
                                        </h4>
                                        <p className="modern-section_parraf">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_3.SUBTITLE"/>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-sm-flex reverseXs">
                                <Col sm={5} xs={12} className="modern-section_div-text modern-section_div-text-center">
                                    <div>
                                        <h4 className="modern-section_title">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_4.TITLE"/>
                                        </h4>
                                        <p className="modern-section_parraf">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_4.SUBTITLE"/>
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={7} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern4.src} width={400}
                                        height={450} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}