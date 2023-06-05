import React from 'react';
import TitleContainer from './TitleContainer';
import LargeImageContainer from './LargeImageContainer';
import ControlsContainer from './ControlsContainer';
import ThumbnailImageContainer from './ThumbnailImageContainer';

const App = () => {
  return  (
    <div className='appWrapper'>
      <TitleContainer />
      <LargeImageContainer />
      <ControlsContainer />
      <ThumbnailImageContainer />
    </ div>
  )
}

export default App