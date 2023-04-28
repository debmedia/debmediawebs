import { Link } from "next-translate-routes";
import Image from "next/image";
import React from "react";
import { Badge, Col, Container, Row, Stack } from "react-bootstrap";
import { calcReadingTime } from "../../utils/utils";
import AuthorCard from "./AuthorCard";

export default function HeroPostCard({ post }) {
    return (
        <div className="heroPostCard">
            <Container className="heroContainer">
                <Row direction="horizontal">
                    <Col className="imageContainer px-0 pe-0 pe-md-3 pe-lg-4 mb-3 mb-md-0" sm={12} md={6}>
                        <div style={{ width: "100%", height: "100%", position: "relative" }}>
                            <Image
                                src={post.featuredImage.node.mediaItemUrl}
                                layout="fill"
                                objectFit="cover"
                                alt={post.title}></Image>
                        </div>
                    </Col>
                    <Col className="textContainer ps-md-3 ps-lg-4" sm={12} md={6}>
                        <Stack direction="vertical">
                            <div className="topText">
                                <div className="mt-1">
                                    <Badge bg="primary">
                                        {post.categories.edges.find((elem) => elem.isPrimary)?.node.name}
                                    </Badge>
                                </div>
                                <h1
                                    className="title mt-3"
                                    dangerouslySetInnerHTML={{
                                        __html: post.title,
                                    }}></h1>
                                <p
                                    className="excerpt mt-3"
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt,
                                    }}></p>
                            </div>
                            <div>
                                <div>
                                    <Link href={post.link}>
                                        <a className="debLink">
                                            Leer más <i className="bi bi-caret-right"></i>
                                        </a>
                                    </Link>
                                </div>
                                <hr />
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
