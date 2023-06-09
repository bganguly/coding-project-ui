import React from 'react';

const LargeImage = ({largeImageToShow}) => {
  return  ( 
    <img 
    src={`http://localhost:3001/images/large/${largeImageToShow}.jpg`}
    width='430' height='360' alt="template large" className='largeImage' />
  )
}

export default LargeImage