import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import api from '../asset/imgs/salud/api.svg'
import metricas from '../asset/imgs/salud/metricas.svg'
import comu from '../asset/imgs/salud/comu.svg'


export default function SpecsIndus(props) {

    const TITLES = {
        banca: {
            title: ` <h3 className="text-center">
            <b> Compite con entidades digitalizadas </b>
            <br />
            de la Industria de la Banca y Finanzas.
        </h3> `
        },
        salud: {
            title: ` <h3 className="text-center">
            <b>  Compite con entidades digitalizadas
            </b>
            <br />
            de la Industria de la salud
        </h3> `,
        },
        gobierno: {
            title: ` <h3 className="text-center">
            <b>  Escala los procesos en 
            </b>
            <br />
            Instituciones del Gobierno y ONGs

        </h3> `,
        },
        retail: {
            title: ` <h3 className="text-center">
            <b> Escala los procesos en</b>
            <br />
            empresas retail y de servicios.
        </h3> `,
        },
        telcos: {
            title: ` <h3 className="text-center">
            <b>  Mejora la experiencia</b>
            <br />
            y escala los procesos.
        </h3> `,
        },
        utilites: {
            title: ` <h3 className="text-center">
            <b>  Una solución moderna y escalable</b>
            <br />
            para organizaciones del gobierno
        </h3> `,
        }
    }

    return (
        <>
            <Container fluid className="modern-banca-section">
                <Container>
                    <Row>
                        <Col className="modern-banca-section_maintitle text-center" dangerouslySetInnerHTML={{ __html: TITLES[props.indus].title }}>
                        </Col>
                    </Row>
                    <Row className=" d-flex justify-content-center">
                        <Col sm="4" xs="12" className="modern-banca-section_feature">
                            <Row>
                                <Col xs="12" className="modern-banca-section_feature-img d-flex justify-content-center">
                                    <Image src={api.src} width={100}
                                        height={100} className={'img-fluid'} />
                                </Col>
                                <Col xs="12" className="modern-banca-section_feature-text text-center">
                                    <h5>
                                        Integración <br />
                                        Sencilla
                                    </h5>
                                    <p>
                                        Integrable por API <br />
                                        o iframe.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4" xs="12" className="modern-banca-section_feature">
                            <Row>
                                <Col xs="12" className="modern-banca-section_feature-img d-flex justify-content-center">
                                    <Image src={metricas.src} width={100}
                                        height={100} className={'img-fluid'} />
                                </Col>
                                <Col xs="12" className="modern-banca-section_feature-text text-center">
                                    <h5>
                                        Métricas de <br />
                                        performance
                                    </h5>
                                    <p>
                                        Conoce el rendimiento de <br />
                                        tus canales de atención.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4" xs="12" className="modern-banca-section_feature">
                            <Row>
                                <Col xs="12" className="modern-banca-section_feature-img d-flex justify-content-center">
                                    <Image src={comu.src} width={100}
                                        height={100} className={'img-fluid'} />
                                </Col>
                                <Col xs="12" className="modern-banca-section_feature-text text-center">
                                    <h5>
                                        Comunicación<br />
                                        centralizada
                                    </h5>
                                    <p>
                                        Envía el mensaje correcto <br />
                                        a través de SMS, email, <br />
                                        WhatsApp o pantallas.
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    );
}