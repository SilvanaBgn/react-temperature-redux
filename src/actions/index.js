const tempHasChanged = (newTemp, scale) => {
  return {
    type: 'TEMP_HAS_CHANGED',
    payload: {
      newTemp,
      scale
    }
  }
}

export default tempHasChanged;