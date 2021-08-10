
const mountainLocations = (state = [], action) => {
    switch (action.type) {
        case 'SET_Mountain_LOCATIONS':
          console.log('list of mountain coordinates',action.payload);
          return state = action.payload.data
        default:
          return state;
      }
}

export default mountainLocations;