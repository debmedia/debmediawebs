import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import inter from '../../asset/imgs/banca/inter.svg'
import resp from '../../asset/imgs/banca/resp.svg'
import banco from '../../asset/imgs/banca/banco.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['banking', 'common']);
    return (
        <>
            <Container fluid className="market-banca-section">
                <Container>
                    <Row>
                        <Col className="market-banca-section_maintitle">
                            <h3 className="text-center">
                                <Trans t={t} i18nKey="MARKET.TITLE">
                                    0 <br /><b> 0 <br className="d-block d-sm-none" /> 2</b>
                                </Trans>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={inter.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="market-banca-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={resp.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="market-banca-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={banco.src} width={65}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="market-banca-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
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