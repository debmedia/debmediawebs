import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image';
import modern1 from '../../asset/imgs/encuestas/modern1.png';
import modern2_es from '../../asset/imgs/encuestas/Encuestas_Metricas_ES.png';
import modern2_pt from '../../asset/imgs/encuestas/Encuestas_Metricas_PT.png';
import modern2_en from '../../asset/imgs/encuestas/Encuestas_Metricas_EN.png';
import modern3 from '../../asset/imgs/encuestas/modern3.png';
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next/dist/client/router";

const modern2_lang = {es: modern2_es, pt: modern2_pt, en: modern2_en};
export default function Modern() {
    const { t } = useTranslation(['encuestas', 'common']);
    const { locale } = useRouter();
    const modern2 = modern2_lang[locale] || modern2_lang["es"];

    return (
        <>
            <Container fluid className="modern-section mb-5">
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
                                    <Image src={modern1.src} width={350}
                                        height={350} />
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
                            <Row className="d-sm-flex reverse-lg">
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
                                    <Image src={modern3.src} width={350}
                                        height={350} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern2.src} width={450}
                                        height={400} />
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
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}