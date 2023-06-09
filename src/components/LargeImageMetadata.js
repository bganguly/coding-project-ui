import React from 'react';
import convertArrayToObject from '../utils/ConvertArrayToObject';

const LargeImageMetadata = ({largeImageToShow, templatesFromServer}) => {
  const allMetadata = convertArrayToObject(templatesFromServer);
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