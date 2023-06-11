import React from 'react';
import TitleContainer from './TitleContainer';
import LargeImageContainer from './LargeImageContainer';
import ControlsContainer from './ControlsContainer';
import ThumbnailImageContainer from './ThumbnailImageContainer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const numberOfThumbNails = 4;
  //#TODO: this is not a complete enumeration of the images array - but can be easily expanded
  const largeImageArray = ['7111-b','7112-b','7118-b','7124-b','7130-b'];
  const [largeImageToShow, SetLargeImageToShow]  = useState(largeImageArray[0]);
  const thumbnailArray = ['7111-m','7112-m','7118-m','7124-m','7130-m'];
  const [thumbNailsToShow, SetThumbNailsToShow]  = useState(thumbnailArray);
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
    }
  }

  const handleNextBtnClick = () => {
    let nextIndex = indexOfFirstThumbnail + numberOfThumbNails;
    if (nextIndex < thumbnailArray.length) {
      SetIndexOfFirstThumbnail( indexOfFirstThumbnail + numberOfThumbNails);
      const nextThumbnails = [...thumbnailArray].slice(nextIndex,  nextIndex + numberOfThumbNails);
      SetThumbNailsToShow(nextThumbnails);  
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
          <ThumbnailImageContainer highlightedItem={highlightedItem} handleThumbnailClick={handleThumbnailClick}       thumbNailsToShow={[...thumbNailsToShow]} numberOfThumbNails={numberOfThumbNails} />
        </ div>
    }
    </>
  )
}

export default App