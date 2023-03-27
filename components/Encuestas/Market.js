import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import falsas from '../../asset/imgs/encuestas/falsas.svg'
import equivo from '../../asset/imgs/encuestas/equivo.svg'
import rendimiento from '../../asset/imgs/encuestas/rendimiento.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['encuestas', 'common']);

    return (
        <>
            <Container fluid className="market-encuestas-section">
                <Container>
                    <Row>
                        <Col className="market-encuestas-section_maintitle text-center">
                            <h3>
                                <Trans t={t} i18nKey="MARKET.TITLE"/>
                            </h3>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-encuestas-section_div">
                            <div className="imageXs">
                                <Image src={falsas.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-encuestas-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="market-encuestas-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-encuestas-section_div">
                            <div className="imageXs pt-2">
                                <Image src={equivo.src} width={70}
                                    height={100} className={'img-fluid'} />
                            </div>

                            <h4 className="market-encuestas-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.TITLE"/>
                            </h4>
                            <p className="market-encuestas-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-encuestas-section_div">
                            <div className="imageXs">
                                <Image src={rendimiento.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-encuestas-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_3.TITLE"/>
                            </h4>
                            <p className="market-encuestas-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_3.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-encuestas-section_arrow">
                    <div className="market-encuestas-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}