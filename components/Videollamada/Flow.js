import React, { useState, useEffect } from "react";
import { Row, Container, Col, Accordion } from "react-bootstrap";
import flow_es from '../../asset/imgs/videollamada/Flujo_AtencionVirtual_ES.png';
import flow_pt from '../../asset/imgs/videollamada/Flujo_AtencionVirtual_PT.png';
import flow_en from '../../asset/imgs/videollamada/Flujo_AtencionVirtual_EN.png';
import totem_es from '../../asset/imgs/videollamada/totem_ES.png'
import totem_en from '../../asset/imgs/videollamada/totem_EN.png'
import totem_pt from '../../asset/imgs/videollamada/totem_PT.png'
import sistema_es from '../../asset/imgs/videollamada/Software-Videollamada_ES.png'
import sistema_en from '../../asset/imgs/videollamada/Software-Videollamada_EN.png'
import sistematotemmobie_es from '../../asset/imgs/videollamada/totemnew_ES.png'
import sistematotemmobie_pt from '../../asset/imgs/videollamada/totemnew_PT.png'
import sistematotemmobie_en from '../../asset/imgs/videollamada/totemnew_EN.png'
import sistemaxs_es from '../../asset/imgs/videollamada/sistemaxs.jpg'

import Data from '../../json/flow-videocall.json';
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next/router";

const flow_lang = {es: flow_es, pt: flow_pt, en: flow_en};
const totem_lang = {
    es: totem_es,
    en: totem_en,
    pt: totem_pt
};
const sistema_lang = {
    es: sistema_es,
    en: sistema_en
};
const sistematotemmobie_lang = {
    es: sistematotemmobie_es,
    pt: sistematotemmobie_pt,
    en: sistematotemmobie_en
};
const sistemaxs_lang = {
    es: sistemaxs_es
};

export default function Market() {
    const { t } = useTranslation(['atencion-virtual', 'common']);
    const [dataJson, setData] = useState([]);
    const { locale } = useRouter();

    const flow = flow_lang[locale] || flow_es;
    const totem = totem_lang[locale] || totem_es;
    const sistema = sistema_lang[locale] || sistema_es;
    const sistematotemmobie = sistematotemmobie_lang[locale] || sistematotemmobie_es;
    const sistemaxs = sistemaxs_lang[locale] || sistemaxs_es;

    useEffect(() => {
        setData(Data[locale] || Data.es);
    }, [locale]);

    return (
        <>
            <Container fluid className="flow-videocall-section relative p-0">
                <Container>
                    <Col>
                        <div className="flow-videocall-section_floatdiv-title text-center">
                            <h2>
                                <Trans t={t} i18nKey="FLOW.TITLE"/>
                            </h2>
                        </div>
                    </Col>
                </Container>
                <div className="flow-videocall-section_floatdiv">
                    <div className="flow-videocall-section_floatdiv-div">
                        <h4>
                            <Trans t={t} i18nKey="FLOW.CAPTION"/>
                        </h4>

                    </div>
                </div>
                <Container className="py-5 d-none d-sm-block">
                    <Row className="d-flex justify-content-center">
                        <Col xl={11} sm={10} xs={10}>
                            <img src={flow.src} className="img-fluid mt-2" alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container>
                <Row className="setps-accordion_content intern2 d-block d-sm-none">
                    <Accordion defaultActiveKey="0">
                        {dataJson.map((item, index) => (
                            <Accordion.Item key={index} eventKey={item.key} className="setps-accordion_content-nav">
                                <Accordion.Header className="inter2_button"><div className="inter2_button-step">{index + 1}</div> <div className="inter2_button-text">{t(item.text)}</div></Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={12} className="text-center">
                                            <img src={`/videocalltabs/${item.image.url}`} alt={item.text} className={'img-fluid max70'} />
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Row>
            </Container>
            <Container fluid className="relative d-none d-sm-block">
                <Row className="d-flex justify-content-end">
                    <div className="totem p-0">
                        <img src={totem.src} className="img-fluid" alt="" />
                    </div>
                    <div className="greyBlock">
                        <div className="greyBlock_text">
                            <h3>
                                <Trans t={t} i18nKey="FLOW.BLOCK_1.TITLE"/>
                            </h3>
                            <p>
                                <Trans t={t} i18nKey="FLOW.BLOCK_1.CAPTION"/>
                            </p>
                        </div>
                    </div>

                </Row>
            </Container>
            <Container fluid className="relative d-none d-sm-block mb-5">
                <div className="floatDiv text-center">
                    <h4>
                        <Trans t={t} i18nKey="FLOW.BLOCK_2.TITLE"/>
                    </h4>
                    <p>
                        <Trans t={t} i18nKey="FLOW.BLOCK_2.CAPTION"/>
                    </p>
                </div>
                <Row>
                    <Col xs={6} className="p-0 mb-5">
                        <img src={sistema.src} className="img-fluid mt-5" alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className=" d-block d-sm-none">
                <Row>
                    <Col className="p-0" xs={12}>
                        <div className="greyBlock">
                            <div className="greyBlock_text">
                                <h3>
                                    <Trans t={t} i18nKey="FLOW.BLOCK_1.TITLE"/>
                                </h3>
                                <p>
                                    <Trans t={t} i18nKey="FLOW.BLOCK_1.CAPTION"/>
                                </p>
                            </div>
                            <img src={sistematotemmobie.src} className="img-fluid w-100" alt="sistematotemmobie" />
                        </div>

                    </Col>
                    <Col xs={12} className="blueBlock">
                        <h2>
                            <Trans t={t} i18nKey="FLOW.BLOCK_2.TITLE"/>
                        </h2>
                        <p>
                            <Trans t={t} i18nKey="FLOW.BLOCK_2.CAPTION"/>
                        </p>
                        <img src={sistemaxs.src} className="img-fluid w-100 mt-5" alt="sistemaxs" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}