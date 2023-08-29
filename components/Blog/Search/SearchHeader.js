import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation, Trans } from 'next-i18next';

export default function SearchHeader({searchTerm}) {
  const { t } = useTranslation(['blogHome', 'common']);
  return (
    <Container className='category-header my-5' >
        <h1 >{t("SEARCH_PAGE.SEARCH",{searchTerm})}</h1>
    </Container>
  )
}
