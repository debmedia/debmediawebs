import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import shape2 from '../../asset/imgs/home/headershape2.svg'
import Link from 'next-translate-routes/link'
import { useTranslation, Trans } from 'next-i18next';

export default function Header() {
    const { t } = useTranslation(['utilities', 'common']);

    return (
        <>
            <header>
                <Container fluid className="header-utilities">
                    <div className="d-none d-sm-block">
                        <img src={shape2.src} className="header-utilities_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="header-utilities_title">
                                    <Trans t={t} i18nKey="HEADER.TITLE"/>
                                </h1>
                                <Link href="/contacto">
                                <button className="header-utilities_demobutton">
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