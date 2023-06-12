import React from 'react';
import TitleContainer from './TitleContainer';
import LargeImageContainer from './LargeImageContainer';
import ControlsContainer from './ControlsContainer';
import ThumbnailImageContainer from './ThumbnailImageContainer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const numberOfThumbNails = 4;
  const imageIdArray = ['7111','7112','7118','7124','7130','7131','7141','7143',
  '7147','7150','7152','7155','7160','7162','7164'];
  const largeImageArray = imageIdArray.map(value => value.concat('-b'));
  const [largeImageToShow, SetLargeImageToShow]  = useState(largeImageArray[0]);
  const thumbnailArray = imageIdArray.map(value => value.concat('-m'));
  const [thumbNailsToShow, SetThumbNailsToShow]  = useState(thumbnailArray.slice(0, numberOfThumbNails));
  const [indexOfFirstThumbnail, SetIndexOfFirstThumbnail] = useState(0);
  const [highlightedItem, SetHighlightedItem] = useState(thumbnailArray[0]);
  const [templatesFromServer, SetTemplatesFromServer] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/data/templates.json").then((response) => {
      SetTemplatesFromServer(response.data );
    })
  }, []);
  
  const handlePreviousBtnClick = () => {
    let prevIndex = indexOfFirstThumbnail;
    if (prevIndex >= numberOfThumbNails) {
      SetIndexOfFirstThumbnail(indexOfFirstThumbnail - numberOfThumbNails);
      const prevThumbnails = [...thumbnailArray.slice(prevIndex - numberOfThumbNails, prevIndex)];
      SetThumbNailsToShow(prevThumbnails);  
      handleThumbnailClick(prevThumbnails[0]);
    }
  }

  const handleNextBtnClick = () => {
    let nextIndex = indexOfFirstThumbnail + numberOfThumbNails;
    if (nextIndex < thumbnailArray.length) {
      SetIndexOfFirstThumbnail( indexOfFirstThumbnail + numberOfThumbNails);
      const nextThumbnails = [...thumbnailArray].slice(nextIndex,  nextIndex + numberOfThumbNails);
      SetThumbNailsToShow(nextThumbnails);  
      handleThumbnailClick(nextThumbnails[0]);
    }
  }

  const handleThumbnailClick = (thumbnailToShow) => {
    SetHighlightedItem(thumbnailToShow);
    SetLargeImageToShow(thumbnailToShow.replace('m','b'));
  }

  return  (
    <>
    {templatesFromServer && 
      <div className='flexDirectionCol'>
        <TitleContainer />
        <LargeImageContainer largeImageToShow={largeImageToShow} templatesFromServer={templatesFromServer}/>
        <ControlsContainer handlePreviousBtnClick={handlePreviousBtnClick} handleNextBtnClick ={handleNextBtnClick}/>
        <ThumbnailImageContainer highlightedItem={highlightedItem} handleThumbnailClick={handleThumbnailClick}       thumbNailsToShow={[...thumbNailsToShow]} />
      </ div>
    }
    </>
  )
}

export default App