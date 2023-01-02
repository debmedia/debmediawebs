import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import spec1 from '../../asset/imgs/preatendedor/spec1.svg'
import spec2 from '../../asset/imgs/preatendedor/spec2.svg'
import spec3 from '../../asset/imgs/preatendedor/spec3.svg'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation, Trans } from 'next-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";



// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);

export default function Modern() {
    const { t } = useTranslation(['preatendedor', 'common']);

    return (
        <>
            <Container fluid className="specs-section_preatendedor">
                <Container>
                    <Row className=" d-flex justify-content-center">
                        <Col sm={12} className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col xs={12} className="specs-section_preatendedor_text mb-5">
                                    <div>
                                        <h2>
                                                <Trans t={t} i18nKey="MODERN.TITLE"/>
                                        </h2>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="d-sm-flex d-none justify-content-center">
                        <Col sm={4} xs={4}>
                            <Row>
                                <Col xs={12} className="specs-section_preatendedor_div-img d-flex justify-content-center">
                                    <Image src={spec1.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_preatendedor_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_preatendedor_title">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_1.TITLE"/>
                                        </h4>

                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4} xs={4}>
                            <Row>
                                <Col xs={12} className="specs-section_preatendedor_div-img d-flex justify-content-center">
                                    <Image src={spec2.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_preatendedor_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_preatendedor_title">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_2.TITLE"/>
                                        </h4>

                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4} xs={4}>
                            <Row>
                                <Col xs={12} className="specs-section_preatendedor_div-img d-flex justify-content-center">
                                    <Image src={spec3.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_preatendedor_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_preatendedor_title">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_3.TITLE"/>
                                        </h4>
                                        <p className="specs-section_preatendedor_parraf">
                                            <Trans t={t} i18nKey="MODERN.CAPTION_3.SUBTITLE"/>
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <Row className="d-block d-sm-none">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            freeMode={false}
                            navigation={false}
                            loop={true}
                            autoplay={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: false,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            <SwiperSlide >
                                <Col xs={12}>
                                    <Row>
                                        <Col xs={12} className="specs-section_preatendedor_div-img d-flex justify-content-center">
                                            <Image src={spec1.src} width={200}
                                                height={250} />

                                        </Col>
                                        <Col xs={12} className="specs-section_preatendedor_div-text text-center d-flex justify-content-center my-3">
                                            <div>
                                                <h4 className="specs-section_preatendedor_title">
                                                    <Trans t={t} i18nKey="MODERN.CAPTION_1.TITLE"/>

                                                </h4>

                                            </div>

                                        </Col>
                                    </Row>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Col xs={12}>
                                    <Row>
                                        <Col xs={12} className="specs-section_preatendedor_div-img d-flex justify-content-center">
                                            <Image src={spec2.src} width={200}
                                                height={250} />

                                        </Col>
                                        <Col xs={12} className="specs-section_preatendedor_div-text text-center d-flex justify-content-center my-3">
                                            <div>
                                                <h4 className="specs-section_preatendedor_title">
                                                    <Trans t={t} i18nKey="MODERN.CAPTION_2.TITLE"/>
                                                </h4>

                                            </div>

                                        </Col>
                                    </Row>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Col xs={12}>
                                    <Row>
                                        <Col xs={12} className="specs-section_preatendedor_div-img d-flex justify-content-center">
                                            <Image src={spec3.src} width={200}
                                                height={250} />

                                        </Col>
                                        <Col xs={12} className="specs-section_preatendedor_div-text text-center d-flex justify-content-center my-3">
                                            <div>
                                                <h4 className="specs-section_preatendedor_title">
                                                    <Trans t={t} i18nKey="MODERN.CAPTION_3.TITLE"/>
                                                </h4>
                                                <p className="specs-section_preatendedor_parraf">
                                                    <Trans t={t} i18nKey="MODERN.CAPTION_3.SUBTITLE"/>
                                                </p>
                                            </div>

                                        </Col>
                                    </Row>
                                </Col>
                            </SwiperSlide>
                        </Swiper>
                    </Row>

                    <Row>
                        <Col className="text-center mt-4">
                            <Link href="/contacto">
                                <button className="header-home_demobutton fullbutton">
                                    <Trans t={t} i18nKey="common:REQUEST_A_DEMO"/>
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}