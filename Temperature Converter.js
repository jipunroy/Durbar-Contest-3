// Temperature Converter

function convertTemperature(value, unit) {
  if (unit === "C") {
    return Number(((value * 9 / 5) + 32).toFixed(2));
  } else {
    return Number(((value - 32) * 5 / 9).toFixed(2));
  }
}