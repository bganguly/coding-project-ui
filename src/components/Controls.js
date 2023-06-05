import React from 'react';
import previous from '../images/previous.png'; 
import next from '../images/next.png'; 

const Controls = ({thumbnailArray, handlePreviousBtn, handleNextBtn}) => {
  // console.log('inside controls : ', handlePreviousBtn)
  return  (
    <>
    <button src={previous} width='48' height='48' alt="template thumbnail previous" onClick={() => handlePreviousBtn(thumbnailArray)}>
      previous btn - click me
    </button>
    <button src={previous} width='48' height='48' alt="template thumbnail previous" onClick={() => handleNextBtn(thumbnailArray)}>
      next btn - click me
    </button>

     <img src={previous} width='48' height='48' alt="template thumbnail previous" onClick={() => handlePreviousBtn}/>
     <img src={next} width='48' height='48' alt="template thumbnail next"  onClick={() => handleNextBtn}/>
    </>
  )
  
}

export default Controls