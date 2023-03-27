import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import alto from '../../asset/imgs/salud/alto.svg'
import exp from '../../asset/imgs/salud/exp.svg'
import des from '../../asset/imgs/salud/des.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['salud', 'common']);

    return (
        <>
            <Container fluid className="market-banca-section">
                <Container>
                    <Row>
                        <Col className="market-banca-section_maintitle">
                            <h3 className="text-center">
                                <Trans t={t} i18nKey="MARKET.TITLE"/>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={alto.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                            <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="market-banca-section_parraf">
                            <Trans t={t} i18nKey="MARKET.CAPTION_1.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={exp.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                            <Trans t={t} i18nKey="MARKET.CAPTION_2.TITLE"/>
                            </h4>
                            <p className="market-banca-section_parraf">
                            <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={des.src} width={65}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                            <Trans t={t} i18nKey="MARKET.CAPTION_3.TITLE"/>
                            </h4>
                            <p className="market-banca-section_parraf">
                            <Trans t={t} i18nKey="MARKET.CAPTION_3.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-banca-section_arrow">
                    <div className="market-banca-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}