const SCALE_CONVERSION = {
  CF : toFahrenheit,
  FC : toCelsius
}

// const BOIL_TEMPERATURE = {
//   C: 100,
//   F: 212
// }

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

export default SCALE_CONVERSION;