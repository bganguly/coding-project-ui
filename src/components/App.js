import React from 'react';
import TitleContainer from './TitleContainer';
import LargeImageContainer from './LargeImageContainer';
import ControlsContainer from './ControlsContainer';
import ThumbnailImageContainer from './ThumbnailImageContainer';
import { useState } from 'react';


const App = () => {
  const thumbnailArray = ['7111-m','7112-m','7118-m','7124-m','7130-m'];
  const numberOfThumbNails = 4;
  const [thumbNailsToShow, SetThumbNailsToShow]  = useState(thumbnailArray);
  const [indexOfFirstThumbnail, SetIndexOfFirstThumbnail] = useState(0);

  const handlePreviousBtn = thumbnailArray => {
    // console.log('inside prev', indexOfFirstThumbnail, numberOfThumbNails)
    if (indexOfFirstThumbnail >= numberOfThumbNails) {
      // SetIndexOfFirstThumbnail(indexOfFirstThumbnail - numberOfThumbNails);
      const randomNum = Math.ceil(Math.random() * 5);
      SetIndexOfFirstThumbnail(randomNum,);
      // console.log(indexOfFirstThumbnail)
      const prevThumbnails = [...thumbnailArray.slice(indexOfFirstThumbnail, indexOfFirstThumbnail + numberOfThumbNails)];
      console.log('inside prev', indexOfFirstThumbnail, numberOfThumbNails)
      SetThumbNailsToShow(prevThumbnails);  
      console.log(prevThumbnails)
    }
  }

  const handleNextBtn = thumbnailArray => {
    const currentIndex = indexOfFirstThumbnail;
    if (indexOfFirstThumbnail < thumbnailArray.length) {
      console.log('inside next', indexOfFirstThumbnail)
      // SetIndexOfFirstThumbnail( 4 + currentIndex);
      const randomNum = Math.ceil(Math.random() * 4);
      SetIndexOfFirstThumbnail(randomNum);
      // console.log(indexOfFirstThumbnail)

      console.log('indexOfFirstThumbnail: ', indexOfFirstThumbnail)
      const nextThumbnails = [...thumbnailArray.slice(indexOfFirstThumbnail, indexOfFirstThumbnail + numberOfThumbNails)];
      SetThumbNailsToShow(nextThumbnails);  
      console.log('nextThumbnails :', nextThumbnails)
    }
  }


  return  (
    <div className='flexDirectionCol'>
      <TitleContainer />
      <LargeImageContainer />
      <ControlsContainer  thumbnailArray={thumbnailArray} handlePreviousBtn={handlePreviousBtn} handleNextBtn ={handleNextBtn}/>
      <ThumbnailImageContainer thumbNailsToShow={thumbNailsToShow} numberOfThumbNails={numberOfThumbNails} />
    </ div>
  )
}

export default App