import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import desco from '../../asset/imgs/citas/desco.svg'
import espera from '../../asset/imgs/citas/espera.svg'
import falta from '../../asset/imgs/citas/falta.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['citas', 'common']);
    return (
        <>
            <Container fluid className="market-citas-section">
                <Container>
                    <Row>
                        <Col className="market-citas-section_maintitle text-center">
                            <h3>
                                <Trans t={t} i18nKey="MARKET.TITLE"/>
                            </h3>
                            {/* <p>Que no saben cómo personalizar la atención
                            </p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-citas-section_div">
                            <div className="imageXs">
                                  <Image src={desco.src} width={70}
                                height={135} className={'img-fluid'} alt=""/>
                            </div>
                          
                            <h4 className="market-citas-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="market-citas-section_parraf">
                            <Trans t={t} i18nKey="MARKET.CAPTION_1.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-citas-section_div">
                            <div className="imageXs">
                                <Image src={falta.src} width={70}
                                height={135} className={'img-fluid'} alt=""/>
                            </div>
                            
                            <h4 className="market-citas-section_title">
                            <Trans t={t} i18nKey="MARKET.CAPTION_2.TITLE"/>
                            </h4>
                            <p className="market-citas-section_parraf">
                            <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-citas-section_div">
                        <div className="imageXs">
                                  <Image src={espera.src} width={70}
                                height={135} className={'img-fluid'} alt=""/>
                                </div>
                          
                            <h4 className="market-citas-section_title">
                            <Trans t={t} i18nKey="MARKET.CAPTION_3.TITLE"/>
                            </h4>
                            <p className="market-citas-section_parraf">
                            <Trans t={t} i18nKey="MARKET.CAPTION_3.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-citas-section_arrow">
                    <div className="market-citas-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}