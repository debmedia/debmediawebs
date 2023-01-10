import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import shape2 from '../../asset/imgs/home/headershape2.svg'
import Link from 'next/link'
import { useTranslation, Trans } from 'next-i18next';

export default function Header() {
    const { t } = useTranslation(['telcos', 'common']);
    return (
        <>
            <header>
                <Container fluid className="header-telcos">
                    <div className="d-none d-sm-block">
                        <img src={shape2.src} className="header-telcos_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="header-telcos_title no-br-sm">
                                <Trans t={t} i18nKey="HEADER.TITLE"/>
                                </h1>
                                <Link href="/contacto">
                                <button className="header-telcos_demobutton">
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