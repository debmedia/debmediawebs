import React, { useState, useEffect } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../asset/imgs/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Home(props) {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    console.log(router);

    return (
        <>
            <Navbar expanded={expanded} fixed="top" expand="lg" className={scroll ? "navScroll" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <Link href="/">
                            <div className="logoDiv">
                                <Image
                                    src={mypic}
                                    alt="Picture of the author"
                                    className="img-fluid"
                                />
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav activeKey={router.pathname} className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Soluciones" id="basic-nav-dropdown">
                                <NavDropdown.Item  onClick={() => setExpanded(false)}>
                                    <Link className="fulllink" href="/atencion-virtual">
                                        Atención virtual
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/preatendedor">
                                        Chatbot de WhatsApp
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/fila-virtual">
                                        Fila Virtual
                                    </Link>

                                </NavDropdown.Item>

                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/citasonline">
                                        Citas
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/debq">
                                        Gestion de filas
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/debsign">
                                        Cartelería digital

                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/preatendedor">
                                        Pre atendedor
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/encuestas">
                                        Encuestas
                                    </Link>
                                </NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="/clientes">Clientes</Nav.Link>
                            <Nav.Link href="/partners">Partners</Nav.Link>
                            <NavDropdown title="Recursos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://debmedia.com/blog/">
                                    <Link href="https://debmedia.com/blog/">
                                        Blog
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://blog.debmedia.com/category/casos-de-exito/" onClick={() => setExpanded(false)}>
                                    <Link href="https://blog.debmedia.com/category/casos-de-exito/">
                                        Casos de éxito
                                    </Link>

                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://blog.debmedia.com/category/casos-de-exito/" onClick={() => setExpanded(false)}>
                                    <Link href="https://blog.debmedia.com/category/ebooks/">
                                        Recursos descargables
                                    </Link>

                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link href="/contacto">
                                <Nav.Link href="#link" className="demo">Solicita una demo</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}