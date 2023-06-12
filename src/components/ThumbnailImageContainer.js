import React from 'react';
import ThumbnailImage from './ThumbnailImage';

const ThumbnailImageContainer = ({highlightedItem, handleThumbnailClick, thumbNailsToShow}) => {
  return  (
    <div className='thumbnailImageContainer justifyContentSpaceEvenly marginH20'>
      {thumbNailsToShow.map(item => {
        return <ThumbnailImage key={item} highlightedItem={highlightedItem} thumbnailToShow={item} handleThumbnailClick={handleThumbnailClick}/>
      })}
    </ div>
  )
}

export default ThumbnailImageContainer