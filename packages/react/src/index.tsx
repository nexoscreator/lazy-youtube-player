import React, { useEffect, useRef } from 'react';
import { LazyYoutubePlayer } from '@lazy-youtube-player/core/index.js';
import '@lazy-youtube-player/core/style.css'; // Import core styles

const LazyYoutubePlayerComponent = ({ videoId }) => {
  const ytRef = useRef(null);

  useEffect(() => {
    if (ytRef.current) {
      new LazyYoutubePlayer(ytRef.current, videoId);
    }
  }, [videoId]);

  return <div ref={ytRef} className="NexosYt" data-embed={videoId}></div>;
};

export default LazyYoutubePlayerComponent;
