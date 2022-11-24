import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import BlogData from '../json/blog.json';
import { Row, Container, Col } from "react-bootstrap";
import { useTranslation, Trans } from 'next-i18next';

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

export default function Brands(props) {
    const { t } = useTranslation(['components', 'common']);
    const { locale } = useRouter();
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (props.indistry) {
            switch (props.indistry) {
                case "banca":
                    setTitle("POSTS.BANKING.TITLE");
                    break;
                case "salud":
                    setTitle("POSTS.HEALTH.TITLE");
                    break;
                case "gobierno":
                    setTitle("POSTS.GOVERNMENT.TITLE");
                    break;
                case "retail":
                    setTitle("POSTS.RETAIL.TITLE");
                    break;
                case "telcos":
                    setTitle("POSTS.TELECOMMUNICATIONS.TITLE");
                    break;
                case "utilities":
                    setTitle("POSTS.UTILITIES.TITLE");
                    break;
            }
            const filter = BlogData[locale].filter(post => post.indistry === props.indistry);
            setPosts(filter);
        } else {
            setPosts(BlogData[locale]);
        }
    }, [props]);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>{locale === "es" && 
            <Container fluid className={"posts-slider " + (props.indistry ? 'noGrey' : '')}>
                <Container>
                    {
                        props.indistry &&
                        <Row>
                            <Col className="text-center posts-slider_title">
                                <h2>
                                    <Trans t={t} i18nKey={title}/>
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
                                                            <Trans t={t} i18nKey="common:SEE_MORE"/>
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
        }
        </>
    );
}

