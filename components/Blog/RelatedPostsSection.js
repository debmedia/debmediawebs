import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import PostCard from "./PostCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation, Trans } from 'next-i18next';

export default function RelatedPostsSection({ posts }) {
    const { t } = useTranslation(['blogHome', 'common']);

    return (
        <div className="related-posts-section my-4 py-4">
            <Container >
                <h3 className="related-posts-section_title my-4 text-center">{t("RELATED_POSTS_SECTION.TITLE")}</h3>
                <div className="related-posts-swiper-wrapper">
                    <Swiper
                        freeMode={false}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView="auto"
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        >
                        {posts.map((post) => {
                            return (
                                <SwiperSlide key={post.databaseId}>
                                    <PostCard post={post} compact={true} secondary={true}></PostCard>
                                </SwiperSlide>
                            );
                        })}
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