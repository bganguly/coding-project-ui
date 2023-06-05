import React from 'react';

const ThumbnailImage = ({thumbnailToShow}) => {
  return <img src={require(`../images/thumbnails/${thumbnailToShow}.jpg`)}
    width='145' height='131' alt="template thumbnail" />;
}

export default ThumbnailImage