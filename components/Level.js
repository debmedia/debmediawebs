import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import demo from '../asset/imgs/home/demo.svg'
import moduleimg from '../asset/imgs/home/module.svg'
import config from '../asset/imgs/home/config.svg'
import client from '../asset/imgs/home/clients.svg'
import top from '../asset/imgs/home/border.svg'

export default function Modern() {
    return (
        <>
            <Col>
                <img src={top.src} className="img-fluid" alt="" />
            </Col>
            <Container fluid className="level-section">

                <Container>
                    <Row>
                        <Col className="level-section_mainTitle mb-4">
                            <h2>Lleva la experiencia de tus <br className="d-none d-sm-block" /> clientes al <b>siguiente nivel</b></h2>
                        </Col>
                    </Row>

                    <Row className="mt-4 level-section_relative">
                        <span className="level-section_line d-none d-sm-block"></span>

                        <Col xs={6} sm={3}>
                            <div className="text-center mb-3">
                                <Image src={moduleimg.src} width={130}
                                    height={90} />
                            </div>
                            <div className="level-section_step">
                                <div>
                                    1
                                </div>

                            </div>
                            <div className="level-section_text">
                                <p>Solicita <br className="d-none d-sm-block" /> una <b>demo</b></p>

                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className="text-center mb-3">
                                <Image src={demo.src} width={130}
                                    height={90} />
                            </div>
                            <div className="level-section_step">
                                <div>
                                    2
                                </div>

                            </div>
                            <div className="level-section_text">
                                <p> <b> Selecciona</b>  <br className="d-none d-sm-block" /> los módulos
                                </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className="text-center mb-3">
                                <Image src={config.src} width={130}
                                    height={90} />
                            </div>
                            <div className="level-section_step">
                                <div>
                                    3
                                </div>

                            </div>
                            <div className="level-section_text">
                                <p> <b> Configura</b>  <br className="d-none d-sm-block" /> el sistema
                                </p>

                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className="text-center mb-3">
                                <Image src={client.src} width={130}
                                    height={90} />
                            </div>
                            <div className="level-section_step">
                                <div>
                                    4
                                </div>

                            </div>
                            <div className="level-section_text">
                                <p> Atiende  de   <br className="d-none d-sm-block" />
                                    <b>forma eficiente</b></p>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-4">
                            <button className="level-section_demobutton">
                                Solicita una demo
                            </button>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}