import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/home/videoShape.svg'
import pepole from '../../asset/imgs/home/pepole.svg'
import connect from '../../asset/imgs/home/connect.svg'
import stats from '../../asset/imgs/home/stats.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['home', 'common']);
    return (
        <>
            <Container fluid className="market-section">
                <Container>
                    <Row>
                        <Col className="market-section_maintitle">
                            <h3 className="text-center">
                                {t("MARKET.TITLE")}
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-section_div">
                            <div className="imagenXS">
                                <Image src={pepole.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>
                            <Trans t={t} i18nKey={"MARKET.CAPTION_1"}/>
                        </Col>
                        <Col sm={4} xs={4} className="market-section_div">
                            <div className="imagenXS">
                                <Image src={stats.src} width={100}
                                    height={135} className={'img-fluid'} />
                            </div>
                            <Trans t={t} i18nKey={"MARKET.CAPTION_2"}/>
                        </Col>
                        <Col sm={4} xs={4} className="market-section_div">
                            <div className="imagenXS">
                                <Image src={connect.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>
                            <Trans t={t} i18nKey={"MARKET.CAPTION_3"}/>
                        </Col>
                    </Row>
                </Container>
                <div className="market-section_arrow">
                    <div className="market-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}