'use client'
import { useAocssContext } from '@/context/AocssContext';
import React from 'react';
import VideoModal from '../modal/VideoModal';

const VideoSection2 = () => {
  const {openVideoModal} = useAocssContext()
  return (
    <div className="tl-7-vid">
      <div className="container">
        <a
          className="tl-7-vid-btn"
          role='button'
          onClick={() => openVideoModal("https://www.youtube.com/embed/7zrqjb77QaE?si=lu-Wl6PMSRjjt_cr")}
        >
          Play
        </a>
      </div>
      <VideoModal/> 
    </div>
  );
}

export default VideoSection2;
