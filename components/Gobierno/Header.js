import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import shape2 from '../../asset/imgs/home/headershape2.svg'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })

    return (
        <>
            <header>
                <Container fluid className="header-gobierno">
                    <div className="d-none d-sm-block">
                        <img src={shape2.src} className="header-gobierno_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="header-gobierno_title">
                               <b>Mejora la experiencia<br/> de los ciudadanos</b> dentro y  <br className="d-none d-sm-block" />fuera de las sucursales
                                </h1>

                                <button className="header-gobierno_demobutton">
                                    Solicita una demo
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
        </>
    );
}