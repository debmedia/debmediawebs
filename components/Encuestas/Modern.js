import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import modern1 from '../../asset/imgs/encuestas/modern1.png'
import modern2 from '../../asset/imgs/encuestas/modern2.png'
import modern3 from '../../asset/imgs/encuestas/modern3.png'



export default function Modern() {
    return (
        <>
            <Container fluid className="modern-section mb-5">
                <Container>
                    <Row>
                        <Col className="modern-section_maintitle">
                            <h3 className="text-center">
                                <b>Eleva la tasa de respuesta </b><br className="d-none d-sm-block" />
                                con encuestas de satisfacción hasta 10 veces más.
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="modern-section_div">
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern1.src} width={350}
                                        height={350} />

                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Personaliza diferentes <br />
                                            encuestas
                                        </h4>
                                        <p className="modern-section_parraf">
                                            para cada tipo
                                            de trámite.

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                            <Row className="d-sm-flex reverseXs">
                                <Col sm={5} xs={12} className="modern-section_div-text modern-section_div-text-center">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Envía encuestas
                                        </h4>
                                        <p className="modern-section_parraf">
                                            en diferentes momentos
                                            del viaje del cliente.
                                        </p>
                                    </div>

                                </Col>
                                <Col sm={7} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern3.src} width={350}
                                        height={350} />
                                </Col>

                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern2.src} width={450}
                                        height={400} />
                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Compara los resultados
                                        </h4>
                                        <p className="modern-section_parraf">
                                            por periodos de tiempo, usuario, atención y más.
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>


                    </Row>
                </Container>
            </Container>
        </>
    );
}