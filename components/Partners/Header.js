import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import Link from 'next/link'
import { useTranslation, Trans } from 'next-i18next';

export default function Header() {
    const { t } = useTranslation(['partners', 'common']);
    return (
        <>
            <header>
                <Container fluid className="partners-home">
                    <div className={'image-container-partners'}>
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
                                <h1 className="partners-home_title no-br-sm">
                                    <Trans t={t} i18nKey="HEADER.TITLE"/>
                                </h1>
                                <p className="partners-home_parraf no-br-sm">
                                    <Trans t={t} i18nKey="HEADER.SUBTITLE"/>
                                </p>
                                <Link href="/contacto">
                                    <button className="partners-home_demobutton">
                                        <Trans t={t} i18nKey="HEADER.BUTTON"/>
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