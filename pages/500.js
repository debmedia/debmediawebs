import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from 'next-i18next';
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["components","common"])),
        },
    };
}
export default function Custom500() {
    const { t } = useTranslation(['home', 'common']);
    return (
        <div
            style={{
                height: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{padding: "3rem 1rem", fontSize: "3rem", fontWeight: "400"}}>500</div>
                <div style={{borderLeft: "1px solid #777", padding: "3rem 1rem"}}>
                    <h1 style={{fontSize: "2rem", margin: "0", fontWeight: "400"}}><Trans t={t} i18nKey="common:SERVER_SIDE_ERROR"/></h1>
                </div>
            </div>
        </div>
    );
}
