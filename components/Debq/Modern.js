import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from "next/image";
import spec1 from "../../asset/imgs/debq/spec1.svg";
import spec2 from "../../asset/imgs/debq/spec2.svg";
import spec3 from "../../asset/imgs/debq/spec3.svg";
import spec4 from "../../asset/imgs/debq/spec4.svg";
import spec5 from "../../asset/imgs/debq/spec5.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation, Trans } from "next-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);

export default function Modern() {
    const { t } = useTranslation(["debq", "common"]);
    return (
        <>
            <Container fluid className="specs-section">
                <Container className="d-none d-sm-block">
                    <Row className=" d-flex justify-content-center">
                        <Col sm={4}>
                            <Row>
                                <Col
                                    xs={12}
                                    className="specs-section_div-img d-flex justify-content-center">
                                    <Image
                                        src={spec1.src}
                                        width={200}
                                        height={250}
                                    />
                                </Col>
                                <Col
                                    xs={12}
                                    className="specs-section_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_title">
                                            <Trans
                                                t={t}
                                                i18nKey="MODERN.CAPTION_1.TITLE"
                                            />
                                        </h4>
                                        <p className="specs-section_parraf">
                                            <Trans
                                                t={t}
                                                i18nKey="MODERN.CAPTION_1.SUBTITLE"
                                            />
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col
                                    xs={12}
                                    className="specs-section_div-img d-flex justify-content-center">
                                    <Image
                                        src={spec2.src}
                                        width={200}
                                        height={250}
                                    />
                                </Col>
                                <Col
                                    xs={12}
                                    className="specs-section_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_title">
                                            <Trans
                                                t={t}
                                                i18nKey="MODERN.CAPTION_2.TITLE"
                                            />
                                        </h4>
                                        <p className="specs-section_parraf">
                                            <Trans
                                                t={t}
                                                i18nKey="MODERN.CAPTION_3.SUBTITLE"
                                            />
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col
                                    xs={12}
                                    className="specs-section_div-img d-flex justify-content-center">
                                    <Image
                                        src={spec3.src}
                                        width={200}
                                        height={250}
                                    />
                                </Col>
                                <Col
                                    xs={12}
                                    className="specs-section_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_title">
                                            <Trans
                                                t={t}
                                                i18nKey="MODERN.CAPTION_3.TITLE"
                                            />
                                        </h4>
                                        <p className="specs-section_parraf">
                                            <Trans
                                                t={t}
                                                i18nKey="MODERN.CAPTION_3.SUBTITLE"
                                            />
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col
                                    xs={12}
                                    className="specs-section_div-img d-flex justify-content-center">
                                    <Image
                                        src={spec4.src}
                                        width={200}
                                        height={250}
                                    />
                                </Col>
                                <Col
                                    xs={12}
                                    className="specs-section_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_title">
                                            <Trans
                                                t={t}
                                                i18nKey="MODERN.CAPTION_4.TITLE"
                                            />
                                        </h4>
                                        <p className="specs-section_parraf">
                                            <Trans
                                                t={t}
                                                i18nKey="MODERN.CAPTION_4.SUBTITLE"
                                            />
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col
                                    xs={12}
                                    className="specs-section_div-img d-flex justify-content-center">
                                    <Image
                                        src={spec5.src}
                                        width={200}
                                        height={250}
                                    />
                                </Col>
                                <Col
                                    xs={12}
                                    className="specs-section_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_title">
                                            <Trans
                                                t={t}
                                                i18nKey="MODERN.CAPTION_5.TITLE"
                                            />
                                        </h4>
                                        <p className="specs-section_parraf">
                                            <Trans
                                                t={t}
                                                i18nKey="MODERN.CAPTION_5.SUBTITLE"
                                            />
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-block d-sm-none">
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
                        }}>
                        <SwiperSlide>
                            <Col className="review-section_slidersection">
                                <Row>
                                    <Col sm={4}>
                                        <Row>
                                            <Col
                                                xs={12}
                                                className="specs-section_div-img d-flex justify-content-center">
                                                <Image
                                                    src={spec1.src}
                                                    width={200}
                                                    height={250}
                                                />
                                            </Col>
                                            <Col
                                                xs={12}
                                                className="specs-section_div-text text-center d-flex justify-content-center my-3">
                                                <div>
                                                    <h4 className="specs-section_title">
                                                        <Trans
                                                            t={t}
                                                            i18nKey="MODERN.CAPTION_1.TITLE"
                                                        />
                                                    </h4>
                                                    <p className="specs-section_parraf">
                                                        <Trans
                                                            t={t}
                                                            i18nKey="MODERN.CAPTION_1.SUBTITLE"
                                                        />
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Col sm={4}>
                                <Row>
                                    <Col
                                        xs={12}
                                        className="specs-section_div-img d-flex justify-content-center">
                                        <Image
                                            src={spec2.src}
                                            width={200}
                                            height={250}
                                        />
                                    </Col>
                                    <Col
                                        xs={12}
                                        className="specs-section_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_title">
                                                <Trans
                                                    t={t}
                                                    i18nKey="MODERN.CAPTION_2.TITLE"
                                                />
                                            </h4>
                                            <p className="specs-section_parraf">
                                                <Trans
                                                    t={t}
                                                    i18nKey="MODERN.CAPTION_2.SUBTITLE"
                                                />
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Col sm={4}>
                                <Row>
                                    <Col
                                        xs={12}
                                        className="specs-section_div-img d-flex justify-content-center">
                                        <Image
                                            src={spec3.src}
                                            width={200}
                                            height={250}
                                        />
                                    </Col>
                                    <Col
                                        xs={12}
                                        className="specs-section_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_title">
                                                <Trans
                                                    t={t}
                                                    i18nKey="MODERN.CAPTION_3.TITLE"
                                                />
                                            </h4>
                                            <p className="specs-section_parraf">
                                                <Trans
                                                    t={t}
                                                    i18nKey="MODERN.CAPTION_3.SUBTITLE"
                                                />
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Col sm={4}>
                                <Row>
                                    <Col
                                        xs={12}
                                        className="specs-section_div-img d-flex justify-content-center">
                                        <Image
                                            src={spec4.src}
                                            width={200}
                                            height={250}
                                        />
                                    </Col>
                                    <Col
                                        xs={12}
                                        className="specs-section_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_title">
                                                <Trans
                                                    t={t}
                                                    i18nKey="MODERN.CAPTION_4.TITLE"
                                                />
                                            </h4>
                                            <p className="specs-section_parraf">
                                                <Trans
                                                    t={t}
                                                    i18nKey="MODERN.CAPTION_4.SUBTITLE"
                                                />
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Col sm={4}>
                                <Row>
                                    <Col
                                        xs={12}
                                        className="specs-section_div-img d-flex justify-content-center">
                                        <Image
                                            src={spec5.src}
                                            width={200}
                                            height={250}
                                        />
                                    </Col>
                                    <Col
                                        xs={12}
                                        className="specs-section_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_title">
                                                <Trans
                                                    t={t}
                                                    i18nKey="MODERN.CAPTION_5.TITLE"
                                                />
                                            </h4>
                                            <p className="specs-section_parraf">
                                                <Trans
                                                    t={t}
                                                    i18nKey="MODERN.CAPTION_5.SUBTITLE"
                                                />
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </Container>
        </>
    );
}
