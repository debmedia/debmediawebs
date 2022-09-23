import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Link from 'next/link'
import shape2 from '../../asset/imgs/home/headershape2.svg'

export default function Header() {

    return (
        <>
            <header>
                <Container fluid className="header-salud">
                    <div className="d-none d-sm-block">
                        <img src={shape2.src} className="header-salud_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="header-salud_title">
                                    <b>Mejora la experiencia<br /> de los pacientes</b> dentro<br className="d-none d-sm-none" /> de los  centros de atención.
                                </h1>
                                <Link href="/contacto">
                                    <button className="header-salud_demobutton">
                                        Solicita una demo
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
        </>
    );
}