import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/mobile/mainbanner.png'
import shape2 from '../../asset/imgs/mobile/shapebanner.svg'
import { useTranslation, Trans } from 'next-i18next';

export default function Market() {
    const { t } = useTranslation(['fila-virtual', 'common']);

    return (
        <>
            <Container fluid className="channel-mobile-section relative">
                <div className={'channel-mobile-section_shape2'}>
                    <Image src={shape2.src} layout="fill" className={'right'} />
                </div>
                <Container>
                    <Row>
                        <Col sm="4" className="channel-mobile-section_maintitle">
                            <h3>
                                <Trans t={t} i18nKey="CHANNELS.TITLE"/>
                            </h3>
                        </Col>
                        <Col sm="8">
                            <Image src={mypic.src} width={900} height={500} />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}