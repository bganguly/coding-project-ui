// import templates from '../data/templates';

const convertArrayToObject = (templatesFromServer) => 
templatesFromServer.reduce(
    (accumulator, currentValue) => {
      return Object.assign(accumulator, {
        [currentValue.id]:   {
          'id': currentValue.id,
          'cost': currentValue.cost,
          'description': currentValue.description,
          'thumbnail': currentValue.thumbnail,
          'image': currentValue.image
        }
      })
    }, {}
  )


export default convertArrayToObject