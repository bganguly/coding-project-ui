import React from 'react';

const ThumbnailImage = ({highlightedItem, handleThumbnailClick, thumbnailToShow}) => {
  return (
    <div>
      <img 
        src={`http://localhost:3001/images/thumbnails/${thumbnailToShow}.jpg`}
        width='145' height='131' alt="template thumbnail" onClick={() => handleThumbnailClick(thumbnailToShow, highlightedItem)}  className={highlightedItem === thumbnailToShow ? 'highlightedItem': null}/>
      <div  >
        <span className={highlightedItem === thumbnailToShow ? 'highlightedItem': null}>
          {`${thumbnailToShow.replace('m','b')}`}
        </span>
      </div>
    </div>
  )
}

export default ThumbnailImage