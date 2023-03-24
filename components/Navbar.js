import React, { useState, useEffect } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../asset/imgs/logo.svg'
import Link from 'next-translate-routes/link'
import { useRouter } from 'next-translate-routes/router'
import { useTranslation } from 'next-i18next';
import LanguageSelector from "./LanguageSelector";

const langsMobile = [
    {
        key: "es",
        label: "LANGUAGE_SELECTOR.MOBILE.BUTTON.SPANISH",
        dropdownLabel: "LANGUAGE_SELECTOR.MOBILE.DROPDOWN.SPANISH"
    },
    {
        key: "pt",
        label: "LANGUAGE_SELECTOR.MOBILE.BUTTON.PORTUGUESE",
        dropdownLabel: "LANGUAGE_SELECTOR.MOBILE.DROPDOWN.PORTUGUESE"
    },
    {
        key: "en",
        label: "LANGUAGE_SELECTOR.MOBILE.BUTTON.ENGLISH",
        dropdownLabel: "LANGUAGE_SELECTOR.MOBILE.DROPDOWN.ENGLISH"
    },
]

const langs = [
    {
        key: "es",
        label: "LANGUAGE_SELECTOR.DESKTOP.BUTTON.SPANISH",
        dropdownLabel: "LANGUAGE_SELECTOR.DESKTOP.DROPDOWN.SPANISH"
    },
    {
        key: "pt",
        label: "LANGUAGE_SELECTOR.DESKTOP.BUTTON.PORTUGUESE",
        dropdownLabel: "LANGUAGE_SELECTOR.DESKTOP.DROPDOWN.PORTUGUESE"
    },
    {
        key: "en",
        label: "LANGUAGE_SELECTOR.DESKTOP.BUTTON.ENGLISH",
        dropdownLabel: "LANGUAGE_SELECTOR.DESKTOP.DROPDOWN.ENGLISH"
    },
]

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
            <Navbar
                expanded={expanded}
                fixed="top"
                expand="lg"
                className={scroll ? "navScroll" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <Link href="/">
                            <div className="logoDiv">
                                <Image
                                    src={mypic}
                                    alt="Debmedia logo"
                                    className="img-fluid"
                                    //style={{width: "140px"}}
                                    //width={140}
                                />
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        onClick={() =>
                            setExpanded(expanded ? false : "expanded")
                        }
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end">
                        <Nav activeKey={router.pathname} className="ml-auto">
                            <Link href={"/"} passHref={true}>
                            <Nav.Link eventKey={"/"}>
                                {t("NAVBAR.HOME")}
                            </Nav.Link>
                            </Link>
                            <NavDropdown
                                title={t("NAVBAR.SOLUTIONS.TITLE")}
                                id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    onClick={() => setExpanded(false)}>
                                    <Link
                                        className="fulllink"
                                        href="/atencion-virtual">
                                        {t(
                                            "NAVBAR.SOLUTIONS.VIRTUAL_ATTENTION"
                                        )}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => setExpanded(false)}>
                                    <Link href="/preatendedor">
                                        {t("NAVBAR.SOLUTIONS.WHATSAPP_CHATBOT")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => setExpanded(false)}>
                                    <Link href="/fila-virtual">
                                        {t("NAVBAR.SOLUTIONS.VIRTUAL_QUEUE")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => setExpanded(false)}>
                                    <Link href="/citasonline">
                                        {t("NAVBAR.SOLUTIONS.APPOINTMENTS")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => setExpanded(false)}>
                                    <Link href="/debq">
                                        {t("NAVBAR.SOLUTIONS.QUEUE_MANAGEMENT")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => setExpanded(false)}>
                                    <Link href="/debsign">
                                        {t("NAVBAR.SOLUTIONS.DIGITAL_SIGNAGE")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => setExpanded(false)}>
                                    <Link href="/preatendedor">
                                        {t("NAVBAR.SOLUTIONS.PRE_SERVICE")}
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => setExpanded(false)}>
                                    <Link href="/encuestas">
                                        {t("NAVBAR.SOLUTIONS.SURVEYS")}
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link href={`/clientes`} passHref={true}>
                                <Nav.Link eventKey={`/clientes`}>{t("NAVBAR.CLIENTS")}</Nav.Link>
                            </Link>
                            <Link href={`/nosotros`} passHref={true}>
                                <Nav.Link eventKey={`/nosotros`}>{t("NAVBAR.US")}</Nav.Link>
                            </Link>
                            <Link href={`/partners`} passHref={true}>
                                <Nav.Link eventKey={`/partners`}>{t("NAVBAR.PARTNERS")}</Nav.Link>
                            </Link>
                            {router.locale === "es" && (
                                <NavDropdown
                                    title={t("NAVBAR.RESOURCES.TITLE")}
                                    id="basic-nav-dropdown">
                                    <NavDropdown.Item href="https://debmedia.com/blog/">
                                        <Link href="https://debmedia.com/blog/">
                                            {t("NAVBAR.RESOURCES.BLOG")}
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        href="https://blog.debmedia.com/category/casos-de-exito/"
                                        onClick={() => setExpanded(false)}>
                                        <Link href="https://blog.debmedia.com/category/casos-de-exito/">
                                            {t(
                                                "NAVBAR.RESOURCES.SUCCESS_STORIES"
                                            )}
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        href="https://blog.debmedia.com/category/casos-de-exito/"
                                        onClick={() => setExpanded(false)}>
                                        <Link href="https://blog.debmedia.com/category/ebooks/">
                                            {t(
                                                "NAVBAR.RESOURCES.DOWNLOADABLE_RESOURCES"
                                            )}
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )}
                            {/* Selector para mobile */}
                            <LanguageSelector
                                className={"d-lg-none"}
                                langs={langsMobile}
                            />
                            <Link href="/contacto">
                                <Nav.Link
                                    href="#link"
                                    className="demo text-nowrap">
                                    {t("common:REQUEST_A_DEMO")}
                                </Nav.Link>
                            </Link>
                            {/* Selector para desktop */}
                            <LanguageSelector
                                className={"d-none d-lg-block"}
                                langs={langs}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}