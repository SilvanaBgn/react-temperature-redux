export const tempHasChanged = (newTemp) => {
  return {
    type: 'TEMP_HAS_CHANGED',
    payload: {
      newTemp
    }
  }
}