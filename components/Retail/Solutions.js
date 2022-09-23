import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check from '../../asset/imgs/retail/check.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import Data from '../../json/services-retail.json';
import Logos from '../../json/brandsSlide.json';
import Link from 'next/link'


export default function Solutions(props) {
    const [dataJson, setData] = useState([]);
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        const result = Logos.filter(logo => logo.category === "retail");
        setLogos(result);
        setData(Data);
    }, []);

    return (
        <>
            <Container className="solutions-indus-top">
                <Row>
                    <Col className="solutions-indus-section_maintitle">
                        <h3 className="text-center">
                            <b>Entrega a tus clientes </b> <br />
                            la atención que se merecen
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
                                <Image src={check.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="solutions-indus-section_title">
                                Integra los canales de atención
                            </h4>
                            <p> y ofrece una atención omnicanal.</p>
                        </Col>
                        <Col sm={4} xs={4} className="solutions-indus-section_div">
                            <div className="solutions-indus-section_div-img  d-none d-sm-block">
                                <Image src={check.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-indus-section_div-img  d-block d-sm-none">
                                <Image src={check.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="solutions-indus-section_title">
                                Optimiza los procesos con datos
                            </h4>
                            <p>y agiliza
                                la atención.</p>
                        </Col>
                        <Col sm={4} xs={4} className="solutions-indus-section_div">
                            <div className="solutions-indus-section_div-img  d-none d-sm-block">
                                <Image src={check.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-indus-section_div-img  d-block d-sm-none">
                                <Image src={check.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="solutions-indus-section_title">
                            Mejora su experiencia 
                            </h4>
                            <p> en cada punto y fidelízalos a tus servicios.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="solutions-indus-clients">
                <Row>
                    <Col xs="12" className="solutions-indus-section_maintitle">
                        <h3 className="text-center">
                            <b>Trabajamos con organizaciones </b> <br />
                            que confían en <br className="d-block d-sm-none" />  nuestro software. <br />
                        </h3>
                    </Col>
                    <Col xs="12" className="d-flex justify-content-center">
                        <Row className="d-flex justify-content-center">
                            {logos.map((item, index) => (
                                <Col sm={2} xs={4} key={index} className="mb-2">
                                    <Image src={`/brandsNew/${item.image.url}`} width={item.image.width}
                                        height={item.image.height} className={'img-fluid'} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="solutions-indus-tabs">
                <Container>
                    <Row>
                        <Col className="solutions-indus-tabs_title">
                            <h2>
                            Soluciones de <b> Debmedia </b>  para ofrecer una atención omnicanal
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
                                    <Col sm={8} className="solutions-indus-tabs_content-borde retail">
                                        <Tab.Content>
                                            {dataJson.map((item, index) => (
                                                <Tab.Pane key={index} eventKey={item.key}>
                                                    <Row>
                                                        <Col xs="12" className="d-flex justify-content-center solutions-indus-tabs_content-img">
                                                            <Image src={`/retailtabs/${item.image.url}`} width={item.image.width}
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
                               <Accordion.Item key={index} eventKey={item.key} className={"solutions-accordion_content-nav " + props.color}>
                                    <Accordion.Header >{item.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col xs={12} className="text-center">
                                                    <img src={`/retailtabs/${item.image.url}`} alt={item.title} className={'img-fluid'} />
                                            </Col>
                                            <Col xs={12} className="solutions-tabs_content-title">
                                                <h2>
                                                    <b>{item.main}</b>{item.secu}
                                                </h2>
                                                <Link href={item.url}>
                                                    <button>
                                                        Conoce más
                                                    </button>
                                                </Link>
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