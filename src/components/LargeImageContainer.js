import React from 'react';
import LargeImage from './LargeImage';
import LargeImageMetadata from './LargeImageMetadata';

const LargeImageContainer = ({largeImageToShow}) => {
  return  (
    <div className='largeImageContainer alignItemsCenter'>
      <LargeImage largeImageToShow={largeImageToShow}/>
      <LargeImageMetadata largeImageToShow={largeImageToShow}/>
    </ div>
  )
}

export default LargeImageContainer