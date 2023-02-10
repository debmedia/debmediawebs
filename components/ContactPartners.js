import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import shape1 from '../asset/imgs/contact/left.svg'
import shape2 from '../asset/imgs/contact/right.svg'
import HubspotForm from 'react-hubspot-form'
import { useTranslation, Trans } from 'next-i18next';


export default function Contact() {
    const { t } = useTranslation(['components', 'common']);
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
                            <HubspotForm
                                portalId='1797020'
                                formId='6d63533e-a3d9-43b2-845a-95299001139e'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            />
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}