import Image from 'next/image';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import modern1_en from '../../asset/imgs/mobile/FilaVirtual_Chatbot_EN.png';
import modern1_es from '../../asset/imgs/mobile/FilaVirtual_Chatbot_ES.png';
import modern1_pt from '../../asset/imgs/mobile/FilaVirtual_Chatbot_PT.png';
import modern3_en from '../../asset/imgs/mobile/FilaVirtual_Configuraciontramites_EN.png';
import modern3_es from '../../asset/imgs/mobile/FilaVirtual_Configuraciontramites_ES.png';
import modern3_pt from '../../asset/imgs/mobile/FilaVirtual_Configuraciontramites_PT.png';
import modern4_en from '../../asset/imgs/mobile/FilaVirtual_Look_feel_EN.png';
import modern4_es from '../../asset/imgs/mobile/FilaVirtual_Look_feel_ES.png';
import modern4_pt from '../../asset/imgs/mobile/FilaVirtual_Look_feel_PT.png';
import modern2 from '../../asset/imgs/mobile/modern2.png';
import { Trans, useTranslation } from 'next-i18next';
import { useRouter } from "next/dist/client/router";

const modern1_lang = {es: modern1_es, pt: modern1_pt, en: modern1_en};
const modern3_lang = {es: modern3_es, pt: modern3_pt, en: modern3_en};
const modern4_lang = {es: modern4_es, pt: modern4_pt, en: modern4_en};
export default function Modern() {
    const { t } = useTranslation(['fila-virtual', 'common']);
    const { locale } = useRouter();
    const modern1 = modern1_lang[locale] || modern1_lang["es"];
    const modern3 = modern3_lang[locale] || modern3_lang["es"];
    const modern4 = modern4_lang[locale] || modern4_lang["es"];
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
                            <Row className="d-sm-flex reverse-lg">
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