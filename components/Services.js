import React, { useState, useEffect } from "react";
import Services from '../json/Services.json';
import { Row, Container, Col } from "react-bootstrap";
import { useTranslation, Trans } from 'next-i18next';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next-translate-routes/link'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper';
import { useRouter } from "next-translate-routes/router";

// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);


export default function Brands() {
    const { t } = useTranslation(['components', 'common']);
    const { locale } = useRouter();

    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(Services[locale] || Services["es"]);
    }, [locale]);

    return (
        <>
            <Container className="services-section">
                <Row>
                    <Col className="services-section_maintitle text-center">
                        <h3>
                            <Trans t={t} i18nKey="SERVICES.TITLE"/>
                        </h3>
                        {/* <p className="services-section_parraf">
                        Explora otras soluciones

                        </p> */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Swiper
                            spaceBetween={110}
                            slidesPerView={1}
                            freeMode={false}
                            loop={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: false,
                            }}
                            autoplay={true}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 130,
                                },
                            }}
                            className="services-section_swipper"
                        >
                            {services.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="services-section_service d-flex justify-content-center">

                                        <div className="services-section_service-img">
                                            <img src={`/services/${item.image.url}`} className="servicesImg" />
                                        </div>
                                        <h4 className="services-section_service-title">{item.name}</h4>
                                        <Link href={item.url} passHref>
                                            <a rel="noopener noreferrer" className="services-section_service-link">
                                                <Trans t={t} i18nKey="common:SEE_MORE"/>
                                            </a>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

