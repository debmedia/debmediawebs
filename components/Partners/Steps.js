import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Data from '../../json/setps-partners.json';
import Link from 'next/link'
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next/router";

export default function Solutions() {
    const { t } = useTranslation(['partners', 'common']);
    const { locale } = useRouter();
    const [dataJson, setData] = useState([]);

    useEffect(() => {
        setData(Data[locale] || Data['es']);
    }, [locale]);

    return (
        <>
            <Container fluid className="setps-tabs_citas relative">
                <Container>
                    <Row>
                        <Col className="setps-tabs_citas_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                <Row>
                                    <Col sm={{ span: 6 }} className="mt-5 specialCol">
                                        <Tab.Content>
                                            {dataJson.map((item, index) => (
                                                <Tab.Pane key={index} eventKey={item.key}>
                                                    <Row>
                                                        <Col className="text-center">
                                                            <img src={`/partnerstabs/${item.image.url}`} alt={item.image.url} className={'img-fluid'} />
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={{ span: 6, offset: 5 }} className="relative">
                                        <h3 className="text-left mb-4 textTitle">
                                            <b>
                                                <Trans t={t} i18nKey="STEPS.TITLE"/>
                                            </b>
                                        </h3>
                                        <span className="lineSteps-partners"></span>
                                        <Nav variant="pills" className="flex-column">
                                            {dataJson.map((item, index) => (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={item.key} className="setps-tabs_citas_content-nav"><div className="numberStep">{index + 1}</div> <div className="textStep">{item.text}</div></Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                        <Link href="/contacto">
                                            <button className="citas-home_demobutton">
                                                <Trans t={t} i18nKey="common:REQUEST_A_DEMO"/>
                                            </button>
                                        </Link>
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
                                                <img src={`/partnerstabs/${item.image.url}`} alt={item.text} className={'img-fluid'} />
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