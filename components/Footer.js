import React from "react";
import { Row, Container, Col, ListGroup } from "react-bootstrap";
import Link from 'next/link';
import Image from 'next/image'
import partners from '../asset/imgs/partners.svg'
import face from '../asset/imgs/facebook.svg'
import insta from '../asset/imgs/insta.svg'
import lkedin from '../asset/imgs/lkedin.svg'
import { useTranslation, Trans } from 'next-i18next';


export default function Footer() {
    const { t } = useTranslation(['components', 'common']);
    return (
        <>
            <footer>
                <Container fluid className="footer-section">
                    <Container>
                        <Row>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">
                                    <Trans t={t} i18nKey="FOOTER.SOLUTIONS"/>
                                    </h6>
                                <hr />
                                <ListGroup className="footer-section_list">
                                    <ListGroup.Item>
                                        <Link href="/debq">
                                            <Trans t={t} i18nKey="FOOTER.QUEUE_MANAGEMENT"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/citasonline">
                                            <Trans t={t} i18nKey="FOOTER.ONLINE_APPOINTMENTS"/>

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/fila-virtual">
                                            <Trans t={t} i18nKey="FOOTER.VIRTUAL_QUEUE"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/debsign">
                                            <Trans t={t} i18nKey="FOOTER.DIGITAL_SIGNAGE"/>

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/atencion-virtual">
                                            <Trans t={t} i18nKey="FOOTER.VIRTUAL_ATTENTION"/>

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/encuestas">
                                            <Trans t={t} i18nKey="FOOTER.SURVEYS"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/preatendedor">
                                            <Trans t={t} i18nKey="FOOTER.PRE_SERVICE"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/preatendedor">
                                            <Trans t={t} i18nKey="FOOTER.WHATSAPP_CHATBOT"/>
                                        </Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">
                                    <Trans t={t} i18nKey="FOOTER.SOLUTIONS"/>
                                </h6>
                                <hr />
                                <ListGroup className="footer-section_list">
                                    <ListGroup.Item>
                                        <Link href="/clientes">
                                            <Trans t={t} i18nKey="FOOTER.CLIENTS"/>

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/nosotros">
                                            <Trans t={t} i18nKey="FOOTER.US"/>

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/partners">
                                            <Trans t={t} i18nKey="FOOTER.PARTNERS"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="https://blog.debmedia.com">
                                            <Trans t={t} i18nKey="FOOTER.BLOG"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/politica">
                                            <Trans t={t} i18nKey="FOOTER.QUALITY_AND_SECURITY_POLICY"/>
                                        </Link>
                                    </ListGroup.Item>


                                </ListGroup>
                            </Col>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">
                                    <Trans t={t} i18nKey="FOOTER.INDUSTRIES"/>
                                </h6>
                                <hr />
                                <ListGroup className="footer-section_list">
                                    <ListGroup.Item>
                                        <Link href="/bancosyfinanzas">
                                            <Trans t={t} i18nKey="FOOTER.BANKING_AND_INSURANCE"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/salud">
                                            <Trans t={t} i18nKey="FOOTER.HEALTH"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/gobierno">
                                            <Trans t={t} i18nKey="FOOTER.GOVERNMENT"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/utilities">
                                            <Trans t={t} i18nKey="FOOTER.UTILITIES_AND_CORPORATIONS"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/retail">
                                            <Trans t={t} i18nKey="FOOTER.SERVICES_AND_RETAIL"/>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/telcos">
                                            <Trans t={t} i18nKey="FOOTER.TELECOMMUNICATIONS"/>
                                        </Link>
                                    </ListGroup.Item>


                                </ListGroup>
                            </Col>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">
                                    <Trans t={t} i18nKey="FOOTER.ENDORSED_BY"/>
                                </h6>
                                <hr />
                                <Image src={partners.src} width={100}
                                    height={130} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" className="d-flex justify-content-center mt-4">
                                <Link href="https://www.facebook.com/debmedia.corp/">
                                    <img src={face.src} width={50} className="social"
                                        height={50} alt="facebook" />
                                </Link>
                                <Link href="https://www.instagram.com/wearedebmedia/?hl=es">
                                    <img src={insta.src} width={50}
                                        height={50} alt="insta" className="social" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/debmedia/mycompany/">
                                    <img src={lkedin.src} width={50}
                                        height={50} alt="lkedin" className="social" />
                                </Link>
                            </Col>
                        </Row>
                    </Container>

                </Container>
            </footer>

        </>
    );
}