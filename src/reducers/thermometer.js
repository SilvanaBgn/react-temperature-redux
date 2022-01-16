const thermoReducer = (state={ value: 0, scale: 'C'}, action) => {
  console.log('Thermo Reducer - state:', state)
  switch (action.type) {
    case 'TEMP_HAS_CHANGED':
      return {
        value: action.payload.newTemp,
        scale: action.payload.scale
      }
    default:
      return state;
  }
}

export default thermoReducer;