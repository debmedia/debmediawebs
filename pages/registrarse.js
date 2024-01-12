import React from 'react'
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container } from 'react-bootstrap';

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['components','common'])),
      },
    };
  }

export default function Registrarse() {
    const { t } = useTranslation(['components', 'common']);
  return (
    <Container style={{'paddingTop': '5rem'}}>
        registrarse
    
    <div style={{height: "80vh"}}>aca va el form</div>
    </Container>
  )
}
