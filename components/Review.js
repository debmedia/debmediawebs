import React, { useState, useEffect, useRef } from "react";
import Review from "../json/Review.json";
import { Row, Container, Col } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next-translate-routes/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import quote1 from "../asset/imgs/quote1.png";
import quote2 from "../asset/imgs/quote2.png";

// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from "swiper";
import { Navigation } from "swiper";

import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next-translate-routes/router";
import Image from "next/image";
// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);

export default function Brands({ filter }) {
    const [review, setreview] = useState([]);
    const { t } = useTranslation(["components", "common"]);
    const { locale } = useRouter();

    useEffect(() => {
        let showReview = Review[locale] || Review["es"];
        if (Array.isArray(filter)) showReview = showReview.filter((elem) => filter.includes(elem.name));
        setreview(showReview);
    }, [filter, locale]);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <Container fluid className="review-section">
                <Container>
                    <Row>
                        <Col sm={5} xs={12}>
                            <Col>
                                <h3 className="no-br-sm">
                                    <Trans t={t} i18nKey="REVIEW.TITLE" />
                                </h3>
                            </Col>
                            <Col className=" d-none d-sm-block">
                                <div ref={prevRef} className="iconReview iconReview_prev">
                                    <i className="bi bi-chevron-left"></i>
                                </div>
                                <div ref={nextRef} className="iconReview iconReview_next">
                                    <i className="bi bi-chevron-right "></i>
                                </div>
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
                                className="review-slider_swipper">
                                {review.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Col className="review-section_slidersection">
                                            <Row>
                                                <Col xs="12">
                                                    <div className="review-section_slidersection-client">
                                                        <Image
                                                            src={`/review/${item.image}`}
                                                            width={80}
                                                            height={80}
                                                            layout="responsive"
                                                            alt={item.person}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col sm={{ span: 10, offset: 1 }} className="relative">
                                                    <h4 className="review-section_slidersection-client-name">
                                                        {item.person}
                                                    </h4>
                                                    <span className="review-section_slidersection-client-work">
                                                        {item.job}
                                                    </span>
                                                    <div className="quote1 d-none d-sm-block">
                                                        <Image src={quote1} layout="responsive" alt="qoute mark" />
                                                    </div>

                                                    <p
                                                        className="review-section_slidersection-client-parraf"
                                                        dangerouslySetInnerHTML={{ __html: item.comment }}></p>
                                                    <div className="quote2 d-none d-sm-block">
                                                        <Image src={quote2} layout="responsive" alt="qoute mark" />
                                                    </div>
                                                </Col>
                                                <Col xs="12">
                                                    <div className="logoCliente">
                                                        <Image
                                                            src={`/review/${item.company}`}
                                                            layout="fill"
                                                            objectFit="contain"
                                                            alt={item.company}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}
