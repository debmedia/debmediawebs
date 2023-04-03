import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image';
import mypic from '../../asset/imgs/citas/main.png';
import mypicxs_es from '../../asset/imgs/citas/Citas_ES.png';
import mypicxs_pt from '../../asset/imgs/citas/Citas_PT.png';
import mypicxs_en from '../../asset/imgs/citas/Citas_EN.png';
import shape1 from '../../asset/imgs/home/headershape1.svg';
import shape2 from '../../asset/imgs/home/headershape2.svg';
import shape3 from '../../asset/imgs/home/headershape3.svg';
import mainNoti_es from '../../asset/imgs/citas/Citas_Calendario_ES.svg';
import mainNoti_pt from '../../asset/imgs/citas/Citas_Calendario_PT.svg';
import mainNoti_en from '../../asset/imgs/citas/Citas_Calendario_EN.svg';
import Link from 'next-translate-routes/link';
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next-translate-routes/router";

const mypicxs_lang = {es: mypicxs_es, pt: mypicxs_pt, en: mypicxs_en};
const mainNoti_lang = {es: mainNoti_es, pt: mainNoti_pt, en: mainNoti_en};
export default function Header() {
    const { t } = useTranslation(['citasonline', 'common']);
    const { locale } = useRouter();
    const mypicxs = mypicxs_lang[locale] || mypicxs_lang["es"];
    const mainNoti = mainNoti_lang[locale] || mainNoti_lang["es"];
    return (
        <>
            <header>
                <Container fluid className="citas-home">
                    <div className={'image-container-citas'}>
                        <Image src={mypic.src} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={mypicxs.src} layout="fill" className={'image d-block d-sm-none'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="citas-home_shape3" />
                    </div>
                    <div className="d-none d-lg-block">
                        <img src={mainNoti.src} className="citas-home_mainNoti" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="citas-home_shape1" />
                        <img src={shape2.src} className="citas-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="citas-home_title no-br-sm">
                                    <Trans t={t} i18nKey="HEADER.TITLE"/>
                                </h1>
                                <p className="citas-home_parraf">
                                 <Trans t={t} i18nKey="HEADER.SUBTITLE"/>
                                </p>
                                <Link href="/contacto">
                                <button className="citas-home_demobutton">
                                    <Trans t={t} i18nKey="common:REQUEST_A_DEMO"/>
                                </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center citas-home_text">
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