import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { useTranslation, Trans } from 'next-i18next';

export default function Header() {
    const { t } = useTranslation(['nosotros', 'common']);

    return (
        <>
            <header>
                <Container fluid className="header-nosotros">
                    {/* <div className="d-none d-sm-block">
                        <img src={shape2.src} className="header-nosotros_shape2" />
                    </div> */}
                    <Container>
                        <Row>
                            <Col className="mainTitles text-center">
                                <h1 className="header-nosotros_title">
                                    <Trans t={t} i18nKey="HEADER.TITLE"/>
                                </h1>
                                <br/>
                                <p  className="header-nosotros_parraf no-br-sm">
                                    <Trans t={t} i18nKey="HEADER.SUBTITLE"/>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
        </>
    );
}