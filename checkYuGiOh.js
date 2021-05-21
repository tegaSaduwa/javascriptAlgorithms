const checkYuGiOh = (n) => {
  const arr = Array.from({ length: n }, (_, index) => index + 1);
  console.log(arr);

  for (i in arr) {
    arr[i] % 2 === 0 ? (arr[i] = "Yu") : i;
    arr[i] % 3 === 0 ? (arr[i] = "Gi") : i;
    arr[i] % 5 === 0 ? (arr[i] = "Oh") : i;
    // console.log(i);
  }

  if (isNaN(n)) {
    console.log(`invalid parameter: "${n}".`);
    return `invalid parameter: "${n}".`
  }
};
checkYuGiOh("5");
