import React from 'react';
import ThumbnailImage from './ThumbnailImage';

const ThumbnailImageContainer = ({thumbNailsToShow, numberOfThumbNails}) => {
  return  (
    <div className='thumbnailImageContainer justifyContentSpaceEvenly marginH20'>
      {/* {console.log(' thumbNailsToShow array: ',thumbNailsToShow)} */}
      {thumbNailsToShow.slice(0, numberOfThumbNails).map(item => {
        return <ThumbnailImage key={item} thumbnailToShow={item}/>
      })}
    </ div>
  )
}

export default ThumbnailImageContainer