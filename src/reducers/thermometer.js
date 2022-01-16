const thermoReducer = (state = 0, action) => {
  console.log('Thermo Reducer - state:', state)
  switch (action.type) {
    case 'TEMP_HAS_CHANGED':
      return action.payload.newTemp;
    default:
      return state;
  }
}

export default thermoReducer;