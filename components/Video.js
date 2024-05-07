import React, { useEffect, useRef } from 'react';

export default function Video({ src, isMuted, ...otherProps }) {
    const refVideo = useRef(null);

    useEffect(() => {
        if (!refVideo.current) {
            return;
        }

        if (isMuted) {
            //open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
            refVideo.current.defaultMuted = true;
            refVideo.current.muted = true;
        }

        refVideo.current.src = src;
    }, [src]);

    return (
            <video
                ref={refVideo}
                playsInline //FIX iOS black screen

                {...otherProps}
            />
    );
}