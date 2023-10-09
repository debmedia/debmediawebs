import { useRouter } from "next-translate-routes/router";
import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import nosotrosImg from '../../asset/imgs/nosotros/group.png'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import map from '../../asset/imgs/nosotros/map.svg'
import nosotros_es from '../../md/nosotros_historia-es.md';
import nosotros_pt from '../../md/nosotros_historia-pt.md';
import nosotros_en from '../../md/nosotros_historia-en.md';
import Image from "next/image";

const nosotros_langs = {
    es: nosotros_es,
    pt: nosotros_pt,
    en: nosotros_en
}

export default function SpecsIndus() {
    const { locale } = useRouter();
    const nosotros = nosotros_langs[locale] || nosotros_langs['es'];
    return (
        <>
            <Container fluid className="nosotros-section">
                <Container className="relative">
                    <Row>
                        <Col className="nosotros-section_maintitle">
                            <ReactMarkdown>
                                {nosotros.split("---")[0]}
                            </ReactMarkdown>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="relative" fluid>
                <div className="nosotros-section_imggrupo">
                    <img src={nosotrosImg.src} className="img-fluid" />
                </div>
                <Row>
                    <Col className="col-12 nosotros-section_blue" sm={{ span: 7, offset: 5 }}  >
                        <ReactMarkdown>
                            {nosotros.split("---")[1]}
                        </ReactMarkdown>
                    </Col>
                </Row>
            </Container>
            <Container className="relative nosotros-section" fluid>
                <Row>
                    <Col className="nosotros-section_act text-center"  >
                        <ReactMarkdown>
                            {nosotros.split("---")[2]}
                        </ReactMarkdown>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Image src={map} alt="map"></Image>
                    </Col>
                </Row>
            </Container>
        </>
    );
}