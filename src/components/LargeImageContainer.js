import React from 'react';
import LargeImage from './LargeImage';
import LargeImageMetadata from './LargeImageMetadata';

const LargeImageContainer = ({largeImageToShow, templatesFromServer}) => {
  return  (
    <div className='largeImageContainer alignItemsCenter'>
      <LargeImage largeImageToShow={largeImageToShow}/>
      <LargeImageMetadata largeImageToShow={largeImageToShow} templatesFromServer={templatesFromServer}/>
    </ div>
  )
}

export default LargeImageContainer