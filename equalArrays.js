function equalArrays(arr1, arr2) {
  let sumOfarr = 0;
  let istina = "";
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
    sumOfarr += arr1[i];
  }
  sumOfarr = 0;

  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = Number(arr2[i]);
    sumOfarr += arr2[i];
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      istina = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    } else if (arr1[i] == arr2[i]) {
      istina = true;
    }
  }
  if (istina == true) {
    console.log(`Arrays are identical. Sum: ${sumOfarr}`);
  }
}
equalArrays(
  ["10", "22", "30"],

  ["10", "20", "30"]
);
