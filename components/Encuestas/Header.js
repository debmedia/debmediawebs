import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/encuestas/main.png'
import mypicxs from '../../asset/imgs/encuestas/main-encuestas.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import Link from 'next-translate-routes/link'
import { useTranslation, Trans } from 'next-i18next';

export default function Header() {
const { t } = useTranslation(['encuestas', 'common']);

    return (
        <>
            <header>
                <Container fluid className="encuestas-home">
                    <div className={'image-container-encuestas'}>
                    <Image src={mypic.src} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={mypicxs.src} layout="fill" className={'image d-block d-sm-none'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="encuestas-home_shape3" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="encuestas-home_shape1" />
                        <img src={shape2.src} className="encuestas-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="encuestas-home_title no-br-sm">
                                    <Trans t={t} i18nKey="HEADER.TITLE"/>
                                </h1>
                                <h2 className="encuestas-home_parraf">
                                    <Trans t={t} i18nKey="HEADER.SUBTITLE"/>
                                </h2>
                                <Link href="/contacto">
                                <button className="encuestas-home_demobutton">
                                    <Trans t={t} i18nKey="common:REQUEST_A_DEMO"/>
                                </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center encuestas-home_text">
                <Row>
                    <Col>
                        <h3 className="no-br-sm">
                            <Trans t={t} i18nKey="HEADER.CAPTION"/>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
}