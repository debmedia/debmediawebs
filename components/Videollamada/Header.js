import React, { useState, useEffect } from "react";
import { Row, Container, Col, Modal } from "react-bootstrap";
import Image from 'next/image'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import { useTranslation, Trans } from 'next-i18next';
import Link from "next-translate-routes/link";
import videoThumb_es from '../../asset/imgs/videollamada/video_thumb_ES.png';
import videoThumb_pt from '../../asset/imgs/videollamada/video_thumb_PT.png';
import videoThumb_en from '../../asset/imgs/videollamada/video_thumb_EN.png';
import videoThumb_xs_es from '../../asset/imgs/videollamada/video_thumb_xs_ES.png';
import videoThumb_xs_pt from '../../asset/imgs/videollamada/video_thumb_xs_PT.png';
import videoThumb_xs_en from '../../asset/imgs/videollamada/video_thumb_xs_EN.png';
import { useRouter } from "next/dist/client/router";

const videoThumb_lang = {es: videoThumb_es, pt: videoThumb_pt, en: videoThumb_en};
const videoThumb_xs_lang = {es: videoThumb_xs_es, pt: videoThumb_xs_pt, en: videoThumb_xs_en};

export default function Header() {
    const { t } = useTranslation(['atencion-virtual', 'common']);
    const [modalShow, setModalShow] = useState(false);
    const { locale } = useRouter();

    const videoThumb = videoThumb_lang[locale] || videoThumb_lang["es"];
    const videoThumb_xs = videoThumb_xs_lang[locale] || videoThumb_xs_lang["es"];

    return (
        <>
            <header>
                <Container fluid className="videocall-home">
                    <div className={'image-container-videocall'} onClick={() => {if(locale === "es") setModalShow(true)}}>
                        <Image src={videoThumb} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={videoThumb_xs} layout="fill" className={'image d-block d-sm-none'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="videocall-home_shape3" />
                    </div>

                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="videocall-home_shape1" />
                        <img src={shape2.src} className="videocall-home_shape2" />
                    </div>
                    {locale === "es" && <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />}
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="videocall-home_title no-br-sm">
                                <Trans t={t} i18nKey="HEADER.TITLE"/>
                                </h1>
                                <p className="videocall-home_parraf">
                                    <Trans t={t} i18nKey="HEADER.SUBTITLE"/>
                                </p>
                                <Link href="/contacto">
                                <button className="videocall-home_demobutton">
                                    <Trans t={t} i18nKey="common:REQUEST_A_DEMO"/>
                                </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center videocall-home_text">
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


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/fhaTp5Ssjx4?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </Modal.Body>
        </Modal>
    );
}