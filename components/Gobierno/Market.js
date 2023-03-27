import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import largas from '../../asset/imgs/gobierno/largas.svg'
import pro from '../../asset/imgs/gobierno/pro.svg'
import quejas from '../../asset/imgs/gobierno/quejas.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['gobierno', 'common']);

    return (
        <>
            <Container fluid className="market-gobierno-section">
                <Container>
                    <Row>
                        <Col className="market-gobierno-section_maintitle">
                            <h3 className="text-center">
                                <Trans t={t} i18nKey="MARKET.TITLE"/>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-gobierno-section_div">
                            <div className="imageXs">
                                <Image src={largas.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-gobierno-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="market-gobierno-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-gobierno-section_div">
                            <div className="imageXs">
                                <Image src={pro.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-gobierno-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.TITLE"/>
                            </h4>
                            <p className="market-gobierno-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-gobierno-section_div">
                            <div className="imageXs">
                                <Image src={quejas.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-gobierno-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_3.TITLE"/>
                            </h4>
                            <p className="market-gobierno-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_3.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-gobierno-section_arrow">
                    <div className="market-gobierno-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}