import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
// import mypic from '../../asset/imgs/partners/main.png'
// import mypicxs from '../../asset/imgs/partners/main-partners.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import mainNoti from '../../asset/imgs/partners/main-noti.svg'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })

    return (
        <>
            <header>
                <Container fluid className="partners-home">
                    <div className={'image-container-partners'}>
                        {/* <Image src={mypic.src} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={mypicxs.src} layout="fill" className={'image d-block d-sm-none'} /> */}
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="partners-home_shape3" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="partners-home_shape1" />
                        <img src={shape2.src} className="partners-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="partners-home_title">
                                    Amplía los servicios<br className="d-none d-sm-block" /> de tu empresa.
                                </h1>
                                <p className="partners-home_parraf">
                                    Conviértete en un<b> Debmedia<br className="d-none d-sm-block" /> Partner</b> y agrega más valor a <br className="d-none d-sm-block" />
                                    tus clientes.
                                </p>
                                <Link href="#contact-partners">
                                    <span className="partners-home_demobutton">
                                    Quiero ser partner
                                    </span>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>

        </>
    );
}