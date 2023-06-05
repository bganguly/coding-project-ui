import React from 'react';
import Controls from './Controls';

const ControlsContainer = ({thumbnailArray, handlePreviousBtn, handleNextBtn}) => {
  return  (
    <div className='controlsContainer alignItemsBaseline'>
      <Controls thumbnailArray={thumbnailArray} handlePreviousBtn={handlePreviousBtn} handleNextBtn ={handleNextBtn}/>
    </ div>
  )
}

export default ControlsContainer