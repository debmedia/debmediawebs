import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import spec1 from '../../asset/imgs/preatendedor/spec1.svg'
import spec2 from '../../asset/imgs/preatendedor/spec2.svg'
import spec3 from '../../asset/imgs/preatendedor/spec3.svg'



export default function Modern() {
    return (
        <>
            <Container fluid className="specs-section_preatendedor">
                <Container>
                    <Row className=" d-flex justify-content-center">
                        <Col sm={12} className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col xs={12} className="specs-section_preatendedor_text mb-5">
                                    <div>
                                        <h2>¿Qué puedes hacer con el preatendedor?</h2>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4} xs={4}>
                            <Row>
                                <Col xs={12} className="specs-section_preatendedor_div-img d-flex justify-content-center">
                                    <Image src={spec1.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_preatendedor_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_preatendedor_title">
                                            Incluir<br />
                                            pop ups

                                        </h4>

                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4} xs={4}>
                            <Row>
                                <Col xs={12} className="specs-section_preatendedor_div-img d-flex justify-content-center">
                                    <Image src={spec2.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_preatendedor_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_preatendedor_title">
                                            Agregar<br />
                                            Formularios
                                        </h4>

                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4} xs={4}>
                            <Row>
                                <Col xs={12} className="specs-section_preatendedor_div-img d-flex justify-content-center">
                                    <Image src={spec3.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_preatendedor_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_preatendedor_title">
                                            Integrar con
                                        </h4>
                                        <p className="specs-section_preatendedor_parraf">
                                            la base de datos de los clientes o CRM para personalizar su viaje

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>


                    </Row>
                    <Row>
                        <Col className="text-center mt-4">
                            <button className="header-home_demobutton">
                                Solicita una demo
                            </button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}