import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import PostCard from "./PostCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function RelatedPostsSection({ posts }) {
    const navigationPrevRef = React.useRef(null)
      const navigationNextRef = React.useRef(null)
    return (
        <div className="related-posts-section my-4 py-4">
            <Container >
                <h3 className="related-posts-section_title my-4 text-center">También podría interesarte</h3>
                <div className="related-posts-swiper-wrapper">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        freeMode={false}
                        loop={true}
                        // autoplay={true}
                        // pagination={{
                        //     clickable: true,
                        //     dynamicBullets: false,
                        // }}
                        // breakpoints={{
                        //     500: {
                        //         slidesPerView: 1,
                        //         spaceBetween: 20,
                        //     },
                        //     768: {
                        //         slidesPerView: 2,
                        //         spaceBetween: 30,
                        //     },
                        //     1024: {
                        //         slidesPerView: 3,
                        //         spaceBetween: 100,
                        //     },
                        // }}
                        >
                        {posts.map((post) => {
                            return (
                                <SwiperSlide key={post.databaseId}>
                                    <div>
                                    <PostCard post={post} compact={true} secondary={true}></PostCard>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        <SwiperSlide>
                            div
                        </SwiperSlide>
                        <SlideBackButton></SlideBackButton>
                        <SlideNextButton></SlideNextButton>
                    </Swiper>
                </div>
            </Container>
        </div>
    );
}

function SlideNextButton() {
    const swiper = useSwiper();
    return (
      <button className="blog-swiper-btn-next" onClick={() => swiper.slideNext()}><i className="bi bi-chevron-right"></i></button>
    );
  }

  function SlideBackButton() {
    const swiper = useSwiper();
    return (
      <button className="blog-swiper-btn-back" onClick={() => swiper.slidePrev()}><i className="bi bi-chevron-left"></i></button>
    );
  }