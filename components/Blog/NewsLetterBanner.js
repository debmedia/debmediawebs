import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";


export default function NewsLetterBanner() {

    return (
        <Container className="news-letter-banner">
            <div className="news-letter-banner_container">
                <div>
                    <h3>Suscríbete al Newsletter</h3>
                    <p>
                        y recibe ideas para mejorar la experiencia de tus clientes y hacer que tu organización se desta
                    </p>
                </div>
                <div>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                            Enviar
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </Container>
    );
}
