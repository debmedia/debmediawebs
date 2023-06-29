import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import shape1 from '../asset/imgs/contact/left.svg'
import shape2 from '../asset/imgs/contact/right.svg'
import HubspotForm from 'react-hubspot-form'
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next/dist/client/router";

export default function Contact() {
    const { t } = useTranslation(['components', 'common']);
    const { locale } = useRouter();
    return (
        <>
            <Container fluid className="contact-section my-5">
                <div className={'contact-section_shape1'}>
                    <Image src={shape1.src} layout="fill" className={'left'} />
                </div>
                <div className={'contact-section_shape2'}>
                    <Image src={shape2.src} layout="fill" className={'right'} />
                </div>
                <Container>
                    <Row>
                        <Col className="contact-section_mainTitle text-center mb-4">
                            <h2 id="contact-partners">
                                <Trans t={t} i18nKey="CONTACT_PARTNERS.TITLE"/>
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            {locale === "es" && <HubspotForm
                                id="partner-contact-form-es"
                                portalId='1797020'
                                formId='6d63533e-a3d9-43b2-845a-95299001139e'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            />}
                            {locale === "pt" && <HubspotForm
                                id="partner-contact-form-pt"
                                portalId='1797020'
                                formId='82fc0d7d-b0f7-4518-8bee-6492ee8528d5'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            />}
                            {locale === "en" && <HubspotForm
                                id="partner-contact-form-en"
                                portalId='1797020'
                                formId='267f3064-4938-412a-86ce-4f22fe1e9190'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            />}
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}