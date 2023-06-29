import React from 'react'
import { Container } from 'react-bootstrap'

export default function CategoryHeader({categoryName, categorySlug}) {
  return (
    <Container className='category-header my-5' >
        <h1 className={`border-${categorySlug}`}>{categoryName}</h1>
    </Container>
  )
}
