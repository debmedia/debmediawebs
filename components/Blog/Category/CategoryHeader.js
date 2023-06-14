import React from 'react'
import { Container } from 'react-bootstrap'

export default function CategoryHeader({categoryName, categoryColor}) {
  return (
    <Container className='category-header my-5' >
        <h1 style={{borderLeftColor: categoryColor}}>{categoryName}</h1>
    </Container>
  )
}
