export const SCALES = {
  C: {
    scaleName: 'Celsius',
    boilTemp: 100
  },
  F: {
    scaleName: 'Celsius',
    boilTemp: 212
  }
}

export const SCALE_CONVERSION = {
    CF : (celsius) => {return (celsius * 9 / 5) + 32},
    FC : (fahrenheit) => {return (fahrenheit - 32) * 5 / 9}
  };
