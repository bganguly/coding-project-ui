import React from 'react';
import previous from '../images/previous.png'; 
import next from '../images/next.png'; 

const Controls = () => {
  return  (
    <>
     <img src={previous} width='48' height='48' alt="template thumbnail previous" />
     <img src={next} width='48' height='48' alt="template thumbnail next" />
    </>
  )
  
}

export default Controls