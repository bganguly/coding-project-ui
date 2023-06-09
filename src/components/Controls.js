import React from 'react';

const Controls = ({handlePreviousBtnClick, handleNextBtnClick}) => {
  return  (
    <div>
     <img 
      src={`http://localhost:3001/images/previous.png`}
      width='48' height='48' alt="template thumbnail previous" onClick={handlePreviousBtnClick}/>
     <img 
      src={`http://localhost:3001/images/next.png`}
      width='48' height='48' alt="template thumbnail next"  onClick={handleNextBtnClick}/>
    </div>
  )
  
}

export default Controls