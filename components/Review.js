import React, { useState, useEffect, useRef } from "react";
import Review from '../json/Review.json';
import { Row, Container, Col } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import quote1 from '../asset/imgs/quote1.png'
import quote2 from '../asset/imgs/quote2.png'


// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper';
import { Navigation } from "swiper";

import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from 'next/router'
// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);



export default function Brands() {
    const [review, setreview] = useState([]);
    const { t } = useTranslation(['components', 'common']);
    const { locale } = useRouter();

    useEffect(() => {
        setreview(Review[locale]);
    }, [locale]);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <Container fluid className="review-section">
                <Container>
                    <Row>
                        <Col sm={5} xs={12} >
                            <Col>
                                <h3 className="no-br-sm">
                                    <Trans t={t} i18nKey="REVIEW.TITLE"/>
                                </h3>
                            </Col>
                            <Col className=" d-none d-sm-block">
                                <div ref={prevRef} className="iconReview iconReview_prev"><i className="bi bi-chevron-left"></i></div>
                                <div ref={nextRef} className="iconReview iconReview_next"><i className="bi bi-chevron-right "></i></div>
                            </Col>
                        </Col>
                        <Col sm={7} xs={12} className="text-center review-section_slider">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                freeMode={false}
                                navigation={false}
                                modules={[Navigation]}
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
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="review-slider_swipper"
                            >
                                {review.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Col className="review-section_slidersection">
                                            <Row>
                                                <Col xs="12">
                                                    <img src={`/review/${item.image}`} className="review-section_slidersection-client img-fluid" />
                                                </Col>
                                                <Col sm={{ span: 10, offset: 1 }} className="relative">
                                                    <h4 className="review-section_slidersection-client-name">{item.person}</h4>
                                                    <span className="review-section_slidersection-client-work">{item.job}</span>
                                                    <img src={quote1.src} className="quote1 d-none d-sm-block" />

                                                    <p className="review-section_slidersection-client-parraf">{item.comment}</p>
                                                    <img src={quote2.src} className="quote2 d-none d-sm-block" />
                                                </Col>
                                                <Col xs="12">
                                                    <img src={`/review/${item.company}`} className="img-fluid logoCliente" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </SwiperSlide>
                                )
                                )}

                            </Swiper>

                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}