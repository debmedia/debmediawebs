import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import shape2 from '../../asset/imgs/home/headershape2.svg'
import Link from 'next/link'

export default function Header() {

    return (
        <>
            <header>
                <Container fluid className="header-banca">
                    <div className="d-none d-sm-block">
                        <img src={shape2.src} className="header-banca_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="header-banca_title">
                               <b> Mejora la experiencia<br/> de los clientes</b> dentro y  <br className="d-none d-sm-none" /> fuera de las sucursales
                                </h1>
                                <Link href="/contacto">
                                <button className="header-banca_demobutton">
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