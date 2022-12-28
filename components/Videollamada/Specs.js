import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import spec1 from '../../asset/imgs/videollamada/spec1.svg'
import spec2 from '../../asset/imgs/videollamada/spec2.svg'
import spec3 from '../../asset/imgs/videollamada/spec3.svg'
import spec4 from '../../asset/imgs/videollamada/spec4.svg'
import { useTranslation, Trans } from 'next-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";



// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);

const spec = [spec1, spec2, spec3, spec4];

export default function Modern() {
    const { t } = useTranslation(['atencion-virtual', 'common']);
    return (
        <>
            <Container fluid className="specs-section_videocall">
                <Container className="d-none d-sm-block">
                    <Col xs={12} className="d-flex justify-content-center align-items-center">
                        <Row>
                            <Col xs={12} className="specs-section_videocall_text">
                                <div>
                                    <h2>
                                        ¿Cómo funciona el Sistema <br />de <b>Atención Virtual de Debmedia</b>?
                                    </h2>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Row>
                       { spec.map((elem, index) => {
                        return (
                       <Col sm={3} key={index}>
                            <Row>
                                <Col xs={12} className="specs-section_videocall_div-img d-flex justify-content-center">
                                    <Image src={elem.src} width={200}
                                        height={250} />
                                </Col>
                                <Col xs={12} className="specs-section_videocall_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_videocall_title">
                                            <Trans t={t} i18nKey={t("SPEC.CAPTIONS", {returnObjects: true})[index]["TITLE"]}/>
                                        </h4>
                                        <p className="specs-section_videocall_parraf">
                                            <Trans t={t} i18nKey={t("SPEC.CAPTIONS", {returnObjects: true})[index]["SUBTITLE"]}/>
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        )
                       })
                        }
                    </Row>

                </Container>
                <Container className="d-block d-sm-none">
                    <Row>
                        <Col xs={12} className="specs-section_videocall_text">
                            <div>
                                <h2>Diferentes <span>funcionalidades </span></h2>
                                <p> para optimizar tu<br />
                                    modelo de atención</p>
                            </div>
                        </Col>
                    </Row>
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
                        {spec.map((elem, index) => {
                            return (
                        <SwiperSlide key={index} >
                            <Col sm={4}>
                                <Row>
                                    <Col xs={12} className="specs-section_videocall_div-img d-flex justify-content-center">
                                        <Image src={elem.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_videocall_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_videocall_title">
                                                <Trans t={t} i18nKey={t("SPEC.CAPTIONS", {returnObjects: true})[index]["TITLE"]}/>
                                            </h4>
                                            <p className="specs-section_videocall_parraf">
                                                <Trans t={t} i18nKey={t("SPEC.CAPTIONS", {returnObjects: true})[index]["SUBTITLE"]}/>
                                            </p>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Container>
            </Container>
        </>
    );
}