import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image';
import mypic from '../../asset/imgs/citas/main.png';
import mypicxs from '../../asset/imgs/citas/main-citas.png';
import shape1 from '../../asset/imgs/home/headershape1.svg';
import shape2 from '../../asset/imgs/home/headershape2.svg';
import shape3 from '../../asset/imgs/home/headershape3.svg';
import mainNoti from '../../asset/imgs/citas/main-noti.svg';
import Link from 'next/link';
import { useTranslation, Trans } from 'next-i18next';

export default function Header() {
    const { t } = useTranslation(['citasonline', 'common']);
    return (
        <>
            <header>
                <Container fluid className="citas-home">
                    <div className={'image-container-citas'}>
                    <Image src={mypic.src} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={mypicxs.src} layout="fill" className={'image d-block d-sm-none'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="citas-home_shape3" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={mainNoti.src} className="citas-home_mainNoti" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="citas-home_shape1" />
                        <img src={shape2.src} className="citas-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="citas-home_title no-br-sm">
                                    <Trans t={t} i18nKey="HEADER.TITLE">
                                        0<br className="d-none d-sm-block" />2<br className="d-none d-sm-block" /> 4 <br className="d-none d-sm-block d-xxl-none" />6
                                    </Trans>
                                </h1>
                                <p className="citas-home_parraf">
                                 <Trans t={t} i18nKey="HEADER.SUBTITLE"/>
                                </p>
                                <Link href="/contacto">
                                <button className="citas-home_demobutton">
                                    <Trans t={t} i18nKey="common:REQUEST_A_DEMO"/>
                                </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center citas-home_text">
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