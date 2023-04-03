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
                            <Trans t={t} i18nKey="CONTACT.TITLE"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            {/* esto no quedo muy bonito pero bueno */}
                            {locale === "es" && <HubspotForm
                                portalId="1797020"
                                formId="785d8021-b2ab-4e9d-af43-4060e376d5fc"
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>{t("common:LOADING_ELIPSIS")}</div>}
                            />}
                             {locale === "pt" && <HubspotForm
                                portalId="1797020"
                                formId="82fc0d7d-b0f7-4518-8bee-6492ee8528d5"
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>{t("common:LOADING_ELIPSIS")}</div>}
                            /> }
                            {locale === "en" && <HubspotForm
                                portalId="1797020"
                                formId="f8e35cd5-4953-4b17-8053-bd3d3b006539"
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>{t("common:LOADING_ELIPSIS")}</div>}
                            /> }
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}