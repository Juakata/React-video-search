import React from 'react';

const Video = ({video, changeCurrentVideo}) => {
  const { thumbnails, title } = video.snippet;
  return (
    <div
      onClick={() => changeCurrentVideo(video)}
      className="item my-item"
    >
      <img
        className="ui image"
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
}

export default Video;
