import { Link } from "next-translate-routes";
import Image from "next/image";
import React from "react";
import { Badge, Col, Container, Row, Stack } from "react-bootstrap";
import AuthorCard from "./AuthorCard";

const imageUrl = "https://blog.debmedia.com/wp-content/uploads/2023/04/mejores-practicas-de-autoservicio.jpg";
const category = "Novedades";

export default function HeroPostCard({ post }) {
    return (
        <div className="heroPostCard">
            <Container className="heroContainer">
                <Row direction="horizontal">
                    <Col className="imageContainer px-0 pe-0 pe-md-3 pe-lg-4 mb-3 mb-md-0" sm={12} md={6}>
                        <div style={{width: "100%", height: "100%", position: "relative"}}>
                        <Image src={imageUrl} layout="fill" objectFit="cover" alt={post.title}></Image>
                        </div>
                    </Col>
                    <Col className="textContainer ps-md-3 ps-lg-4" sm={12} md={6}>
                        <Stack direction="vertical">
                            <div className="topText">
                                <div className="mt-1">
                                    <Badge bg="primary">{category}</Badge>
                                </div>
                                <h1
                                    className="title mt-3"
                                    dangerouslySetInnerHTML={{
                                        __html: post.title.rendered,
                                    }}></h1>
                                <p
                                    className="excerpt mt-3"
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt.rendered,
                                    }}></p>
                            </div>
                            <div>
                                <div>
                                    <Link href={post.link} >
                                        <a className="debLink"> 
                                            Leer mas <i className="bi bi-caret-right"></i>
                                        </a>
                                    </Link>
                                </div>
                                <hr />
                                <div>
                                    <AuthorCard></AuthorCard>
                                </div>
                            </div>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
