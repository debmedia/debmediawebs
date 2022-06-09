import React, { useState, useEffect } from "react";
import Services from '../json/Services.json';
import { Row, Container, Col } from "react-bootstrap";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Link from 'next/link'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);

const basePath = '/asset/imgs/brands'


export default function Brands() {

    const [services, setservices] = useState([]);

    useEffect(() => {
        setservices(Services);
    }, []);

    return (
        <>
            <Container className="services-section">
                <Row>
                    <Col className="services-section_maintitle text-center">
                        <h3>

                            <b>Anticípate a las necesidades</b> <br />
                            de tus clientes y optimiza su flujo.
                        </h3>
                        <p className="services-section_parraf">
                            Usa canales digitales y presenciales para llevarlos por el camino correcto.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Swiper
                            spaceBetween={190}
                            slidesPerView={3}
                            freeMode={true}
                            loop={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            autoplay={false}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 190,
                                },
                            }}
                            className="mySwiper"
                        >
                            {services.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="services-section_service d-flex justify-content-center">

                                        <div className="services-section_service-img">
                                            <Image src={`/services/${item.image.url}`} width={item.image.width} height={item.image.height} />
                                        </div>
                                        <h4 className="services-section_service-title">{item.name}</h4>
                                        <Link href={item.url} passHref>
                                            <a rel="noopener noreferrer"  className="services-section_service-link">
                                                Conoce más
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

