import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from "next/image";
import banca from "../asset/imgs/banca.svg";
import salud from "../asset/imgs/salud.svg";
import servi from "../asset/imgs/servicios.svg";
import gob from "../asset/imgs/gob.svg";
import telcos from "../asset/imgs/telcos.svg";
import uti from "../asset/imgs/uti.svg";
import Link from "next-translate-routes/link";
import banca_bg from "../asset/imgs/banca_bk.jpg";
import salud_bk from "../asset/imgs/salud_bk.jpg";
import retail_bk from "../asset/imgs/retail_bk.jpg";
import gob_bk from "../asset/imgs/gob_bk.jpg";
import utilities_bk from "../asset/imgs/utilities_bk.jpg";
import telcos_bk from "../asset/imgs/telcos_bk.jpg";
import { useTranslation, Trans } from "next-i18next";

export default function Modern() {
    const { t } = useTranslation(["components", "common"]);

    const cards = [
        {
            title: "INDUSTRIES.CARDS.BANKING.TITLE",
            subtitle: "INDUSTRIES.CARDS.BANKING.SUBTITLE",
            url: "/bancosyfinanzas",
            class: "industries-section_divs-banca",
            image: banca,
            bgImage: banca_bg
        },
        {
            title: "INDUSTRIES.CARDS.HEALTH.TITLE",
            subtitle: "INDUSTRIES.CARDS.HEALTH.SUBTITLE",
            url: "/salud",
            class: "industries-section_divs-salud",
            image: salud,
            bgImage: salud_bk
        },
        {
            title: "INDUSTRIES.CARDS.GOVERNMENT.TITLE",
            subtitle: "INDUSTRIES.CARDS.GOVERNMENT.SUBTITLE",
            url: "/gobierno",
            class: "industries-section_divs-gob",
            image: gob,
            bgImage: gob_bk
        },
        {
            title: "INDUSTRIES.CARDS.RETAIL.TITLE",
            subtitle: "INDUSTRIES.CARDS.RETAIL.SUBTITLE",
            url: "/retail",
            class: "industries-section_divs-servi",
            image: servi,
            bgImage: retail_bk
        },
        {
            title: "INDUSTRIES.CARDS.TELECOMMUNICATIONS.TITLE",
            subtitle: "INDUSTRIES.CARDS.TELECOMMUNICATIONS.SUBTITLE",
            url: "/telcos",
            class: "industries-section_divs-teleco",
            image: telcos,
            bgImage: telcos_bk
        },
        {
            title: "INDUSTRIES.CARDS.UTILITIES.TITLE",
            subtitle: "INDUSTRIES.CARDS.UTILITIES.SUBTITLE",
            url: "/utilities",
            class: "industries-section_divs-uti",
            image: uti,
            bgImage: utilities_bk
        },
    ];
    return (
        <>
            <Container fluid className="industries-section my-5">
                <Container>
                    <Row>
                        <Col sm={12} className="industries-section_mainTitle text-center mb-5">
                            <h2>
                                <Trans t={t} i18nKey="INDUSTRIES.TITLE" />
                            </h2>
                        </Col>
                        <Col sm={12} className="industries-section_divs">
                            <div>
                                {cards.map((card) => (
                                    <Link key={card.url} href={card.url}>
                                        <div
                                            sm={4}
                                            offset={1}
                                            xs={12}
                                            className={`industries-section_divs-indu ${card.class}`}>
                                            <Image
                                                src={card.bgImage}
                                                layout="fill"
                                                objectFit="cover"
                                                placeholder="blur"
                                                alt=""
                                                style={{ zIndex: -10 }}
                                                className="industries-section_divs-indu_bg-image"
                                            />
                                            <div>
                                                <div>
                                                    <Image
                                                        src={card.image}
                                                        width={50}
                                                        height={50}
                                                        className={"img-fluid"}
                                                        alt=""
                                                    />
                                                </div>
                                                <h4>
                                                    <Trans t={t} i18nKey={card.title} />
                                                </h4>
                                            </div>
                                            <p>
                                                <Trans t={t} i18nKey={card.subtitle} />
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}
