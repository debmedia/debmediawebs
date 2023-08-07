import { Link } from "next-translate-routes";
import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function BreadcrumbExample({ crumbs, className }) {
    return (
        <Container className={`post-breadcrumbs ${className}`}>
            <Breadcrumb>
                {crumbs.map((crumb) => {
                    if (crumb.href)
                        return (
                            <Link key={crumb.key || crumb.href} passHref href={crumb.href}>
                                <Breadcrumb.Item active={crumb.active}>{crumb.label}</Breadcrumb.Item>
                            </Link>
                        );
                    return (
                        <Breadcrumb.Item key={crumb.key || crumb.href} active={crumb.active}>
                            {crumb.label}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
        </Container>
    );
}
