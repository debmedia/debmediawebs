import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import shape1 from '../../asset/imgs/mobile/shapeTabs.svg'
import Data from '../../json/setps-encuestas.json'; 
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next-translate-routes/router";

export default function Solutions() {
    const { t } = useTranslation(['encuestas', 'common']);
    const { locale } = useRouter();
    const [dataJson, setData] = useState([]);

    useEffect(() => {
        setData(Data[locale] || Data['es']);
    }, [locale]);
    return (
        <>
            <Container className="setps-top">
                <Row>
                    <Col className="setps-section_encuestas_maintitle">
                        <h3 className="text-center">
                            <Trans t={t} i18nKey="STEPS.TITLE"/>
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="setps-section_encuestas">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="setps-section_encuestas_div">
                            <div className="setps-section_encuestas_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_encuestas_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_encuestas_title">
                                <Trans t={t} i18nKey="STEPS.CAPTION_1.TITLE"/>
                            </h4>
                            <p className="setps-section_encuestas_parraf">
                                <Trans t={t} i18nKey="STEPS.CAPTION_1.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_encuestas_div">
                            <div className="setps-section_encuestas_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_encuestas_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_encuestas_title">
                                <Trans t={t} i18nKey="STEPS.CAPTION_2.TITLE"/>
                            </h4>
                            <p className="setps-section_encuestas_parraf">
                                <Trans t={t} i18nKey="STEPS.CAPTION_2.SUBTITLE"/>
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_encuestas_div">
                            <div className="setps-section_encuestas_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_encuestas_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_encuestas_title">
                                <Trans t={t} i18nKey="STEPS.CAPTION_3.TITLE"/>
                            </h4>
                            <p className="setps-section_encuestas_parraf">
                                <Trans t={t} i18nKey="STEPS.CAPTION_3.SUBTITLE"/>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="setps-tabs_encuestas relative">
                <div className={'setps-tabs_encuestas_shape1'}>
                    <Image src={shape1.src} layout="fill" className={'left'} />
                </div>
                <Container>
                    <Row>
                        <Col sm="12" className="flow-encuestas-section_maintitle text-center">
                            <h3>
                                <Trans t={t} i18nKey="STEPS.SUBTITLE"/>
                            </h3>
                        </Col>
                        <Col className="setps-tabs_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                <Row>
                                    <Col sm={{ span: 6 }} >
                                        <Tab.Content>
                                            {dataJson.map((item, index) => (
                                                <Tab.Pane key={index} eventKey={item.key}>
                                                    <Row>
                                                        <Col className="text-center">
                                                            {/* <Image src={`/encuestastabs/${item.image.url}`} width={item.image.width}
                                                                height={item.image.height} className={'img-fluid'} /> */}
                                                            <img src={`/encuestastabs/${item.image.url}`} alt={item.image.url} className={'img-fluid'} />
                                                        </Col>

                                                    </Row>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={5} className="relative">
                                        <Nav variant="pills" className="flex-column lineSteps-generic">
                                            {dataJson.map((item, index) => (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={item.key} className="setps-tabs_content-nav"><div className="numberStep">{index + 1}</div> <div className="textStep">{item.text}</div></Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                        {/* <button className="citas-home_demobutton">
                                            Solicita una demo
                                        </button> */}
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    <Row className="setps-accordion_content intern2 d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            {dataJson.map((item, index) => (
                                <Accordion.Item key={index} eventKey={item.key} className="setps-accordion_content-nav">
                                    <Accordion.Header className="inter2_button"><div className="inter2_button-step">{index + 1}</div> <div className="inter2_button-text">{item.text}</div></Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col xs={12} className="text-center">
                                                {/* <Image src={`/encuestastabs/${item.image.url}`} width={item.image.width}
                                                    height={item.image.height} className={'img-fluid'} /> */}
                                                <img src={`/encuestastabs/${item.image.url}`} alt={item.text} className={'img-fluid'} />
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Row>
                </Container>
            </Container>
        </>
    );
}