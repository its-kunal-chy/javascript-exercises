function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function (fahrenheit) {
  return round(((fahrenheit - 32) * 5) / 9, 1);
  // return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return round(celsius * 1.8 + 32, 1);
  // return Math.round(((celsius * 1.8) + 32) * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
