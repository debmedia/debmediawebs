import React from "react";
import { Row, Container, Col, Modal} from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/home/newVideoShape.svg'
import mypicxs from '../../asset/imgs/home/videoShape-xs.png'
import video_es from '../../asset/imgs/home/debq.svg'
import videoSm_es from '../../asset/imgs/home/Pantalla_Software_ES.svg'
import videoSm_pt from '../../asset/imgs/home/Pantalla_Software_PT.svg'
import videoSm_en from '../../asset/imgs/home/Pantalla_Software_EN.svg'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import Link from 'next-translate-routes/link'
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next-translate-routes/router";

// Imágenes con versiones para los locales
const videoSm_lang = {es: videoSm_es,  pt: videoSm_pt, en: videoSm_en};
const video_lang = {es: video_es}

export default function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    const { t } = useTranslation(['home', 'common']);
    const {locale} = useRouter();
    const video = video_lang[locale] || video_lang["es"];
    const videoSm = videoSm_lang[locale] || videoSm_lang["es"];
    return (
        <>
            <header>
                <Container fluid className="header-home">
                    <div className={"image-container"} onClick={() => setModalShow(true)}>
                        <Image src={mypic.src} layout="fill" className={"image d-none d-sm-block"} alt="" />
                        <Image src={mypicxs.src} layout="fill" className={"image d-block d-sm-none"} alt="" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="header-home_shape1" alt="" />
                        <img src={shape2.src} className="header-home_shape2" alt="" />
                    </div>
                    {locale === "es" && (
                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                    )}
                    <Container>
                        <Row>
                            <Col xs={12} md={6}>
                                <span className="header-home_product">{t("common:CUSTOMER_JOURNEY_MANAGER")}</span>
                                <h1 className="header-home_title">
                                    <Trans t={t} i18nKey={"HEADER.TITLE"}>
                                        Haz más eficientes tus
                                        <br className="d-none d-sm-block" /> canales de atención
                                    </Trans>
                                </h1>
                                <h2 className="header-home_parraf">
                                    <Trans t={t} i18nKey={"HEADER.SUBTITLE"}>
                                        Software para
                                        <b>
                                            gestionar la atención
                                            <br className="d-none d-sm-block" />
                                            al cliente virtual
                                        </b>
                                        y presencial.
                                    </Trans>
                                </h2>
                                <Link href="/contacto">
                                    <button className="header-home_demobutton">{t("common:REQUEST_A_DEMO")}</button>
                                </Link>
                            </Col>
                            <Col xs={12} md={6}>
                                <div
                                    className="d-block d-md-none mt-4"
                                    style={{ position: "relative" }}
                                    onClick={() => setModalShow(true)}>
                                    <Image src={video} className="" alt="" layout="responsive" priority />
                                </div>
                                <div
                                    className="d-none d-md-block "
                                    onClick={() => setModalShow(true)}
                                    style={{marginLeft: "-5vw",marginRight: "calc(150px - 16vw)"}}
                                    >
                                    <Image
                                        src={videoSm}
                                        layout="responsive"
                                        alt=""
                                        priority
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center header-home_text">
                <Row>
                    <Col>
                        <h2>
                            <Trans t={t} i18nKey="HEADER.CAPTION">
                                <b>Organizaciones líderes</b> ya gestionan la <br className="d-none d-sm-block" />
                                experiencia de sus clientes con <b> Debmedia</b>
                            </Trans>
                        </h2>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/Kqr77nXvcXY?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </Modal.Body>
        </Modal>
    );
}