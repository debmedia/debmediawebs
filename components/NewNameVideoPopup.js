import React from 'react'
import { Modal } from 'react-bootstrap';
import { useRouter } from 'next-translate-routes';
import Video from './Video';
import MediaQuery from 'react-responsive';

const DELAY_TO_CLOSE_MODAL_AFTER_VIDEO_END_MILLISECONDS = 1000;

function NewNameVideoPopup() {
    const [show, setShow] = React.useState(true);
    const {locale} = useRouter();

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
        <Modal show={show} fullscreen={true} onHide={handleOnClose} dialogClassName="new-name-video-modal">
            <div style={{background: "black", width:"100%", height:"100%", position: "relative", overscrollBehavior: 'contain'}}>
                <div style={{position: 'absolute', top: '0', right: '0', padding: '0.5rem'}}>
                    <button onClick={handleOnClose}
                    className='modal-close-button' 
                    ><i className="bi bi-x-circle"></i></button>
                </div>
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