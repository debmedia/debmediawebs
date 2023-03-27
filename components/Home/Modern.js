import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import api from '../../asset/imgs/home/api.svg'
import graficos_es from '../../asset/imgs/home/Metricas_Home_ES.svg'
import graficos_pt from '../../asset/imgs/home/Metricas_Home_PT.svg'
import graficos_en from '../../asset/imgs/home/Metricas_Home_EN.svg'
import channel from '../../asset/imgs/home/channels.svg'
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next-translate-routes/router";

const graficos_lang = {es: graficos_es, pt: graficos_pt, en: graficos_en};

export default function Modern() {
    const { t } = useTranslation(['home', 'common']);
    const {locale} = useRouter();
    const graficos = graficos_lang[locale] || graficos_lang["es"];
    return (
        <>
            <Container fluid className="modern-section">
                <Container>
                    <Row>
                        <Col className="modern-section_maintitle">
                            <h3 className="text-center">
                                <Trans t={t} i18nKey="MODERN.TITLE"/>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="modern-section_div">
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-end">
                                    <img src={api.src} className="img-fluid" />
                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_1.TITLE"/>
                                        </h4>
                                        <p className="modern-section_parraf">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_1.PARAGRAPH"/>
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                            <Row className="d-sm-flex reverse-lg">
                                <Col sm={6} xs={12} className="modern-section_div-text modern-section_div-text-center">
                                    <div>
                                        <h4 className="modern-section_title">
                                        <Trans t={t} i18nKey="MODERN.CAPTION_2.TITLE"/>
                                        </h4>
                                        <p className="modern-section_parraf">
                                        <Trans t={t} i18nKey="MODERN.CAPTION_2.PARAGRAPH"/>
                                        </p>
                                    </div>

                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <img src={graficos.src} className="img-fluid" />
                                </Col>

                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-end">
                                    <img src={channel.src} className="img-fluid" />
                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                        <Trans t={t} i18nKey="MODERN.CAPTION_3.TITLE"/>

                                        </h4>
                                        <p className="modern-section_parraf">
                                        <Trans t={t} i18nKey="MODERN.CAPTION_3.PARAGRAPH"/>
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>


                    </Row>
                </Container>
            </Container>
        </>
    );
}