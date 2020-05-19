import React from 'react';
import Video from './Video';

const VideoList = ({ videos, changeCurrentVideo }) => {
  const videosRender = videos.map(video => (
    <Video
      changeCurrentVideo={changeCurrentVideo}
      key={video.id.videoId}
      video={video} 
    />
  ));

  return (
    <div className="ui relaxed divided list">
      {videosRender}
    </div>
  );
}

export default VideoList;
