import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import woman from '../asset/imgs/gracias-woman.svg'
import womanxs from '../asset/imgs/gracias-womanxs.svg'
import shape2 from '../asset/imgs/contact/right.svg'
import HubspotForm from 'react-hubspot-form'
import Link from 'next/link'
import { useTranslation, Trans } from 'next-i18next';


export default function Thankyou() {
    const { t } = useTranslation(['components', 'common']);
    return (
        <>
            <Container fluid className="gracias-section py-5">
                <div className={'gracias-section-woman'}>
                    <Image src={woman.src} layout="fill" className={'d-none d-sm-block'} />
                    <Image src={womanxs.src} layout="fill" className={'d-block d-sm-none'} />
                </div>
                <div className="gracias-section_blue">
                    <h1>
                        <Trans t={t} i18nKey="THANKYOU.MESSAGE"/>
                    </h1>
                    <Link href="/">
                        <button className="citas-home_demobutton">
                            <Trans t={t} i18nKey="THANKYOU.BUTTON"/>
                        </button>
                    </Link>
                </div>
            </Container>
        </>
    );
}