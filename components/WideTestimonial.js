import Image from "next/image";
import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import testimonials from "../json/Review.json";
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
                    <Card.Text dangerouslySetInnerHTML={{__html: testimonial.comment}}></Card.Text>
                    <img
                        src={"/review/" + testimonial.company}
                        alt={`Logo ${testimonial.company}`}
                        style={{ height: "60px" }}></img>
                </Card.Body>
            </Card>
        </Container>
    );
}
