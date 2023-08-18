import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation, Trans } from 'next-i18next';

export default function CategoryHeader({categoryName, categorySlug}) {
  const { t } = useTranslation(['blogHome', 'common']);
  return (
    <Container className='category-header my-5' >
        <h1 className={`border-${categorySlug}`}>{t(`CATEGORIES_SLUG.${categorySlug}`)}</h1>
    </Container>
  )
}
