import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { useTranslation, Trans } from 'next-i18next';
import Celdas from "../Celdas";
import { useRouter } from "next/dist/client/router";

export default function Market() {
    const { t } = useTranslation(['nosotros', 'common']);
    const { locale } = useRouter();
    return (
        <>
            <Container fluid className="market-nosotros-section">
                <Container>
                    <Row>
                        <Col className="col-12 market-nosotros-section_blue market-nosotros-section_maintitle">
                            <h3 className="text-center no-br-sm">
                                <Trans t={t} i18nKey="MARKET.TITLE"/>
                            </h3>
                            <p>
                                <Trans t={t} i18nKey="MARKET.PARAGRAPH_1"/>
                            </p>
                            <p>
                                <Trans t={t} i18nKey="MARKET.PARAGRAPH_2"/>
                            </p>
                        </Col>
                        <Col className="col-12 text-center mt-5">
                            {locale !== "es" && <Celdas></Celdas>}
                            {locale === "es" && 
                            <div className="d-none d-sm-block">
                                <Celdas></Celdas>
                            </div>
                            }
                            {locale ==="es" && <video autoPlay={true} muted={true} loop className="img-fluid d-block d-sm-none" style={{ width: '100%', height: 'auto' }}>
                                <source src={`/celdaxs.mp4`} />
                            </video>}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}