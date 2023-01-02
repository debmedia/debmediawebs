import React from "react";
import { Row, Container, Col} from "react-bootstrap";
import flow1 from '../../asset/imgs/preatendedor/flow1.png'
import flow2 from '../../asset/imgs/preatendedor/flow2.png'
import { useTranslation, Trans } from 'next-i18next';

export default function Flow() {
    const { t } = useTranslation(['preatendedor', 'common']);

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
                    <Row className="text-center mt-5 d-flex justify-content-center reverseXs">
                        <Col xs="12" sm={{ span: 5 }} className="mt-sm-5 mt-3 mr-sm-2 text-center">
                            <img src={flow2.src} alt="wapp" className={'img-fluid'} />
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