import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from "next/image";
import spec1 from "../../asset/imgs/citas/spec1.svg";
import spec2 from "../../asset/imgs/citas/spec2.svg";
import spec3 from "../../asset/imgs/citas/spec3.svg";
import spec4 from "../../asset/imgs/citas/spec4.svg";
import spec5 from "../../asset/imgs/citas/spec5.svg";
import spec6 from "../../asset/imgs/citas/spec6.svg";
import { useTranslation, Trans } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

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
  const { t } = useTranslation(["citasonline", "common"]);
  function createIcon(translateKey, img) {
    return (
      <Col sm={4}>
        <Row>
          <Col
            xs={12}
            className="specs-section_citas_div-img d-flex justify-content-center">
            <Image src={img} width={200} height={250} />
          </Col>
          <Col
            xs={12}
            className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
            <div>
              <h4 className="specs-section_citas_title">
                <Trans t={t} i18nKey={translateKey + ".TITLE"} />
              </h4>
              <p className="specs-section_citas_parraf">
                <Trans t={t} i18nKey={translateKey + ".SUBTITLE"} />
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }

  const icons = [
    createIcon("MODERN.CAPTION_1", spec1),
    createIcon("MODERN.CAPTION_2", spec2),
    createIcon("MODERN.CAPTION_3", spec3),
    createIcon("MODERN.CAPTION_4", spec4),
    createIcon("MODERN.CAPTION_5", spec5),
    createIcon("MODERN.CAPTION_6", spec6),
  ];
  return (
    <>
      <Container fluid className="specs-section_citas">
        <Container className="d-none d-sm-block">
          <Row>
            <Col xs={12} className="specs-section_citas_text">
              <div>
                  <h2><Trans t={t} i18nKey="MODERN.TITLE"/></h2>
                  <p> <Trans t={t} i18nKey="MODERN.SUBTITLE"/></p>
              </div>
            </Col>
          </Row>
          <Row className=" d-flex justify-content-center">{icons}</Row>
        </Container>
        <Container className="d-block d-sm-none">
          <Row>
            <Col xs={12} className="specs-section_citas_text">
              <div>
                  <h2><Trans t={t} i18nKey="MODERN.TITLE"/></h2>
                  <p> <Trans t={t} i18nKey="MODERN.SUBTITLE"/></p>
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
            }}>
            {icons.map((icon, index) => (
              <SwiperSlide key={index}>{icon}</SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Container>
    </>
  );
}
