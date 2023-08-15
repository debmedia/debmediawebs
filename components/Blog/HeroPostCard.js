import { Link } from "next-translate-routes";
import Image from "next/image";
import React from "react";
import { Badge, Col, Container, Row, Stack } from "react-bootstrap";
import { calcReadingTime } from "../../utils/utils";
import AuthorCard from "./AuthorCard";
import { BLOG_URL } from "../../constants/blog";
import { useTranslation, Trans } from 'next-i18next';

export default function HeroPostCard({ post, compact, badgeColor, h1 }) {
    const { t } = useTranslation(['blogHome', 'common']);
    let category;
    if(!post) return null;
    if (post && post.categories.edges.length > 0) {
        category = post.categories.edges.find((elem) => elem.isPrimary);
        if (!category) category = post.categories.edges[0];
    }
    return (
        <div className={`heroPostCard ${compact ? "compact" : ""}`}>
            <Container className="heroContainer">
                {post && 
                    <Row direction="horizontal">
                        {post.featuredImage?.node?.mediaItemUrl && (
                            <Col
                                className="imageContainer px-0 pe-0 pe-md-3 pe-lg-4 mb-3 mb-md-0"
                                sm={12}
                                md={compact ? 5 : 6}>
                                <div style={{ width: "100%", height: "100%", position: "relative" }}>
                                    <Image
                                        src={post.featuredImage?.node?.mediaItemUrl}
                                        layout="fill"
                                        objectFit="cover"
                                        alt={post.title}
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        blurDataURL={post.featuredImage?.node?.blur}
                                        placeholder="blur"></Image>
                                </div>
                            </Col>
                        )}
                        <Col className="textContainer ps-md-3 ps-lg-4" sm={12} md={compact ? 7 : 6}>
                            <Stack direction="vertical">
                                <div className="topText">
                                    <div className={compact ? "mt-3" : "mt-1"}>
                                        <Badge className={`bg-${badgeColor}`}>{category?.node.name}</Badge>
                                    </div>
                                    <Link href={`${BLOG_URL}/${post.slug}`} passHref>
                                        <a className="reset-a">
                                            {h1? 
                                            <h1
                                                className="title mt-3"
                                                dangerouslySetInnerHTML={{
                                                    __html: post.title,
                                                }}></h1>
                                                :
                                                <div
                                                className="title mt-3 h1"
                                                dangerouslySetInnerHTML={{
                                                    __html: post.title,
                                                }}></div>
                                            }
                                        </a>
                                    </Link>
                                    <p
                                        className="excerpt mt-3"
                                        dangerouslySetInnerHTML={{
                                            __html: post.excerpt,
                                        }}></p>
                                </div>
                                <div>
                                    {!compact && (
                                        <>
                                            <div>
                                                {/* Sacar el url del blog a una variable en constants */}
                                                <Link href={`${BLOG_URL}/${post.slug}`}>
                                                    <a className="debLink">
                                                        {t("common:READ_MORE")}<i className="bi bi-caret-right"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                            <hr />
                                        </>
                                    )}
                                    <div>
                                        <AuthorCard
                                            author={post.author.node}
                                            createdDate={post.dateGmt}
                                            readTime={calcReadingTime(post.content)}></AuthorCard>
                                    </div>
                                </div>
                            </Stack>
                        </Col>
                    </Row>
                }
            </Container>
        </div>
    );
}
