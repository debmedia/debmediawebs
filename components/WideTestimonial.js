import Image from "next/image";
import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import testimonials from "../json/Review.json";
import quote1 from '../asset/imgs/quote1.png'
import quote2 from '../asset/imgs/quote2.png'

export default function WideTestimonial({ testimonialIndex }) {
    const testimonial = testimonials[testimonialIndex];
    return (
        <Container fluid className="wide-testimonial">
            <div className="back-drop"></div>
            <Card>
                <div className="testimonial-image">
                    <div>
                        <Image
                            src={"/review/" + testimonial.image}
                            alt={`Imagen de perfil de ${testimonial.person}`}
                            layout="fill"></Image>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>{testimonial.person}</Card.Title>
                    <Card.Subtitle>{testimonial.job}</Card.Subtitle>
                    <Card.Text>
                        <span dangerouslySetInnerHTML={{__html: testimonial.comment}}></span>
                        <img src={quote1.src} className="quote1" alt="" />
                        <img src={quote2.src} className="quote2" alt="" />
                    </Card.Text>
                    <img
                        src={"/review/" + testimonial.company}
                        alt={`Logo ${testimonial.company}`}
                        style={{ height: "60px" }}></img>
                </Card.Body>
            </Card>
        </Container>
    );
}
