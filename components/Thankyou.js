import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import woman_es from "../asset/imgs/gracias-woman-ES.svg";
import woman_pt from "../asset/imgs/gracias-woman-PT.svg";
import woman_en from "../asset/imgs/gracias-woman-EN.svg";
import Link from "next-translate-routes/link";
import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/dist/client/router";

const woman_lang = { es: woman_es, pt: woman_pt, en: woman_en };
export default function Thankyou() {
    const { t } = useTranslation(["components", "common"]);
    const { locale } = useRouter();
    const woman = woman_lang[locale] || woman_lang["es"];
    return (
        <Container fluid className="gracias-section px-0">
            <div className={"gracias-section-woman"}>
                <Image src={woman} layout="fill" className={""} objectFit="fill" />
            </div>
            {locale === "es" && (
                <div className="gracias-section_blue">
                    <h1>
                        <Trans t={t} i18nKey="THANKYOU.MESSAGE" />
                    </h1>
                    <Link href="/">
                        <button className="citas-home_demobutton">
                            <Trans t={t} i18nKey="THANKYOU.BUTTON" />
                        </button>
                    </Link>
                </div>
            )}
        </Container>
    );
}
