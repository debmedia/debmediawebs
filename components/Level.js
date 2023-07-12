import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import demo from '../asset/imgs/demo.svg'
import moduleimg from '../asset/imgs/module.svg'
import config from '../asset/imgs/config.svg'
import client from '../asset/imgs/clients.svg'
import demoG from '../asset/imgs/demoG.svg'
import moduleimgG from '../asset/imgs/moduleG.svg'
import configG from '../asset/imgs/configG.svg'
import clientG from '../asset/imgs/clientsG.svg'
import top from '../asset/imgs/border.svg'
import topG from '../asset/imgs/borderG.svg'
import Link from 'next-translate-routes/link'
import { useTranslation, Trans } from 'next-i18next';


export default function Level(props) {
    const { t } = useTranslation(['components', 'common']);
    return (
        <>
            <Col className={props.color === "industriasColor" ? "d-none" : "d-block"}>
                <img src={top.src} className="lineBlue" alt="line" />
            </Col>
            <Col className={props.color === "industriasColor" ? "d-block" : "d-none"}>
                <img src={topG.src} className="img-fluid" alt="line" />
            </Col>
            <Container fluid className={props.color === "industriasColor" ? "level-section greyBk" : "level-section"}>

                <Container>
                    <Row>
                        <Col className={props.color === "industriasColor" ? "level-section_mainTitle mb-4 greyColor" : "level-section_mainTitle mb-4"}>
                            <h2 className="no-br-sm">
                                <Trans t={t} i18nKey="LEVEL.TITLE"/>
                            </h2>
                        </Col>
                    </Row>

                    <Row className="mt-4 level-section_relative">
                        <span className={props.color === "industriasColor" ? "level-section_line d-none d-sm-block greyColor" : "level-section_line d-none d-sm-block"}></span>

                        <Col xs={6} sm={3}>
                            <div className={props.color === "industriasColor" ? "text-center mb-3 d-none" : "text-center mb-3 d-block"}>
                                <Image src={moduleimg.src} width={120}
                                    height={80} alt=""/>
                            </div>
                            <div className={props.color === "industriasColor" ? "d-block text-center mb-3" : "d-none text-center mb-3"}>
                                <Image src={moduleimgG.src} width={120}
                                    height={80} alt=""/>
                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_step greyColor" : "level-section_step"}>
                                <div>
                                    1
                                </div>
                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_text greyColor" : "level-section_text"}>
                                <p className="no-br-sm">
                                    <Trans t={t} i18nKey="LEVEL.STEP_1"/>
                                </p>

                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className={props.color === "industriasColor" ? "text-center mb-3 d-none" : "text-center mb-3 d-block"}>
                                <Image src={demo.src} width={120}
                                    height={80} alt=""/>
                            </div>
                            <div className={props.color === "industriasColor" ? "d-block text-center mb-3" : "d-none text-center mb-3"}>
                                <Image src={demoG.src} width={120}
                                    height={80} alt=""/>
                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_step greyColor" : "level-section_step"}>
                                <div>
                                    2
                                </div>

                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_text greyColor" : "level-section_text"}>
                                <p className="no-br-sm">
                                    <Trans t={t} i18nKey="LEVEL.STEP_2"/>
                                </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className={props.color === "industriasColor" ? "text-center mb-3 d-none" : "text-center mb-3 d-block"}>
                                <Image src={config.src} width={120}
                                    height={80} alt=""/>
                            </div>
                            <div className={props.color === "industriasColor" ? "d-block text-center mb-3" : "d-none text-center mb-3"}>
                                <Image src={configG.src} width={120}
                                    height={80} alt=""/>
                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_step greyColor" : "level-section_step"}>
                                <div>
                                    3
                                </div>

                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_text greyColor" : "level-section_text"}>
                                <p className="no-br-sm">
                                    <Trans t={t} i18nKey="LEVEL.STEP_3"/>
                                </p>

                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className={props.color === "industriasColor" ? "text-center mb-3 d-none" : "text-center mb-3 d-block"}>
                                <Image src={client.src} width={120}
                                    height={80} alt=""/>
                            </div>
                            <div className={props.color === "industriasColor" ? "d-block text-center mb-3" : "d-none text-center mb-3"}>
                                <Image src={clientG.src} width={120}
                                    height={80} alt=""/>
                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_step greyColor" : "level-section_step"}>
                                <div>
                                    4
                                </div>

                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_text greyColor" : "level-section_text"}>
                                <p className="no-br-sm">
                                    <Trans t={t} i18nKey="LEVEL.STEP_4"/>
                                </p>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-4">
                            <Link href="/contacto">
                                <button className={props.color === "industriasColor" ? "level-section_demobutton greyColor" : "level-section_demobutton"}>
                                <Trans t={t} i18nKey="LEVEL.BUTTON"/>
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}