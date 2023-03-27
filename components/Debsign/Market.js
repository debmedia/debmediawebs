import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mensaje from '../../asset/imgs/debsign/mensaje.svg'
import perju from '../../asset/imgs/debsign/perju.svg'
import imagen from '../../asset/imgs/debsign/imagen.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['debsign', 'common']);

    return (
        <>
            <Container fluid className="market-mobile-section">
                <Container>
                    <Row>
                        <Col className="market-mobile-section_maintitle text-center">
                            <h3>
                            <Trans t={t} i18nKey="MARKET.TITLE"/>
                            </h3>
                            <p>
                            <Trans t={t} i18nKey="MARKET.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-mobile-section_div">
                        <div className="imageXs">
                                 <Image src={mensaje.src} width={70}
                                height={135} className={'img-fluid'} />
                                </div>
                           
                                <h4 className="market-mobile-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                                </h4>
                                <p className="market-mobile-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.SUBTITLE"/>
                                </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-mobile-section_div">
                        <div className="imageXs">
                                 <Image src={perju.src} width={70}
                                height={135} className={'img-fluid'} />
                                </div>
                           
                            <h4 className="market-mobile-section_title">
                            <Trans t={t} i18nKey="MARKET.CAPTION_2.TITLE"/>
                            </h4>
                            <p className="market-mobile-section_parraf">
                            <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-mobile-section_div">
                        <div className="imageXs">
                                 <Image src={imagen.src} width={70}
                                height={135} className={'img-fluid'} />
                                </div>
                           
                            <h4 className="market-mobile-section_title">
                            <Trans t={t} i18nKey="MARKET.CAPTION_3.TITLE"/>
                            </h4>
                            <p className="market-mobile-section_parraf">
                            <Trans t={t} i18nKey="MARKET.CAPTION_3.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-mobile-section_arrow">
                    <div className="market-mobile-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}