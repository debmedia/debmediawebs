import React from "react";
import ReactMarkdown from 'react-markdown';
import politica_es from '../md/politica-es.md';
import { useTranslation} from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from "next-translate-routes/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['politica','components','common'])),
    },
  };
}

const politcas_lang = {
    es: politica_es,
}

export default function Policy() {
    const { t } = useTranslation(['politica', 'common']);
    const { locale } = useRouter();
    const politicas = politcas_lang[locale] || politcas_lang['es'];

  return (
    <>
    <div className="contact-margin">
    <section className="container-fluid py-5 mt-5">
        <div className="row">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h1 className="titSection text-center">
                            { t("TITLE") }
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                        <ReactMarkdown>
                            {politicas}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
     
    </>
  );
}
