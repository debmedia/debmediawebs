import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Services from '../../json/Services.json';
import Link from 'next-translate-routes/link'
import { useRouter } from "next-translate-routes/router";
import { useTranslation, Trans } from 'next-i18next';

export default function SpecsIndus() {
    const { t } = useTranslation(['nosotros', 'common']);
    const [services, setServices] = useState([]);
    const { locale } = useRouter();
    useEffect(() => {
        setServices(Services[locale] || Services['es']);
    }, [locale]);
    return (
        <>
            <Container fluid>
                <Container className="relative my-5">
                    <Row>
                        {services.map((item, index) => (
                            <Col className="col-6 col-sm-3 mb-4" key={index}>
                                <div className="services-section_service d-flex justify-content-center">

                                    <div className="services-section_service-img">
                                        <img src={`/services/${item.image.url}`} className="servicesImg" />
                                    </div>
                                    <h4 className="services-section_service-title">{item.name}</h4>
                                    <Link href={item.url} passHref>
                                        <a rel="noopener noreferrer" className="services-section_service-link">
                                            <Trans t={t} i18nKey="common:LEARN_MORE"/>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Link href="/">
                                <button className="citas-home_demobutton">
                                    <Trans t={t} i18nKey="SOLUTIONS.BUTTON"/>
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}