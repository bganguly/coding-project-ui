import React from 'react';
import previous from '../images/previous.png'; 
import next from '../images/next.png'; 

const Controls = ({handlePreviousBtnClick, handleNextBtnClick}) => {
  return  (
    <div>
     <img src={previous} width='48' height='48' alt="template thumbnail previous" onClick={handlePreviousBtnClick}/>
     <img src={next} width='48' height='48' alt="template thumbnail next"  onClick={handleNextBtnClick}/>
    </div>
  )
  
}

export default Controls