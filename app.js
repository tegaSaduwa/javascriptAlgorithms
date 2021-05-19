const convertFahrToCelsius = (far) => {

    if(typeof far === 'number') {
        let cel = ((far - 32)) * 5/9; 
        let result = `${cel.toFixed(4)} °C`;
        console.log("is Number", result)
    }

    if(typeof far === 'string') {
        let convertFarToNum = Number(far);
        let cel = ((convertFarToNum - 32)) * 5/9; 
        let result = `${cel.toFixed(4)} °C`;
        console.log("is string converted to Number", result)
    }

    if (isNaN(far)) {
      console.log(`${far} is not a valid number but a/an ${(typeof far)}.`)
    }
  
}

convertFahrToCelsius("0");


// const checkYuGiOh = (n) => {


// }