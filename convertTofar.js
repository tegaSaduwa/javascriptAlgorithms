const convertFahrToCelsius = (far) => {
  let cel = ((far - 32) * 5) / 9;
  let result = `${cel.toFixed(4)} °C`;

  if (typeof far === "number") {
    return `${far} is not a valid number but a ${typeof far}.`;
  }

  if (typeof far === "string" && Number(far) === NaN) {
    return `${far} is not a valid number but a ${typeof far}.`;
  }

  if (far && typeof far === "object" && far.constructor === Array) {
    return `${JSON.stringify(far)} is not a valid number but an array.`;
  }

  if (far && typeof far === "object" && far.constructor === Object) {
    return `${JSON.stringify(far)} is not a valid number but an object.`;
  }

  return result;
};

convertFahrToCelsius({ temp: 0 });
