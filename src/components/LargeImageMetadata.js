import React from 'react';
import convertArrayToJson from '../utils/ConvertArrayToJson';


const LargeImageMetadata = ({largeImageToShow}) => {
  const allMetadata = convertArrayToJson();
  const metadataById = allMetadata[largeImageToShow.slice(0,4)];

  return  ( 
    <div  className='imageMetadata'>
      <div>
        {`template id: ${metadataById.id}`}
      </div>
      <div>
        {`template cost: ${metadataById.cost}`}
      </div>
      <div>
        {`template desciption: ${metadataById.description}`}
      </div>
      <div>
        {`template thumbnail: ${metadataById.thumbnail}`}
      </div>
      <div>
        {`template large image: ${metadataById.image}`}
      </div>
    </div>
  )
}

export default LargeImageMetadata