import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import modelos from '../../asset/imgs/telcos/modelos.svg'
import difi from '../../asset/imgs/telcos/difi.svg'
import cambian from '../../asset/imgs/telcos/cambian.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['telcos', 'common']);
    return (
        <>
            <Container fluid className="market-retail-section">
                <Container>
                    <Row>
                        <Col className="market-retail-section_maintitle">
                            <h3 className="text-center no-br-sm">
                                <Trans t={t} i18nKey="MARKET.TITLE"/>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-retail-section_div">
                            <div className="imageXs">
                                <Image src={modelos.src} width={120}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-retail-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="market-retail-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-retail-section_div">
                            <div className="imageXs">
                                <Image src={difi.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-retail-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.TITLE"/>
                            </h4>
                            <p className="market-retail-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-retail-section_div">
                            <div className="imageXs">
                                <Image src={cambian.src} width={60}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-retail-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_3.TITLE"/>
                            </h4>
                            <p className="market-retail-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_3.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-retail-section_arrow">
                    <div className="market-retail-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}