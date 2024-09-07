import React, { useEffect, useRef } from 'react';
import { LazyYoutubePlayerCore, LazyYoutubePlayerOptions } from '@lazy-youtube-player/core';
import '@lazy-youtube-player/core/styles.css';

export const LazyYoutubePlayer: React.FC < LazyYoutubePlayerOptions > = (props) => {
    const containerRef = useRef < HTMLDivElement > (null);

    useEffect(() => {
        if (containerRef.current) {
            const core = new LazyYoutubePlayerCore(props);
            core.init(containerRef.current.id);
        }
    }, [props.videoId]);

    return <div ref={containerRef} id={`youtube-player-${props.videoId}`} className={props.customClass} />;
};