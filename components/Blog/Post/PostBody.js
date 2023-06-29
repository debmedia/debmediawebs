import React from 'react'
import { Container } from 'react-bootstrap'

export default function PostBody({post}) {
  return (
    <Container className='post-body mt-5'>
      <div dangerouslySetInnerHTML={{__html: post.content}}></div>

    </Container>
  )
}
