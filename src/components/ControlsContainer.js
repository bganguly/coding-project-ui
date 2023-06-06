import React from 'react';
import Controls from './Controls';

const ControlsContainer = ({handlePreviousBtnClick, handleNextBtnClick}) => {
  return  (
    <div className='controlsContainer alignItemsBaseline'>
      <Controls handlePreviousBtnClick={handlePreviousBtnClick} handleNextBtnClick ={handleNextBtnClick}/>
    </ div>
  )
}

export default ControlsContainer