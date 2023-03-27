import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic_es from '../../asset/imgs/mobile/FilaVirtual_Canales_ES.png'
import mypic_pt from '../../asset/imgs/mobile/FilaVirtual_Canales_PT.png'
import mypic_en from '../../asset/imgs/mobile/FilaVirtual_Canales_EN.png'
import shape2 from '../../asset/imgs/mobile/shapebanner.svg'
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next/dist/client/router";

const mypic_lang = {es: mypic_es, pt: mypic_pt, en: mypic_en};

export default function Market() {
    const { t } = useTranslation(['fila-virtual', 'common']);
    const { locale } = useRouter();
    const mypic = mypic_lang[locale] || mypic_lang["es"];
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
                            <Image src={mypic.src} width={mypic.width} height={mypic.height} />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}