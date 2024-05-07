import React, { useEffect, useRef } from 'react'
import { Modal } from 'react-bootstrap';
// import videoPosterImage_en from '../asset/imgs/newNameVideoPoster_es.svg';
// import videoPosterImage_es from '../asset/imgs/newNameVideoPoster_en.svg';
// import videoPosterImage_pt from '../asset/imgs/newNameVideoPoster_pt.svg';
import { useRouter } from 'next-translate-routes';
import Video from './Video';
import MediaQuery from 'react-responsive';

const DELAY_TO_CLOSE_MODAL_AFTER_VIDEO_END_MILLISECONDS = 1000;

function NewNameVideoPopup() {
    const [show, setShow] = React.useState(true);
    const {locale} = useRouter();

    // let videoPoster = videoPosterImage_es.src;
    // if (locale === "en") {
    //     videoPoster = videoPosterImage_en.src;
    // } else if (locale === "pt") {
    //     videoPoster = videoPosterImage_pt.src;
    // }

    const handleVideoEnd = () => {
        setTimeout(() => {
            setShow(false);
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, DELAY_TO_CLOSE_MODAL_AFTER_VIDEO_END_MILLISECONDS);
    };

    const handleOnClose = () => {
        setShow(false);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    return (
        <Modal show={show} fullscreen={true} onHide={handleOnClose} dialogClassName="modal-falopa">
            <div style={{background: "black", width:"100%", height:"100%"}}>
                <MediaQuery minWidth={1024}>
                    <Video 
                    src={`/videos/newNameVideo_${locale}.mp4`} 
                    onEnded={handleVideoEnd} 
                    isMuted={true} 
                    disablepictureinpicture
                    style={{display: 'block'}}
                    autoPlay
                    width="100%" height="100%"  
                    ></Video>
                </MediaQuery>
                <MediaQuery maxWidth={1024}>
                    <Video 
                    src={`/videos/newNameVideo_mobile_${locale}.mp4`} 
                    onEnded={handleVideoEnd} 
                    isMuted={true} 
                    disablepictureinpicture
                    style={{display: 'block'}}
                    autoPlay
                    width="100%" height="100%"  
                    ></Video>
                </MediaQuery>
                
            </div>
        </Modal>    
    );
}

export default NewNameVideoPopup