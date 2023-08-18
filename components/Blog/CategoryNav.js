import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Navbar, Stack, ThemeProvider } from "react-bootstrap";
import { Link } from "next-translate-routes";
import {
    BLOG_BANKING_AND_INSURANCE_CATEGORIES_URL,
    BLOG_E_BOOKS_CATEGORIES_URL,
    BLOG_GOVERNMENT_CATEGORIES_URL,
    BLOG_HEALTH_CATEGORIES_URL,
    BLOG_NEWS_CATEGORIES_URL,
    BLOG_RETAIL_CATEGORIES_URL,
    BLOG_SUCCESS_STORIES_CATEGORIES_URL,
    BLOG_TELECOMUNICATIONS_CATEGORIES_URL,
    BLOG_UTILITIES_CATEGORIES_URL,
} from "../../constants/urls";
import { useTranslation } from "next-i18next";


export default function CategoryNav({ variant }) {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    const { t } = useTranslation(["blogHome","components", "common"]);

    return (
        <Navbar className={`categoryNav py-md-0 ${variant === "secondary" ? "secondary" : ""}`} expand="md">
            <Container>
                <Navbar.Toggle
                    className="w-100 d-flex d-md-none justify-content-between py-3 py-md-0"
                    aria-controls="basic-navbar-nav">
                    <div>{t("CATEGORY_NAV.SELECT_CATEGORY")}</div>
                    <div className="ms-auto" style={{ marginLeft: "auto" }}>
                        <i className="bi bi-caret-down-fill"></i>
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Container fluid>
                        <Nav variant="custom" className="justify-content-around pb-4 pb-md-0">
                            <Nav.Item>
                                <Link href={BLOG_NEWS_CATEGORIES_URL} passHref>
                                    <Nav.Link eventKey="1">{t("NAVBAR.NEWS")}</Nav.Link>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href={BLOG_SUCCESS_STORIES_CATEGORIES_URL} passHref>
                                    <Nav.Link eventKey="2">{t("NAVBAR.SUCCESS_STORIES")}</Nav.Link>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href={BLOG_E_BOOKS_CATEGORIES_URL} passHref>
                                    <Nav.Link eventKey="3">{t("NAVBAR.EBOOK")}</Nav.Link>
                                </Link>
                            </Nav.Item>
                            <NavDropdown title="Sectores" id="nav-dropdown">
                                <Link href={BLOG_BANKING_AND_INSURANCE_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>{t("common:BANKING_AND_INSURANCE")}</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_HEALTH_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>{t("common:HEALTH")}</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_GOVERNMENT_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>{t("common:GOVERNMENT")}</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_RETAIL_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>{t("common:SERVICES_AND_RETAIL")}</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_TELECOMUNICATIONS_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>{t("common:TELECOMMUNICATIONS")}</NavDropdown.Item>
                                </Link>
                                <Link href={BLOG_UTILITIES_CATEGORIES_URL} passHref>
                                    <NavDropdown.Item>{t("common:UTILITIES_AND_CORPORATIONS")}</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
