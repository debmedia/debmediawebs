import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image';
import api from '../asset/imgs/salud/api.svg';
import metricas from '../asset/imgs/salud/metricas.svg';
import comu from '../asset/imgs/salud/comu.svg';
import { useTranslation, Trans } from 'next-i18next';

export default function SpecsIndus(props) {
    const { t } = useTranslation(['components', 'common']);

    const TITLES = {
        banca: {
            title: "SPECS_INDUS.TITLE.BANKING"
        },
        salud: {
            title: "SPECS_INDUS.TITLE.HEALTH",
        },
        gobierno: {
            title: "SPECS_INDUS.TITLE.GOVERNMENT",
        },
        retail: {
            title: "SPECS_INDUS.TITLE.RETAIL",
        },
        telcos: {
            title: "SPECS_INDUS.TITLE.TELECOMMUNICATIONS",
        },
        utilites: {
            title: "SPECS_INDUS.TITLE.UTILITIES",
        }
    }

    return (
        <>
            <Container fluid className="modern-banca-section">
                <Container>
                    <Row>
                        <Col className="modern-banca-section_maintitle text-center">
                            <h3 className="text-center">
                                <Trans t={t} i18nKey={TITLES[props.indus].title}/>
                            </h3>
                        </Col>
                    </Row>
                    <Row className=" d-flex justify-content-center">
                        <Col sm="4" xs="12" className="modern-banca-section_feature">
                            <Row>
                                <Col xs="12" className="modern-banca-section_feature-img d-flex justify-content-center">
                                    <Image src={api.src} width={100}
                                        height={100} className={'img-fluid'} />
                                </Col>
                                <Col xs="12" className="modern-banca-section_feature-text text-center">
                                    <h5>
                                    <Trans t={t} i18nKey="SPECS_INDUS.CAPTION_1.TITLE"/>
                                    </h5>
                                    <p>
                                    <Trans t={t} i18nKey="SPECS_INDUS.CAPTION_1.SUBTITLE"/>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4" xs="12" className="modern-banca-section_feature">
                            <Row>
                                <Col xs="12" className="modern-banca-section_feature-img d-flex justify-content-center">
                                    <Image src={metricas.src} width={100}
                                        height={100} className={'img-fluid'} />
                                </Col>
                                <Col xs="12" className="modern-banca-section_feature-text text-center">
                                    <h5>
                                        <Trans t={t} i18nKey="SPECS_INDUS.CAPTION_2.TITLE"/>
                                    </h5>
                                    <p>
                                    <Trans t={t} i18nKey="SPECS_INDUS.CAPTION_2.SUBTITLE"/>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4" xs="12" className="modern-banca-section_feature">
                            <Row>
                                <Col xs="12" className="modern-banca-section_feature-img d-flex justify-content-center">
                                    <Image src={comu.src} width={100}
                                        height={100} className={'img-fluid'} />
                                </Col>
                                <Col xs="12" className="modern-banca-section_feature-text text-center">
                                    <h5>
                                    <Trans t={t} i18nKey="SPECS_INDUS.CAPTION_3.TITLE"/>
                                    </h5>
                                    <p>
                                    <Trans t={t} i18nKey="SPECS_INDUS.CAPTION_3.SUBTITLE"/>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}