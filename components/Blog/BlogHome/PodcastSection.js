import React from 'react';
import PodcastCard from './PodcastCard';
import { Container } from 'react-bootstrap';
import { useTranslation, Trans } from 'next-i18next';

export default function PodcastSection({post}) {
  const { t } = useTranslation(['blogHome', 'common']);
  if (!post) return null;
  return (
    <Container className='podcast-section my-5'>
        <h2 className='text-center mb-3 fw-bold'>{t("PODCAST_SECTION.TITLE")}</h2>
        <PodcastCard post={post}></PodcastCard>
        {!post && <p className='text-center'>Te invitamos que te sumes a nuestras redes sociales para enterarte cuando salga el proximo podcast</p>}
    </Container>
  )
}
