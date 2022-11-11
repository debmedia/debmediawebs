import React, { useState, useEffect, useRef } from "react";
import BlogData from '../json/blog.json';
import { Row, Container, Col } from "react-bootstrap";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper';
import { Navigation } from "swiper";


// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);

const basePath = '/asset/imgs/brands'


export default function Brands(props) {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState({ title: "", sec: "" });

    const r = BlogData;


    useEffect(() => {
        BlogData.forEach((value) => {
            if (props.indistry) {

            }
        });

        if (props.indistry) {
            switch (props.indistry) {
                case "banca":
                    setTitle({
                        title: `Explora contenidos  \n relacionados al `,
                        sec: "sector financiero"
                    });
                    break;
                case "salud":
                    setTitle({
                        title: `Explora contenidos  \n relacionados al la `,
                        sec: "industria health"
                    });
                    break;
                case "gobierno":
                    setTitle({
                        title: `Explora contenidos  \n relacionados al `,
                        sec: "sector gubernamental"
                    });
                    break;
                case "retail":
                    setTitle({
                        title: `Explora contenidos relacionados al \n`,
                        sec: "sector retail y de servicios"
                    });
                    break;
                case "telcos":
                    setTitle({
                        title: `Explora contenidos relacionados al \n`,
                        sec: "sector retail y de servicios"
                    });
                    break;
                case "utilities":
                    setTitle({
                        title: `Explora contenidos relacionados al \n`,
                        sec: "sector retail y de servicios"
                    });
                    break;
            }
            const filter = BlogData.filter(post => post.indistry === props.indistry);
            setPosts(filter);
        } else {
            setPosts(BlogData);
        }
    }, [props]);


    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <Container fluid className={"posts-slider " + (props.indistry ? 'noGrey' : '')}>
                <Container>
                    {
                        props.indistry &&
                        <Row>
                            <Col className="text-center posts-slider_title">
                                <h2>
                                    {title.title} <b>{title.sec}</b>
                                </h2>
                            </Col>
                        </Row>
                    }

                    <Row>
                        <Col>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                freeMode={false}
                                navigation={false}
                                modules={[Navigation]}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                autoplay={true}
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
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                }}
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="posts-slider_swipper"
                            >
                                {posts.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                            className="posts-slider_content"
                                        >
                                            <div
                                                className={"posts-slider_content-post " + (props.indistry ? item.indistry + '_post' : '')}>
                                                <div>
                                                    <h1>
                                                        {item.title}
                                                    </h1>
                                                    <Link href={item.url} passHref className="posts-slider_content-post_link">
                                                        <a target="_blank" rel="noopener noreferrer">
                                                            Ver más
                                                        </a>
                                                    </Link>
                                                </div>

                                            </div>


                                        </div>

                                    </SwiperSlide>
                                )
                                )}
                                {/* <div ref={prevRef}>Prev</div>
                                <div ref={nextRef}>Next</div> */}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

