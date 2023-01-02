import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import humanos from '../../asset/imgs/preatendedor/humanos.svg'
import atencion from '../../asset/imgs/preatendedor/atencion.svg'
import tardia from '../../asset/imgs/preatendedor/tardia.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['preatendedor', 'common']);

    return (
        <>
            <Container fluid className="market-preatendedor-section">
                <Container>
                    <Row>
                        <Col className="market-preatendedor-section_maintitle text-center">
                            <h3>
                                <Trans t={t} i18nKey="MARKET.TITLE"/>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-preatendedor-section_div">
                            <div className="imageXs">
                                <Image src={humanos.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-preatendedor-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="market-preatendedor-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_1.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-preatendedor-section_div">
                            <div className="imageXs">
                                <Image src={atencion.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-preatendedor-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.TITLE"/>
                            </h4>
                            <p className="market-preatendedor-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-preatendedor-section_div">
                            <div className="imageXs">
                                <Image src={tardia.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-preatendedor-section_title">
                                <Trans t={t} i18nKey="MARKET.CAPTION_3.TITLE"/>
                            </h4>
                            <p className="market-preatendedor-section_parraf">
                                <Trans t={t} i18nKey="MARKET.CAPTION_3.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-preatendedor-section_arrow">
                    <div className="market-preatendedor-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}