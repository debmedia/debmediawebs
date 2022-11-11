import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import shape from '../asset/imgs/partner-shape.svg';
import Link from 'next/link';
import { useTranslation, Trans } from 'next-i18next';

export default function Modern() {
    const { t } = useTranslation(['components', 'common']);
    return (
        <>
            <Container className="partner-section">
                <img src={shape.src} className="partner-section_shape-left" />
                <Row>
                    <Col className="partner-section_div">
                        <Row>
                            <Col sm={9} xs={12}>
                                <h4 className="partner-section_title">
                                    <Trans t={t} i18nKey="PARTNER.TITLE"/>
                                </h4>
                                <p className="partner-section_parraf">
                                    <Trans t={t} i18nKey="PARTNER.CAPTION"/>
                                </p>
                            </Col>
                            <Col sm={3} xs={12} className="d-flex justify-content-start justify-content-sm-center align-items-center">
                                <Link href="/partners">
                                    <button className="partner-section_btn">
                                        <Trans t={t} i18nKey="PARTNER.BUTTON"/>
                                    </button> 
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}