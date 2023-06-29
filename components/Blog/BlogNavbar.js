import React, { useState, useEffect } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Image from "next/image";
import mypic from "../../asset/imgs/logo.svg";
import Link from "next-translate-routes/link";
import { useRouter } from "next-translate-routes/router";
import { useTranslation } from "next-i18next";
import LanguageSelector from ".././LanguageSelector";
import SearchField from "./SearchField";
import { BLOG_BANKING_AND_INSURANCE_CATEGORIES_URL, BLOG_E_BOOKS_CATEGORIES_URL, BLOG_GOVERNMENT_CATEGORIES_URL, BLOG_HEALTH_CATEGORIES_URL, BLOG_NEWS_CATEGORIES_URL, BLOG_RETAIL_CATEGORIES_URL, BLOG_SUCCESS_STORIES_CATEGORIES_URL, BLOG_TELECOMUNICATIONS_CATEGORIES_URL, BLOG_UTILITIES_CATEGORIES_URL } from "../../constants/urls";

const langsMobile = [
    {
        key: "es",
        label: "LANGUAGE_SELECTOR.MOBILE.BUTTON.SPANISH",
        dropdownLabel: "LANGUAGE_SELECTOR.MOBILE.DROPDOWN.SPANISH",
    },
    {
        key: "pt",
        label: "LANGUAGE_SELECTOR.MOBILE.BUTTON.PORTUGUESE",
        dropdownLabel: "LANGUAGE_SELECTOR.MOBILE.DROPDOWN.PORTUGUESE",
    },
    {
        key: "en",
        label: "LANGUAGE_SELECTOR.MOBILE.BUTTON.ENGLISH",
        dropdownLabel: "LANGUAGE_SELECTOR.MOBILE.DROPDOWN.ENGLISH",
    },
];

const langs = [
    {
        key: "es",
        label: "LANGUAGE_SELECTOR.DESKTOP.BUTTON.SPANISH",
        dropdownLabel: "LANGUAGE_SELECTOR.DESKTOP.DROPDOWN.SPANISH",
    },
    {
        key: "pt",
        label: "LANGUAGE_SELECTOR.DESKTOP.BUTTON.PORTUGUESE",
        dropdownLabel: "LANGUAGE_SELECTOR.DESKTOP.DROPDOWN.PORTUGUESE",
    },
    {
        key: "en",
        label: "LANGUAGE_SELECTOR.DESKTOP.BUTTON.ENGLISH",
        dropdownLabel: "LANGUAGE_SELECTOR.DESKTOP.DROPDOWN.ENGLISH",
    },
];

export default function BlogNavbar() {
    const { t } = useTranslation(["components", "common"]);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const localePath = router.locale === router.defaultLocale ? "" : router.locale;

    return (
        <>
            <Navbar expanded={expanded} fixed="top" expand="lg" className={scroll ? "navScroll" : ""}>
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
                        onClick={() => setExpanded(expanded ? false : "expanded")}
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav activeKey={router.pathname} className="ml-auto">
                            <Link href={"/"} passHref={true}>
                                <Nav.Link eventKey={"/"}>{t("NAVBAR.HOME")}</Nav.Link>
                            </Link>
                            <Link href={`/nosotros`} passHref={true}>
                                <Nav.Link eventKey={`/nosotros`}>{t("NAVBAR.US")}</Nav.Link>
                            </Link>

                            <Link href={`/clientes`} passHref={true}>
                                <Nav.Link eventKey={`/clientes`}>{t("NAVBAR.CLIENTS")}</Nav.Link>
                            </Link>

                            <NavDropdown className="d-lg-none" title="Categorias" id="basic-nav-dropdown">

                                <Link href={BLOG_NEWS_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>Novedades</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_SUCCESS_STORIES_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>Casos de éxito</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_E_BOOKS_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item disabled>Ebook</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider></NavDropdown.Divider>
                                <NavDropdown.Header>Sectores</NavDropdown.Header>
                                <Link href={BLOG_BANKING_AND_INSURANCE_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>Banca y Seguros</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_HEALTH_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>Salud</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_GOVERNMENT_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>Gobierno</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_RETAIL_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>Retail y Servicios</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_TELECOMUNICATIONS_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>Telcos</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_UTILITIES_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>Utilities</NavDropdown.Item>
                                </Link>
                            </NavDropdown>

                            <SearchField />

                            <div style={{ borderRight: "1px solid #aaa", marginLeft: "1rem" }}></div>

                            {/* Selector para mobile */}
                            {/* <LanguageSelector className={"d-lg-none"} langs={langsMobile} /> */}
                            <Link href="/contacto">
                                <Nav.Link style={{ alignSelf: "center" }} href="#link" className="demo text-nowrap">
                                    {t("common:REQUEST_A_DEMO")}
                                </Nav.Link>
                            </Link>
                            {/* Selector para desktop */}
                            {/* <LanguageSelector className={"d-none d-lg-block"} langs={langs} /> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
