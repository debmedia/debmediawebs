import React from 'react'
import PodcastCard from './PodcastCard'
import { Container } from 'react-bootstrap'

export default function PodcastSection({post}) {
  return (
    <Container className='podcast-section mt-5'>
        <h2 className='text-center mb-3 fw-bold'>Podcast</h2>
        <PodcastCard post={post}></PodcastCard>
    </Container>
  )
}
