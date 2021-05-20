const convertFahrToCelsius = (far) => {
  let cel = ((far - 32) * 5) / 9;
  let result = `${cel.toFixed(4)} °C`;
  console.log("is Number", result);

  if (isNaN(far)) {
    console.log(`${far} is not a valid number but a/an ${typeof far}.`);
  }
};

convertFahrToCelsius("274");
