const checkYuGiOh = (n) => {
  const arr = Array.from({ length: n }, (_, index) => index + 1);
  console.log(arr);

  for (i in arr) {
    arr[i] % 2 === 0 ? arr[i] = "Yu" : null
    arr[i] % 3 === 0 ? arr[i] = "Gi" : null
    arr[i] % 5 === 0 ? arr[i] = "Oh" : null

    // arr[i] % 2 === 0  && arr[i].length > 1 ?  arr[i] = "Yu-Gi" : i
    
  }

  if (isNaN(n)) {
    console.log(`invalid parameter: "${n}".`)
  }
};
checkYuGiOh("5");
