import React from "react";
import styled from "styled-components";

const StyledVideo = styled.div`
  iframe {
    width: 100%;
    height: 400px;
  }
`;

const Video = ({ videoSrcURL, videoTitle }) => (
  <StyledVideo>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </StyledVideo>
);
export default Video;
