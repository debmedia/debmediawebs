import React from "react";
import { Row, Container, Col, ListGroup } from "react-bootstrap";
import Link from 'next/link';
import Image from 'next/image'
import partners from '../asset/imgs/partners.svg'
import face from '../asset/imgs/facebook.svg'
import insta from '../asset/imgs/insta.svg'
import lkedin from '../asset/imgs/lkedin.svg'
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";


export default function Footer() {
    const { t } = useTranslation(['components', 'common']);
    const { locale } = useRouter();
    return (
        <>
            <footer>
                <Container fluid className="footer-section">
                    <Container>
                        <Row>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">
                                    { t("FOOTER.SOLUTIONS") }
                                    </h6>
                                <hr />
                                <ListGroup className="footer-section_list">
                                    <ListGroup.Item>
                                        <Link href="/debq">
                                            { t("FOOTER.QUEUE_MANAGEMENT") }
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/citasonline">
                                            { t("FOOTER.ONLINE_APPOINTMENTS") }

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/fila-virtual">
                                            { t("FOOTER.VIRTUAL_QUEUE") }
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/debsign">
                                            { t("FOOTER.DIGITAL_SIGNAGE") }

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/atencion-virtual">
                                            { t("FOOTER.VIRTUAL_ATTENTION") }

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/encuestas">
                                            { t("FOOTER.SURVEYS") }
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/preatendedor">
                                            { t("FOOTER.PRE_SERVICE") }
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/preatendedor">
                                            { t("FOOTER.WHATSAPP_CHATBOT") }
                                        </Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">
                                    { t("FOOTER.SOLUTIONS") }
                                </h6>
                                <hr />
                                <ListGroup className="footer-section_list">
                                    <ListGroup.Item>
                                        <Link href="/clientes">
                                            { t("FOOTER.CLIENTS") }

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/nosotros">
                                            { t("FOOTER.US") }

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/partners">
                                            { t("FOOTER.PARTNERS") }
                                        </Link>
                                    </ListGroup.Item>
                                    { locale === "es" && 
                                    <ListGroup.Item>
                                        <Link href="https://blog.debmedia.com">
                                            { t("FOOTER.BLOG") }
                                        </Link>
                                    </ListGroup.Item>
                                    }
                                    <ListGroup.Item>
                                        <Link href="/politica">
                                            { t("FOOTER.QUALITY_AND_SECURITY_POLICY") }
                                        </Link>
                                    </ListGroup.Item>


                                </ListGroup>
                            </Col>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">
                                    { t("FOOTER.INDUSTRIES") }
                                </h6>
                                <hr />
                                <ListGroup className="footer-section_list">
                                    <ListGroup.Item>
                                        <Link href="/bancosyfinanzas">
                                            { t("FOOTER.BANKING_AND_INSURANCE") }
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/salud">
                                            { t("FOOTER.HEALTH") }
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/gobierno">
                                            { t("FOOTER.GOVERNMENT") }
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/utilities">
                                            { t("FOOTER.UTILITIES_AND_CORPORATIONS") }
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/retail">
                                            { t("FOOTER.SERVICES_AND_RETAIL") }
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/telcos">
                                            { t("FOOTER.TELECOMMUNICATIONS") }
                                        </Link>
                                    </ListGroup.Item>


                                </ListGroup>
                            </Col>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">
                                    { t("FOOTER.ENDORSED_BY") }
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