import React from 'react';
import ThumbnailImage from './ThumbnailImage';

const ThumbnailImageContainer = ({thumbNailsToShow, highlightedItem, handleThumbnailClick}) => {
  return  (
    <div className='thumbnailImageContainer justifyContentSpaceEvenly marginH20'>
      {thumbNailsToShow.map(item => {
        return <ThumbnailImage key={item} thumbnailToShow={item} highlightedItem={highlightedItem} handleThumbnailClick={handleThumbnailClick}/>
      })}
    </ div>
  )
}

export default ThumbnailImageContainer