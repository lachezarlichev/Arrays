function equal(array) {
  let founfIndex = "no";

  for (let i = 0; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let y = 0; y < i; y++) {
      leftSum += array[y];
    }
    for (let k = i + 1; k < array.length; k++) {
      rightSum += array[k];
    }
    if (leftSum === rightSum) {
      founfIndex = i;
    }
  }
  console.log(founfIndex);
}
equal([1]);
