import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from "next/image";
import banca from "../asset/imgs/banca.svg";
import salud from "../asset/imgs/salud.svg";
import servi from "../asset/imgs/servicios.svg";
import gob from "../asset/imgs/gob.svg";
import telcos from "../asset/imgs/telcos.svg";
import uti from "../asset/imgs/uti.svg";
import Link from "next/link";
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
        },
        {
            title: "INDUSTRIES.CARDS.HEALTH.TITLE",
            subtitle: "INDUSTRIES.CARDS.HEALTH.SUBTITLE",
            url: "/salud",
            class: "industries-section_divs-salud",
            image: salud,
        },
        {
            title: "INDUSTRIES.CARDS.GOVERNMENT.TITLE",
            subtitle: "INDUSTRIES.CARDS.GOVERNMENT.SUBTITLE",
            url: "/gobierno",
            class: "industries-section_divs-gob",
            image: gob,
        },
        {
            title: "INDUSTRIES.CARDS.RETAIL.TITLE",
            subtitle: "INDUSTRIES.CARDS.RETAIL.SUBTITLE",
            url: "/retail",
            class: "industries-section_divs-servi",
            image: servi,
        },
        {
            title: "INDUSTRIES.CARDS.TELECOMMUNICATIONS.TITLE",
            subtitle: "INDUSTRIES.CARDS.TELECOMMUNICATIONS.SUBTITLE",
            url: "/telcos",
            class: "industries-section_divs-teleco",
            image: telcos,
        },
        {
            title: "INDUSTRIES.CARDS.UTILITIES.TITLE",
            subtitle: "INDUSTRIES.CARDS.UTILITIES.SUBTITLE",
            url: "/utilities",
            class: "industries-section_divs-uti",
            image: uti,
        },
    ];
    return (
        <>
            <Container fluid className="industries-section my-5">
                <Container>
                    <Row>
                        <Col
                            sm={12}
                            className="industries-section_mainTitle text-center mb-5">
                            <h2>
                                <Trans t={t} i18nKey="INDUSTRIES.TITLE" />
                            </h2>
                        </Col>
                        <Col sm={12} className="industries-section_divs">
                            <Row>
                                {cards.map((card) => (
                                    <Link key={card.url} href={card.url}>
                                        <Col
                                            sm={4}
                                            offset={1}
                                            xs={12}
                                            className={`industries-section_divs-indu ${card.class}`}>
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
                                                <Trans t={t} i18nKey={card.title}
                                                />
                                            </h4>
                                            <p>
                                                <Trans t={t} i18nKey={card.subtitle}
                                                />
                                            </p>
                                        </Col>
                                    </Link>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}
