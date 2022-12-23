import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import mypic from '../../asset/imgs/encuestas/img.png'
import mypicxs from '../../asset/imgs/encuestas/imgxs.png'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['encuestas', 'common']);

    return (
        <>
            <Container fluid className="opinion-encuestas-section relative d-none d-sm-none d-xl-block">
                <div className="opinion-encuestas-section_img">
                    <img src={mypic.src} className="img-fluid" />
                </div>

                <Container>
                    <Row className="d-flex ">
                        <Col sm="5" xs="12" className="opinion-encuestas-section_maintitle">
                            <h3>
                                <Trans t={t} i18nKey="OPINION.TITLE"/>
                            </h3>
                        </Col>
                    </Row>
                </Container>
                <div className="opinion-encuestas-section_div">
                    <h3>
                        <Trans t={t} i18nKey="OPINION.SUBTITLE"/>
                    </h3>
                </div>
            </Container>
            <Container className="opinion-encuestas-section relative d-block d-sm-block d-md-none d-xl-none">
                <Row>
                    <Col xs="12" className="opinion-encuestas-section_maintitle">
                        <h3>
                            <Trans t={t} i18nKey="OPINION.TITLE"/>
                        </h3>
                    </Col>
                    <Col xs="12" className="p-0">
                        <img src={mypicxs.src} className="img-fluid" />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="opinion-encuestas-section_blue d-block d-sm-block d-md-none d-xl-none">
                <Container>
                    <Row>
                        <Col>
                            <h3>
                                <Trans t={t} i18nKey="OPINION.SUBTITLE"/>
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}