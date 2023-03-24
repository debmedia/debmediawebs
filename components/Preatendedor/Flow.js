import React from "react";
import { Row, Container, Col} from "react-bootstrap";
import flow1_es from '../../asset/imgs/preatendedor/Preatendedor_2_ES.png'
import flow1_pt from '../../asset/imgs/preatendedor/Preatendedor_2_PT.png'
import flow1_en from '../../asset/imgs/preatendedor/Preatendedor_2_EN.png'
import flow2_es from '../../asset/imgs/preatendedor/Preatendedor_1_ES.png'
import flow2_pt from '../../asset/imgs/preatendedor/Preatendedor_1_PT.png'
import flow2_en from '../../asset/imgs/preatendedor/Preatendedor_1_EN.png'
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from "next/dist/client/router";
import PillList from "../PillList";

const flow1_lang = {es: flow1_es, pt: flow1_pt, en: flow1_en};
const flow2_lang = {es: flow2_es, pt: flow2_pt, en: flow2_en};

export default function Flow() {
    const { t } = useTranslation(['preatendedor', 'common']);
    const { locale } = useRouter();
    const flow1 = flow1_lang[locale] || flow1_lang["es"];
    const flow2 = flow2_lang[locale] || flow2_lang["es"];

    return (
        <>
            <Container fluid className="flow-preatendedor-section relative">
                <Container>
                    <Row>
                        <Col sm="12" className="wapp-preatendedor-section_maintitle">
                            <h3 className="text-center no-br-sm">
                                <Trans t={t} i18nKey="FLOW.TITLE"/>
                            </h3>
                        </Col>
                    </Row>
                    <Row className="text-center mt-5 d-flex justify-content-center reverse-md">
                        <Col xs="12" sm={{ span: 5 }} className="mt-sm-5 mt-3 mr-sm-2 text-center">
                            <PillList t={t} backgroundColor={"white"}items={["FLOW.PILL_1", "FLOW.PILL_2", "FLOW.PILL_3", "FLOW.PILL_4", "FLOW.PILL_5", ]} />
                        </Col>
                        <Col sm={{ span: 6, offset: 1 }} xs="12">
                            <img src={flow1.src} alt="wapp" className={'img-fluid'} />
                        </Col>

                    </Row>

                </Container>
            </Container>

        </>
    );
}