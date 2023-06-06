import React from 'react';
import ThumbnailImage from './ThumbnailImage';

const ThumbnailImageContainer = ({highlightedItem, handleThumbnailClick, thumbNailsToShow, numberOfThumbNails}) => {
  return  (
    <div className='thumbnailImageContainer justifyContentSpaceEvenly marginH20'>
      {thumbNailsToShow.slice(0, numberOfThumbNails).map(item => {
        return <ThumbnailImage key={item} highlightedItem={highlightedItem} thumbnailToShow={item} handleThumbnailClick={handleThumbnailClick}/>
      })}
    </ div>
  )
}

export default ThumbnailImageContainer