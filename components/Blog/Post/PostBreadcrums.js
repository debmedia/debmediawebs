import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function BreadcrumbExample({crumbs, className}) {
  return (
    <Container className={`post-breadcrumbs ${className}`}>
        <Breadcrumb>
        {crumbs.map((crumb)=> {
            return (
                <Breadcrumb.Item key={crumb.key||crumb.href} href={crumb.href} active={crumb.active}>{crumb.label}</Breadcrumb.Item>
            )
        })}
        </Breadcrumb>
    </Container>
  );
}