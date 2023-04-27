import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Navbar, Stack, ThemeProvider } from "react-bootstrap";

export default function CategoryNavMobile() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
        <Navbar className="categoryNav py-md-0" expand="md">
            <Container>
                <Navbar.Toggle
                    className="w-100 d-flex d-md-none justify-content-between py-3 py-md-0"
                    aria-controls="basic-navbar-nav">
                    <div>Seleccionar categoría</div>
                    <div className="ms-auto" style={{ marginLeft: "auto" }}>
                        <i className="bi bi-caret-down-fill"></i>
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Container fluid>
                        <Nav variant="custom" className="justify-content-around pb-4 pb-md-0" onSelect={handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey="1" href="#/home">
                                    Novedades
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2">Casos de éxito</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3">Ebook</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="Sectores" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Banca y Seguros</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Salud</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Gobierno</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.4">Retail y Servicios</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.5">Telcos</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.6">Utilities</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
