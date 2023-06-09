import React from 'react';
// import previous from '../images/previous.png'; 
// import next from '../images/next.png'; 

const Controls = ({handlePreviousBtnClick, handleNextBtnClick}) => {
  return  (
    <div>
     <img 
      src={`http://localhost:3001/images/previous.png`}
      // src={previous} 
      width='48' height='48' alt="template thumbnail previous" onClick={handlePreviousBtnClick}/>
     <img 
      src={`http://localhost:3001/images/next.png`}
      // src={next} 
      width='48' height='48' alt="template thumbnail next"  onClick={handleNextBtnClick}/>
    </div>
  )
  
}

export default Controls