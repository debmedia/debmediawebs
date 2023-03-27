import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../asset/imgs/home/check_blue.svg'
import check_white from '../asset/imgs/home/check-m.svg'
import { useTranslation, Trans } from 'next-i18next';



export default function TitleWithIcons({t, title, captions}) {
    return (
        <>
            <Container className="solutions-top">
                <Row>
                    <Col className="solutions-section_maintitle">
                        <h3 className="text-center">
                            <Trans t={t} i18nKey={title}/>
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="solutions-section">
                <Container>
                    <Row>
                        {captions.map((caption, index)=>{
                            return (
                                <Col key={index} sm={4} xs={4} className="solutions-section_div">
                                    <div className="solutions-section_div-img  d-none d-sm-block">
                                        <Image src={check_blue.src} width={110}
                                            height={90} className={'img-fluid'} />
                                    </div>
                                    <div className="solutions-section_div-img  d-block d-sm-none">
                                        <Image src={check_white.src} width={60}
                                            height={60} className={'img-fluid'} />
                                    </div>

                                    <h4 className="solutions-section_title">
                                        <Trans t={t} i18nKey={caption}/>
                                    </h4>
                                </Col>
                            )
                        })} 
                    </Row>
                </Container>
            </Container>
        </>
    );
}