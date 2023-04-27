import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, ThemeProvider } from "react-bootstrap";

export default function CategoryNav() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
        <Container>
            <ThemeProvider>
                <Nav variant="custom" className="justify-content-around" onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link  eventKey="1" href="#/home" >
                            Novedades
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" >
                            Casos de éxito
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" >
                            Ebook
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Sectores" id="nav-dropdown" >
                        <NavDropdown.Item eventKey="4.1">Banca y Seguros</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">
                            Salud
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">
                            Gobierno
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4">
                            Retail y Servicios
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.5">
                            Telcos
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.6">
                            Utilities
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </ThemeProvider>
        </Container>
    );
}
