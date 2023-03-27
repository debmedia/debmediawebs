import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import intera from '../../asset/imgs/utilities/inter.svg'
import toleran from '../../asset/imgs/utilities/toleran.svg'
import mayoria from '../../asset/imgs/utilities/mayoria.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['utilities', 'common']);

    return (
        <>
            <Container fluid className="market-utilities-section">
                <Container>
                    <Row>
                        <Col className="market-utilities-section_maintitle">
                            <h3 className="text-center no-br-sm">
                                <Trans t={t} i18nKey="MARKET.TITLE"/>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-utilities-section_div">
                            <div className="imageXs">
                                <Image src={intera.src} width={120}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-utilities-section_title">
                            <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="market-utilities-section_parraf">
                            <Trans t={t} i18nKey="MARKET.CAPTION_1.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-utilities-section_div">
                            <div className="imageXs">
                                <Image src={toleran.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-utilities-section_title">
                            <Trans t={t} i18nKey="MARKET.CAPTION_2.TITLE"/>
                            </h4>
                            <p className="market-utilities-section_parraf">
                            <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-utilities-section_div">
                            <div className="imageXs">
                                <Image src={mayoria.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-utilities-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_3.TITLE"/>
                            </h4>
                            <p className="market-utilities-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_3.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-utilities-section_arrow">
                    <div className="market-utilities-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}