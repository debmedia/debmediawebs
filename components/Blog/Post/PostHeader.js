import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "../../../constants/images";
import AuthorCard from "../AuthorCard";
import { calcReadingTime } from "../../../utils/utils";
import CategoryBadge from "../CategoryBadge";

export default function PostHeader({ post }) {
    return (
        <Container className="post-header">
            <Row>
                {post.featuredImage?.node?.mediaItemUrl && (
                    <Col xs={12} md={{ order: 2, span: 6 }} className="px-0 px-md-1">
                        <div className="image-section">
                            <Image
                                src={post.featuredImage?.node?.mediaItemUrl}
                                layout="responsive"
                                width={DEFAULT_WIDTH}
                                height={DEFAULT_HEIGHT}
                                alt={post.title}></Image>
                        </div>
                    </Col>
                )}
                <Col xs={12} md={{ order: 1, span: 6 }} className="align-self-center">
                    <div className="content-section mt-3">
                        <CategoryBadge bg="primary" slug={post.categories.edges.find((elem) => elem.isPrimary)?.node.slug}/>
                        <h1
                            className="mt-3"
                            dangerouslySetInnerHTML={{
                                __html: post.title,
                            }}></h1>
                        <AuthorCard
                            author={post.author.node}
                            createdDate={post.dateGmt}
                            readTime={calcReadingTime(post.content)}></AuthorCard>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
