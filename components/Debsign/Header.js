import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic_es from '../../asset/imgs/debsign/Carteleria_ES.png'
import mypic_pt from '../../asset/imgs/debsign/Carteleria_PT.png'
import mypic_en from '../../asset/imgs/debsign/Carteleria_EN.png'
import mypicxs_es from '../../asset/imgs/debsign/Cartelería_xs_ES.png'
import mypicxs_pt from '../../asset/imgs/debsign/Cartelería_xs_PT.png'
import mypicxs_en from '../../asset/imgs/debsign/Cartelería_xs_EN.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import Link from 'next-translate-routes/link'
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next/dist/client/router";

const mypic_lang = {es: mypic_es, pt: mypic_pt, en: mypic_en}
const mypicxs_lang = {es: mypicxs_es, pt: mypicxs_pt, en: mypicxs_en};
export default function Header() {
    const { t } = useTranslation(['debsign', 'common']);
    const { locale } = useRouter();
    const mypic = mypic_lang[locale] || mypic_lang["es"];
    const mypicxs = mypicxs_lang[locale] || mypicxs_lang["es"];
    return (
        <>
            <header>
                <Container fluid className="debsign-home">
                    <div className={'image-container-debsign'}>
                        <div className={'image d-none d-sm-block'}>
                        <Image src={mypic} layout="responsive" priority alt="Cartelería digital"/>
                        </div>
                        <div className={'image d-block d-sm-none'}>
                        <Image src={mypicxs} layout="responsive" priority alt="Cartelería digital"/>
                        </div>
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="debsign-home_shape3" alt=""/>
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="debsign-home_shape1" alt=""/>
                        <img src={shape2.src} className="debsign-home_shape2" alt=""/>
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="debsign-home_title no-br-sm">
                                    <Trans t={t} i18nKey="HEADER.TITLE"/>
                                </h1>
                                <h2 className="debsign-home_parraf">
                                    <Trans t={t} i18nKey="HEADER.SUBTITLE"/>
                                </h2>
                                <Link href="/contacto">
                                <button className="debsign-home_demobutton">
                                    <Trans t={t} i18nKey="common:REQUEST_A_DEMO"/>
                                </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center debsign-home_text">
                <Row>
                    <Col>
                        <h3 className="no-br-sm">
                            <Trans t={t} i18nKey="HEADER.CAPTION"/>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
}