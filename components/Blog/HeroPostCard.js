import { Link, useRouter } from "next-translate-routes";
import Image from "next/image";
import React from "react";
import { Badge, Col, Container, Row, Stack } from "react-bootstrap";
import { calcReadingTime } from "../../utils/utils";
import AuthorCard from "./AuthorCard";
import { BLOG_URL } from "../../constants/blog";

export default function HeroPostCard({ post, compact }) {
    const {pathname} = useRouter();
   
    return (
        <div className={`heroPostCard ${compact? "compact": ""}`}>
            <Container className="heroContainer">
                <Row direction="horizontal">
                    <Col className="imageContainer px-0 pe-0 pe-md-3 pe-lg-4 mb-3 mb-md-0" sm={12} md={compact ? 4 : 6}>
                        <div style={{ width: "100%", height: "100%", position: "relative" }}>
                            <Image
                                src={post.featuredImage.node.mediaItemUrl}
                                layout="fill"
                                objectFit="cover"
                                alt={post.title}
                                sizes="(min-width: 768px) 50vw, 100vw"
                                blurDataURL={post.featuredImage.node.blur}
                                placeholder="blur"></Image>
                        </div>
                    </Col>
                    <Col className="textContainer ps-md-3 ps-lg-4" sm={12} md={compact ? 8 : 6}>
                        <Stack direction="vertical">
                            <div className="topText">
                                <div className="mt-1">
                                    <Badge bg="primary">
                                        {post.categories.edges.find((elem) => elem.isPrimary)?.node.name}
                                    </Badge>
                                </div>
                                <Link href={`${BLOG_URL}/${post.slug}`} passHref>
                                    <a className="reset-a">
                                        <h1
                                            className="title mt-3"
                                            dangerouslySetInnerHTML={{
                                                __html: post.title,
                                            }}></h1>
                                    </a>
                                </Link>
                                <p
                                    className="excerpt mt-3"
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt,
                                    }}></p>
                            </div>
                            <div>
                                {!compact && 
                                <>
                                    <div>
                                        {/* Sacar el url del blog a una variable en constants */}
                                        <Link href={`${BLOG_URL}/${post.slug}`}>
                                            <a className="debLink">
                                                Leer más <i className="bi bi-caret-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                    <hr />
                                </>
                                }
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
            </Container>
        </div>
    );
}
