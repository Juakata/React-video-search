import React from 'react';

const VideoSelected = ({ video }) => {
  if (!video) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  const { title, description } = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title={title} src={videoSrc} allowFullScreen></iframe>
      </div>
      <div className="ui segment">
        <h3 className="ui header">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoSelected;
