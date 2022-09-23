import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'

import flow1 from '../../asset/imgs/preatendedor/flow1.png'
import flow2 from '../../asset/imgs/preatendedor/flow2.png'
import { useMediaQuery } from 'react-responsive'


export default function Flow() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>
            <Container fluid className="flow-preatendedor-section relative">
                <Container>
                    <Row>
                        <Col sm="12" className="wapp-preatendedor-section_maintitle">
                            <h3 className="text-center">
                                <b>Implementa un portal de pre atención personalizable</b> que los <br className="d-none d-sm-block" />
                                guía a la elección de su trámite.
                            </h3>
                        </Col>
                    </Row>
                    <Row className="text-center mt-5 d-flex justify-content-center reverseXs">
                        <Col xs="12" sm={{ span: 5 }} className="mt-sm-5 mt-3 mr-sm-2 text-center">
                            <img src={flow2.src} alt="wapp" className={'img-fluid'} />
                        </Col>
                        <Col sm={{ span: 6, offset: 1 }} xs="12">
                            <img src={flow1.src} alt="wapp" className={'img-fluid'} />
                        </Col>

                    </Row>

                </Container>
            </Container>

        </>
    );
}