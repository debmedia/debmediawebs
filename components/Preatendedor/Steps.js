import React from "react";
import { Row, Container, Col} from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import wapp1_es from '../../asset/imgs/preatendedor/Chatbot_ES.png'
import wapp1_pt from '../../asset/imgs/preatendedor/Chatbot_PT.png'
import wapp1_en from '../../asset/imgs/preatendedor/Chatbot_EN.png'
import { useTranslation, Trans } from 'next-i18next';
import PillList from "../PillList";
import { useRouter } from "next/dist/client/router";

const wapp1_lang = {es: wapp1_es, pt: wapp1_pt, en: wapp1_en};

export default function Solutions() {
    const { t } = useTranslation(['preatendedor', 'common']);
    const { locale } = useRouter();
    const wapp1 = wapp1_lang[locale] || wapp1_lang["es"];
    return (
        <>
            <Container className="setps-top">
                <Row>
                    <Col className="setps-section_preatendedor_maintitle">
                        <h3 className="text-center">
                            <Trans t={t} i18nKey="STEPS.TITLE"/>
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="setps-section_preatendedor">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="setps-section_preatendedor_div">
                            <div className="setps-section_preatendedor_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_preatendedor_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="setps-section_preatendedor_title">
                                <Trans t={t} i18nKey="STEPS.CAPTION_1.TITLE"/>

                            </h4>
                            <p className="setps-section_preatendedor_parraf">
                                <Trans t={t} i18nKey="STEPS.CAPTION_1.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_preatendedor_div">
                            <div className="setps-section_preatendedor_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_preatendedor_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_preatendedor_title">
                                <Trans t={t} i18nKey="STEPS.CAPTION_2.TITLE"/>

                            </h4>
                            <p className="setps-section_preatendedor_parraf">
                                <Trans t={t} i18nKey="STEPS.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_preatendedor_div">
                            <div className="setps-section_preatendedor_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_preatendedor_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_preatendedor_title">
                                <Trans t={t} i18nKey="STEPS.CAPTION_3.TITLE"/>
                            </h4>
                            <p className="setps-section_preatendedor_parraf">
                                <Trans t={t} i18nKey="STEPS.CAPTION_3.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="wapp-preatendedor-section relative">
                <Container>
                    <Row>
                        <Col sm="12" className="wapp-preatendedor-section_maintitle">
                            <h3 className="text-center">
                            <Trans t={t} i18nKey="STEPS.CAPTION"/>
                            </h3>
                        </Col>
                    </Row>
                    <Row className="text-center mt-5 d-flex justify-content-center">
                        <Col sm="5" xs="10" className="d-flex justify-content-center flex-column">
                            <img src={wapp1.src} alt="wapp" className={'img-fluid'} />
                        </Col>
                        <Col sm="5" xs="10" className="d-flex justify-content-center flex-column">
                            <PillList
                            t={t}
                            items={["STEPS.PILL_1","STEPS.PILL_2","STEPS.PILL_3","STEPS.PILL_4"]}
                            />
                        </Col>
                    </Row>
                    {/* <Col sm={{ span: 10, offset: 1 }} className="text-center  mt-5">
                            <Image src={wapp.src} width={980}
                                height={660} className={'img-fluid'} />
                        </Col> */}

                </Container>
            </Container>

        </>
    );
}