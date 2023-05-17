import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function BreadcrumbExample({crumbs}) {
  return (
    <Container className='post-breadcrumbs'>
        <Breadcrumb>
        {crumbs.map((crumb)=> {
            return (
                <Breadcrumb.Item key={crumb.id||crumb.href} href={crumb.href} active={crumb.active}>{crumb.label}</Breadcrumb.Item>
            )
        })}
        </Breadcrumb>
    </Container>
  );
}