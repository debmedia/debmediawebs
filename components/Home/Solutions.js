import React from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation, Trans } from 'next-i18next';
import TitleWithIcons from "../TitleWithIcons";
import solutionsHomeData from '../../json/solutions-home.json';
import { useRouter } from "next/router";



export default function Solutions() {
    const { t } = useTranslation(['home', 'common']);
    const { locale } = useRouter();
    
    return (
        <>
            <TitleWithIcons 
                t={t}
                title="SOLUTIONS.TITLE"
                captions={['SOLUTIONS.CAPTION_1', 'SOLUTIONS.CAPTION_2', 'SOLUTIONS.CAPTION_3']}
            />
            <Container fluid className="solutions-tabs">
                <Container>
                    <Row>
                        <Col className="solutions-tabs_title">
                            <h2>
                                <Trans t={t} i18nKey={"SOLUTIONS.FEATURES_TITLE"}></Trans>
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="solutions-tabs_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="citas">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            {(solutionsHomeData[locale] || solutionsHomeData["es"]).map((item, index) => (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={item.key} className="solutions-tabs_content-nav">{item.title}</Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            {(solutionsHomeData[locale] || solutionsHomeData["es"]).map((item, index) => (
                                                <Tab.Pane key={index} eventKey={item.key}>
                                                    <Row>
                                                        <Col className="text-center">
                                                            <Image src={`/hometabs/${item.image.url}`} width={item.image.width}
                                                                height={item.image.height} className={'img-fluid'} alt=""/>
                                                        </Col>
                                                        <Col className="solutions-tabs_content-title">
                                                            <h2>
                                                                <b>{item.main}</b>{item.secu}
                                                            </h2>
                                                            <Link href={item.url}>
                                                                <button className="buttonSolutions">
                                                                    {t("common:SEE_MORE")}
                                                                </button>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    <Row className="solutions-accordion_content d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            {(solutionsHomeData[locale] || solutionsHomeData["es"]).map((item, index) => (
                                <Accordion.Item key={index} eventKey={item.key} className="solutions-accordion_content-nav">
                                    <Accordion.Header >{item.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col sm={item.sm} xs={item.xs} className="text-center p-0">
                                                <img src={`/hometabs/${item.image.urlXs}`} alt={item.title} className={'img-fluid'} />
                                            </Col>
                                            <Col sm={item.sm} xs={item.xs} className="solutions-tabs_content-title">
                                                <h2>
                                                    <b>{item.main}</b>{item.secu}
                                                </h2>
                                                <Link href={item.url}>
                                                    <button className="buttonSolutions">
                                                    {t("common:SEE_MORE")}
                                                    </button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Row>

                </Container>
            </Container>

        </>
    );
}