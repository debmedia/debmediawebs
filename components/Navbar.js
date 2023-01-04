import React, { useState, useEffect } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../asset/imgs/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';


export default function Home() {
    const { t } = useTranslation(['components', 'common']);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const localePath = router.locale === router.defaultLocale? "" : router.locale;

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
                            <Nav.Link href={`/${localePath}`}>
                                {t("NAVBAR.HOME")}
                            </Nav.Link>
                            <NavDropdown title={t("NAVBAR.SOLUTIONS.TITLE")} id="basic-nav-dropdown">
                                <NavDropdown.Item  onClick={() => setExpanded(false)}>
                                    <Link className="fulllink" href="/atencion-virtual">
                                        {t("NAVBAR.SOLUTIONS.VIRTUAL_ATTENTION")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/preatendedor">
                                        {t("NAVBAR.SOLUTIONS.WHATSAPP_CHATBOT")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/fila-virtual">
                                        {t("NAVBAR.SOLUTIONS.VIRTUAL_QUEUE")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/citasonline">
                                        {t("NAVBAR.SOLUTIONS.APPOINTMENTS")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/debq">
                                        {t("NAVBAR.SOLUTIONS.QUEUE_MANAGEMENT")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/debsign">
                                        {t("NAVBAR.SOLUTIONS.DIGITAL_SIGNAGE")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/preatendedor">
                                        {t("NAVBAR.SOLUTIONS.PRE_SERVICE")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setExpanded(false)}>
                                    <Link href="/encuestas">
                                        {t("NAVBAR.SOLUTIONS.SURVEYS")}
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href={`${localePath}/clientes`}>{t("NAVBAR.CLIENTS")}</Nav.Link>
                            <Nav.Link href={`${localePath}/nosotros`}>{t("NAVBAR.US")}</Nav.Link>
                            <Nav.Link href={`${localePath}/partners`}>{t("NAVBAR.PARTNERS")}</Nav.Link>
                            {router.locale === "es" && 
                                <NavDropdown title={t("NAVBAR.RESOURCES.TITLE")} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="https://debmedia.com/blog/">
                                        <Link href="https://debmedia.com/blog/">
                                            {t("NAVBAR.RESOURCES.BLOG")}
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://blog.debmedia.com/category/casos-de-exito/" onClick={() => setExpanded(false)}>
                                        <Link href="https://blog.debmedia.com/category/casos-de-exito/">
                                            {t("NAVBAR.RESOURCES.SUCCESS_STORIES")}
                                        </Link>

                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://blog.debmedia.com/category/casos-de-exito/" onClick={() => setExpanded(false)}>
                                        <Link href="https://blog.debmedia.com/category/ebooks/">
                                            {t("NAVBAR.RESOURCES.DOWNLOADABLE_RESOURCES")}
                                        </Link>

                                    </NavDropdown.Item>
                                </NavDropdown>
                            }
                            <Link href="/contacto">
                                <Nav.Link href="#link" className="demo">{t("common:REQUEST_A_DEMO")}</Nav.Link>
                            </Link>
                            <Link href={router.pathname} locale="es" scroll={false} >
                                <div>
                                <div style={{backgroundColor: router.locale == "es" ? "#232C61": "white", color: router.locale != "es" ? "#232C61": "white", padding: "0.1rem 0.25rem", margin: "0.25rem",borderRadius: "0.5rem",height: "auto", cursor:"pointer"}}>ES</div>
                                </div>
                            </Link>
                            <Link href={router.pathname} locale="pt" scroll={false} >
                                <div>
                                <div style={{backgroundColor: router.locale == "pt" ? "#232C61": "white", color: router.locale != "pt" ? "#232C61": "white", padding: "0.1rem 0.25rem", margin: "0.25rem",borderRadius: "0.5rem",height: "auto", cursor:"pointer"}}>PT</div>
                                </div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}