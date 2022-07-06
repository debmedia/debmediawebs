import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check from '../../asset/imgs/banca/check.svg'
import logosbanca from '../../asset/imgs/banca/logos-banca.png'
import check_white from '../../asset/imgs/home/check-m.svg'
import Data from '../../json/services-banca.json';
import Link from 'next/link'


export default function Solutions(props) {
    const [dataJson, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);

    return (
        <>
            <Container className="solutions-indus-top">
                <Row>
                    <Col className="solutions-indus-section_maintitle">
                        <h3 className="text-center">
                            <b> Entrega a tus clientes la</b> <br />
                            atención que se merecen
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="solutions-indus-section">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="solutions-indus-section_div">
                            <div className="solutions-indus-section_div-img  d-none d-sm-block">
                                <Image src={check.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-indus-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="solutions-indus-section_title">
                                Integra los canales  <br className="d-none d-sm-block" /> de atención
                            </h4>
                            <p> y ofrece una atención omnicanal</p>
                        </Col>
                        <Col sm={4} xs={4} className="solutions-indus-section_div">
                            <div className="solutions-indus-section_div-img  d-none d-sm-block">
                                <Image src={check.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-indus-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="solutions-indus-section_title">
                                Optimiza los procesos
                            </h4>
                            <p>con datos y agiliza la atención</p>
                        </Col>
                        <Col sm={4} xs={4} className="solutions-indus-section_div">
                            <div className="solutions-indus-section_div-img  d-none d-sm-block">
                                <Image src={check.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-indus-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="solutions-indus-section_title">
                            Mejora su experiencia
                            </h4>
                            <p>  en cada punto de contacto.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="solutions-indus-clients">
                <Row>
                    <Col xs="12" className="solutions-indus-section_maintitle">
                        <h3 className="text-center">
                            <b> Organizaciones líderes</b> confían <br />
                            en las soluciones de<b> Debmedia</b> <br />
                        </h3>
                    </Col>
                    <Col xs="12" className="d-flex justify-content-center">
                        <Image src={logosbanca.src} width={1200}
                            height={300} className={'img-fluid'} />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="solutions-indus-tabs">
                <Container>
                    <Row>
                        <Col className="solutions-indus-tabs_title mb-5">
                            <h2>
                                <b> Personaliza</b> cada punto de interacción <br />
                                y <b>ofrece una atención omnicanal</b>
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="solutions-indus-tabs_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="videocall">
                                <Row>
                                    <Col sm={4}>
                                        <Nav variant="pills" className="flex-column">
                                            {dataJson.map((item, index) => (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={item.key} className={"solutions-tabs_content-nav " + props.color}>{item.title}</Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                    </Col>
                                    <Col sm={8} className="solutions-indus-tabs_content-borde banca">
                                        <Tab.Content>
                                            {dataJson.map((item, index) => (
                                                <Tab.Pane key={index} eventKey={item.key}>
                                                    <Row>
                                                        <Col xs="12" className="d-flex justify-content-center solutions-indus-tabs_content-img">
                                                        <Image src={`/bancatabs/${item.image.url}`} width={item.image.width}
                                                                height={item.image.height} className={'img-fluid'} />
                                                        </Col>
                                                        <Col xs={{ span: 10, offset: 1 }} className="solutions-indus-tabs_content-text">
                                                            <p>
                                                                <b>{item.main}</b>{item.secu}
                                                            </p>
                                                            <Link href={item.url}>
                                                            <button>
                                                                Conoce más
                                                            </button>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    <Row className="solutions-accordion_content d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            {dataJson.map((item, index) => (
                                <Accordion.Item key={index} eventKey={item.key} className="solutions-accordion_content-nav">
                                    <Accordion.Header >{item.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col xs={12} className="text-center">
                                                <Image src={`/bancatabs/${item.image.url}`} width={420}
                                                    height={270} className={'img-fluid'} />
                                            </Col>
                                            <Col xs={12} className="solutions-tabs_content-title">
                                                <h2>
                                                    <b>{item.main}</b>{item.secu}
                                                </h2>
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