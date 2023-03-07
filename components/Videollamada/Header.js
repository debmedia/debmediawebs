import React, { useState, useEffect } from "react";
import { Row, Container, Col, Modal } from "react-bootstrap";
import Image from 'next/image'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import videoThumb_es from '../../asset/imgs/videollamada/video_thumb_ES.png';
import videoThumb_xs_es from '../../asset/imgs/videollamada/video_thumb_xs_ES.png';


export default function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <header>
                <Container fluid className="videocall-home">
                    <div className={'image-container-videocall'} onClick={() => setModalShow(true)}>
                        <Image src={videoThumb_es} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={videoThumb_xs_es} layout="fill" className={'image d-block d-sm-none'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="videocall-home_shape3" />
                    </div>

                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="videocall-home_shape1" />
                        <img src={shape2.src} className="videocall-home_shape2" />
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="videocall-home_title">
                                    Digitaliza la atención  
                                    <br className="d-none d-sm-block" />de tus clientes
                                </h1>
                                <p className="videocall-home_parraf">
                                    Software para brindar <b>atención <br />
                                        por videollamada </b>
                                </p>
                                <button className="videocall-home_demobutton">
                                    Solicita una demo
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center videocall-home_text">
                <Row>
                    <Col>
                        <h3><b>Organizaciones líderes</b> ya gestionan la <br className="d-none d-sm-block" />
                            experiencia de sus clientes con <b> Debmedia</b></h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
}


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/Kqr77nXvcXY?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </Modal.Body>
        </Modal>
    );
}