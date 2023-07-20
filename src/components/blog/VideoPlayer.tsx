import React from 'react';

interface VideoPlayerProps {
  src: string;
  type: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, type }) => {
  return (
    <video width="320" height="240" controls>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
