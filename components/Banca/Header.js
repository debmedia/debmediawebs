import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import shape2 from '../../asset/imgs/home/headershape2.svg'
import Link from 'next-translate-routes/link'
import { useTranslation, Trans } from 'next-i18next';

export default function Header() {
    const { t } = useTranslation(['bancosyfinanzas', 'common']);
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
                                <Trans t={t} i18nKey="HEADER.TITLE">
                                <b> 0 <br/> 2 </b> 1 <br className="d-none d-sm-none" /> 3
                                </Trans>
                                </h1>
                                <Link href="/contacto">
                                <button className="header-banca_demobutton">
                                    <Trans t={t} i18nKey="common:REQUEST_A_DEMO"/>
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