export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_WEATHER':
      console.log('FETCH_WEATHER')
      return action.response
    default:
      console.log('default')
      return state;  
  }
};